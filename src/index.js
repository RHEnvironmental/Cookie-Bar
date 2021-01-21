import { h, render, Component } from 'preact';

import CookieBar from "./CookieBar";

class App extends Component {
    render() {
        return <CookieBar />
    }
}

render(<App />, document.body);