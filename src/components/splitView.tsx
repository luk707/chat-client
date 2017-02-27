import * as React from "react";

export interface ViewProps {
    test: String;
}

export class TestView extends React.Component<ViewProps, {}> {
    render() {
        return (
            <div className="column">
                <h1>Test View</h1>
            </div>
        );
    }
}

export interface SplitViewProps <> {
    state: "master" | "detail" | "both";
    masterView: JSX.Element;
    detailView: JSX.Element;
}

export class SplitView extends React.Component<SplitViewProps, {}> {
    render() {
        return (
            <div className={["splitView"].join(" ")}>
                <div className={["splitViewContainer", "detail", "both"].filter(value => {
                            switch (value) {
                                case "detail":
                                    return this.props.state == "detail";
                                case "both":
                                    return this.props.state == "both";
                            }
                            return true;
                        }).join(" ")}>
                    <div className={["master"].join(" ")}>
                        {this.props.masterView}
                    </div>
                    <div className={["detail"].join(" ")}>
                        {this.props.detailView}
                    </div>
                </div>
            </div>
        );
    }
}