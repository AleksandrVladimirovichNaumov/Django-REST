import React from "react";
import {Link} from "react-router-dom";


const MenuList = ({menu_items}) => {
    let Menu = [<p>Menu</p>]

    // console.log(Menu.props)
    for (let i = 0; i < menu_items.length; i++) {
        Menu.push(<p><Link to={menu_items[i][1]}>{menu_items[i][0]}</Link></p>);
        // Menu.push(<p><a href="#">{menu_items[i]}</a></p>);
    }
    // console.log(Menu)
    return (
        Menu

    )
}

export default MenuList