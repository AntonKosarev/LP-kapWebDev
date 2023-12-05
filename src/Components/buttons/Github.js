import React, {Component} from "react";

class Github extends Component {
    render() {
        if (!this.props.data) return null;

        const url = this.props.data.url;

        return (
            <a href={url} target={"_blank"}
               rel="noreferrer"
               className="button">
                <i className="fa fa-github"></i>Github
            </a>
        );
    }
}

export default Github;
