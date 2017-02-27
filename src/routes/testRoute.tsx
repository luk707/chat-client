import * as React from "react";

import { Navbar } from "../components/navbar";
import { SplitView } from "../components/splitView";
import { Toolbar } from "../components/toolbar";

export interface TestDetail {
    title: String;
    content: String;
}

export interface TestRouteState {
    view: "master" | "detail" | "both";
    detail: TestDetail;
}

export class TestRoute extends React.Component<{}, TestRouteState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            view: "master",
            detail: null
        };
    }
    render() {
        return (
            <SplitView
                state={this.state.view}
                masterView={
                <div className={["column"].join(" ")}>
                    <Toolbar buttons={{
                        left: [],
                        right: []
                    }} title="Master"></Toolbar>
                    <div className={["padded"].join(" ")}>
                        <h1>Test View</h1>

                        <ul>
                            { ([
                                {
                                    title: "test 1",
                                    content: "This is the content for test 1."
                                },
                                {
                                    title: "test 2",
                                    content: "This is the content for test 2."
                                }
                            ] as TestDetail[]).map(detail => {
                                return (
                                    <li>
                                        <a onClick={() => {
                                            this.setState(currentState => {
                                                return {
                                                    ...currentState,
                                                    view: "detail",
                                                    detail: detail
                                                };
                                            });
                                        }} href="#">{detail.title}</a>
                                    </li>
                                );
                            }) }
                        </ul>
                    </div>
                </div>
            }
            detailView={
                <div className={["column"].join(" ")}>
                    <Toolbar buttons={{
                        left: [
                            {
                                faIcon: "chevron-left",
                                onClick: () => {
                                    this.setState(currentState => {
                                        return {
                                            ...currentState,
                                            view: "master"
                                        };
                                    });
                                }
                            }
                        ],
                        right: [
                            {
                                faIcon: "user"
                            }
                        ]
                    }} title="Detail"></Toolbar>
                    <div className={["padded"].join(" ")}>
                    {
                        this.state.detail ?
                        <div>
                            <h1>{this.state.detail.title}</h1>
                            <p>{this.state.detail.content}</p>
                        </div>:
                        <h2>Error</h2>
                    }
                    </div>              
                </div>
            }/>
        );
    }
}