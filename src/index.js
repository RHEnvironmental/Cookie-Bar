import { h, render, Component } from 'preact';
import 'core-js';

import CookieBar from "./CookieBar";

class App extends Component {
    render() {
        const primaryColor = window.cookieBarSettings ? window.cookieBarSettings.primaryColor : '#2D5AB4';

        return <CookieBar
            primaryColor={primaryColor}
        />
    }
}

render(<App />, document.body);