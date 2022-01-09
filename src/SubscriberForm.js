import React, {useState} from "react";

function SubscriberFrom({createSubscriber}) {
    const initialFormState = {
        name: "",
        email: ""
    };
    const [formData, setFormData] = useState({...initialFormState});
    const handleChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Submitted: ", formData);
        setFormData({...initialFormState});
        const name = formData.name;
        const email = formData.email;
        createSubscriber({name, email});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Enter Your Name:
                <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} />
            </label>
            <label htmlFor="email">
                Enter Your Email:
                <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SubscriberFrom;