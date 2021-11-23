import React from "react";




const FooterContent = ({footer_items}) => {
    let Footer = []


    for(let i = 0; i < footer_items.length; i++) {
            Footer.push(<p>{footer_items[i]}</p>);
            }

    return (
        Footer

    )
}

export default FooterContent