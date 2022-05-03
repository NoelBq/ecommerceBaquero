import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import db from '../../firebaseconfig'
import SenComment from '../sentcomment/SentComment'


function ContactModal() {

    const [sentComment, setSentComment] = useState(false)
    const [contactData, setContactData] = useState(
        {
            name: '',
            phone: '',
            email: '',
            comment: ''
        }
    )

    const handleContactData = (e) => {
        const { value, name } = e.target
        e.preventDefault();
        setContactData({
            ...contactData,
            [name]: value
        })
        sendComment();
    }

    const sendComment = async () => {
        let pastComment = {
            ...contactData,
        }
        try {
            const commentDTO = collection(db, 'comments')
            const commentFirebase = await addDoc(commentDTO, pastComment)
            return commentFirebase;
        } catch (error) {
            console.log(error)
        }
    }

    const okSent = (e) => {
        e.preventDefault();
        sendComment();
        setSentComment(true)
        
    }

    useEffect(() => {
    }, [sentComment]);

    return (
        <div className="modal fade custom-modal" id="contact" tabIndex="-1" aria-labelledby="contact">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {
                        !sentComment ? (
                            <div className="modal-body">
                            <form id="contact" action="" method="post" onChange={handleContactData}>
                                <fieldset>
                                    <input name="name" className="form-input" placeholder="Nombre" type="text" tabIndex="1" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <input name="email" className="form-input" placeholder="Email" type="email" tabIndex="2" required />
                                </fieldset>
                                <fieldset>
                                    <input name="phone" className="form-input" placeholder="Telefono" type="tel" tabIndex="3" required />
                                </fieldset>
                                <fieldset>
                                    <textarea name="comment" className="form-input" placeholder="Dejanos tu mensaje...." tabIndex="5" required></textarea>
                                </fieldset>
                                <fieldset>
                                    <button onClick={okSent} name="submit" type="submit" id="contact-submit" data-submit="...Sending">Enviar</button>
                                </fieldset>
                            </form>
                        </div>
                        ) : (
                            <SenComment />
                        ) 
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactModal