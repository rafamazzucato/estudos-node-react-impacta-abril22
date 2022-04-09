import React, {useState} from 'react';

export const Component02 = props => {

    const [texto, setTexto] = useState(props.titulo);

    return (
        <>
            <h1>{props.titulo}</h1>
            <h2>{texto}</h2>
            <input type="text"
                value={texto}
                onChange={e => setTexto(e.target.value)} />
        </>
    );
}