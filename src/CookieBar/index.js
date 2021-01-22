import { h } from 'preact';

import Button from "../Button";

import css from './styles.scss';
import globalStyles from '../../scss/global.scss';

const CookieBar = props => {
    return (
        <div className={css.cookiebar_container}>
            <div className={globalStyles.container}>
                <div className={globalStyles.col_8}>
                    <h2>Use of our cookies</h2>
                    <p>We use necessary cookies to make our site work. We'd also like to set optional analytics cookies to help us improve it. We won't set optional cookies unless you enable them. Using this tool will set a cookie on your device to remember your preferences. <a href="#">Read More</a></p>
                </div>
                <div className={globalStyles.col_4}>
                    <Button primaryColor={props.primaryColor} onClick={() => console.log('test')}>Accept All</Button><br /><br />
                    <Button primaryColor={props.primaryColor} inverted onClick={() => console.log('test')}>Manage Cookies</Button>
                </div>
            </div>
        </div>
    );
}

export default CookieBar;