import * as React from "react";

import { Container } from "../elements/container";
import { Button } from "../elements/button";
import { Text } from "../elements/text";
import { Icon } from "../elements/icon";
import { Flex } from "../elements/flex";

export interface NavbarItem {
    faIcon?: string;
    avatarUrl?: string;
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
            <Button onClick={this.props.onClick} classMap={{
                navbarButton: true,
                menu: this.props.menu
            }}>
                <Container classMap={{
                    icon: true
                }}>
                    <Icon faIcon={this.props.faIcon}/>
                </Container>
                <Container classMap={{
                    content: true
                }}>
                    <Text>{this.props.label}</Text>
                </Container>
            </Button>
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
            <Container classMap={{
                navbarContainer: true
            }}>
                <Container classMap={{
                    navbarCollapse: true,
                    open: this.state.open
                }}>
                    <NavbarButton menu={true} onClick={() => { this.setState((state, props) => {
                            return {
                                ...state,
                                open: !state.open 
                            }
                        }); }} label="Menu" faIcon="bars"/>
                    {this.props.items.top.map((item) => {
                        return <NavbarButton onClick={item.onClick} {...item}></NavbarButton>;
                    })}
                    <Flex></Flex>
                    {this.props.items.bottom.map((item) => {
                        return <NavbarButton {...item}></NavbarButton>;
                    })}
                </Container>
            </Container>
        );
    }

        /*test = <Container classMap={{
                row: true,
            }}>
                <Container classMap={{
                    column: true,
                    navbar: true
                }}>
                    <NavbarIcon faIcon="bars"/>
                    {this.props.items.top.map((item) => {
                        return <NavbarIcon faIcon={item.faIcon}/>;
                    })}
                    <Container classMap={{flex: true}}/>
                    {this.props.items.bottom.map((item) => {
                        return <NavbarIcon faIcon={item.faIcon}/>;
                    })}
                </Container>
                <Container classMap={{
                        column: true,
                        drawer: true,
                        open: this.state.open
                    }}>
                    <NavbarButton heading={true} onClick={() => { this.setState((state, props) => {
                            return {
                                ...state,
                                open: !state.open 
                            }
                        }); }} label="Menu"/>
                    {this.props.items.top.map((item) => {
                        return <NavbarButton heading={false} label={item.label}/>;
                    })}
                    <Container classMap={{flex: true}}/>
                    {this.props.items.bottom.map((item) => {
                        return <NavbarButton heading={false} label={item.label}/>;
                    })}
                </Container>
            </Container>;*/
}