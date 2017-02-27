import * as React from "react";

import { Icon } from "../elements/icon";

export interface NavbarItem {
    icon: string;
    label: string;
    onClick?: () => void;
}

export interface NavbarButtonProps extends NavbarItem {
    menu?: boolean;
    onClick?: () => void;
}

export class NavbarButton extends React.Component<NavbarButtonProps, {}> {
    render() {
        return (
            <button onClick={this.props.onClick} className={["navbarButton", "menu"].filter((value => {
                    switch (value) {
                        case "menu":
                            return this.props.menu;
                        default:
                            return true;
                    }
                })).join(" ")}>
                <div className={["icon"].join(" ")}>
                    <Icon id={this.props.icon}/>
                </div>
                <div className={["content"].join(" ")}>
                    <span>{this.props.label}</span>
                </div>
            </button>
        );
    }
 }

export interface NavbarProps {
    items: {
        top: NavbarItem[];
        bottom: NavbarItem[];
    };
}

export interface NavbarState {
    open: boolean;
}

export class Navbar extends React.Component<NavbarProps, NavbarState> {

    constructor(props : NavbarProps) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div className={["navbarContainer"].join(" ")}>
                <div className={["navbarCollapse", "open"].filter(value => {
                        switch (value) {
                            case "open":
                                return this.state.open;
                            default:
                                return true;
                        }
                    }).join(" ")}>
                    <NavbarButton menu={true} onClick={() => { this.setState((state, props) => {
                            return {
                                ...state,
                                open: !state.open 
                            }
                        }); }} label="Menu" icon="menu"/>
                    {this.props.items.top.map((item) => {
                        return <NavbarButton onClick={item.onClick} {...item}></NavbarButton>;
                    })}
                    <div className={["flex"].join(" ")}/>
                    {this.props.items.bottom.map((item) => {
                        return <NavbarButton {...item}></NavbarButton>;
                    })}
                </div>
            </div>
        );
    }
}