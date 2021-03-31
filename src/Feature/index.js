import {h} from 'preact';

const Feature = props => {
    const features = JSON.parse(localStorage.getItem('flags'));
    const feature = features.find(feature => feature.name === props.name);

    if (feature && feature.active) {
        return (
            <div>
                {props.children}
            </div>
        );
    }

    if(props.fallback) {
        return (
            <div>
                {props.fallback}
            </div>
        );
    }

    return null;
}

export default Feature;

