import * as React from "react";
import { IProperty } from "../components/PropertyList";

export interface IContentTalk {
    title: string;
    properties: IProperty[];
    events: IProperty[];
    description: JSX.Element;
}

export const TALKS: IContentTalk[] = [
    {
        description: (
            <div>
                <p className="bp3-running-text bp3-text-large">
                    If you think that the internet is alike to a beautiful garden with cute bunnies and kittens, I have
                    to disappoint you: it is the wildest of virtual battlefields, where criminals and computer
                    scientists are fighting in every moment using the latest tech and the most cunning psychological
                    tricks.
                </p>
                <p className="bp3-running-text bp3-text-large">
                    Online safety, fraud, cons, tricks. Would you fall for them?
                </p>
            </div>
        ),
        events: [
            {
                key: "2015",
                value: "MaMuT - Mátrafüred, Hungary",
            },
            {
                key: "2014",
                value: "Dürer Competition - Mátrafüred, Hungary",
            },
            {
                key: "2012",
                value: "Veres Péter Gimnázium (High School) - Budapest, Hungary",
            },
            {
                key: "2012",
                value: "MaMuT - Mátrafüred, Hungary",
            },
        ],
        properties: [
            {
                key: "Ages",
                value: "10+",
            },
            {
                key: "Topics",
                value: "technology, online safety",
            },
            {
                key: "Prerequisites",
                value: "-",
            },
        ],
        title: "Cyberwars - tricks, cons, and fraud",
    },
    {
        description: (
            <div>
                <p className="bp3-running-text bp3-text-large">
                    The whole of Earth is populated now by humans - however, in space, we still didn't get further than
                    the Moon. But our species is at risk on the long run... we would be safer if spread across multiple
                    planets. What do we need in order to get to Mars - and then to conquer it?
                </p>
                <p className="bp3-running-text bp3-text-large">
                    Elon Musk, aka the "real-life Iron Man", is working exactly on this. But what is his strategy? And
                    where does the colonisation of Mars currently stand? We will seek answers to these questions and
                    others in this talk.
                </p>
            </div>
        ),
        events: [
            {
                key: "2016",
                value: "MaMuT - Mátrafüred, Hungary",
            },
        ],
        properties: [
            {
                key: "Ages",
                value: "10+",
            },
            {
                key: "Topics",
                value: "technology, entrepreneurship",
            },
            {
                key: "Prerequisites",
                value: "-",
            },
        ],
        title: "How to conquer Mars? A Beginner's Guide. (Elon Musk - SpaceX and Conquering Mars)",
    },
    {
        description: (
            <div>
                <p className="bp3-running-text bp3-text-large">
                    Artifical intelligence is not even close to humans at the time of writing - but then why do we use a
                    computer for a seemingly endless number of tasks? Presumably you can tell a dog from a cat - but is
                    a computer also capable of the same? How can Google, Siri, or Alexa understand what we say? And
                    finally the most important, crucial question: who's better at 20 Questions, you, or the computer?
                </p>
            </div>
        ),
        events: [
            {
                key: "2014",
                value: "MaMuT - Mátrafüred, Hungary",
            },
            {
                key: "2010",
                value: "MaMuT - Mátrafüred, Hungary",
            },
        ],
        properties: [
            {
                key: "Ages",
                value: "10+",
            },
            {
                key: "Topics",
                value: "technology",
            },
            {
                key: "Prerequisites",
                value: "-",
            },
        ],
        title: "Are you smarter than a computer? (Machine Learning)",
    },
    {
        description: (
            <div>
                <p className="bp3-running-text bp3-text-large">
                    While most programming languages are useful but not exceptionally fun... esoteric programming
                    languages are exactly the opposite!
                </p>
                <p className="bp3-running-text bp3-text-large">
                    In this session we look at some esoteric programming languages and solve some related puzzles. Get
                    ready to win some prizes!
                </p>
            </div>
        ),
        events: [
            {
                key: "2017",
                value: "Tech Camp - Budapest, Hungary",
            },
            {
                key: "2014",
                value: "Palantir - London, UK",
            },
            {
                key: "2011",
                value: "Churchill College, University of Cambridge - Cambridge, UK",
            },
        ],
        properties: [
            {
                key: "Ages",
                value: "14+",
            },
            {
                key: "Topics",
                value: "technology",
            },
            {
                key: "Prerequisites",
                value: "some basic programming knowledge",
            },
        ],
        title: "How to cook an undigestable program with lots of LOLZ? (Esoteric Programming Languages)",
    },
    {
        description: (
            <div>
                <p className="bp3-running-text bp3-text-large">
                    Many people believe that application design only concerns the aesthetics. While visual design is
                    certainly important, a core part of developing a new application is the so called interaction
                    design. How does the user think? What are they trying to achieve? What is the most intuitive
                    experience for them?
                </p>
                <p className="bp3-running-text bp3-text-large">
                    In this interactive workshop we will go through visceral examples to build an intuition for what UX
                    design means and how we can keep it as a first-order concern when building an application.
                </p>
            </div>
        ),
        events: [
            {
                key: "2017",
                value: "Tech Camp - Budapest, Hungary",
            },
        ],
        properties: [
            {
                key: "Ages",
                value: "14+",
            },
            {
                key: "Topics",
                value: "technology, design",
            },
            {
                key: "Prerequisites",
                value: "-",
            },
        ],
        title: "User Experience workshop for beginners",
    },
    {
        description: (
            <div>
                <p className="bp3-running-text bp3-text-large">
                    What is a big number? How large a number can you think of? Our view on the magnitude of numbers is
                    quite limited - our imagination is constrained by the origins of numbers, back from the early ages
                    of humankind. Still, using mathematics and sophisticated ideas we can open up new ranges that are
                    far beyond our imagination. But it's not just humans who are limited: computers struggle with large
                    numbers as well...
                </p>
            </div>
        ),
        events: [
            {
                key: "2013",
                value: "Pembroke College, University of Cambridge - Cambridge, UK",
            },
            {
                key: "2010",
                value: "Churchill College, University of Cambridge - Cambridge, UK",
            },
        ],
        properties: [
            {
                key: "Ages",
                value: "14+",
            },
            {
                key: "Topics",
                value: "mathematics",
            },
            {
                key: "Prerequisites",
                value: "some basic mathematical foundation",
            },
        ],
        title: "Big Numbers",
    },
    {
        description: (
            <div>
                <p className="bp3-running-text bp3-text-large">
                    Technology is everywhere in our lives - sometimes to a ridiculous extent, with useless gadgets and
                    "solutions" which actually make our lives more difficult. However, when given enough thought,
                    technology serves a purpose. In this talk we will see how technology can help the disabled to write,
                    the blind to see, and protect our society from terrorism and crime.
                </p>
            </div>
        ),
        events: [
            {
                key: "2014",
                value: "Szent István Gimnázium (High School) - Budapest, Hungary",
            },
        ],
        properties: [
            {
                key: "Ages",
                value: "10+",
            },
            {
                key: "Topics",
                value: "technology",
            },
            {
                key: "Prerequisites",
                value: "-",
            },
        ],
        title: "Studying at Cambridge, UK",
    },
    {
        description: (
            <div>
                <p className="bp3-running-text bp3-text-large">
                    Technology is everywhere in our lives - sometimes to a ridiculous extent, with useless gadgets and
                    "solutions" which actually make our lives more difficult. However, when given enough thought,
                    technology serves a purpose. In this talk we will see how technology can help the disabled to write,
                    the blind to see, and protect our society from terrorism and crime.
                </p>
            </div>
        ),
        events: [
            {
                key: "2014",
                value: "Szent István Gimnázium (High School) - Budapest, Hungary",
            },
        ],
        properties: [
            {
                key: "Ages",
                value: "10+",
            },
            {
                key: "Topics",
                value: "technology",
            },
            {
                key: "Prerequisites",
                value: "-",
            },
        ],
        title: "Technology for a purpose",
    },
];

/*
                Future of Tech discussion panel
                Cambridge
                Palantir and startups
*/
