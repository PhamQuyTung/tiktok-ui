// Button.js
import React from 'react';
import classNames from 'classnames';

const Button = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <button className={classNames('button', { dark: isDarkMode, light: !isDarkMode })} onClick={toggleDarkMode}>
            Chuyển sang {isDarkMode ? 'sáng' : 'tối'} chế độ
        </button>
    );
};

export default Button;
