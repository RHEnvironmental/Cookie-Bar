import { h, Component } from 'preact';
import Cookies from 'js-cookie';

import Button from '../Button';
import CloseButton from "../CloseButton";
import DropdownContainer from "../DropdownContainer";
import DropdownItem from "../DropdownItem";

import css from './styles.scss';
import globalStyles from "../../scss/global.scss";

class Modal extends Component {
    componentDidMount() {
        document.getElementById('modal-title').focus();
    }

    _rejectAllCookies() {
        const cookieConsent = JSON.parse(Cookies.get('cookie_consent'));

        cookieConsent.categories.forEach(cookieCategory => cookieCategory.accepted = false);
        cookieConsent.customSettingsSaved = true;

        Cookies.set('cookie_consent', JSON.stringify(cookieConsent), { expires: 365 });

        this.props.toggleShowModal();
        this.props.hideCookieBar();
    }

    _saveAndExit() {
        const cookieConsent = JSON.parse(Cookies.get('cookie_consent'));

        cookieConsent.customSettingsSaved = true;

        Cookies.set('cookie_consent', JSON.stringify(cookieConsent), { expires: 365 });

        this.props.toggleShowModal();
        this.props.hideCookieBar();
    }

    _trapModalFocus(e) {
        // add all the elements inside modal which you want to make focusable
        const  focusableElements =
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const modal = document.querySelector('#modal-container'); // select the modal by it's id

        const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
        const focusableContent = modal.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
            }
        } else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault();
            }
        }
    }

    render() {
        return (
            <div className={css.modal_background}>
                <div id="modal-container"
                     tabIndex="0"
                     onKeyDown={e => this._trapModalFocus(e)}
                     className={css.modal_container}
                     role="dialog"
                     aria-labelledby="modal-title"
                     aria-modal="true"
                     style={{borderTop: `10px solid ${this.props.primaryColor}`}}
                >
                    <div className={`${css.modal_section} ${css.no_border}`}>
                        <h2 id="modal-title" tabIndex="-1" className={css.modal_main_header} style={{color: this.props.primaryColor}}>Our use of cookies</h2>
                        <CloseButton id="modal-header-close-button" toggleShowModal={this.props.toggleShowModal} primaryColor={this.props.primaryColor} />
                        <p>{window.cookieBarSettings.modalIntroText} {window.cookieBarSettings.hasMoreInfo && <a href={window.cookieBarSettings.moreInfoUrl}>More Info <span className={globalStyles.sr_only}>&nbsp; about cookies</span></a>}</p>
                        <Button
                            primaryColor={this.props.primaryColor}
                            onClick={this.props.acceptAllCookies}
                        >Accept All</Button>
                    </div>
                    <div className={`${css.modal_section} ${css.no_border} ${css.modal_scroll}`}>
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
                    <div className={css.modal_section}>
                        <div className={css.footer_buttons_container}>
                            <Button cancel onClick={this._rejectAllCookies.bind(this)}>Reject All</Button>
                            <Button id="modal-footer-close-button" primaryColor={this.props.primaryColor} onClick={this._saveAndExit.bind(this)}>Save and Exit</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;