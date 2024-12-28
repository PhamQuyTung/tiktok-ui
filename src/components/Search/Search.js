//Header
//Libary
import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless'; // different import path!
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
//File
import { Wrapper as PopperWrapper } from '~/components/Popper/'; //Hay bị nhầm "." thực ra phải là "~"
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks'; //hooks tự tạo ra
import * as searchService from '~/services/searchService';
//Icons
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function SearchHeader() {
    const [searchValue, setSearchValue] = useState(''); //Trạng thái người dùng gõ giá trị nào đấy
    const [searchResult, setSearchResult] = useState([]); //Set trạng thái tìm kiếm kết quả
    const [showResult, setShowResult] = useState(true); //Hiển thị kết quả tìm kiếm
    const [loading, setLoading] = useState(false); //trạng thái loading
    const debounce = useDebounce(searchValue, 500); //set debounce thời gian cho kết quả tìm kiếm

    // useEffect(() => {
    //     // Đoạn này chỉ mô phỏng khi người dùng gõ tìm kiếm ra kết quả
    //     // setTimeout(() => {
    //     //     setSearchResult([1, 2, 3]); // số phần tử kết quả tìm kiếm khi người dùng nhập vào
    //     // }, 0);
    // }, []);

    useEffect(() => {
        if (!debounce) {
            // Nếu như ko có searchValue tức là người dùng ko nhập gì
            setSearchResult([]); // xóa hết ký tự input đồng thời xóa luôn kết quả tìm kiếm
            return; //Nên giữ return trong trường hợp này để đảm bảo rằng khi searchValue không hợp lệ, hàm sẽ dừng ngay lập tức. Điều này giúp tránh lỗi và cải thiện hiệu suất của ứng dụng.
        }

        // setLoading(true); // khi người dùng đang gõ input thì trạng thái đang loading

        // //Gọi API
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        //     .then((response) => response.json())
        //     .then((response) => {
        //         setSearchResult(response.data); // Set trạng thái tìm kiếm kết quả từ API
        //         setLoading(false); // khi người dùng Kết thúc gõ input thì Kết thúc loading
        //     })
        //     .catch((error) => {
        //         alert('Mất mạng :(, vui lòng kiểm tra lại đường truyền Internet');
        //         setLoading(false); // mất mạng Kết thúc loading
        //     });

        // // Thay giá trị searchValue (lấy giữ liệu ngay lập tức khi người dùng nhập bất kì ký tự gì)
        // // => giá trị debounce từ state hook useDebounce (khi người dùng nhập xong phải chờ 500m/s thì mới gọi API)

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);

    //Xử lý xóa
    function handleClear() {
        setSearchValue(''); // Clear search input value
        setSearchResult([]); // Clear search result
        inputRef.current.focus(); //focus vào input search để tiếp tục tìm kiếm
    }

    //
    function handleChange(e) {
        //ngăn người dùng nhập dấu cách đầu tiên vào ô input
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }

        setShowResult(true); // Hiển thị kết quả tìm kiếm khi người dùng nhập vào
    }

    //
    const inputRef = useRef();

    return (
        // Using a wrapper <div> tag around the reference element solves 
        // this by creating a new parentNode context. 
        <div>
            <TippyHeadless
                // Kết quả tìm kiếm
                interactive //Cho phép select vào phần tử
                visible={showResult && searchResult.length > 0} //Nếu luon luon focus input va kết quả tìm kiếm > 0 thì show
                render={(
                    attrs, //render ra poper kết quả tìm kiếm
                ) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {/* sau khi get API thì lọc qua mảng danh sách account */}
                            {searchResult.map((result) => {
                                // trả về components AccountItem truyền props key (id account) và data (account)
                                return <AccountItem key={result.id} data={result} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)} //bấm bên ngoài sẽ ẩn kết quả tìm kiếm và ẩn focus input
            >
                {/* UI Search */}
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false} // kiểm tra lỗi chính tả (tắt)
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)} // Focus vào ô input hiện lên kết quả tìm kiếm vs onFocus
                    />
    
                    {/* icon clear */}
                    {/* Nếu !!searchValue (true) và !loading (false) thì show icon clear */}
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            {/* icon clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
    
                    {/* icon loading */}
                    {/* Nếu có loaing là true thì show icon load */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
    
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        {/* icon search */}
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

SearchHeader.propTypes = {
    // PropTypes
}

export default SearchHeader;
