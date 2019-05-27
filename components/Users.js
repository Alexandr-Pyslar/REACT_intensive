import React from 'react';
import User from './User'

export default function Users() {
    return(
        <div className='right'>
            <User
                    src='https://salon-copine.ru/assets/images/services/338/title/moda-2.jpg' 
                    alt='men' 
                    name='Random_Men'/>
            <div className='users__block'>
            <User
                    src='https://salon-copine.ru/assets/images/services/338/title/moda-2.jpg' 
                    alt='men' 
                    name='Random_Men' min/>
                                <User
                    src='https://salon-copine.ru/assets/images/services/338/title/moda-2.jpg' 
                    alt='men' 
                    name='Random_Men' min/>
                                <User
                    src='https://salon-copine.ru/assets/images/services/338/title/moda-2.jpg' 
                    alt='men' 
                    name='Random_Men' min/>
                                <User
                    src='https://salon-copine.ru/assets/images/services/338/title/moda-2.jpg' 
                    alt='men' 
                    name='Random_Men' min/>
            </div>            
        </div>
    ) 
}