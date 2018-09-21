import { Collapse, H5 } from "@blueprintjs/core";
import * as classNames from "classnames";
import * as React from "react";

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

    public constructor(props: ICollapseBlockProps) {
        super(props);
        const isOpenInitially = props.isOpenInitially == null
            ? this.IS_OPEN_INITIALLY_DEFAULT
            : props.isOpenInitially;
        this.state = {
            isOpen: isOpenInitially,
        };
    }

    public render() {
        const iconClasses = classNames(
            "hp-collapse-block-toggle",
            "bp3-icon-standard",
            {
                "bp3-icon-chevron-down": !this.state.isOpen,
                "bp3-icon-chevron-up": this.state.isOpen,
            },
        );
        return (
            <div className={classNames("hp-collapse-block", "pt-elevation-0", this.props.className)}>
                <H5 className="hp-collapse-block-header" onClick={this.toggleCollapse}>
                    <span className={iconClasses} />
                    {this.props.title}
                </H5>
                <Collapse isOpen={this.state.isOpen} className="hp-collapse-block-collapse">
                    {this.props.children}
                </Collapse>
            </div>
        );
    }

    private toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
}
