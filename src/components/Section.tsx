import * as React from "react";
import Select = require("react-select");
import queryString = require('query-string');

export interface ISectionProps {
    title: string;
    description?: string | React.ReactElement;
    className?: string;
}

export class Section extends React.PureComponent<ISectionProps, {}> {

    public render() {
        const descriptionElement = this.props.description == undefined ? null : (
            <div className="hp-section-description">
                {this.props.description}
            </div>
        );
        return (
            <div className={"hp-section " + this.props.className}>
                <h4 className="hp-section-header">{this.props.title}</h4>
                {descriptionElement}
                {this.props.children}
            </div>
        );
    }
}
