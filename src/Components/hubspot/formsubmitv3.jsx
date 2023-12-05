import {useState} from "react";
import React from "react";

const PORTAL_ID = "24257684";
const FORM_ID = "b6aa330c-d059-4bbc-8000-482a8cfcc881";
const hubApiUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`
const initialState = {
    name: "",
    email: "",
    message: "",
};
let requestBody = {
    "fields": [
        {
            "objectTypeId": "0-1",
            "name": "email",
            "value": "",
        },
        {
            "objectTypeId": "0-1",
            "name": "name",
            "value": ""
        },
        {
            "objectTypeId": "0-1",
            "name": "message",
            "value": ""
        }
    ]
}
export const Form = (props) => {
    const [{name, email, message}, setState] = useState(initialState);

    const setRequestBody = (name, value) => {
        requestBody.fields.map(element => {
            if (element.name === name) {
                return element.value = value;
            }
            return null;
        });
    }

    const clearRequestBody = () => {
        requestBody.fields.map(element => {
            return element.value = "";
        });
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => ({...prevState, [name]: value}));
    };

    const clearState = () => {
        setState(initialState);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setRequestBody("name", name);
        setRequestBody("email", email);
        setRequestBody("message", message);

        await fetch(hubApiUrl, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(
            (response) => {
                if (response.status === 200) {
                    console.log("The message has been sent.");
                    clearState();
                    clearRequestBody();
                } else if (response.status === 400) {
                    console.log("Something went wrong. Response status 400");
                } else if (response.status === 403) {
                    console.log("Something went wrong. Response status 403");
                } else if (response.status === 404) {
                    console.log("Something went wrong. Response status 404");
                }
            },
            (error) => {
                console.log("Something went wrong. The message has not been sent");
            }
        )
    }

    return (
        <form id="formsubmit" name="sentMessage" validate onSubmit={handleSubmit}>

            <input type="text" id="name" name="name" className="form-control"
                   placeholder="Name" required value={name} onChange={handleChange}/>
            <p className="help-block text-danger"></p>

            <input type="email" id="email" name="email" className="form-control"
                   placeholder="Email" required value={email} onChange={handleChange}/>
            <p className="help-block text-danger"></p>

            <textarea name="message" id="message" className="form-control" rows="4"
                      placeholder="Message" required value={message} onChange={handleChange}></textarea>

            <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
        </form>
    );
};