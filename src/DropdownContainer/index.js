import { h } from 'preact';

import css from "./styles.scss";

const DropdownContainer = props => {
    return (
        <div className={css.dropdown_container}>
            {props.children}
        </div>
    )
}

export default DropdownContainer;