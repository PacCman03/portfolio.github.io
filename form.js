import React, { useState } from "react";

function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to a server
        setSubmitted(true);
    };

    return (
        <div>
            {submitted ? (
                <p>Thank you for contacting us!</p>
            ) : (
                <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Message:
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Send</button>
                </form>
            )}
        </div>
    );
}

export default ContactForm;