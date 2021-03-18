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
    }

    render() {
        const primaryColor = window.cookieBarSettings ? window.cookieBarSettings.primaryColor : '#2D5AB4';

        return <CookieBar
            primaryColor={primaryColor}
        />
    }
}

render(<App />, document.body);

// module.exports = {
//     testFunction: function(){
//         console.log('this is a test function that I would like to export.');
//     }
// }

// var exports=module.exports={};
//
// exports.testFunction = function(){
//     return console.log('this is a test function that I would like to export.');
// }
