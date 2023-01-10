import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} iconactive={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    iconactive={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} iconactive={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" ontippy={false} />
        </aside>
    );
}

export default Sidebar;
