import React, { useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [alertMessage, setAlertMessage] = useState('');
    const [messageType, setMessageType] = useState('success');
    const [faqAnswersVisibility, setFaqAnswersVisibility] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.subject && formData.message) {
            showMessage("Formularul a fost trimis cu succes!");
        } else {
            showMessage("Te rugăm să completezi toate câmpurile.", true);
        }
    }

    const showMessage = (msg, isError = false) => {
        setAlertMessage(msg);
        setMessageType(isError ? 'error' : 'success');
        setTimeout(() => {
            setAlertMessage('');
        }, 2000);
    }

    const toggleAnswer = (key) => {
        setFaqAnswersVisibility({ ...faqAnswersVisibility, [key]: !faqAnswersVisibility[key] });
    }

    return (
        <div className="container">
            {alertMessage && (
                <div className={`alert ${messageType === 'error' ? 'alert-error' : 'alert-success'}`}>
                    {alertMessage}
                </div>
            )}

            <h1 className="title">Contact</h1>

            <div className="contact-info">
                {/* Include additional contact info here */}
            </div>

            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name">Nume și Prenume:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange} 
                        placeholder="Nume complet" 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="adresa@example.com" 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subiect:</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subiectul mesajului" 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Mesaj:</label>
                    <textarea 
                        id="message" 
                        name="message"
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Scrie aici mesajul tău..."
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">Trimite</button>
            </form>

            <div className="faq">
                <h3>Întrebări frecvente</h3>
                {/* Add FAQ questions and answers here */}
                <div className="faq-question" onClick={() => toggleAnswer('q1')}>
                    Cum pot să vă contactez?
                </div>
                {faqAnswersVisibility.q1 && (
                    <div className="faq-answer">
                        Puteți să ne contactați folosind formularul de mai sus sau prin telefon la +40700000000.
                    </div>
                )}

                <div className="faq-question" onClick={() => toggleAnswer('q2')}>
                    Cât durează până primesc un răspuns?
                </div>
                {faqAnswersVisibility.q2 && (
                    <div className="faq-answer">
                        De obicei, răspundem în termen de 24 de ore.
                    </div>
                )}
            </div>
        </div>
    );
}

export default Contact;
