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
                <div className={cx('search-main')}>
                    <input className={cx('search-bar')} placeholder='Shopee bao ship 0Đ -  Đăng ký ngay!' />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('search-cart')}>
                    <FontAwesomeIcon className={cx('search-cart-icon')} icon={faCartShopping} />
                </div>
            </div>
        <div className={cx('search-ideas')}>
            <a className={cx('ideas')}>Đồ Nữ Trung Niên Sang Trọng</a>
            <a className={cx('ideas')}>Áo Khoác Nam</a>
            <a className={cx('ideas')}>Set Đồ Cho Mẹ Trẻ Trung</a>
            <a className={cx('ideas')}>Nhẫn Đôi Bạc 100%</a>
            <a className={cx('ideas')}>Đồ Trung Niên</a>
            <a className={cx('ideas')}>Túi Đựng quần áo</a>
        </div>
        </div>
    );
}

export default Search;