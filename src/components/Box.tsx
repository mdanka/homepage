import * as React from "react";
import * as classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export interface IBoxProps {
    title: string;
    href?: string;
    description?: string;
    language?: "hu" | "en";
    image?: any;
    metadata?: string;
}

export interface IBoxState {}

export class Box extends React.PureComponent<IBoxProps, IBoxState> {
    public render() {
        const { title, href, description, language } = this.props;
        const boxContentElement = (
            <div key="box-content" className="hp-box-content-container">
                {this.renderImage()}
                {this.renderVideoOverlay()}
                <div className="hp-box-content">
                    {this.renderMetadata()}
                    <div className="hp-box-title">{title}</div>
                    {description && <div className="hp-box-description">{description}</div>}
                </div>
            </div>
        );
        const flagElement = language && <div key="flag" className={`hp-box-language hp-box-language-${language}`} />;
        const boxElements = [flagElement, boxContentElement];
        const boxContentWithLinkElements =
            href === undefined ? (
                boxElements
            ) : (
                <a className="hp-box-anchor" href={href} target="_blank">
                    {boxElements}
                </a>
            );
        const boxClassNames = classNames("hp-box", {
            "hp-box-interactive": href !== undefined,
        });
        return <div className={boxClassNames}>{boxContentWithLinkElements}</div>;
    }

    private renderMetadata = () => {
        const { href, metadata } = this.props;
        const domain = this.getDomain(href);
        return domain === undefined && metadata === undefined ? (
            undefined
        ) : (
            <div className="hp-box-metadata">
                {metadata} {metadata && domain && " - "}
                {domain && <span className="hp-anchor">{domain}</span>}
            </div>
        );
    };

    private renderImage = () => {
        const { image } = this.props;
        const imageStyle = image === undefined ? {} : { backgroundImage: `url(${image})` };
        return <div className="hp-box-image-container" style={imageStyle} />;
    };

    private renderVideoOverlay = () => {
        const { href } = this.props;
        if (href === undefined || (href.indexOf("youtube.com") === -1 && href.indexOf("youtu.be") === -1)) {
            return null;
        }
        return (
            <div className="hp-box-video-overlay">
                <FontAwesomeIcon className="hp-box-video-overlay-icon" icon={faPlay} />
            </div>
        );
    };

    private getDomain = (href: string | undefined) => {
        if (href === undefined) {
            return undefined;
        }
        return extractHostname(href);
    };
}

function extractHostname(url: string) {
    var hostname: string;

    // find & remove protocol (http, ftp, etc.) and get hostname
    if (url.indexOf("//") > -1) {
        hostname = url.split("/")[2];
    } else {
        hostname = url.split("/")[0];
    }

    //find & remove port number
    hostname = hostname.split(":")[0];
    //find & remove "?"
    hostname = hostname.split("?")[0];

    return hostname;
}

// // To address those who want the "root domain," use this function:
// function extractRootDomain(url: string) {
//     var domain = extractHostname(url),
//         splitArr = domain.split("."),
//         arrLen = splitArr.length;

//     // extracting the root domain here
//     // if there is a subdomain
//     if (arrLen > 2) {
//         domain = splitArr[arrLen - 2] + "." + splitArr[arrLen - 1];
//         //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
//         if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
//             //this is using a ccTLD
//             domain = splitArr[arrLen - 3] + "." + domain;
//         }
//     }
//     return domain;
// }
