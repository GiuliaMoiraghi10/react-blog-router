import style from './Contact.module.css'
import contact from '../assets/contact.jpg'

import { useState } from 'react'

const initialFormData = { // serve per pulire form dopo l'invio
    name: "",
    surname: "",
    mail: "",
    text: ""
}

export default function Contact() {

    // const [formData, setFormData] = useState({
    //     name: "",
    //     surname: "",
    //     mail: ""
    // });

    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(event) {
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value,
        }))
    }

    function onSubmit(event) {
        event.preventDefault()
        // console.log('form')
        setFormData(initialFormData)
    }

    // function onChange(event) {
    //     // console.log(event)
    //     setName(event.target.value)
    // }

    return (
        <div>
            <h1 className={style.title}>Contattaci</h1>
            <img className={style.imgContact} src={contact} alt="" />

            <div>
                <form onSubmit={onSubmit} action="" className={style.form}>
                    <label htmlFor="name">Nome</label>
                    <input
                        name='name'
                        onChange={handleFormData}
                        type="text"
                        placeholder='Il tuo nome'
                        value={formData.name} />
                    <label htmlFor="surname">Cognome</label>
                    <input
                        name='surname'
                        onChange={handleFormData}
                        type="text"
                        placeholder='Il tuo cognome'
                        value={formData.surname} />
                    <label htmlFor="mail">Mail</label>
                    <input
                        name='mail'
                        onChange={handleFormData}
                        type="email"
                        placeholder='Inserisci mail'
                        value={formData.mail} />
                    <label htmlFor="text-area">Scrivici</label>
                    <textarea className={style.text_area}
                        name='text'
                        onChange={handleFormData}
                        type="textarea"
                        value={formData.text} />
                    <input className={style.btn_form}
                        type="submit"
                        value="Invia" />
                </form>
            </div>
        </div>

    )
}