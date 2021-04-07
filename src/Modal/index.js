import { h } from 'preact';
import Cookies from 'js-cookie';

import Button from '../Button';
import CloseButton from "../CloseButton";
import DropdownContainer from "../DropdownContainer";
import DropdownItem from "../DropdownItem";

import css from './styles.scss';

const Modal = props => {
    function rejectAllCookies() {
        const cookieConsent = JSON.parse(Cookies.get('cookie_consent'));

        cookieConsent.categories.forEach(cookieCategory => cookieCategory.accepted = false);

        Cookies.set('cookie_consent', JSON.stringify(cookieConsent))

        props.toggleShowModal();
    }

    function saveAndExit() {
        const cookieConsent = JSON.parse(Cookies.get('cookie_consent'));

        cookieConsent.customSettingsSaved = true;

        Cookies.set('cookie_consent', JSON.stringify(cookieConsent))

        props.toggleShowModal();
        props.hideCookieBar();
    }

    return (
        <div className={css.modal_background}>
            <div className={css.modal_container}>
                <div className={css.modal_section}>
                    <CloseButton toggleShowModal={props.toggleShowModal} primaryColor={props.primaryColor} />
                </div>
                <div className={css.modal_section}>
                    <h2 style={{color: props.primaryColor}}>Our use of cookies</h2>
                    <p>{window.cookieBarSettings.introText} {window.cookieBarSettings.hasMoreInfo && <a href={window.cookieBarSettings.moreInfoUrl}>More Info</a>}</p>
                    <Button
                        primaryColor={props.primaryColor}
                        onClick={props.acceptAllCookies}
                    >Accept All</Button>
                </div>
                <div className={css.modal_section}>
                    <h2 style={{color: props.primaryColor}}>Manage Consent Preferences</h2>
                    <DropdownContainer>
                        {window.cookieBarSettings.cookies.map(cookie => (
                            <DropdownItem
                                primaryColor={props.primaryColor}
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
                        <Button cancel onClick={rejectAllCookies}>Reject All</Button>
                        <Button primaryColor={props.primaryColor} onClick={saveAndExit}>Save and Exit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;