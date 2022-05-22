import React, {useState} from "react";
import '../styles/components/pages/ContactoPage.css';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    } // cierro initialForm

    const [sending, setSending]=useState(false);
    const [msg, setMsg]=useState('');
    const [formData, setFormData]=useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        })); // cierro setFormData
    }; // cierro handleChange

    const handleSubmit = async e => {
        e.preventDefault ();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    } // cierro handleSubmit

    return (
        <div className="container">
            <main>
                <div className="holder">
                    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <div class="mb-3">
                            <input type="text" class="form-control" value={formData.nombre} name="nombre" placeholder="Nombre" onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                    <input type="text" class="form-control" value={formData.email} name="email" placeholder="Email" onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                    <input type="text" class="form-control" value={formData.telefono} name="telefono" placeholder="Telefono" onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                    <input type="text" class="form-control" value={formData.mensaje} name="mensaje" placeholder="Mensaje" onChange={handleChange} />
                    </div>
                    <button type="submit" class="btn btn-danger">Enviar</button>
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </div>
            </main>
        </div>
    );
};

export default ContactoPage;