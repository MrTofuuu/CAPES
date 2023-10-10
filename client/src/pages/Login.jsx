import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <>
            {/* // start: row for form */}
            <div className='row p-5 mb-4 formRow'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <h1>Sign In</h1>
                    <h4 className='text-muted'>
                        Welcome to CAPES! Please sign in so we can address your emergency.
                    </h4>
                    <p className='text-muted'>Don't have an account? &nbsp;
                        <Link to={"./Signup"}>
                        Sign Up.
                        </Link>
                    </p>
                    <hr />
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            {/* email */}
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input
                                    className="form-input form-control"
                                    placeholder="yourEmail@email.com"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange} 
                                />
                            </div>
                            
                            {/* password */}
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input
                                    className="form-input form-control"
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* submit button */}
                            <button
                                className="btn btn-primary"
                                style={{ cursor: 'pointer' }}
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                    {/* end data ? */}
                    {error && (
                        <div className="my-3 p-3 bg-danger text-white">
                            {error.message}
                        </div>
                    )}
                    {/* end: error */}
                </div>
                {/* end: col-lg-12 */}
            </div>
            {/* end: row for form */}
            
        </>
            
    );
};

export default Login;
