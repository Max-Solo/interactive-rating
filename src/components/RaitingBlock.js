import React, { useContext, useState } from 'react';
import { useSpring, useTransition, animated, config } from 'react-spring';
import iconStar from './icon-star.svg';
import { RaitingContext } from '../context/raiting/raitingContext';

export function RaitingBlock() {
    const { submit, getResult, toSubmit } = useContext(RaitingContext);
    const [idItem, setIdItem] = useState(null);
    const [selected, setSelected] = useState(false);

    const toSelect = () => {
        if (!idItem) {
            setSelected(!selected);
        }
        toSubmit();
    };

    const { x } = useSpring({
        from: { x: 0 },
        x: selected ? 1 : 0,
        config: { duration: 1000 },
    });

    const onChangeId = (e) => {
        setIdItem(e.target.value);
    };

    const transitions = useTransition(!submit, {
        from: { opacity: 0, transform: 'perspective(800px) rotateX(180deg)' },
        enter: { opacity: 1, transform: 'perspective(800px) rotateX(0)' },
        leave: { opacity: 1, transform: 'perspective(800px) rotateX(180deg)' },
        reverse: submit,
        delay: 0,
        config: { mass: 5, tension: 500, friction: 80 },
        onRest: () => submit,
    });

    return transitions((styles, item) =>
        item && !submit ? (
            <animated.div style={styles} className='raiting-wrapper'>
                <div className='raiting-body'>
                    <div className='raiting-icon'>
                        <img src={iconStar} alt='star' />
                    </div>

                    <h1 className='raiting-title'>How did we do?</h1>
                    <p className='raiting-description'>
                        Please let us know we did with your support reaqest. All
                        feedback is appreciated to help us impprove our
                        offering!{' '}
                    </p>
                    <animated.div
                        className='raiting-grade'
                        style={{
                            scale: x.to({
                                range: [
                                    0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1,
                                ],
                                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                            }),
                        }}
                    >
                        <label
                            onClick={onChangeId}
                            className={`${
                                idItem === '1'
                                    ? 'raiting-grade-item active'
                                    : 'raiting-grade-item  effect sub-a'
                            }`}
                        >
                            1
                            <input
                                onChange={getResult}
                                type='radio'
                                name='raiting'
                                value='1'
                            />
                        </label>
                        <label
                            onClick={onChangeId}
                            className={`${
                                idItem === '2'
                                    ? 'raiting-grade-item active'
                                    : 'raiting-grade-item  effect sub-a'
                            }`}
                        >
                            2
                            <input
                                onChange={getResult}
                                type='radio'
                                name='raiting'
                                value='2'
                            />
                        </label>
                        <label
                            onClick={onChangeId}
                            className={`${
                                idItem === '3'
                                    ? 'raiting-grade-item active'
                                    : 'raiting-grade-item  effect sub-a'
                            }`}
                        >
                            3
                            <input
                                onChange={getResult}
                                type='radio'
                                name='raiting'
                                value='3'
                            />
                        </label>
                        <label
                            onClick={onChangeId}
                            className={`${
                                idItem === '4'
                                    ? 'raiting-grade-item active'
                                    : 'raiting-grade-item  effect sub-a'
                            }`}
                        >
                            4
                            <input
                                onChange={getResult}
                                type='radio'
                                name='raiting'
                                value='4'
                            />
                        </label>
                        <label
                            onClick={onChangeId}
                            className={`${
                                idItem === '5'
                                    ? 'raiting-grade-item active'
                                    : 'raiting-grade-item  effect sub-a'
                            }`}
                        >
                            5
                            <input
                                onChange={getResult}
                                type='radio'
                                name='raiting'
                                value='5'
                            />
                        </label>
                    </animated.div>
                </div>

                <button onClick={toSelect} className='raiting-button'>
                    submit
                </button>
            </animated.div>
        ) : null
    );
}
