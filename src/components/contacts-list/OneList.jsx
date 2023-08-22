import React from "react";


export const OneList = ({list, onPostDelete}) => {

    return (
        <div className='main-header'>
            <p>{list.name.split(' ')[0]}</p>
            <p>{list.name.split(' ')[1]}</p>
            <p>{list.phone}</p>
            <button onClick={() => onPostDelete(list.id)} className='main-button'>Видалити</button>   
        </div>
    )
}