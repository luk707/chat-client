import * as React from "react";

import { Container } from "../elements/container";
import { NavbarProps, Navbar } from "./navbar";

export interface ViewProps {
    navbarProps: NavbarProps;
}

export class View extends React.Component<ViewProps, {}> {
    render() {
        return (
            <Container classMap={{
                row: true
            }}>
                <Navbar {...this.props.navbarProps}/>
                <Container classMap={{
                    column: true,
                    flex: true,
                    padded: true
                }}>
                    {this.props.children}
                </Container>
            </Container>
        );
    }
}