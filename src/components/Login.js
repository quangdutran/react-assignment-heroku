import React from 'react'
import { useForm } from 'react-hook-form'

export const Login = (props) => {
    if (props.action === 'logout') {
        localStorage.clear();
        window.location.reload();
    }
    const loggedInUser = localStorage.getItem("userInfo");
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = (data) => {
        //Should call API using axios to get token
        if (data.email === 'test@abc.com' && data.password === '12345678') {
            data.id = 18;
            data.name = "John";
            console.log(data);
            console.log(JSON.stringify(data));
            localStorage.setItem('userInfo', JSON.stringify(data));
            window.location.reload();
        } else {
            alert("Wrong credential");
        }
    }
    return (
        <div>
            {loggedInUser ? (
                <div></div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                <input className="login" {...register('email', { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 })} placeholder="Username" />
                {errors.password && <p className="required">Must be valid email</p>}
                <input className="login" {...register('password', { required: true, minLength: 8 })} placeholder="password" type="password"/>
                {errors.password && <p className="required">Password must have 8 digits or more</p>}
                <input className="login" type="submit" />
            </form>
            )}
        </div>
    )
}
