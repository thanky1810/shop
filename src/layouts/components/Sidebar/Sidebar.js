import classNames from "classnames/bind";

import styles from './Sidebar.module.scss'
import Navbar from "~/layouts/components/Navbar";


const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <Navbar></Navbar>
    );
}

export default Sidebar;