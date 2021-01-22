import { h } from 'preact';

import css from './styles.scss';

const Button = props => {

    const setStyles = {
        primary: props.primary,
        cancel: props.cancel,
        inverted: props.inverted,
    }

    // The below is not being used really but it does work so I would like to keep it here.
    const setClasses = () => {
        const classArray = []

        for (const [key, value] of Object.entries(setStyles)) {
            if(value){
                classArray.push(css[key])
            }
        }

        return classArray;
    }

    const inlineStyles = () => {
        let primaryButtonColor = props.primaryColor

        if(props.cancel){
            primaryButtonColor = '#5A5A5A';
        }

        return {
            backgroundColor: props.inverted ? '#fff' : primaryButtonColor,
            borderColor: primaryButtonColor,
            color: props.inverted ? primaryButtonColor : '#fff'
        }
    }

    return (
        <button className={`${css.button} ${setClasses()}`} style={inlineStyles()} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;