import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export const Component02 = props => {

    const [texto, setTexto] = useState(props.titulo);

    useEffect(() => {
        console.log('componentDidMount do Component02');

        return () =>console.log('componentWilUnmount do Component02');
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate do Component02');
    }, [texto]);

    return (
        <>
            <h1>{props.titulo}</h1>
            <h2>{texto}</h2>
            <input type="text"
                value={texto}
                onChange={e => setTexto(e.target.value)} />
            <Link to="/">Home</Link>
        </>
    );
}