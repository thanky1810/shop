
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;
