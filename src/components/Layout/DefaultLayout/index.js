import Header from './Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles);

//File này chứa layout chung cố định
function DefaultLayout({ children }) {
    //Vì phần content động chuyền từ ngoài vào nên chuyền vào props children
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
