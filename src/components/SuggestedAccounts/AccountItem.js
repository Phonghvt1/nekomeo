import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ ontippy }) {
    const renderPreview = (attrs) => (
        <div className={cx('preview')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy
                visible={ontippy}
                interactive
                offset={[-8, 1]}
                delay={[800, 500]}
                placement="bottom-start"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/125cb7cdcc696003db5bff572e40315f~c5_100x100.jpeg?x-expires=1672578000&x-signature=epKZ68UvIxDoXebJ0vud9pnTCI4%3D"
                        alt="Anh"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>mzien0908</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Mi zien trai dau</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
