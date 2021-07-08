import { h } from 'preact';

import css from './styles.scss';
import globalStyles from '../../scss/global.scss';

const CloseButton = props => {
    return (
        <button className={css.closeLine} onClick={props.toggleShowModal} style={{backgroundColor: props.primaryColor}}>
            <span className={globalStyles.sr_only}>Close cookie bar modal</span>
            <div></div>
            <div></div>
        </button>
    );
}

export default CloseButton;