import AccountItem from './AccountItem';
import styles from './SuggestAccounts.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <label className={cx('label')}>{label}</label>
            <div className={cx('list-accounts')}>
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>
            <span className={cx('more-btn')}>See all</span>
        </div>
    );
}

export default SuggestAccounts;
