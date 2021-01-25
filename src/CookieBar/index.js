import { h, Component } from 'preact';

import Button from "../Button";
import Modal from '../Modal';

import css from './styles.scss';
import globalStyles from '../../scss/global.scss';

class CookieBar extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false
        }
    }

    _modal(){
        if(this.state.showModal){
            return <Modal primaryColor={this.props.primaryColor} toggleShowModal={() => this._toggleShowModal()} />
        }

        return null;
    }

    _toggleShowModal(){
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        return (
            <div className={css.cookiebar_container}>
                <div className={globalStyles.container}>
                    <div className={globalStyles.col_8}>
                        <h2 style={{color: this.props.primaryColor}}>Use of our cookies</h2>
                        <p>We use necessary cookies to make our site work. We'd also like to set optional analytics cookies to help us improve it. We won't set optional cookies unless you enable them. Using this tool will set a cookie on your device to remember your preferences. <a href="#">Read More</a></p>
                    </div>
                    <div className={globalStyles.col_4}>
                        <Button primaryColor={this.props.primaryColor} onClick={() => console.log('test')}>Accept All</Button><br />
                        <Button primaryColor={this.props.primaryColor} inverted onClick={() => this._toggleShowModal()}>Manage Cookies</Button>
                    </div>
                </div>
                {this._modal()}
            </div>
        );
    }

}

export default CookieBar;