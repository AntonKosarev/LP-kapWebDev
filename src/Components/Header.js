import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import DownloadCV from "./buttons/DownloadCV";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const downloadCV = this.props.data.downloadCV;
    const name = this.props.data.name;
    const description = this.props.data.description;

    let config = {
      radius: [5, 40],
      life: [1.5, 3],
      position: "all",
      color: ["random", "#ff0000"],
    };

    return (
      <header id="home">
        <ParticlesBg type="custom" config={config} bg={true} />
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description[0]}<br/>{description[1]}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <DownloadCV data={{url: downloadCV}}/>
              </ul>
            </Fade>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
