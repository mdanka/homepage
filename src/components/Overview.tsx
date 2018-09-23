import * as React from "react";

export class Overview extends React.PureComponent<{}, {}> {
    public render() {
        return (
            <div className="hp-overview-section">
                <h1 className="hp-overview-name">Miklós Danka</h1>
                <div className="hp-overview-phonetics">Miklós András Danka - [miklɔːʃ ɒndrɑːʃ dɒnkɒ]</div>
                <div className="hp-overview-links">
                    <a href="http://blog.miklosdanka.com" target="_blank">
                        Blog
                    </a>
                    <a href="https://github.com/mdanka/" target="_blank">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/mikl%C3%B3s-andr%C3%A1s-danka-19415147/" target="_blank">
                        LinkedIn
                    </a>
                    <a href="mailto:danka.miklos+homepage[AT]gmail.com">Email</a>
                </div>
            </div>
        );
    }
}
