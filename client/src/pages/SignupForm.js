import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const styles = {
    signupPadding: {
        marginTop: '50px',
        marginBottom: '50px',
        padding: '5px',
    },

};

const SignupForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });
    
    const [createUser, { error, data }] = useMutation(CREATE_USER);

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
            const { data } = await createUser({
                variables: { ...formState },
            });

            Auth.login(data.createUser.token);
        } catch (e) {
            console.error(e);
        }
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
            {/* end: row */}

            {/* // old row */}
            {/* <div>
                <div className="col-12 col-lg-10">
                    <div className="card">
                        <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
                        <div className="card-body">
                            {data ? (
                                <p>
                                    Success! You may now head{' '}
                                    <Link to="/">back to the homepage.</Link>
                                </p>
                            ) : (
                                <form style={styles.signupPadding} onSubmit={handleFormSubmit}>
                                    <input
                                        className="form-input"
                                        placeholder="Your name"
                                        name="name"
                                        type="text"
                                        value={formState.name}
                                        onChange={handleChange} />
                                    <input
                                        className="form-input"
                                        placeholder="Your email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange} />
                                    <input
                                        className="form-input"
                                        placeholder="******"
                                        name="password"
                                        type="password"
                                        value={formState.password}
                                        onChange={handleChange} />
                                    <button
                                        className="btn btn-block btn-info"
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
                    </div>
                </div>
            </div> */}
            </>

    );
};

export default SignupForm;
