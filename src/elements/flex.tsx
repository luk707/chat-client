import * as React from "react";

import mapClasses, { ClassMap } from "./classMap";

export class Flex extends React.Component<{}, {}> {
    render() {
        return (
            <div className={mapClasses({
                flex: true
            })}/>
        );
    }
}