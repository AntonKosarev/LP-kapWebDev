import React, { Component } from 'react';
import Cookies from 'js-cookie';

export class CookieManager extends Component {
    constructor(props) {
        super(props);
    }

    static setCookie(name, value, options) {
        Cookies.set(name, value, options);
    }

    static readCookie(name) {
        const cookieValue = Cookies.get(name);
        return cookieValue;
    }

    render() {
        return null;
    }
}