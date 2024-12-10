//Libary
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
function Menu({ children, items = [], hideOnClick = false ,onChange = defaultFn }) {
    // Chuyền vào tham số mặc định
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; // Phần tử cuối cùng của mảng

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

    return (
        <Tippy
            // visible
            delay={[0, 300]}
            interactive //Cho phép select vào phần tử
            placement="bottom-end"
            hideOnClick = {hideOnClick}
            render={(
                attrs, //render ra poper kết quả tìm kiếm
            ) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {/* Render header của menu */}
                        {history.length > 1 && (
                            // Nếu kết quả tìm kiếm > 1 thì hiển thị header của menu
                            <MenuHeader
                                title="Languages"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }} //Back history (nhấn nút back để trở lại vị trí trước đó)
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                        {/* Render item của menu (các ngôn ngữ MENU_ITEMS)*/}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}   // Ẩn menu sẽ reset lại mảng quay về chỉ mục 1 slice(0, 1) 
        >
            {children}
        </Tippy>
    );
}

export default Menu;
