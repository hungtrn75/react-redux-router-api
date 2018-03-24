import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

let menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        name: "Quản lý sản phẩm",
        to: "/product-list",
        exact: false
    }
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => (
                <li className={match ? 'active' : ''}>
                    <Link to={to}>{label}</Link>
                </li>
            )}
        />
    )
}
class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">CALL API</a>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </div>
        );
    }
    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} to={menu.to} label={menu.name} activeOnlyWhenExact={menu.exact} />
                );
            })
        }
        return result;
    }
}

export default Menu;