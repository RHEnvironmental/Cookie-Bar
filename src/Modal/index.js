import { h } from 'preact';

import Button from '../Button';
import CloseButton from "../CloseButton";
import DropdownContainer from "../DropdownContainer";
import DropdownItem from "../DropdownItem";

import css from './styles.scss';

const Modal = props => {
    return (
        <div class={css.modal_container}>
            <div className={css.modal_section}>
                <CloseButton toggleShowModal={props.toggleShowModal} primaryColor={props.primaryColor} />
            </div>
            <div className={css.modal_section}>
                <h2 style={{color: props.primaryColor}}>Our use of cookies</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus amet, nunc faucibus in leo, id at donec. Curabitur faucibus maecenas non, tortor. Parturient sapien tempor libero, consectetur. Ultricies odio egestas interdum ut etiam sollicitudin aliquam.</p>
                <Button primaryColor={props.primaryColor}>Accept All</Button>
            </div>
            <div className={css.modal_section}>
                <h2 style={{color: props.primaryColor}}>Manage Consent Preferences</h2>
                <DropdownContainer>
                    {window.cookieBarSettings.cookies.map(cookie => (
                        <DropdownItem
                            category={cookie.category}
                            categoryCookies={cookie.categoryCookies}
                        />
                    ))}
                </DropdownContainer>
            </div>
            <div className={css.modal_section}>
                <Button cancel>Reject All</Button>
                <Button primaryColor={props.primaryColor}>Save and Exit</Button>
            </div>
        </div>
    )
}

export default Modal;