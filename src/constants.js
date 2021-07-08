import Cookies from 'js-cookie';

let event = document.createEvent('CustomEvent')

event.initCustomEvent(
    'consentCookieChange',
    true,
    true,
    Cookies.get('cookie_consent')
);

export const cookieChange = event;