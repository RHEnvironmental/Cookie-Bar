import { h, Component } from 'preact';
import Cookies from 'js-cookie';

import Button from '../Button';
import CloseButton from "../CloseButton";
import DropdownContainer from "../DropdownContainer";
import DropdownItem from "../DropdownItem";

import css from './styles.scss';

class Modal extends Component {
    componentDidMount() {
        document.getElementById('modal-title').focus();
    }

    _rejectAllCookies() {
        const cookieConsent = JSON.parse(Cookies.get('cookie_consent'));

        cookieConsent.categories.forEach(cookieCategory => cookieCategory.accepted = false);
        cookieConsent.customSettingsSaved = true;

        Cookies.set('cookie_consent', JSON.stringify(cookieConsent))

        this.props.toggleShowModal();
        this.props.hideCookieBar();
    }

    _saveAndExit() {
        const cookieConsent = JSON.parse(Cookies.get('cookie_consent'));

        cookieConsent.customSettingsSaved = true;

        Cookies.set('cookie_consent', JSON.stringify(cookieConsent))

        this.props.toggleShowModal();
        this.props.hideCookieBar();
    }

    render() {
        return (
            <div className={css.modal_background}>
                <div id="modal-container" tabIndex="-1" className={css.modal_container} role="dialog" aria-labelledby="modal-title" aria-modal="true" style={{borderTop: `10px solid ${this.props.primaryColor}`}}>
                    <div className={css.modal_scroll}>
                        <div className={`${css.modal_section} ${css.no_border}`}>
                            <h2 id="modal-title" tabIndex="-1" className={css.modal_main_header} style={{color: this.props.primaryColor}}>Our use of cookies</h2>
                            <CloseButton toggleShowModal={this.props.toggleShowModal} primaryColor={this.props.primaryColor} />
                            <p>{window.cookieBarSettings.introText} {window.cookieBarSettings.hasMoreInfo && <a href={window.cookieBarSettings.moreInfoUrl}>More Info</a>}</p>
                            <Button
                                primaryColor={this.props.primaryColor}
                                onClick={this.props.acceptAllCookies}
                            >Accept All</Button>
                        </div>
                        <div className={`${css.modal_section} ${css.no_border}`}>
                            <h3 style={{color: this.props.primaryColor}}>Manage Consent Preferences</h3>
                            <DropdownContainer>
                                {window.cookieBarSettings.cookies.map(cookie => (
                                    <DropdownItem
                                        primaryColor={this.props.primaryColor}
                                        categoryID={cookie.categoryID}
                                        category={cookie.category}
                                        categoryDescription={cookie.categoryDescription}
                                        categoryCookies={cookie.categoryCookies}
                                    />
                                ))}
                            </DropdownContainer>
                        </div>
                    </div>
                    <div className={css.modal_section}>
                        <div className={css.footer_buttons_container}>
                            <Button cancel onClick={this._rejectAllCookies}>Reject All</Button>
                            <Button primaryColor={this.props.primaryColor} onClick={this._saveAndExit}>Save and Exit</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;