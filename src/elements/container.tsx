import * as React from "react";

import mapClasses, { ClassMap } from "./classMap";

export interface ContainerProps {
    classMap: ClassMap;
}

export class Container extends React.Component<ContainerProps, {}> {
    render() {
        return (
            <div className={mapClasses(this.props.classMap)}>
                {this.props.children}
            </div>
        );
    }
}