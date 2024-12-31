// import Image from '../../../../components/Image';
import styles from './SuggestAccounts.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!

import { Wrapper as PopperWrapper } from '~/components/Popper/'; //Hay bị nhầm "." thực ra phải là "~"
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                interactive
                // visible
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
                render={renderPreview}
            >
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
            </Tippy>
        </div>
    );
}

export default AccountItem;
