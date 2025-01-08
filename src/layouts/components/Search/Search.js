import classNames from 'classnames/bind';

import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images'


const cx = classNames.bind(styles)

function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-container')}>
                <img className='.search-cart-logo' src={images.logo} alt='shopee' />
                <input className={cx('search-bar')} placeholder='hello'></input>
                <div className={cx('search-cart')}>
                    <FontAwesomeIcon className={cx('search-cart-icon')} icon={faCartShopping} />
                </div>
            </div>
        </div>
    );
}

export default Search;