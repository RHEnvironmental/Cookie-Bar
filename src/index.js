import { h, render, Component } from 'preact';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
            </div>
        )
    }
}

render(<App />, document.getElementById('container'));