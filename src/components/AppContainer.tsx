import * as React from "react";
import {CollapseBlock} from "./CollapseBlock";
import {Section} from "./Section";
import {Overview} from "./Overview";
import {ActivityInfo} from "./ActivityInfo";
import {IContentTalk, TALKS} from "../content/talks";

export interface IAppContainerProps {
}

export class AppContainer extends React.PureComponent<IAppContainerProps, {}> {

    public componentDidMount() {
    }

    private renderTalk(talk: IContentTalk) {
        return (
            <CollapseBlock
                key={talk.title}
                title={talk.title}
            >
                <ActivityInfo
                    properties={talk.properties}
                    events={talk.events}
                >
                    {talk.description}
                </ActivityInfo>
            </CollapseBlock>
        )
    }

    public render() {
        return (
            <div className="hp-app">
                <Overview />

                <Section
                    title="Talks"
                >
                    <p className="pt-running-text">
                        I give talks to all age groups on topics ranging from maths, technology and security to entrepreneurship and UX design. <a href="mailto:danka.miklos+homepage[AT]gmail.com">Contact me</a> if you're interested.
                    </p>
                    <div className="hp-app-talks-list">
                        {TALKS.map(this.renderTalk)}
                    </div>
                    {/*<p className="pt-running-text">Past events:*/}
                        {/*<ul>*/}
                            {/*<li>2017: Esoteric Programming Languages @ Tech Camp, Budapest</li>*/}
                            {/*<li>2016: Elon Musk - Conquering Mars @ MaMuT, Mátrafüred</li>*/}
                            {/*<li>2014: Cyberwars @ Dürer competition, Miskolc</li>*/}
                        {/*</ul>*/}
                    {/*</p>*/}
                </Section>

                <Section
                    title="Donations"
                >
                    <p className="pt-running-text">Donating part of your income is <a href="http://totempaal.tj/2017/01/30/giving-to-charity.html" target="_blank">something you should be proud of</a>.</p>
                    <p className="pt-running-text">I support the following charities and organisations:
                        <ul>
                            <li><a href="http://agondolkodasorome.hu" target="_blank">The Joy of Thinking Foundation</a> - talent education in Hungary</li>
                            <li>Supporting children with difficult background at <a href="http://www.tapolcsanyi.hu/" target="_blank">Tapolcsányi Utca Boarding School</a></li>
                            <li>University scholarship for people with difficult backgrounds</li>
                            <li><a href="http://www.ambertrust.org/" target="_blank">The Amber Trust</a> - providing musical education to blind or partially-sighted children</li>
                            <li><a href="https://atlatszo.hu/" target="_blank">Átlátszó</a> - investigative reporting in Hungary</li>
                            <li><a href="https://www.wikimedia.org/" target="_blank">Wikimedia</a></li>
                        </ul>
                    </p>
                </Section>

                    {/*<div className="">Big Numbers</div>*/}
                    {/*<div className="">Cyberwars</div>*/}
                    {/*<div className="">Elon Musk - Conquering Mars</div>*/}
                    {/*<div className="">Future of Tech discussion panel</div>*/}
                    {/*<div className="">Iskola: tech for a purpose</div>*/}
                    {/*<div className="">Palantir and startups</div>*/}

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
