import * as React from "react";

export interface ISectionProps {
    title: string;
    description?: string | JSX.Element;
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
                <h3 className="hp-section-header">{this.props.title}</h3>
                {descriptionElement}
                {this.props.children}
            </div>
        );
    }
}
