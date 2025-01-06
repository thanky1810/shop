import classNames from "classnames/bind";

import styles from './Navbar.module.scss'

const cx = classNames.bind(styles)


function Navbar() {
    return (
        <div className={cx('navbar')}>
            <div className={cx('topbar-left')}>
                <a className={cx('topbar-item')}>Kênh người bán</a>
                <a className={cx('topbar-item')}>Trở Thành Người Bán Shopee</a>
                <a className={cx('topbar-item')}>Tải Ứng Dụng</a>
                <div className={cx('topbar-item')}>Kết nối</div>
            </div>
        </div>
    );
}

export default Navbar;