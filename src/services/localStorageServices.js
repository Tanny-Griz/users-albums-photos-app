import React from 'react';

export const getArrFromStorage = () => {
    const arrayOfFromLS = JSON.parse(localStorage.getItem('arrOfLS'));
    return arrayOfFromLS || []
}

export const setToLocalStorage = (obj) => {
    localStorage.setItem('arrOfLS', JSON.stringify(obj));
}