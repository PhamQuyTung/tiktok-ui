//Libary
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!
//Fonts
//File
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper/'; //Hay bị nhầm "." thực ra phải là "~"
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = function () {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

    // Chuyền vào tham số mặc định
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; // Phần tử cuối cùng của mảng

    // Render menu items theo dữ liệu truyền vào
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // Xử lý khi ấn nút back để trở về vị trí trước đó
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1)); // Back history (nhấn nút back để trở lại vị trí trước đó)
    };

    // Render kết quả tìm kiếm theo tham số attrs ảnh hư��ng đến kết quả hiển thị của menu
    const renderResult = (
        attrs, //render ra poper kết quả tìm kiếm
    ) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {/* Render header của menu */}
                {history.length > 1 && (
                    // Nếu kết quả tìm kiếm > 1 thì hiển thị header của menu
                    <MenuHeader
                        title={current.title} 
                        onBack={handleBack} //Back history (nhấn nút back để trở lại vị trí trước đó)
                    />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
                {/* Render item của menu (các ngôn ngữ MENU_ITEMS)*/}
            </PopperWrapper>
        </div>
    )

    // hàm xử lý khi Ẩn menu sẽ reset lại mảng quay về chỉ mục 1 slice(0, 1)
    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1))
    }

    // Render menu
    return (
        <Tippy
            // visible
            delay={[0, 300]}
            interactive //Cho phép select vào phần tử
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={renderResult}
            onHide={handleResetToFirstPage} // Ẩn menu sẽ reset lại mảng quay về chỉ mục 1 slice(0, 1)
        >
            {children}
        </Tippy>
    );
    
}

Menu.propTypes = {
    children: PropTypes.node.isRequired, // Nội dung của menu
    items: PropTypes.arrayOf(PropTypes.object), // Danh sách item menu
    hideOnClick: PropTypes.bool, // Cho phép ẩn menu khi người dùng click vào phần tử
    onChange: PropTypes.func, // Hàm thay đ��i khi người dùng chọn item menu
};

export default Menu;
