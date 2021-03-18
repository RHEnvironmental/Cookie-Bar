import Cookies from 'js-cookie';

export const cookieChange = new CustomEvent("consentCookieChange", {
    detail: Cookies.get('cookie_consent'),
    bubbles: true,
    composed: true
});