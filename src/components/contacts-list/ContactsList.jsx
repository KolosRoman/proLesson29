import React, {useState, useEffect} from 'react';
import {OneList} from './OneList.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLists, deleteList} from '../../actions';

export const ContactsList = () => {
    const dispatch = useDispatch();
    const {contactList} = useSelector(state => state.lists)


    useEffect(() => {
        dispatch(fetchLists())
    }, [])


    const onPostDelete = (postId) => {
        dispatch(deleteList(postId))
    }

    const onFormOpen = () => {
        let form = document.querySelector('.form-container')
        form.classList.add('form-open')
    }

    return (
        <>
            <div id='new-user'>
                {contactList.map(list => <OneList key={list.id} list={list} onPostDelete={onPostDelete}/>)}
            </div>
            <div>
                <button onClick={() => onFormOpen()} className='add-button'>Додати контакт</button>
            </div>
        </>
    )
}