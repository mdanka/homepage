import * as React from "react";
import {connect} from "react-redux";
import {IAppState} from "../state/state";
import {Dispatch} from "redux";
import {Collapse} from "@blueprintjs/core";
import Select = require("react-select");
import queryString = require('query-string');


export interface IDispatchCallbacks {
}

export interface IAppContainerBaseProps {
}

export interface IAppContainerProps extends IAppContainerBaseProps, IDispatchCallbacks {
}

export class AppContainer extends React.PureComponent<IAppContainerProps, {}> {

    public componentDidMount() {
    }

    public render() {
        return (
            <div className="homepage-app">
                <div className="section section-overview">
                    <h1 className="overview-name">Miklós Danka</h1>
                    <div className="overview-phonetics">Miklós András Danka - [miklɔːʃ ɒndrɑːʃ dɒnkɒ]</div>
                    <div className="overview-links">
                        <a href="http://blog.miklosdanka.com" target="_blank">Blog</a>
                        <a href="https://github.com/mdanka/" target="_blank">Github</a>
                        <a href="https://twitter.com/miklosdanka" target="_blank">Twitter</a>
                        <a href="https://www.facebook.com/miklos.andras.danka" target="_blank">Facebook</a>
                    </div>
                </div>
                <div className="section section-talks">
                    <h3 className="section-header">Talks</h3>
                    <div className="section-description">
                        I give talks to all age groups on topics ranging from maths, technology and security to entrepreneurship and UX design. <a href="mailto:danka.miklos+homepage[AT]gmail.com">Contact me</a> if you're interested.
                    </div>
                    <div className="item pt-elevation-0">
                        <h5 className="item-header">
                            <span className="item-open-toggle pt-icon pt-icon-chevron-down" />
                            Esoteric Programming Languages - How to cook an undigestable program with lots of LOLZ?
                        </h5>
                        <Collapse isOpen={true}>
                            <div className="item-body">
                                <div className="item-properties">
                                    <div className="item-property"><span className="item-property-name">Ages:</span> 16+</div>
                                    <div className="item-property"><span className="item-property-name">Topics:</span> technology</div>
                                    <div className="item-property"><span className="item-property-name">Prerequisites:</span> some basic programming knowledge</div>
                                </div>
                                <div className="item-description">
                                    <p>While most programming languages are useful but not particularly fun... esoteric programming languages are exactly the opposite!</p>
                                    <p>In this session we look at some esoteric programming languages and solve some related puzzles. Get ready to win some prizes!</p>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    {/*<div className="">Big Numbers</div>*/}
                    {/*<div className="">Cyberwars</div>*/}
                    {/*<div className="">Elon Musk - Conquering Mars</div>*/}
                    {/*<div className="">Future of Tech discussion panel</div>*/}
                    {/*<div className="">Iskola: tech for a purpose</div>*/}
                </div>
                {/*<div className="section section-projects">*/}
                    {/*<h3 className="section-header">Projects</h3>*/}
                    {/*<div className="">Preference Matrix</div>*/}
                {/*</div>*/}
                {/*<div className="section section-teaching">*/}
                    {/*<div className="">Tech Camp</div>*/}
                    {/*<div className="">Maths Camp</div>*/}
                {/*</div>*/}
                {/*<div className="section section-writings">*/}
                    {/*<div className="">Diákolimpikonok videó és cikk</div>*/}
                    {/*<div className="">Egyetemválasztás</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}



export function mapStateToProps(state: IAppState): IAppContainerBaseProps {
    return {
    };
}

export function mapDispatchToProps(dispatch: Dispatch<IAppState>): IDispatchCallbacks {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);