import * as React from "react";
import { IContentTalk, TALKS } from "../content/talks";
import { ActivityInfo } from "./ActivityInfo";
import { CollapseBlock } from "./CollapseBlock";
import { Overview } from "./Overview";
import { Section } from "./Section";

export class AppContainer extends React.PureComponent<{}, {}> {
    public render() {
        return (
            <div className="hp-app">
                <Overview />

                <Section>
                    <p className="bp3-running-text bp3-text-large">
                        Miklós is a product manager, software engineer, hiring manager, teacher, and public speaker. He
                        enjoys making beautiful and easy-to-use software products, and taking hard topics like
                        mathematics and technology and making them fun and enjoyable for all audiences, let them be
                        young, non-technical, or anything else.
                    </p>

                    <p className="bp3-running-text bp3-text-large">
                        If you'd like to invite Miklós to speak at an event, please reach out{" "}
                        <a href="mailto:danka.miklos+homepage[AT]gmail.com">here</a>.
                    </p>
                </Section>

                <Section title="Talks">
                    <p className="bp3-running-text bp3-text-large">
                        I give talks to all age groups on topics ranging from maths, technology and security to
                        entrepreneurship and UX design.{" "}
                        <a href="mailto:danka.miklos+homepage[AT]gmail.com">Contact me</a> if you're interested.
                    </p>
                    <div className="hp-app-talks-list">{TALKS.map(this.renderTalk)}</div>
                    {/*<p className="bp3-running-text bp3-text-large">Past events:*/}
                    {/*<ul>*/}
                    {/*<li>2017: Esoteric Programming Languages @ Tech Camp, Budapest</li>*/}
                    {/*<li>2016: Elon Musk - Conquering Mars @ MaMuT, Mátrafüred</li>*/}
                    {/*<li>2014: Cyberwars @ Dürer competition, Miskolc</li>*/}
                    {/*</ul>*/}
                    {/*</p>*/}
                </Section>

                <Section title="Donations">
                    <p className="bp3-running-text bp3-text-large">
                        Donating part of your income is{" "}
                        <a href="http://totempaal.tj/2017/01/30/giving-to-charity.html" target="_blank">
                            something you should be proud of
                        </a>
                        .
                    </p>
                    <p className="bp3-running-text bp3-text-large">
                        I support the following charities and organisations:
                        <ul>
                            <li>
                                <a href="http://agondolkodasorome.hu" target="_blank">
                                    The Joy of Thinking Foundation
                                </a>{" "}
                                - talent education in Hungary
                            </li>
                            <li>
                                Supporting children with difficult background at{" "}
                                <a href="http://www.tapolcsanyi.hu/" target="_blank">
                                    Tapolcsányi Utca Boarding School
                                </a>
                            </li>
                            <li>University scholarship for people with difficult backgrounds</li>
                            <li>
                                <a href="https://momentummozgalom.hu/" target="_blank">
                                    Momentum Mozgalom
                                </a>{" "}
                                - a new Hungarian party, bringing a European mentality to Hungary
                            </li>
                            <li>
                                <a href="https://444.hu/" target="_blank">
                                    444
                                </a>{" "}
                                - Hungarian independent online newspaper
                            </li>
                            <li>
                                <a href="https://atlatszo.hu/" target="_blank">
                                    Átlátszó
                                </a>{" "}
                                - investigative reporting in Hungary
                            </li>
                            <li>
                                <a href="https://www.wikimedia.org/" target="_blank">
                                    Wikimedia
                                </a>
                            </li>
                            <li>
                                <a href="http://www.ambertrust.org/" target="_blank">
                                    The Amber Trust
                                </a>{" "}
                                - providing musical education to blind or partially-sighted children
                            </li>
                            <li>
                                <a href="http://www.oxfam.org.uk/" target="_blank">
                                    Oxfam
                                </a>{" "}
                                - charity shop
                            </li>
                        </ul>
                    </p>
                </Section>

                {/*<div className="">Future of Tech discussion panel</div>*/}
                {/*<div className="">Iskola: tech for a purpose</div>*/}
                {/*<div className="">Palantir and startups</div>*/}
                {/*<div className="">UX workshop for beginners</div>*/}

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
                {/*<div className="">Hiring</div>*/}
                {/*<div className="">Egyetemválasztás - a gondolkodás öröme</div>*/}
                {/*</div>*/}
            </div>
        );
    }

    private renderTalk(talk: IContentTalk) {
        return (
            <CollapseBlock key={talk.title} title={talk.title}>
                <ActivityInfo properties={talk.properties} events={talk.events}>
                    {talk.description}
                </ActivityInfo>
            </CollapseBlock>
        );
    }
}
