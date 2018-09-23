import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faRss } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export class Overview extends React.PureComponent<{}, {}> {
    public render() {
        return (
            <div className="hp-overview-section">
                <h1 className="hp-overview-name">Miklós Danka</h1>
                <div className="hp-overview-phonetics">Miklós András Danka - [miklɔːʃ ɒndrɑːʃ dɒnkɒ]</div>
                <div className="hp-overview-links">
                    <a href="http://blog.miklosdanka.com" target="_blank">
                        <FontAwesomeIcon className="hp-overview-icon" icon={faRss} />
                        Blog
                    </a>
                    <a href="https://www.linkedin.com/in/mikl%C3%B3s-andr%C3%A1s-danka-19415147/" target="_blank">
                        <FontAwesomeIcon className="hp-overview-icon" icon={faLinkedin} />
                        LinkedIn
                    </a>
                    <a href="https://github.com/mdanka/" target="_blank">
                        <FontAwesomeIcon className="hp-overview-icon" icon={faGithub} />
                        Github
                    </a>
                    <a href="mailto:danka.miklos+homepage[AT]gmail.com">
                        <FontAwesomeIcon className="hp-overview-icon" icon={faEnvelope} />
                        Email
                    </a>
                </div>
            </div>
        );
    }
}
