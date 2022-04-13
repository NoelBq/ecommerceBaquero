import React from 'react'
import './contact.css'


export default function Contact() {
    return (
        <div className="contact-container">
            <form id="contact" action="" method="post">
                <h3>Contactanos</h3>
                <fieldset>
                    <input className="form-input"placeholder="Nombre" type="text" tabIndex="1" required autoFocus />
                </fieldset>
                <fieldset>
                    <input className="form-input"placeholder="Email" type="email" tabIndex="2" required />
                </fieldset>
                <fieldset>
                    <input className="form-input"placeholder="Telefono" type="tel" tabIndex="3" required />
                </fieldset>
                <fieldset>
                    <textarea className="form-input"placeholder="Dejanos tu mensaje...." tabIndex="5" required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Enviar</button>
                </fieldset>
            </form>


        </div>
    )
}
