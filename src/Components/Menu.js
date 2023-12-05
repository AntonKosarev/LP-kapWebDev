import React, {Component} from "react";
import {Outlet, Link} from "react-router-dom";


class Main extends Component {
    render() {
        return (
            <>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                        Show navigation
                    </a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">
                        Hide navigation
                    </a>

                    <ul id="nav" className="nav">
                        {/*<li className="current"><a className="smoothscroll" href="#home"> Home </a></li>*/}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/game">Game</Link></li>
                        {/*<li><a className="smoothscroll" href="#about"> About </a></li>*/}
                        {/*<li><a className="smoothscroll" href="#contact"> Contact </a></li>*/}
                    </ul>
                </nav>
                <Outlet/>
            </>
        );
    }
}

export default Main;
