import { h } from 'preact';

import Toggle from "../Toggle";

import css from "./styles.scss";

const DropdownItem = props => {
    return (
        <div className={css.dropdown_item}>
            <div className={css.dropdown_item_title_container}>
                <div className={css.arrow_container}>
                    <div className={css.arrow}></div>
                </div>
                <div className={css.dropdown_item_title}>
                    <h3>{props.category}</h3>
                </div>
                <div className={css.category_toggle}>
                    <Toggle />
                </div>
            </div>
            <div className={css.dropdown_item_content}>
                <table className={css.cookie_table}>
                    <tr>
                        <th>
                            Cookie
                        </th>
                        <th>
                            Description
                        </th>
                    </tr>
                    {props.categoryCookies.map(cookie => (
                        <tr>
                            <td>{cookie.name}</td>
                            <td>{cookie.description}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default DropdownItem;