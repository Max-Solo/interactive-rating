import React, { useContext, useState } from 'react';
import thank from './illustration-thank-you.svg';
import { useTransition, animated, config } from 'react-spring';
import { RaitingContext } from '../context/raiting/raitingContext';

export function ThankBlock() {
    const { submit, value } = useContext(RaitingContext);

    const transitions = useTransition(submit, {
        from: { opacity: 0, transform: 'perspective(600px) rotateY(180deg)' },
        enter: { opacity: 1, transform: 'perspective(600px) rotateY(0)' },
        leave: { opacity: 1, transform: 'perspective(600px) rotateY(180deg)' },
        reverse: submit,
        delay: 0,
        config: { mass: 5, tension: 500, friction: 80 },
        onRest: () => !submit,
    });

    return transitions((styles, item) =>
        item && submit ? (
            <animated.div style={styles} className='raiting-wrapper'>
                <div className='raiting-body thank-body'>
                    <div className='thank-img'>
                        <img src={thank} alt='Thank' />
                    </div>
                    <div className='thank-outcome'>
                        You selected {value} out of 5
                    </div>
                    <h1 className='raiting-title thank-title'>Thank You!</h1>
                    <p className='raiting-description thank-decription'>
                        We appreciate you taking the time to give a rating. If
                        you ever need more support, don't hesitate to get in
                        touch!
                    </p>
                </div>
            </animated.div>
        ) : null
    );
}
