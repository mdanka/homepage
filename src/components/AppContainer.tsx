import * as React from "react";
import { Overview } from "./Overview";
import { Section } from "./Section";
import { Box } from "./Box";

const profileImage = require("../assets/boxImages/mdanka-profile.png");

enum SectionTitles {
    ARTICLES = "Articles & Interviews",
    EVENTS = "Events",
    TALKS = "Talks",
    PROJECTS = "Projects",
    TEACHING = "Teaching",
    DONATIONS = "Donations",
}

export class AppContainer extends React.PureComponent<{}, {}> {
    public render() {
        return (
            <div className="hp-app">
                <Overview />

                <Section>
                    <p className="md-running-text">
                        <img src={profileImage} className="hp-image-inline hp-image-left" />
                        Miklós is a technologist, working in politics, business digitalisation, software engineering,
                        product management, hiring management, teaching, and public speaking. He
                        enjoys making friendly and easy-to-use software products, and making hard topics like
                        mathematics and technology fun and enjoyable for all audiences, let them be of any age,
                        background, or expertise.
                    </p>

                    <p className="md-running-text">
                        If you'd like to invite Miklós to speak at an event, please reach out{" "}
                        <a href="mailto:danka.miklos+homepage[AT]gmail.com">here</a>.
                    </p>

                    <p className="hp-table-of-contents md-center md-running-text md-full-width">
                        Jump to:
                        <br />
                        <span className="hp-table-of-contents-links">
                            <a href={`#${SectionTitles.ARTICLES}`}>{SectionTitles.ARTICLES}</a> ·{" "}
                            <a href={`#${SectionTitles.EVENTS}`}>{SectionTitles.EVENTS}</a> ·{" "}
                            <a href={`#${SectionTitles.TALKS}`}>{SectionTitles.TALKS}</a> ·{" "}
                            <a href={`#${SectionTitles.PROJECTS}`}>{SectionTitles.PROJECTS}</a> ·{" "}
                            <a href={`#${SectionTitles.TEACHING}`}>{SectionTitles.TEACHING}</a> ·{" "}
                            <a href={`#${SectionTitles.DONATIONS}`}>{SectionTitles.DONATIONS}</a>
                        </span>
                    </p>
                </Section>

                <Section title={SectionTitles.ARTICLES}>
                    <div className="md-center md-running-text">
                        <Box
                            title="On saving the first online primaries in Hungary"
                            description={`Title: "Péter Jakab can thank a gay guy for having primaries at all"`}
                            language="hu"
                            metadata="2021"
                            image={require("../assets/boxImages/news-444-2021.png")}
                            href="https://www.youtube.com/watch?v=kKsNqdgA3zY"
                            showPlayOverlay={true}
                        />
                        <Box
                            title="On DDoS attacks and system crashes"
                            description="Why do systems crash under (or without) DDoS attacks?"
                            language="hu"
                            metadata="2021"
                            image={require("../assets/boxImages/article-24hu-ddos.jpg")}
                            href="https://24.hu/tech/2021/09/30/online-elovalasztas-tamadas-tulterheles-forgalom-teszteles/"
                        />
                        <Box
                            title="Interview about the Hungarian primaries"
                            description={`"The system for the primaries is going to be more stable" - excerpt from Hungarian TV news`}
                            language="hu"
                            metadata="2021"
                            image={require("../assets/boxImages/news-rtl-2021.png")}
                            href="https://rtl.hu/rtlklub/hirek/a-szervezok-szerint-stabilabb-es-ellenallobb-rendszerrel-indul-ujra-az-ellenzeki-elovalasztas"
                            showPlayOverlay={true}
                        />
                        <Box
                            title="On human-centred AI"
                            description="Panel discussion with experts on questions and issues around human-centred AI"
                            language="hu"
                            metadata="2020"
                            image={require("../assets/boxImages/article-iask-ai.jpg")}
                            href="https://iask.hu/hu/beszeljunk-az-emberkozpontu-mesterseges-intelligenciarol/"
                            showPlayOverlay={true}
                        />
                        <Box
                            title="Inside the mysterious world of Palantir"
                            description="Interview about big data, Palantir, and human-computer cooperation"
                            language="hu"
                            metadata="2020"
                            image={require("../assets/boxImages/article-ivsz-digitalk.jpg")}
                            href="https://ivsz.hu/podcastok/beleneztunk-a-palantir-technologies-titokzatos-vilagaba/"
                            showPlayOverlay={true}
                        />
                        <Box
                            title="This Job, It's Fulfilling"
                            description="Portrait article in Forbes Hungary by Zsuzsanna Dömös"
                            language="en"
                            metadata="2019"
                            image={require("../assets/boxImages/article-forbes-portrait.png")}
                            href="https://blog.miklosdanka.com/this-work-its-fulfilling-forbes-portrait"
                        />
                        <Box
                            title="Ez a munka beteljesítő"
                            description="Portrait article in Forbes Hungary by Zsuzsanna Dömös"
                            language="hu"
                            metadata="2019"
                            image={require("../assets/boxImages/article-forbes-portrait.png")}
                            href="https://forbes.hu/a-jo-elet/semmi-panik-minden-kerdesedre-valaszolunk-a-hazai-ivovizzel-es-jovojevel-kapcsolatban"
                        />
                        <Box
                            title="On mathematical thinking, career, and life"
                            description="Q&A with students of The Joy of Thinking Foundation"
                            language="hu"
                            metadata="2020"
                            image={require("../assets/boxImages/article-forbes-portrait.png")}
                            href="https://soundcloud.com/a-gond-orome/beszelgetes-danka-miki"
                        />
                        <Box
                            title="Humans and Computers: Symbiosis or War?"
                            description="Will computers really replace humans? Or is there a different future awaiting?"
                            language="hu"
                            metadata="2018"
                            image={require("../assets/boxImages/article-qubit-human-computer-symbiosis.png")}
                            href="https://qubit.hu/2018/06/05/ember-es-gep-szimbiozis-vagy-haboru"
                        />
                        <Box
                            title="Is the Hungarian e-voting system secure?"
                            description="Why paper-based systems are still superior to e-voting."
                            language="hu"
                            metadata="2019"
                            image={require("../assets/boxImages/article-qubit-evoting.jpeg")}
                            href="https://qubit.hu/2019/06/19/mennyire-biztonsagos-a-fopolgarmesteri-elovalasztas-online-rendszere"
                        />
                        <Box
                            title="The Dark Side of Cryptocurrencies"
                            description="There's enormous hype, but little practical value. Is it wise to invest in Bitcoin?"
                            language="hu"
                            metadata="2018"
                            image={require("../assets/boxImages/article-qubit-crypto.jpeg")}
                            href="https://qubit.hu/2018/02/13/a-kriptovalutak-arnyoldala-miert-ne-fektess-bitcoinba"
                        />
                        <Box
                            title="What happened in the recent Facebook hack? - EN"
                            description="Do you have to change your password? Did two-factor authentication fail? Answering these and other questions."
                            language="en"
                            metadata="2018"
                            image={require("../assets/boxImages/article-qubit-facebook-hack-2.png")}
                            href="http://blog.miklosdanka.com/what-happened-when-our-facebook-accounts-got-hacked"
                        />
                        <Box
                            title="What happened in the recent Facebook hack? - HU"
                            description="Meg kell változtatni a jelszavunkat? Nem működött a kétlépcsős beléptetés? Megválaszoljuk ezeket a kérdéseket."
                            language="hu"
                            metadata="2018"
                            image={require("../assets/boxImages/article-qubit-facebook-hack.jpeg")}
                            href="https://qubit.hu/2018/10/29/mi-tortent-amikor-feltortek-a-facebook-fiokomat"
                        />
                        <Box
                            title="More than 723 million passwords leaked - HU"
                            description="Details of a recent leak, and some easy steps to protect ourselves."
                            language="hu"
                            metadata="2019"
                            image={require("../assets/boxImages/article-qubit-hack-2019.png")}
                            href="https://qubit.hu/2019/01/18/tobb-mint-773-millio-felhasznalo-emalcimet-es-jelszavat-tettek-ki-az-internetre"
                        />
                        <Box
                            title="Choosing Universities Differently - EN"
                            description="Discussions around universities tend to be dominated by subject quality, while we undervalue elements like culture, mindset, and opportunities."
                            language="en"
                            metadata="2016"
                            image={require("../assets/boxImages/article-ago-university.png")}
                            href="http://blog.miklosdanka.com/choosing-universities-an-alternative-way"
                        />
                        <Box
                            title="Choosing Universities Differently - HU"
                            description="Az egyetemválasztáskor szinte mindig csak a tárgy minőségét vesszük figyelembe, alulértékelve a kultúrát, a gondolkodásmódot, és a lehetőségeket."
                            language="hu"
                            metadata="2016"
                            image={require("../assets/boxImages/ago-logo.png")}
                            href="http://agondolkodasorome.hu/fb/danka-miklos-egyetemvalasztas-maskent/"
                        />
                        <Box
                            title="Exam Strategies and Principles"
                            description="Here are the strategies and principles that helped me become top-of-the-exam-papers three times in a row at Cambridge."
                            language="en"
                            metadata="2016"
                            image={require("../assets/boxImages/article-exam-principles.jpg")}
                            href="https://blog.miklosdanka.com/exam-strategies-and-principles"
                        />
                        <Box
                            title="Interview: Hungarian Education"
                            description="Live TV interview about the day-to-day effects of the Hungarian government's education policies. Interview."
                            language="hu"
                            metadata="2014"
                            image={require("../assets/boxImages/interview-egyenes-beszed-2014.png")}
                            href="https://youtube.com/watch?v=5KcSgeI2Lp0"
                        />
                        <Box
                            title="Hungarian Education & Olympiads"
                            description="The Hungarian government's false praises to students are hypocritical given their education policies. Opinion piece."
                            language="hu"
                            metadata="2014"
                            image={require("../assets/boxImages/article-atlatszo-oktatas.png")}
                            href="https://atlatszooktatas.blog.hu/2014/01/28/_ide_aztan_mindenkinek_lesz_kedve_hazajonni_egy_tanar_a_diakolimpiai_dijkiosztorol"
                        />
                    </div>
                </Section>

                <Section title={SectionTitles.EVENTS}>
                    <div className="md-center md-running-text">
                        <Box
                            title="Secrets of Data Systems"
                            description="Discussion with EU progressive parties on what makes data systems work."
                            language="en"
                            metadata="2021 - ALDE Conference"
                            image={require("../assets/boxImages/white-square.png")}
                        />
                        <Box
                            title="Are you listening, Alexa?"
                            description="Discussion with leading researchers and experts about security in connected devices."
                            language="en"
                            metadata="2019 - ITU Conference"
                            image={require("../assets/boxImages/event-itu-alexa-2019.png")}
                            href="https://telecomworld.itu.int/2019-daily-highlights-day-3/are-you-listening-alexa-security-in-connected-devices/"
                        />
                        <Box
                            title="Talents in Companies vs. in Education"
                            description="Discussion with Gábor Bojár (Graphisoft founder), Ádám Somlai-Fischer (Prezi founder), and Ágota Bíró (Emarsys HR Lead)."
                            language="hu"
                            metadata="2019 - A Gondolkodás Öröme Alapítvány"
                            image={require("../assets/boxImages/event-ago-tehetseg-2019.jpeg")}
                            href="https://youtu.be/4cGeHFt7WKY"
                        />
                        <Box
                            title="AI and Digitalization in Society"
                            description="What do terms like AI, ML, and singularity mean? What are its implications to society? Discussion with Dr György Csepeli."
                            language="hu"
                            metadata="2019 - Resonator Klub"
                            image={require("../assets/boxImages/event-resonator-2019.png")}
                            href="http://www.korossyszalon.hu/"
                        />
                        <Box
                            title="Cyberwars - Tricks, Cons, and Fraud"
                            description="Online safety, fraud, cons, tricks. Would you fall for them?"
                            language="hu"
                            metadata="2019 - Fazekas Fesztivál"
                            image={require("../assets/boxImages/event-fazekas-fesztival-2019.png")}
                            href="https://www.fazekas.hu/"
                        />
                        <Box
                            title="Algorithmic Thinking in Maths Classes"
                            description="Workshop for teachers on bringing algorithmic thinking to Maths classes."
                            language="hu"
                            metadata="2019 - Fazekas Mihály Gimnázium"
                            image={require("../assets/boxImages/event-fazekas-workshop-2019.jpg")}
                            href="https://www.fazekas.hu/"
                        />
                        <Box
                            title="Humans and Computers: Symbiosis or War?"
                            description="Conference lecture and panel discussion with other experts."
                            language="hu"
                            metadata="2018 - HTE"
                            image={require("../assets/boxImages/event-hte-2018.png")}
                            href="http://hte.hu/web/infokom2018"
                        />
                        <Box
                            title="Algorithmic Thinking in Maths Classes"
                            description="Conference lecture to teachers on bringing algorithmic thinking to Maths classes."
                            language="hu"
                            metadata="2018 - Rátz László Vándorgyűlés"
                            image={require("../assets/boxImages/event-ratz-2018.png")}
                            href="http://ratz.krudy.gyor.hu/index.php/programok/csutortok"
                        />
                        <Box
                            title="A Non-Technical Introduction to Bitcoin"
                            description="Conference lecture for Hungary's large business leaders."
                            language="hu"
                            metadata="2018 - OTP Bank"
                            image={require("../assets/boxImages/event-otp-2018.jpg")}
                            href="http://otpkonferencia.hu"
                        />
                        <Box
                            title="Building and Maintaining a Startup Culture"
                            description="Talk on lessons from Palantir's growth from a startup to a multi-thousand-person company."
                            language="en"
                            metadata="2016 - Technion, Haifa, Israel"
                            image={require("../assets/boxImages/event-technion-2016.png")}
                            href="https://technion.ac.il/en/technion-israel-institute-of-technology/"
                        />
                        <Box
                            title="Future of Technology"
                            description="Interview about the latest trends in technology, including big data and AI."
                            language="hu"
                            metadata="2015 - Nemzetközi Kör"
                            image={require("../assets/boxImages/event-nemzetkozi-kor-2015.jpg")}
                            href="https://facebook.com/nemzetkozikor/"
                        />
                    </div>

                    <p className="md-center md-running-text md-running-text md-small">
                        Further events: Palantir Technologies, London, UK (2014); Churchill College, Cambridge, UK
                        (2011); Pembroke College, Cambridge, UK (2013); MaMuT maths camp, Mátrafüred, Hungary
                        (2010-present); Veres Péter Gimnázium, Budapest, Hungary (High School) (2012); Dürer
                        Competition, Győr, Hungary (2014); Tech Camp, Budapest, Hungary (2016-present); Szent István
                        Gimnázium (High School), Budapest, Hungary (2014).
                    </p>
                </Section>

                <Section title={SectionTitles.TALKS}>
                    <p className="md-center md-running-text">
                        Miklós gives talks on a wide range of topics, including technological trends, big data, machine
                        learning, UX design and product principles, mathematics, tech hiring, and business strategy. His
                        talks are adapted to the audience, let them be youngsters, non-technical listeners, or technical
                        and business experts.
                    </p>

                    <div className="md-center md-running-text">
                        <Box
                            title="Humans and Computers: Symbiosis or War?"
                            description="Will computers really replace humans? Or is there a different future awaiting?"
                            metadata="2018"
                            image={require("../assets/boxImages/article-qubit-human-computer-symbiosis.png")}
                        />
                        <Box
                            title="A Non-Technical Introduction to Bitcoin"
                            description="There's enormous hype, but little practical value. What are its advantages and dangers?"
                            language="hu"
                            metadata="2018"
                            image={require("../assets/boxImages/talk-bitcoin-2018.jpg")}
                            href="https://youtube.com/watch?v=0OBds6_nGZA"
                        />
                        <Box
                            title="Cyberwars - Tricks, Cons, and Fraud"
                            description="The internet is the wildest of virtual battlefields, where criminals and computer
                            scientists are fighting at every moment. Online safety, fraud, cons, tricks. Would you fall for them?"
                            image={require("../assets/boxImages/talk-cyberwars.png")}
                        />
                        <Box
                            title="Are you really so rational?"
                            description="Behavioural Economics research has shown that the human brain is less rational than we like to believe nowadays. Would you fall for these cognitive illusions?"
                            image={require("../assets/boxImages/talk-cognitive-illusions.jpeg")}
                        />
                        <Box
                            title="How to Conquer Mars? (SpaceX)"
                            description="The whole of Earth is populated now by humans, but we didn't get far in space. What do we need in order to get to Mars - and then to conquer it?"
                            image={require("../assets/boxImages/talk-spacex.jpg")}
                        />
                        <Box
                            title="Are You Smarter Than a Computer? (ML)"
                            description="Artifical intelligence is not even close to humans at most tasks - but then why do we use a computer for an endless number of tasks? And most importantly: who's better at 20 Questions, you, or the computer?"
                            image={require("../assets/boxImages/talk-ml.png")}
                        />
                        <Box
                            title="Esoteric Programming Languages"
                            description="While most programming languages are useful but not exceptionally fun... esoteric programming languages are exactly the opposite! In this practical session we'll get an overview via puzzles and prizes."
                            image={require("../assets/boxImages/talk-esoteric.png")}
                        />
                        <Box
                            title="User Experience Workshop"
                            description="In this interactive workshop for beginners we go through visceral examples to build an intuition for what UX design means and how we can keep it as a first-order concern when building an application."
                            image={require("../assets/boxImages/talk-ux.jpg")}
                        />
                        <Box
                            title="Big Numbers"
                            description="What is a big number? How large a number can you think of? Using sophisticated ideas we can open up new ranges that are far beyond our imagination - or the capabilities of computers!"
                            image={require("../assets/boxImages/talk-big-numbers.jpg")}
                        />
                        <Box
                            title="Technology for a Purpose"
                            description="Tech is frequently used to useless ends, but it can serve a purpose too. In this talk we will see how tech can help the disabled to write, the blind to see, and protect our society from terrorism and crime."
                            image={require("../assets/boxImages/talk-tech-purpose.png")}
                        />
                        <Box
                            title="Studying at Cambridge, UK"
                            description="An overview of the British university system and the particularities and culture of Cambridge."
                            image={require("../assets/boxImages/talk-cambridge.jpg")}
                        />
                        <Box
                            title="Algorithmic Thinking in Maths Classes"
                            description="Algorithmic thinking is a mindset that's particularly well-suited for teaching in Maths classes. I present a few highly fun problem sets which we solve together in this workshop."
                            image={require("../assets/boxImages/talk-algorithm-teaching.png")}
                        />
                    </div>
                </Section>

                <Section title={SectionTitles.PROJECTS}>
                    <div className="md-center md-running-text">
                        <Box
                            title="Szózat"
                            description="A Hungarian version of Wordle."
                            language="hu"
                            metadata="2022"
                            image={require("../assets/boxImages/project-szozat.png")}
                            href="https://szozat.miklosdanka.com"
                        />
                        <Box
                            title="Czech Practice"
                            description="App for practising Czech declensions."
                            language="en"
                            metadata="2019"
                            image={require("../assets/boxImages/project-czech.png")}
                            href="https://czech.miklosdanka.com"
                        />
                        <Box
                            title="Momo Chords"
                            description="Library for parsing and naming chords."
                            language="en"
                            metadata="2018"
                            image={require("../assets/boxImages/project-momochords.png")}
                            href="https://momo-chords.miklosdanka.com"
                        />
                        <Box
                            title="Momo Tabs"
                            description="Beautiful and lightweight guitar tabs and chord sheets. Work in progress."
                            language="en"
                            metadata="2018"
                            image={require("../assets/boxImages/project-momotabs.png")}
                            href="https://momotabs.com"
                        />
                    </div>
                </Section>

                <Section title={SectionTitles.TEACHING}>
                    <div className="md-center md-running-text">
                        <Box
                            title="Charles University - Programming in R"
                            description="Lecturer for Statistical Programming for Psychologists in R, to support well-founded science."
                            language="en"
                            metadata="2019-present"
                            image={require("../assets/boxImages/teaching-charles-university.png")}
                            href="https://www.cuni.cz/UKEN-1.html"
                        />
                        <Box
                            title="Tech Camp"
                            description="Founder of a novel program to promote industrial programming with a purpose."
                            language="hu"
                            metadata="2016-present"
                            image={require("../assets/boxImages/project-techtabor.png")}
                            href="http://techtabor.agondolkodasorome.hu/"
                        />
                        <Box
                            title="Maths Camp"
                            description="Lead teacher at The Joy of Thinking Foundation, teaching Maths using Lajos Pósa's Discovery Mathematics method."
                            language="en"
                            metadata="2012-2018"
                            image={require("../assets/boxImages/ago-logo.png")}
                            href="http://agondolkodasorome.hu/en/"
                        />
                        <Box
                            title="Discovery Mathematics @ Cambridge"
                            description="Co-lecturer of a summer course, teaching Maths to non-mathematicians in a fun, interactive way."
                            language="en"
                            metadata="2011-2015"
                            image={require("../assets/boxImages/project-pkp.png")}
                            href="http://www.pem.cam.ac.uk/international-programmes/pembroke-kings-programme/academics/courses/maths-workshop-the-art-of-discovery/"
                        />
                        <Box
                            title="Lego Robotics @ Cambridge"
                            description="Co-lecturer of a summer course, teaching programming and engineering via Lego robots."
                            language="en"
                            metadata="2015-2016"
                            image={require("../assets/boxImages/project-pkp.png")}
                            href="http://www.pem.cam.ac.uk/international-programmes/pembroke-kings-programme/academics/courses/lego-robotics-workshop/"
                        />
                        <Box
                            title="Supervisor @ Cambridge"
                            description="Supervisor of multiple theoretical Computer Science subjects at Churchill College, including Algorithms, Quantum Computing, and Denotational Semantics."
                            language="en"
                            metadata="2012-2015"
                            image={require("../assets/boxImages/project-churchill.png")}
                            href="https://chu.cam.ac.uk/"
                        />
                    </div>
                </Section>

                <Section title={SectionTitles.DONATIONS}>
                    <p className="md-running-text">
                        Miklós donates part of his income to causes that personally matter to him. He supports the
                        following charities and organisations:
                    </p>
                    <div className="md-running-text">
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
                    </div>
                </Section>
            </div>
        );
    }
}
