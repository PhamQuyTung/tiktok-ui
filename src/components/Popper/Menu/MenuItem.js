import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    // Add separate class if the menu item should be separated from the previous one
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.shape({
        separate: PropTypes.bool,
        icon: PropTypes.node,
        title: PropTypes.string.isRequired,
        to: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default MenuItem;
