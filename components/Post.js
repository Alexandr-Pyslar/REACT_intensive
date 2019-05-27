import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className='post'>
                 <User
                    src='https://salon-copine.ru/assets/images/services/338/title/moda-2.jpg' 
                    alt='men' 
                    name='Random_Men'
                    min/>
                
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className='post__name'>
                    some account
                </div>
                <div className='post__descr'>
                Безусловно, консультация с широким активом однозначно фиксирует необходимость дальнейших направлений развития.
                </div>
            </div>
        )
    }
}