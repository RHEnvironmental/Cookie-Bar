import { h, Component } from 'preact';
import Cookies from 'js-cookie';

import Button from "../Button";
import Modal from '../Modal';

import {cookieChange} from '../constants';

import css from './styles.scss';
import globalStyles from '../../scss/global.scss';

class CookieBar extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false,
            hideCookieBar: false
        }
    }

    componentDidMount() {
        this._hideCookieBar = this._hideCookieBar.bind(this);

        if (Cookies.get('cookie_consent')) {
            const cookieConsent = JSON.parse(Cookies.get('cookie_consent'));

            if (cookieConsent.customSettingsSaved) {
                this._hideCookieBar();
            }
        }
    }

    _hideCookieBar() {
        this.setState({
            hideCookieBar: true
        });
    }

    _modal() {
        if(this.state.showModal){
            return (
                <Modal
                    acceptAllCookies={this._acceptAllCookies.bind(this)}
                    primaryColor={this.props.primaryColor}
                    toggleShowModal={() => this._toggleShowModal()}
                    hideCookieBar={this._hideCookieBar}
                />
            )
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

        cookieConsent.categories.forEach(category => category.accepted = true);
        cookieConsent.customSettingsSaved = true;

        Cookies.set('cookie_consent', JSON.stringify(cookieConsent));

        this._hideCookieBar();

        document.dispatchEvent(cookieChange);
    }

    render() {
        if (this.state.hideCookieBar) {
            return null;
        }

        return (
            <div>
                <div id="cookiebar" className={css.cookiebar_container} style={{borderTop: `10px solid ${this.props.primaryColor}`}}>
                    <div className={globalStyles.container}>
                        <div className={globalStyles.col_8}>
                            <h2 style={{color: this.props.primaryColor, fontSize: 20}}><strong>Use of our cookies</strong></h2>
                            <p>{window.cookieBarSettings.introText} {window.cookieBarSettings.hasMoreInfo && <a href={window.cookieBarSettings.moreInfoUrl}>More Info <span className={globalStyles.sr_only}>about cookies</span></a>}</p>
                        </div>
                        <div className={globalStyles.col_4}>
                            <div className={css.header_button_container}>
                                <Button primaryColor={this.props.primaryColor} onClick={this._acceptAllCookies.bind(this)}>Accept All <span className={globalStyles.sr_only}>&nbsp; cookies</span> </Button><br className={globalStyles.hidden_xs} />
                                <Button primaryColor={this.props.primaryColor} inverted onClick={() => this._toggleShowModal()}>Manage Cookies</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {this._modal()}
            </div>
        );
    }
}

export default CookieBar;