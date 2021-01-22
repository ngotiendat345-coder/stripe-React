import React, { useContext } from 'react';
import phone from './images/phone.svg';
import {AppContext} from './context';

function Hero(){
    const {closeMenu} = useContext(AppContext);
    function CloseSubmenu(e){
        if(!e.target.classList.contains('link-button')){
            closeMenu();
        }
    }
    return (
        <section className="hero" onMouseOver={CloseSubmenu}>
        <div className="hero-container">
            <article className="hero-content">
                <h1>Payments <br/>infrastructure <br/>
                    for the internet</h1>
                <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                <button className="btn">
                    start now
                </button>
            </article>
            <article className="hero-img">
                <img src={phone} alt=""/>
            </article>
        </div>
    </section>
    )
}

export default Hero;