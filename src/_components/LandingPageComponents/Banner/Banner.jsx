import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { useLocation } from "react-router-dom";
import { userActions } from '../../../_actions';
import bleu from '../../../_assets/images/bleu - 1.png';
import './Banner.css';

function Banner() {
    const [toggle, setToggle] = useState(true);
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const dispatch = useDispatch();
    const location = useLocation();

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
        console.log('email', inputs);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if (email && password) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/main" } };
            dispatch(userActions.login(email, password, from));
        }
    }
    return(
        <div className="banner bg-no-repeat flex justify-center items-center relative bg-center bg-cover h-full sm:h-screen px-6 md:px-16 xl:px-24 2xl:px-36 min-h-screen py-2 md:py-0">
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
                <div className="login-register col-span-12 md:col-span-5 col-span lg:col-span-4 mt-2 md:mt-0 relative">
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
                                <Form className="login-form gap-2 text-xs sm:text-sm 2xl:text-base">
                                    <div className="w-full grid grid-cols-4 flex gap-0 sm:gap-2 mb-4">
                                        <FormGroup className="col-span-4 sm:col-span-2 mb-4 sm:mb-0">
                                            <Input type="text" className="w-full p-3 text-xs sm:text-sm 2xl:text-base border rounded border-gray-200" name="name" id="name" placeholder="Nom Prénom" />
                                        </FormGroup>
                                        <FormGroup className="col-span-4 sm:col-span-2">
                                            <Input type="text" className="w-full p-3 text-xs sm:text-sm 2xl:text-base border rounded border-gray-200" name="phone" id="phone" placeholder="Téléphone" />
                                        </FormGroup>
                                    </div>
                                    <FormGroup className="mb-4">
                                        <Input type="email" className="w-full text-xs p-3 sm:text-sm 2xl:text-base border rounded border-gray-200" name="email" id="email" placeholder="Adresse mail" />
                                    </FormGroup>
                                    <FormGroup className="mb-4">
                                        <Input type="password" className="w-full text-xs p-3 sm:text-sm 2xl:text-base border rounded border-gray-200" name="password" id="examplePassword" placeholder="Mot de passe " />
                                    </FormGroup>
                                    <FormGroup className="mb-4">
                                        <Input type="password" className="w-full text-xs p-3 sm:text-sm 2xl:text-base border rounded border-gray-200" name="password-confirm" id="password-confirm" placeholder="Confirmer le mot de passe" />
                                    </FormGroup>
                                    <FormGroup className="flex items-center mb-4">
                                        <Input type="checkbox" className="text-xs p-3 sm:text-sm 2xl:text-base border rounded border-gray-200" name="terms" id="terms" style={{marginLeft: '0px'}} />
                                        &nbsp;&nbsp;&nbsp;&nbsp;I agree with all conditions
                                    </FormGroup>
                                    <div className="login-connecter">
                                        <Button className="login-btn w-full xl:w-3/6 text-white rounded bg-blue-900 hover:bg-yellow-500">Se connecter</Button>
                                    </div>
                                </Form>
                                
                                
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