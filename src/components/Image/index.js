import { forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ src = images.noImage, alt, customClassName, customFallBack = images.noImage, ...props }, ref) {
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
}

export default forwardRef(Image);
