import React, {useState} from "react";

function SubscriberFrom({createSubscriber}) {
    const initialFormState = {
        name: "",
        email: "",
        referral: "",
        age: "under18",
        subscription: false
    };
    const [formData, setFormData] = useState({...initialFormState});
    const handleChange = ({target}) => {
        const value = target.type === "checkbox" ? target.checked : target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Submitted: ", formData);
        setFormData({...initialFormState});
        const name = formData.name;
        const email = formData.email;
        const referral = formData.referral;
        const age = formData.age;
        const subscription = formData.subscription;
        createSubscriber({name, email, referral, age, subscription});
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
            <label htmlFor="referral">
                How did you hear about us?
                <select id="referral" name="referral" onChange={handleChange} value={formData.referral}>
                    <option value="">-- Select an Option --</option>
                    <option value="twitter">Twitter</option>
                    <option value="wom">Word of Mouth</option>
                    <option value="youtube">YouTube</option>
                </select>
            </label>
            <fieldset>
                <legend>Are you 18+ years old?</legend>
                <label htmlFor="under18">
                    Under 18
                    <input id="under18" type="radio" name="age" onChange={handleChange} value="under18" checked={formData.age === "under18"}/>
                </label>
                <label htmlFor="middle">
                    18+
                    <input id="adult" type="radio" name="age" onChange={handleChange} value="adult" checked={formData.age === "adult"} />
                </label>
            </fieldset>
            <label htmlFor="subscription">
                Receive email notifications?
                <input id="subscription" type="checkbox" name="subscription" onChange={handleChange} checked={formData.subscription} value="subscription" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SubscriberFrom;