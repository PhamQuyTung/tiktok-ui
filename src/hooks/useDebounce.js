import { useState, useEffect } from 'react';

/**
 * Hook `useDebounce`
 *
 * Mục đích:
 * - Trì hoãn việc cập nhật giá trị đầu vào (`value`) để giảm tần suất xử lý các tác vụ tốn kém (như gọi API).
 *
 * @param {any} value - Giá trị cần debounce (thường là input của người dùng).
 * @param {number} delay - Thời gian chờ (tính bằng milliseconds).
 * @returns {any} debounceValue - Giá trị được cập nhật sau khi debounce.
 */
function useDebounce(value, delay) {
    // State lưu trữ giá trị đã debounce
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        // Khởi tạo một timer để cập nhật giá trị sau `delay`
        const handleTimer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        /**
         * Dọn dẹp timer cũ mỗi khi `value` hoặc `delay` thay đổi.
         * - Đảm bảo rằng chỉ có 1 timer đang chạy tại bất kỳ thời điểm nào.
         * - Tránh tình trạng nhiều timer hoạt động cùng lúc, gây rò rỉ bộ nhớ và gọi API không cần thiết.
         */
        return () => clearTimeout(handleTimer);

        /* Nếu không có đoạn code dọn dẹp clearTimeout trong useEffect, kết quả sẽ không như mong muốn vì các setTimeout cũ 
            sẽ tiếp tục chạy đồng thời với các setTimeout mới, dẫn đến các vấn đề sau:
            1. Lỗi nhiều tác vụ dư thừa:
                Mỗi lần value thay đổi, một setTimeout mới được tạo, nhưng các setTimeout cũ vẫn chưa bị xóa.
                Khi hết thời gian delay, tất cả các setTimeout (bao gồm cả cũ và mới) sẽ chạy, dẫn đến việc cập nhật 
                trạng thái nhiều lần không cần thiết.
            -Ví dụ: Người dùng nhập "TikTok" nhanh liên tục:
                value = T: tạo timer (500ms).
                value = Ti: tạo thêm timer mới (500ms).
                value = Tik: tiếp tục tạo timer mới (500ms).
            =>Kết quả: sau 500ms, tất cả các timer chạy đồng thời, 
            setDebounceValue được gọi nhiều lần với các giá trị cũ như "T", "Ti", "Tik".
            
            2. Gọi API không cần thiết:
                Khi setDebounceValue được gọi nhiều lần, hiệu ứng phụ (như gọi API) cũng sẽ chạy nhiều lần.
                Điều này làm tăng tải cho hệ thống và gây ra trải nghiệm người dùng không tốt.
            Hậu quả:
                API bị gọi liên tục với các giá trị không hợp lệ, gây trễ và làm ứng dụng chậm.
            Ví dụ:
                Gọi API với "T", "Ti", "Tik" thay vì chỉ gọi 1 lần với "TikTok".
            3. Tốn tài nguyên bộ nhớ:
                Các setTimeout cũ không được dọn dẹp sẽ tiếp tục tồn tại trong bộ nhớ cho đến khi chúng chạy xong.
                Điều này gây rò rỉ bộ nhớ (memory leak) nếu ứng dụng hoạt động lâu hoặc có nhiều thay đổi. 
        */
    }, [value, delay]); // Chỉ chạy lại effect khi `value` hoặc `delay` thay đổi.

    // Trả về giá trị đã debounce
    return debounceValue;
}

/* Ví dụ dòng thời gian khi người dùng nhập "TikTok":

Nhập "T" -> Chờ 500ms -> Gửi "T" đến API.
Trong vòng 500ms tiếp theo, nhập thêm "i" -> Clear timeout cũ, tạo timeout mới -> Gửi "Ti" đến API sau 500ms nếu không nhập thêm gì. */

export default useDebounce;
