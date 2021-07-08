import { h } from 'preact';
import css from "./styles.scss";

const Toggle = props => {
    return (
        <div className={props.className && props.className }>
            <style>
                {`\
                    input:checked + .${css.slider} {\
                        background-color: ${props.primaryColor};\
                    }\
                    \
                    input:focus + .${css.slider} {\
                        box-shadow: 0 0 1px ${props.primaryColor};\
                    }\
                `}
            </style>
            <label className={css.switch}>
                <input
                    tabIndex="0"
                    type="checkbox"
                    checked={props.checked}
                    aria-checked={props.checked}
                    onChange={props.handleChange}
                    aria-label={props.ariaLabel}
                />
                <span className={css.slider}></span>
            </label>
        </div>
    )
}

export default Toggle;