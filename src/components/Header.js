import React, { PureComponent } from 'react';
const Header = (props)=>{

    const headerStyle = {
        padding: "20px 0",
        lineHeight: "1.5em",
      }

    return <header style={headerStyle}> <h1 style={{ fontSize: "6rem",
    fontWeight: "600",
    marginBottom: "2rem",
    lineHeight: "1em",
    color: "rgb(149 145 145)",
    textTransform: "lowercase",
    textAlign: "center"}}>Todo List - Component</h1></header>
}
export default Header;
