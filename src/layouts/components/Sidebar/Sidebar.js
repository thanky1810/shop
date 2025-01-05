import classNames from "classnames/bind";

import styles from './Sidebar.module.scss'
import Navbar from "~/layouts/components/Navbar";


const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Navbar></Navbar>
            <div className={cx('container-header')}>hello</div>
        </div>
    );
}

export default Sidebar;