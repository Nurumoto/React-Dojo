import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { useLocation } from "react-router-dom";
import {
    useScrollSection,
  } from 'react-scroll-section';

import { userActions } from '../../../_actions';
import bleu from '../../../_assets/images/DOJO-1.png';
import downArrow from '../../../_assets/images/DOJO-2.png';
import './Banner.css';

function Banner() {
    const [toggle, setToggle] = useState(true);
    const utilitySection = useScrollSection('utility');
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [user, setUser] = useState({
        fullname: '',
        phone: '',
        userEmail: '',
        password1: '',
        password2: ''

    });
    const [submitted, setSubmitted] = useState(false);
    const [register, setRegister] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const { email, password } = inputs;
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }
    function handleRegisterChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if (email && password) {
            const { from } = location.state || { from: { pathname: "/main" } };
            dispatch(userActions.login(email, password, from));
        }
    }

    function handleRegister(e) {
        e.preventDefault();
        setSubmitted(true);
        // if (user.firstName && user.lastName && user.username && user.password) {
        //     dispatch(userActions.register(user));
        // }
        console.log(user);
        if(user.password1 === user.password2){
            if (user.fullname && user.phone && user.userEmail && user.password1) {
                dispatch(userActions.register(user));
            }
        }
    }

    return(
        <div className="banner bg-no-repeat flex justify-center items-center relative bg-center bg-cover h-full sm:h-screen px-6 md:px-16 xl:px-24 2xl:px-36 min-h-screen py-2 md:py-0">
            <img src={ downArrow } className="w-6 h-6 2xl:w-10 2xl:h-10 absolute bottom-20 hidden md:block left-1/3 cursor-pointer" alt="" onClick={utilitySection.onClick} selected={utilitySection.selected} />
            <div className="flex w-full grid grid-cols-12 mt-10 md:mt-0 items-center 2xl:items-baseline">
                <div className="description col-span-12 md:col-span-7 ">
                    <div className="concept text-5xl 2xl:text-8xl">Concept</div>
                    <div className="banner-desc lg:text-2xl xl:text-3xl 2xl:text-4xl md:mt-5 md:ml-5 2xl:mt-20 2xl:ml-36">
                        <div>Nous avouns pour vocation</div>
                        <div>de faciliter a tous les entrepreneurs</div>
                        <div>et intrapreneurs I acces a la.</div>
                    </div>
                </div>
                <div className="hidden lg:block lg:col-span-1"></div>
                <div className="login-register col-span-12 md:col-span-5 col-span lg:col-span-4 mt-10 2xl:mt-0 relative">
                    <img className="w-28 2xl:w-56 absolute xl:-top-20 xl:-left-24 2xl:-top-28 2xl:-left-40" style={{'zIndex': '-1'}} src={ bleu }alt="" />
                    {
                        toggle ? (
                            <div className="login w-full z-10">
                                <div className="connexion text-3xl 2xl:text-6xl dj-d-blue text-center">Connexion</div>
                                    <Form className="login-form text-xs sm:text-sm 2xl:text-base" name="form" onSubmit={handleSubmit}>
                                        <FormGroup className="mb-4">
                                            <Input type="email" name="email" id="exampleEmail" className={'form-control' + (submitted && !email ? ' is-invalid' : '') + ' w-full p-3 bg-white text-xs sm:text-sm 2xl:text-base border rounded border-gray-200'} value={email} onChange={handleChange} placeholder="Adresse mail" autoComplete="off" />
                                            {submitted && !email &&
                                                <div className="invalid-feedback">Email is required</div>
                                            }
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Input type="password" name="password" id="examplePassword" className={'form-control' + (submitted && !password ? ' is-invalid' : '') +' w-full p-3 focus-within:bg-white text-xs sm:text-sm 2xl:text-base border rounded border-gray-200'}  value={password} onChange={handleChange} placeholder="Mot de passe" />
                                            {submitted && !password &&
                                                <div className="invalid-feedback">Password is required</div>
                                            }
                                        </FormGroup>
                                        <div className="login-connecter 2xl:mt-8 w-full">
                                            <Button className="login-btn w-full xl:w-3/6 text-white rounded bg-blue-900 hover:bg-yellow-500">Se connecter</Button>
                                        </div>
                                    </Form>
                                    <div className="or my-8">
                                        <span>ou</span>
                                    </div>
                                    <div className="social-login mt-2">
                                        <Button outline className="login-btn w-full xl:w-4/6 border border-green-400 p-2 rounded" color="info">
                                        <span className="btn-inner--icon">
                                            <i className="fa fa-user"></i>
                                        </span>
                                            Continuer avec Facebook
                                        </Button>
                                    </div>
                                    <div className="social-login mt-2">
                                        <Button outline className="login-btn w-full xl:w-4/6 border border-red-500 p-2 rounded" color="danger">
                                        <span className="btn-inner--icon">
                                            <i className="ni ni-atom"></i>
                                        </span>
                                            Continuer avec Google
                                        </Button>
                                    </div>
                                    <div className="loginOrRegister text-xs sm:text-sm 2xl:text-base">
                                        <div>Vous n’avez pas encore de compte ? </div>
                                        <button className="ml-4" onClick={() => setToggle(false)}>Créer</button>
                                    </div>
                                </div>
                        ) : (
                            <div className="login">
                                <div className="connexion text-3xl 2xl:text-6xl dj-d-blue text-center pb-5">Créer un compte</div>
                                <Form className="login-form gap-2 text-xs sm:text-sm 2xl:text-base" onSubmit={handleRegister}>
                                    <div className="w-full flex gap-0 sm:gap-2 mb-3">
                                        <FormGroup className="mb-0">
                                            <Input 
                                                type="text" 
                                                className="w-full p-3 text-xs sm:text-sm 2xl:text-base border rounded border-gray-200"  
                                                onChange={handleRegisterChange} 
                                                value={user.fullname}
                                                name="fullname" 
                                                id="fullname" 
                                                placeholder="Nom Prénom" 
                                            />
                                            {
                                                register && !user.fullname &&
                                                <div className="invalid-feedback">Name is required</div>
                                            }
                                        </FormGroup>
                                        <FormGroup className="mb-0">
                                            <Input 
                                                type="text" 
                                                className="w-full p-3 text-xs sm:text-sm 2xl:text-base border rounded border-gray-200"  
                                                onChange={handleRegisterChange} 
                                                value={user.phone}
                                                name="phone" 
                                                id="phone" 
                                                placeholder="Téléphone" 
                                            />
                                            {
                                                register && !user.phone &&
                                                <div className="invalid-feedback">Phpne number is required</div>
                                            }
                                        </FormGroup>
                                    </div>
                                    <FormGroup className="mb-3">
                                        <Input 
                                            type="email" 
                                            className="w-full text-xs p-3 sm:text-sm 2xl:text-base border rounded border-gray-200"  
                                            onChange={handleRegisterChange}
                                            value={user.userEmail}
                                            name="userEmail" 
                                            id="userEmail" 
                                            placeholder="Adresse mail" 
                                        />
                                        {
                                            register && !user.userEmail &&
                                            <div className="invalid-feedback">Email is required</div>
                                        }
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Input 
                                            type="password" 
                                            className="w-full text-xs p-3 sm:text-sm 2xl:text-base border rounded border-gray-200" 
                                            onChange={handleRegisterChange} 
                                            value={user.password1}
                                            name="password1" 
                                            id="password1" 
                                            placeholder="Mot de passe " 
                                        />
                                        {
                                            register && !user.password1 &&
                                            <div className="invalid-feedback">Password is required</div>
                                        }
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Input 
                                            type="password" 
                                            className="w-full text-xs p-3 sm:text-sm 2xl:text-base border rounded border-gray-200" 
                                            onChange={handleRegisterChange} 
                                            value={user.password2}
                                            name="password2" 
                                            id="password2" 
                                            placeholder="Confirmer le mot de passe" 
                                        />
                                        {
                                            register && !user.password2 &&
                                            <div className="invalid-feedback">Password confirm is required</div>
                                        }
                                    </FormGroup>
                                    <FormGroup className="flex items-center mb-3">
                                        <Input 
                                            type="checkbox" 
                                            className="text-xs p-3 sm:text-sm 2xl:text-base border rounded border-gray-200 mt-0" 
                                            onChange={handleRegisterChange} 
                                            name="terms" 
                                            id="terms" 
                                            style={{marginLeft: '0px'}} 
                                        />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I agree with all conditions
                                    </FormGroup>
                                    <div className="login-connecter">
                                        <Button className="login-btn w-full xl:w-3/6 text-white rounded bg-blue-900 hover:bg-yellow-500">Se connecter</Button>
                                    </div>
                                </Form>
                                {/* <form name="form" onSubmit={handleRegister}>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" name="firstName" value={user.firstName} onChange={handleRegisterChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                                        {register && !user.firstName &&
                                            <div className="invalid-feedback">First Name is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" value={user.lastName} onChange={handleRegisterChange} className={'form-control' + (register && !user.lastName ? ' is-invalid' : '')} />
                                        {register && !user.lastName &&
                                            <div className="invalid-feedback">Last Name is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" name="username" value={user.username} onChange={handleRegisterChange} className={'form-control' + (register && !user.username ? ' is-invalid' : '')} />
                                        {register && !user.username &&
                                            <div className="invalid-feedback">Username is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" value={user.password} onChange={handleRegisterChange} className={'form-control' + (register && !user.password ? ' is-invalid' : '')} />
                                        {register && !user.password &&
                                            <div className="invalid-feedback">Password is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary">
                                            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                            Register
                                        </button>
                                    </div>
                                </form> */}
                                
                                <div className="loginOrRegister text-xs sm:text-sm 2xl:text-base">
                                    <div>Vous avez déjà un compte ? </div>
                                    <button className="ml-2" onClick={() => setToggle(true)}>Se connecter</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export { Banner }