import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src = images.noImage, alt, customClassName, customFallBack = images.noImage, ...props }, ref) => {
    return (
        <img
            ref={ref}
            src={src}
            // src={customFallBack || src}
            alt={alt}
            className={classNames(styles.wrapper, customClassName)}
            {...props}
            // Destructuring
            // onError={({ currentTarget }) => {
            //     currentTarget.src = images.noImage;
            //     currentTarget.onerror = null;
            // }}

            // No Destructuring
            onError={(event) => {
                event.currentTarget.src = images.noImage;
                event.currentTarget.onerror = null;
            }}
        />
    );
})


Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    customClassName: PropTypes.string,
    customFallBack: PropTypes.string,
}

export default Image;
