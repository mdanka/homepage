import * as classNames from "classnames";
import * as React from "react";

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
                    <h3 id={`${title}`} className="hp-section-header">
                        <span className="hp-section-header-title-line" />
                        <span className="hp-section-header-title-text">{title}</span>
                        <span className="hp-section-header-title-line" />
                    </h3>
                )}
                {descriptionElement}
                {children}
            </div>
        );
    }
}
