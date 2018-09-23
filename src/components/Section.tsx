import * as classNames from "classnames";
import * as React from "react";
import { H3 } from "@blueprintjs/core";

export interface ISectionProps {
    title?: string;
    description?: string | JSX.Element;
    className?: string;
}

export class Section extends React.PureComponent<ISectionProps, {}> {
    public render() {
        const { title, description, className, children } = this.props;
        const descriptionElement = description && <div className="hp-section-description">{description}</div>;
        return (
            <div className={classNames("hp-section", className)}>
                {title && (
                    <H3 id={`${title}`} className="hp-section-header">
                        {title}
                    </H3>
                )}
                {descriptionElement}
                {children}
            </div>
        );
    }
}
