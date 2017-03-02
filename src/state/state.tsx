export interface IAppState {
    people: IPersonState[];
    searchValue: ISearchOptionOrNull;
    userAuth: IUserAuth;
    testApiValue: string;
}

export enum ISearchOptionType {
    PERSON,
    GROUP,
    TAG,
}

export interface ISearchOption {
    type: ISearchOptionType;
    text: string;
    value: string;
}

export type ISearchOptionOrNull = ISearchOption | null;

export interface IPersonState {
    profilePictureUrl: string;
    fullName: string;
    animalName: string;
    headline: string;
    education: string[];
    groups: string[];
    tags: string[];
    contacts: IContactInfo[];
}

export enum IContactInfoType {
    EMAIL,
    FACEBOOK,
    WEBSITE,
    OTHER,
}

export interface IContactInfo {
    type: IContactInfoType;
    value: string;
}

export interface IUserAuth {
    isLoggedIn: boolean;
    id?: number;
    facebookId?: string;
}

// TODO(mdanka): remove default state
export const INITIAL_STATE: IAppState = {
    // searchValue: {
    //     type: ISearchOptionType.GROUP,
    //     text: 'Md',
    //     value: 'group:Md'
    // },
    testApiValue: 'not loaded',
    searchValue: null,
    userAuth: {
        isLoggedIn: false,
    },
    people: [
        {
            profilePictureUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t31.0-8/13029417_101230260288672_218844078172406252_o.jpg?oh=345f20d5e44f428ea76612304f961075&oe=58F01429',
            fullName: 'Danka Miklós',
            animalName: 'Bohóchal',
            headline: 'Szoftvermérnök @ Palantir Technologies',
            education: [
                'University of Cambridge, UK',
                'Fazekas Mihály Gimnázium, Budapest',
            ],
            groups: [
                'Md', 'Beluga', 'Almásderes', 'MaMuT 2010'
            ],
            tags: ['segítő', 'táborvezető', 'techtábor', 'MaMuT', 'Fazekas', 'Anglia', 'London', 'Palantir', 'Google', 'programozás', 'tech'],
            contacts: [
                {
                    type: IContactInfoType.EMAIL,
                    value: 'danka.miklos@gmail.com',
                },
                {
                    type: IContactInfoType.FACEBOOK,
                    value: 'miklos.andras.danka',
                },
            ],
        },
        {
            profilePictureUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/264671_2199766274872_7662909_n.jpg?oh=ae819131626939cac8125cbf650d8d6d&oe=58F4FF6F',
            fullName: 'Szűcs Gábor',
            animalName: 'Bagoly',
            headline: 'A Gondolkodás Öröme Alapítvány',
            education: [
                'Education 1',
                'Education 2',
            ],
            groups: [
                'Group 1', 'Group 2', 'Group 3', 'Group 4'
            ],
            tags: ['segítő', 'táborvezető', 'techtábor', 'MaMuT', 'programozás', 'tech'],
            contacts: [
                {
                    type: IContactInfoType.EMAIL,
                    value: 'danka.miklos@gmail.com',
                },
                {
                    type: IContactInfoType.FACEBOOK,
                    value: 'miklos.andras.danka',
                },
            ],
        },
        {
            profilePictureUrl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/39171_145432725486389_7036430_n.jpg?oh=4e35ec818aefc44d0984fd422b74235c&oe=58E509F7',
            fullName: 'Juhász Péter',
            animalName: 'Víziló',
            headline: 'A Gondolkodás Öröme Alapítvány',
            education: [
                'Education 1',
                'Education 2',
            ],
            groups: [
                'Group 1', 'Group 2', 'Group 3', 'Group 4'
            ],
            tags: ['segítő', 'táborvezető', 'MaMuT', 'Berzsenyi'],
            contacts: [
                {
                    type: IContactInfoType.EMAIL,
                    value: 'danka.miklos@gmail.com',
                },
                {
                    type: IContactInfoType.FACEBOOK,
                    value: 'miklos.andras.danka',
                },
            ],
        },
    ]
};
