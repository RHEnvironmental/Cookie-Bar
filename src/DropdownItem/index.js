import { h, Component } from 'preact';
import Cookies from 'js-cookie';

import Toggle from "../Toggle";

import { cookieChange } from '../constants';

import css from "./styles.scss";

class DropdownItem extends Component {
    constructor() {
        super();

        this.state = {
            showItemContent: false,
            categoryAccepted: false,
            cookieConsent: {}
        }
    }

    componentDidMount() {
        const cookieConsent = JSON.parse(Cookies.get('cookie_consent'));
        const categoryToUpdate = cookieConsent.categories.find(category => category.id === this.props.categoryID);

        this.setState({
            cookieConsent: cookieConsent,
            categoryAccepted: categoryToUpdate.accepted
        })
    }

    _toggleShowItemContent() {
        this.setState({
            showItemContent: !this.state.showItemContent
        })
    }

    _handleChange(e, categoryId) {
        let isChecked = e.target.checked;

        const categoryToUpdate = this.state.cookieConsent.categories.find(category => category.id === categoryId);

        categoryToUpdate.accepted = isChecked;
        Cookies.set('cookie_consent', JSON.stringify(this.state.cookieConsent));

        document.dispatchEvent(cookieChange);
    }

    _handleKeyDown(e) {
        const enterKey = 13;
        const spaceKey = 32;

        if (e.keyCode === enterKey || e.keyCode === spaceKey) {
            e.preventDefault();
            this._toggleShowItemContent();
        }
    }

    render() {
        return (
            <div className={css.dropdown_item}>
                <div className={css.dropdown_item_title_container}>
                    <div className={css.arrow_container}
                         onClick={this._toggleShowItemContent.bind(this)}
                    >
                        <div className={this.state.showItemContent ? `${css.arrow} ${css.up}` : `${css.arrow} ${css.down}`}></div>
                    </div>
                    <div className={css.dropdown_item_title}
                         onClick={this._toggleShowItemContent.bind(this)}
                         onKeyDown={this._handleKeyDown.bind(this)}
                         role="button"
                         tabIndex="0"
                         aria-label={"Toggle " + this.props.category + " info"}
                    >
                        <h3>{this.props.category}</h3>
                    </div>
                    <div className={css.category_toggle}>
                        {this.props.categoryID === 'ESSENTIAL' ? (
                            <p className={css.always_active} style={{color: this.props.primaryColor}}>Always Active</p>
                        ) : (
                            <Toggle
                                className={css.toggle}
                                checked={this.state.categoryAccepted}
                                primaryColor={this.props.primaryColor}
                                handleChange={e=> this._handleChange(e, this.props.categoryID)}
                                ariaLabel={"Enable " + this.props.category}
                            />
                        )}
                    </div>
                </div>
                {this.state.showItemContent && (
                    <div className={css.dropdown_item_content}>
                        <p>
                            {this.props.categoryDescription}
                        </p>
                        <table className={css.cookie_table}>
                            <tr>
                                <th>
                                    Cookie
                                </th>
                                <th>
                                    Description
                                </th>
                            </tr>
                            {this.props.categoryCookies.map(cookie => (
                                <tr>
                                    <td>{cookie.name}</td>
                                    <td>{cookie.description}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                )}
            </div>
        )
    }
}

export default DropdownItem;