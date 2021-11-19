import React from "react";




const MenuList = ({menu_items}) => {
    let Menu = [<p>Menu</p>]

    // console.log(Menu.props)
    for(let i = 0; i < menu_items.length; i++) {
            Menu.push(<p><a href="#">{menu_items[i]}</a></p>);
            }
    // console.log(Menu)
    return (
        Menu

    )
}

export default MenuList