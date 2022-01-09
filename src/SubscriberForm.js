import React, {useState} from "react";

function SubscriberFrom() {
    const [name, setName] = useState("");
    const handleNameChange = event => setName(event.target.value);

    const [email, setEmail] = useState("");
    const handleEmailChange = event => setEmail(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(`Form Submitted! ${name} : ${email}`)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Enter Your Name:
                <input type="text" id="name" name="name" onChange={handleNameChange} value={name} />
            </label>
            <label htmlFor="email">
                Enter Your Email:
                <input type="email" id="email" name="email" onChange={handleEmailChange} value={email} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SubscriberFrom;