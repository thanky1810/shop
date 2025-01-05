import classNames from "classnames/bind";

import styles from './Navbar.module.scss'

const cx = classNames.bind(styles)


function Navbar() {
    return (
        <div className={cx('navbar')}>
            <div className={cx('container-navbar')}>
                hello
            </div>
        </div>
    );
}

export default Navbar;