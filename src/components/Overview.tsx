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
                    <a href="https://twitter.com/miklosdanka" target="_blank">
                        Twitter
                    </a>
                    <a href="https://www.facebook.com/miklos.andras.danka" target="_blank">
                        Facebook
                    </a>
                </div>
            </div>
        );
    }
}
