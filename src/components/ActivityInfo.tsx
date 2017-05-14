import * as React from "react";
import { IProperty, PropertyList } from "./PropertyList";

export interface IActivityInfoProps {
    properties: IProperty[];
    events: IProperty[];
    className?: string;
}

export class ActivityInfo extends React.PureComponent<IActivityInfoProps, {}> {
    public render() {
        return (
            <div className={"hp-activity-info-body " + this.props.className}>
                <PropertyList
                    properties={this.props.properties}
                />
                <div className="hp-activity-info-description">
                    {this.props.children}
                </div>
                <PropertyList
                    title="Past events:"
                    properties={this.props.events}
                />
            </div>
        );
    }
}
