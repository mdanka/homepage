import * as React from "react";
import {Collapse} from "@blueprintjs/core";

export interface ICollapseBlockProps {
    title: string;
    isOpenInitially?: boolean;
    className?: string;
}

export interface ICollapseBlockState {
    isOpen: boolean;
}

export class CollapseBlock extends React.PureComponent<ICollapseBlockProps, ICollapseBlockState> {

    private IS_OPEN_INITIALLY_DEFAULT = false;

    public constructor(props) {
        super(props);
        // const isOpenInitially = _.defaultTo(props.isOpenInitially, this.IS_OPEN_INITIALLY_DEFAULT);
        const isOpenInitially = props.isOpenInitially == undefined ? this.IS_OPEN_INITIALLY_DEFAULT : props.isOpenInitially;
        this.state = {
            isOpen: isOpenInitially,
        }
    }

    private toggleCollapse = () => {
        const currentIsOpen = this.state.isOpen;
        const newIsOpen = !currentIsOpen;
        this.setState({
            isOpen: newIsOpen,
        });
    }

    private getCurrentToggleIcon = () => {
        return this.state.isOpen ? "pt-icon-chevron-up" : "pt-icon-chevron-down";
    }

    public render() {
        return (
            <div className={"hp-collapse-block pt-elevation-0 " + this.props.className}>
                <h5 className="hp-collapse-block-header" onClick={this.toggleCollapse}>
                    <span className={"hp-collapse-block-toggle pt-icon " + this.getCurrentToggleIcon()} />
                    {this.props.title}
                </h5>
                <Collapse isOpen={this.state.isOpen} className="hp-collapse-block-collapse">
                    {this.props.children}
                </Collapse>
            </div>
        );
    }
}
