import * as React from "react";
import { IContentTalk, TALKS } from "../content/talks";
import { ActivityInfo } from "./ActivityInfo";
import { CollapseBlock } from "./CollapseBlock";
import { Overview } from "./Overview";
import { Section } from "./Section";
import { Box } from "./Box";

const profileImage = require("../assets/mdanka-profile.png");

export class AppContainer extends React.PureComponent<{}, {}> {
    public render() {
        return (
            <div className="hp-app">
                <Overview />

                <Section>
                    <p className="bp3-running-text bp3-text-large">
                        <img src={profileImage} className="hp-image-inline hp-image-left" />
                        Miklós is a software engineer, product manager, hiring manager, teacher, and public speaker. He
                        enjoys making beautiful and easy-to-use software products, and making hard topics like
                        mathematics and technology fun and enjoyable for all audiences, let them be of any age,
                        background, or expertise.
                    </p>

                    <p className="bp3-running-text bp3-text-large">
                        If you'd like to invite Miklós to speak at an event, please reach out{" "}
                        <a href="mailto:danka.miklos+homepage[AT]gmail.com">here</a>.
                    </p>
                </Section>

                <Section title="Articles">
                    <p className="hp-center">
                        <Box
                            title="Humans and Computers: Symbiosis or War?"
                            description="Will computers really replace humans? Or is there a different future awaiting?"
                            language="hu"
                            metadata="2018"
                            image={require("../assets/article-qubit-human-computer-symbiosis.png")}
                            href="https://qubit.hu/2018/06/05/ember-es-gep-szimbiozis-vagy-haboru"
                        />
                        <Box
                            title="The Dark Side of Cryptocurrencies"
                            description="There's enormous hype, but little practical value. Is it wise to invest in Bitcoin?"
                            language="hu"
                            metadata="2018"
                            image={require("../assets/article-qubit-crypto.jpeg")}
                            href="https://qubit.hu/2018/02/13/a-kriptovalutak-arnyoldala-miert-ne-fektess-bitcoinba"
                        />
                        <Box
                            title="Choosing Universities - An Alternative Way"
                            description="Discussions around universities tend to be dominated by subject quality, while we undervalue elements like culture, mindset, and opportunities."
                            language="en"
                            metadata="2016"
                            image={require("../assets/article-ago-university.png")}
                            href="http://blog.miklosdanka.com/choosing-universities-an-alternative-way"
                        />
                        <Box
                            title="Egyetemválasztás - másként"
                            description="Az egyetemválasztáskor szinte mindig csak a tárgy minőségét vesszük figyelembe, alulértékelve a kultúrát, a gondolkodásmódot, és a lehetőségeket."
                            language="hu"
                            metadata="2016"
                            image={require("../assets/ago-logo.png")}
                            href="http://agondolkodasorome.hu/fb/danka-miklos-egyetemvalasztas-maskent/"
                        />
                        <Box
                            title="Hungarian Education & Olympiads"
                            description="The Hungarian government's false praises to students are hypocritical given their education policies. Opinion piece."
                            language="hu"
                            metadata="2014"
                            image={require("../assets/article-atlatszo-oktatas.png")}
                            href="https://atlatszooktatas.blog.hu/2014/01/28/_ide_aztan_mindenkinek_lesz_kedve_hazajonni_egy_tanar_a_diakolimpiai_dijkiosztorol"
                        />
                    </p>
                </Section>

                <Section title="Events">
                    <p className="hp-center">
                        <Box
                            title="Humans and Computers: Symbiosis or War?"
                            description="Conference lecture and panel discussion with other experts."
                            language="hu"
                            metadata="2018 - HTE"
                            image={require("../assets/event-hte-2018.png")}
                            href="http://www.hte.hu/web/infokom2018"
                        />
                        <Box
                            title="A Non-Technical Introduction to Bitcoin"
                            description="Conference lecture for Hungary's large business leaders."
                            language="hu"
                            metadata="2018 - OTP Bank"
                            image={require("../assets/event-otp-2018.jpg")}
                            href="http://otpkonferencia.hu"
                        />
                    </p>
                </Section>

                <Section title="Talks">
                    <p className="hp-center">
                        <Box
                            title="Humans and Computers: Symbiosis or War?"
                            description="Will computers really replace humans? Or is there a different future awaiting?"
                            metadata="2018 - HTE"
                            image={require("../assets/event-hte-2018.png")}
                        />
                        <Box
                            title="A Non-Technical Introduction to Bitcoin"
                            description="There's enormous hype, but little practical value. What are its advantages and dangers?"
                            language="hu"
                            metadata="2018"
                            image={require("../assets/event-otp-2018.jpg")}
                            href="https://youtube.com/watch?v=0OBds6_nGZA"
                        />
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
