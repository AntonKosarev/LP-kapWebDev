import React, {Component} from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "../App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";
import {ClientInfo} from "../Components/ClientInfo/ClientInfo";


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: "bar",
            cvData: {}
        };
        ReactGA.initialize("G-9VV770E0QE");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    getResumeData() {
        $.ajax({
            url: "/CVData.json",
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({cvData: data});
                // console.log("this: ", this.state);
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <div className="App">
                <ClientInfo/>
                <Header data={this.state.cvData.main} />
                <About data={this.state.cvData.main} />
                <Skills data={this.state.cvData.resume} />
                <Contact data={this.state.cvData.main} />
                <Footer data={this.state.cvData.main} />
            </div>
        );
    }
}

export default Landing;
