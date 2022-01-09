function SubscriberFrom() {
    return (
        <form>
            <label htmlFor="name">
                Enter Your Name:
                <input type="text" id="name" name="name" />
            </label>
            <label htmlFor="email">
                Enter Your Email:
                <input type="email" id="email" name="email" />
            </label>
        </form>
    );
}

export default SubscriberFrom;