import React from 'react'
import { useState } from 'react'

import "./Modal.css"

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(
        defaultValue || {
        name: "",
        progress: "",
        quantity: "",
        date: ""
    });

    const [errors, setErrors] = useState("")
    
    const handleChange = (e) => {
        {
            setFormState({
                ...formState,
                [e.target.name]: e.target.value,
            });
        }
    }

    const validateForm =() => {
        if(formState.name && formState.progress && formState.quantity && formState.date) {
            setErrors("")
            return true
        } else {
            let errorFields =[];
            for (const [key,value] of Object.entries(formState)){
                if(!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "))
            return false;
        }
           
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState);

        closeModal();
    }

    return (
        <div className='modal-container'
            onClick={(e) => {
                if (e.target.className === "modal-container")
                    closeModal();
            }}
        >

            <div className='modal'>
                <form>
                    <div className='form-group'>
                        <label htmlFor="name">Name</label>
                        <input name='name' value={formState.name} onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="progress">Progress</label>
                        <input name='progress' type='number' min={0} max={100} value={formState.progress} onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="quantity">Quantity</label>
                        <input name='quantity' type='number' min={0} value={formState.quantity} onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='date'>Date</label>
                        <input name='date' type='date' value={formState.date} onChange={handleChange} />
                    </div>
                    {errors && <div className='error'>{`Please include: ${errors}`}</div>}
                    <button typeof='submit' className='btn' onClick={handleSubmit}>
                        Submit
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Modal