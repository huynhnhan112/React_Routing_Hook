import React from 'react'
import { Redirect } from 'react-router-dom';

export default function Profile(props) {

    if(!localStorage.getItem('accessToken')){
        alert('Login để đăng nhập vào trang !');
        return <Redirect to="/login" />
    }


    return (
        <div>
            Profile
        </div>
    )
}
