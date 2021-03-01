import { h, Component } from 'preact';
import Cookies from 'js-cookie';

import Button from "../Button";
import Modal from '../Modal';

import css from './styles.scss';
import globalStyles from '../../scss/global.scss';

class CookieBar extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false
        }
    }

    _modal() {
        if(this.state.showModal){
            return <Modal primaryColor={this.props.primaryColor} toggleShowModal={() => this._toggleShowModal()} />
        }

        return null;
    }

    _toggleShowModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    _acceptAllCookies() {
        const cookieConsent = JSON.parse(Cookies.get('cookie_consent'));

        cookieConsent.acceptAll = true;

        Cookies.set('cookie_consent', JSON.stringify(cookieConsent));
    }

    render() {
        return (
            <div className={css.cookiebar_container}>
                <div className={globalStyles.container}>
                    <div className={globalStyles.col_8}>
                        <h2 style={{color: this.props.primaryColor, fontSize: 20}}><strong>Use of our cookies</strong></h2>
                        <p>We use necessary cookies to make our site work. We'd also like to set optional analytics cookies to help us improve it. We won't set optional cookies unless you enable them. Using this tool will set a cookie on your device to remember your preferences.</p>
                    </div>
                    <div className={globalStyles.col_4}>
                        <div className={css.header_button_container}>
                            <Button primaryColor={this.props.primaryColor} onClick={this._acceptAllCookies}>Accept All</Button><br />
                            <Button primaryColor={this.props.primaryColor} inverted onClick={() => this._toggleShowModal()}>Manage Cookies</Button>
                        </div>
                    </div>
                </div>
                {this._modal()}
            </div>
        );
    }

}

export default CookieBar;