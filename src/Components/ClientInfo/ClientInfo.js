import React, {Component} from "react";
import $ from "jquery";
import {getDatabase, ref, child, get, set, push} from "firebase/database";
import {initializeApp} from "firebase/app";
import {CookieManager} from "../utils/CookieManager";
import {createHash} from 'crypto'

export class ClientInfo extends Component {
    constructor(props) {
        super(props);
        this.firebaseConfig = {
            databaseURL: "https://kapwebdev-default-rtdb.europe-west1.firebasedatabase.app",
        };
        this.db = getDatabase(initializeApp(this.firebaseConfig));
        this.init();
    }


    writeUserAgent(userAgent) {
        set(ref(this.db, 'data/clienInfo/userAgent'), {
            userAgent: userAgent,
        });
    }

    pushData(data) {
        const postListRef = ref(this.db, 'data/clientInfo');
        const newPostRef = push(postListRef);
        set(newPostRef, data);
    }

    GETData(data) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `/${data}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    async getIP() {
        try {
            const {ip} = await $.getJSON('https://api.ipify.org?format=json');
            return ip;
        } catch (error) {
            console.error('Error get IP: ', error);
        }
    }

    async init() {
        const userAgent = navigator.userAgent;
        const ip = await this.getIP();

        const clientInfo = {
            ip: ip,
            userAgent: userAgent
        }

        const hash = createHash('sha256');
        hash.update(clientInfo.ip);
        const uniqueValue = hash.digest('hex');

        const cookieFlag = CookieManager.readCookie(uniqueValue);

        if (cookieFlag === undefined) {
            this.pushData(clientInfo);
            CookieManager.setCookie(uniqueValue, 1);
        }

    }

    render() {
        return null;
    }
}