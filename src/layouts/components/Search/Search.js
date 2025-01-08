import classNames from 'classnames/bind';

import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-container')}>
                <img className={cx('search-cart-logo')} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Frubee.com.vn%2Fshopee-logo.html&psig=AOvVaw1BPUKwzu483fX8XKIBxUw0&ust=1736438909343000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDt5JfB5ooDFQAAAAAdAAAAABAE' alt='shopee-logo' />
                <input placeholder='hello'></input>
                <div className={cx('search-cart')}>
                    <FontAwesomeIcon className={cx('search-cart-icon')} icon={faCartShopping} />
                </div>
            </div>
        </div>
    );
}

export default Search;