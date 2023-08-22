import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from '../../actions';

export const FormInput = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    const {contactList} = useSelector(state => state.lists)

    let lastUser = contactList[contactList.length-1]


    const onAddNewUser = (e) => {
        e.preventDefault();

        let error = document.getElementById('error');
        if(name === '' || surname === '' || phone === '') {
            error.textContent = 'Всі поля мають бути заповнені';
            return;
        }


        let newUser = {
            id: lastUser.id + 1,
            name: name + ' ' + surname,
            phone: phone
        }
    
        dispatch(addUser(newUser));
        
        let form = document.querySelector('.form-container')
        form.classList.remove('form-open');
        error.textContent = '';
        setName('')
        setSurname('')
        setPhone('')
    }


    const onFormInputNameChange = (e) => {
        setName(e.target.value)
    }

    const onFormInputSurnameChange = (e) => {
        setSurname(e.target.value)
    }
    
    const onFormInputPhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const onCloseForm = () => {
        let form = document.querySelector('.form-container');
        form.classList.remove('form-open')
    }


    return (
        <div className="form-container">
            <form onSubmit={onAddNewUser} className='form-block'>
                <h2 className="form-block-title">Додати контакт</h2>
                <p id="error" className="error-message"></p>
                <div>
                    <label htmlFor="" className="form-label">Ім'я</label>
                    <input type="text" name="name" value={name} onChange={onFormInputNameChange} className='form-input'/>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Прізвище</label>
                    <input type="text" name="surname" value={surname} onChange={onFormInputSurnameChange} className='form-input'/>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Телефон</label>
                    <input type="text" name="phone" value={phone} onChange={onFormInputPhoneChange} className='form-input'/>
                </div>
                <button className='form-button'>Зберегти</button>
                <button className='form-button' onClick={() => onCloseForm()}>Скасувати</button>

        </form>
        </div>
    )
}