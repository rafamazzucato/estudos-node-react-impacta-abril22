import React, { Component } from 'react';
import { Component02 } from './Component02';

export class Component01 extends Component {

    render() {
        return (
            <>
                <h1>Meu Primeiro Componente</h1>
                <Component02 />
            </>
        );
    }
}