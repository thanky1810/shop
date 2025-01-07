import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import styles from './Navbar.module.scss'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


const cx = classNames.bind(styles)


function Navbar() {
    return (
        <div className={cx('wrapper')} >
            <div className={cx('navbar')}>
                <div className={cx('topbar-left')}>
                    <a className={cx('topbar-item')}>Kênh người bán</a>
                    <a className={cx('topbar-item')}>Trở Thành Người Bán Shopee</a>
                    <a className={cx('topbar-item')}>Tải Ứng Dụng</a>
                    <div className={cx('topbar-item')}>
                        <div >Kết nối</div>
                        <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                        <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                    </div>
                </div>
                <div className={cx('topbar-right')}>
                    <div className={cx('topbar-item-right')}>Thông báo</div>
                    <a className={cx('topbar-item-right')}>Hỗ trợ</a>
                    <div className={cx('topbar-item-right')}>Tiếng Việt</div>
                    <a className={cx('topbar-item-right')}>Đăng Ký</a>
                    <a className={cx('topbar-item-right')}>Đăng Nhập</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;