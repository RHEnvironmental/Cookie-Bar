import { h, render, Component } from 'preact';
import Cookies from 'js-cookie'
import 'core-js';

import CookieBar from "./CookieBar";

class App extends Component {
    componentDidMount() {
        // Check if consent cookie exists, create it if it hasn't
        if(typeof Cookies.get('cookie_consent') === 'undefined') {
            let cookies = {
                customSettingsSaved: false,
                categories: []
            }

            window.cookieBarSettings.cookies.forEach(cookie => {
                cookies.categories.push({
                    id: cookie.categoryID,
                    accepted: false
                });
            });

            Cookies.set('cookie_consent', JSON.stringify(cookies));
        }

        // Not sure if this is the best place to put it but this is a polyfill for custom events for IE.
        // My reasoning for putting it here is that it runs straight away when the package is loaded.
        // Feel free to move it somewhere more appropriate (and then delete these comments)
        (function () {

            if ( typeof window.CustomEvent === "function" ) return false;

            function CustomEvent ( event, params ) {
                params = params || { bubbles: false, cancelable: false, detail: null };
                var evt = document.createEvent( 'CustomEvent' );
                evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                return evt;
            }

            window.CustomEvent = CustomEvent;
        })();
    }

    render() {
        const primaryColor = window.cookieBarSettings ? window.cookieBarSettings.primaryColor : '#2D5AB4';

        return <CookieBar
            primaryColor={primaryColor}
        />
    }
}

render(<App />, document.body);