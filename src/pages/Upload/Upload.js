import classNames from 'classnames/bind';

import styles from './Upload.modules.scss'

const cx = classNames.bind(styles)

function Upload() {
    return (
        <div className={cx('wrapper')}>
            <h1>Upload Page</h1>
        </div>

    );
}

export default Upload;