import * as React from "react";

export interface IPropertyListProps {
    properties: IProperty[];
    title?: string;
    className?: string;
}

export interface IProperty {
    key: string;
    value: string;
}

export class PropertyList extends React.PureComponent<IPropertyListProps, {}> {

    private renderPropertyListItem = (property: IProperty) => {
        return (
            <div key={property.key} className="hp-property-list-item">
                <span className="hp-property-list-item-key">{property.key}:</span>
                <span className="hp-property-list-item-value">{property.value}</span>
            </div>
        )
    }

    public render() {
        return (
            <div className={"hp-property-list " + this.props.className}>
                <span className="hp-property-list-title">{this.props.title}</span>
                <div className="hp-property-list-item">
                    {this.props.properties.map(this.renderPropertyListItem)}
                </div>
            </div>
        );
    }
}
