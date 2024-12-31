// import Image from '../../../../components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SuggestAccounts.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
            className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/3d007eb544d9e31adb124febfaf41e80~c5_100x100.jpeg?lk3s=a5d48078&nonce=57280&refresh_token=251f14bdbdc1d461f01540b6ec508e7f&x-expires=1735786800&x-signature=13tI49D6VFSQT%2BfGvZBsUu6w9RE%3D&shp=a5d48078&shcp=b59d6b55"
                alt=""
            />
            <div className={cx('info-item')}>
                <p className={cx('nickname')}>
                    <strong>phamquytung</strong>
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </p>
                <p className={cx('username')}>Pham Quy Tung</p>
            </div>
        </div>
    );
}

export default AccountItem;
