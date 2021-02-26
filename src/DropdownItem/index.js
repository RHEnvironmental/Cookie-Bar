import { h, Component } from 'preact';

import Toggle from "../Toggle";

import css from "./styles.scss";

class DropdownItem extends Component {
    constructor() {
        super();

        this.state = {
            showItemContent: false
        }
    }

    _toggleShowItemContent() {
        this.setState({
            showItemContent: !this.state.showItemContent
        })
    }

    _handleChange(e) {
        let isChecked = e.target.checked;
        // Do stuff here for cookie category being activated / de-activated.
    }

    render() {
        return (
            <div className={css.dropdown_item}>
                <div className={css.dropdown_item_title_container}>
                    <div className={css.arrow_container} onClick={this._toggleShowItemContent.bind(this)}>
                        { this.state.showItemContent ? <div className={css.arrow_up}></div> : <div className={css.arrow_down}></div> }
                    </div>
                    <div className={css.dropdown_item_title} onClick={this._toggleShowItemContent.bind(this)}>
                        <h3>{this.props.category}</h3>
                    </div>
                    <div className={css.category_toggle}>
                        {this.props.category === 'Essential Website Cookies' ? (
                            <p className={css.always_active} style={{color: this.props.primaryColor}}>Always Active</p>
                        ) : (
                            <Toggle
                                className={css.toggle}
                                primaryColor={this.props.primaryColor}
                                handleChange={e=> this._handleChange(e)}
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