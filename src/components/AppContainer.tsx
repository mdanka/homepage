import * as React from "react";
import {Collapse} from "@blueprintjs/core";
import Select = require("react-select");
import queryString = require('query-string');
import {CollapseBlock} from "./CollapseBlock";
import {IProperty, PropertyList} from "./PropertyList";
import {Section} from "./Section";
import {Overview} from "./Overview";

export interface IAppContainerProps {
}

export class AppContainer extends React.PureComponent<IAppContainerProps, {}> {

    public componentDidMount() {
    }

    public render() {
        const properties: IProperty[] = [
            {
                key: "Ages",
                value: "16+"
            },
            {
                key: "Topics",
                value: "technology"
            },
            {
                key: "Prerequisites",
                value: "some basic programming knowledge"
            },
        ];
        return (
            <div className="hp-app">
                <Overview />

                <Section
                    title="Talks"
                >
                    <p>
                        I give talks to all age groups on topics ranging from maths, technology and security to entrepreneurship and UX design. <a href="mailto:danka.miklos+homepage[AT]gmail.com">Contact me</a> if you're interested.
                    </p>
                    <CollapseBlock
                        title="Esoteric Programming Languages - How to cook an undigestable program with lots of LOLZ?"
                    >
                        <div className="item-body">
                            <PropertyList
                                properties={properties}
                            />
                            <div className="item-description">
                                <p>While most programming languages are useful but not exceptionally fun... esoteric programming languages are exactly the opposite!</p>
                                <p>In this session we look at some esoteric programming languages and solve some related puzzles. Get ready to win some prizes!</p>
                            </div>
                        </div>
                    </CollapseBlock>
                    <CollapseBlock
                        title="Blah"
                    >
                        <div className="item-body">
                            <div className="item-description">
                                <p>asd</p>
                            </div>
                        </div>
                    </CollapseBlock>
                    <p>Past events:</p>
                    <ul>
                        <li>2017: Esoteric Programming Languages @ Tech Camp, Budapest</li>
                        <li>2016: Elon Musk - Conquering Mars @ MaMuT, Mátrafüred</li>
                        <li>2014: Cyberwars @ Dürer competition, Miskolc</li>
                    </ul>
                </Section>

                <Section
                    title="Donations"
                >
                    <p>Donating part of your income is <a href="http://totempaal.tj/2017/01/30/giving-to-charity.html" target="_blank">something you should be proud of</a>.</p>
                    <p>I support the following charities and organisations:</p>
                    <ul>
                        <li><a href="http://agondolkodasorome.hu" target="_blank">The Joy of Thinking Foundation</a> - talent education in Hungary</li>
                        <li>Supporting children with difficult background at <a href="http://www.tapolcsanyi.hu/" target="_blank">Tapolcsányi Utca Boarding School</a></li>
                        <li>University scholarship for people with difficult backgrounds</li>
                        <li><a href="http://www.ambertrust.org/" target="_blank">The Amber Trust</a> - providing musical education to blind or partially-sighted children</li>
                        <li><a href="https://atlatszo.hu/" target="_blank">Átlátszó</a> - investigative reporting in Hungary</li>
                        <li><a href="https://www.wikimedia.org/" target="_blank">Wikimedia</a></li>
                    </ul>
                </Section>

                    {/*<div className="">Big Numbers</div>*/}
                    {/*<div className="">Cyberwars</div>*/}
                    {/*<div className="">Elon Musk - Conquering Mars</div>*/}
                    {/*<div className="">Future of Tech discussion panel</div>*/}
                    {/*<div className="">Iskola: tech for a purpose</div>*/}

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
