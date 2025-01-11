import classNames from 'classnames/bind';

import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images'


const cx = classNames.bind(styles)

function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-container')}>
                <img className={cx('shopee-logo')} src={images.logo} alt='shopee' />
                <input className={cx('search-bar')} placeholder='Shopee bao ship 0Đ -  Đăng ký ngay!' />
                <button className={cx('button-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

                <div className={cx('search-cart')}>
                    <FontAwesomeIcon className={cx('search-cart-icon')} icon={faCartShopping} />
                </div>
            </div>
        </div>
    );
}

export default Search;