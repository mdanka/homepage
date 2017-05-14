import * as React from "react";
import {IProperty} from "../components/PropertyList";

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
                <p className="pt-running-text">
                    The whole of Earth is populated now by humans - however, in space, we still didn't get
                    further than the Moon. But our species is at risk on the long run... we would be
                    safer if spread across multiple planets. What do we need in order to get to Mars -
                    and then to conquer it?
                </p>
                <p className="pt-running-text">
                    Elon Musk, aka the "real-life Iron Man", is working exactly on this.
                    But what is his strategy? And where does the colonisation of Mars currently stand?
                    We will seek answers to these questions and others in this talk.
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
                <p className="pt-running-text">
                    While most programming languages are useful but not exceptionally fun...
                    esoteric programming languages are exactly the opposite!
                </p>
                <p className="pt-running-text">
                    In this session we look at some esoteric programming languages and solve some related puzzles.
                    Get ready to win some prizes!
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
];
