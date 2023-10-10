import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignupForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [addUser, { error, data }] = useMutation(ADD_USER);

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

        const mutationResponse = await addUser({
            variables: {
                name: formState.name,
                email: formState.email,
                password: formState.password
            }
        })

        const token = mutationResponse.data.addUser.token;
        console.log(token)

        Auth.login(token);
    };

    return (
        // sample row
        <>
            {/* // start: row */}
            <div className='row p-5 mb-4 formRow'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <h1>Sign Up</h1>
                    <h4 className='text-muted'>
                        Report local or world-ending emergencies by registering to CAPES!
                    </h4>
                    <p className='text-muted'>Already have an account? &nbsp;
                        <Link to={"./Login"}>
                            Sign In
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
                            {/* full name */}
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    className="form-input form-control"
                                    placeholder="Your Full Name"
                                    name="name"
                                    type="text"
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* email */}
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    className="form-input form-control"
                                    placeholder="Your email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* password */}
                            <div className="mb-3">
                                <label className="form-label">Password</label>
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

                    {error && (
                        <div className="my-3 p-3 bg-danger text-white">
                            {error.message}
                        </div>
                    )}

                </div>
                {/* end: col-lg-12 */}
            </div>
           
        </>

    );
};

export default SignupForm;
