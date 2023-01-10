import { forwardRef, useState } from 'react';
import images from '~/assets/image';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Image = forwardRef(({ className, fallback: customFallback = images.noImage, alt, src, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={cx('wrapper', { [className]: className })}
            alt={alt}
            src={fallback || src}
            ref={ref}
            onError={handleError}
            {...props}
        />
    );
});

Image.propTypes = {
    className: PropTypes.string,
    fallback: PropTypes.string,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default Image;
