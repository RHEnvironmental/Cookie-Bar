import { h } from 'preact';
import css from "./styles.scss";

const Toggle = props => {
    function handleChange(e) {
        let isChecked = e.target.checked;
        console.log(isChecked);
    }

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
                    type="checkbox"
                    onChange={e => handleChange(e)}
                />
                <span className={css.slider}></span>
            </label>
        </div>
    )
}

export default Toggle;