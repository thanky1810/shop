
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'
import PropTypes from 'prop-types'

import Sidebar from '~/layouts/components/Sidebar';
import Search from '~/layouts/components/Search';

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar></Sidebar>
            <Search></Search>
            {children}
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;
