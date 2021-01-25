import { h } from 'preact';

import css from './styles.scss';

const CloseButton = props => {
    return (
        <button className={css.closeLine} onClick={props.toggleShowModal} style={{backgroundColor: props.primaryColor}}>
            <div></div>
            <div></div>
        </button>
    );
}

export default CloseButton;