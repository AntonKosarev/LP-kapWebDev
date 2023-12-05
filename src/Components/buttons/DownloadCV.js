import React, {Component} from "react";

class DownloadCV extends Component {
    render() {
        if (!this.props.data) return null;

        const url = this.props.data.url;

        return (
            <a href={url} target={"_blank"}
               rel="noreferrer"
               className="button btn button--download">
                <i className="fa fa-download"></i>Download CV
            </a>
        );
    }
}

export default DownloadCV;
