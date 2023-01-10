import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/125cb7cdcc696003db5bff572e40315f~c5_100x100.jpeg?x-expires=1672578000&x-signature=epKZ68UvIxDoXebJ0vud9pnTCI4%3D"
                    alt="Anh"
                />
                <div>
                    <Button className={cx('btn')} primary>
                        Follow
                    </Button>
                </div>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>mzien0908</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Mi zien trai dau</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
