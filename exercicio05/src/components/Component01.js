import React, { Component } from 'react';
import { Component02 } from './Component02';
import { Item } from './Item';

export class Component01 extends Component {

    state = {
        texto : "Meu primeiro componente em classe",
        cursos: [
            "React.js",
            "Angular",
            "Vue.js",
            "Next.js"
        ]
    }
    
    setTexto = e => this.setState({texto : e.target.value});

    getText = () => {
        if (new Date().getDay % 2 !== 0) {
            return this.state.texto;
        } else {
            return "Dia par";
        }
    }

    render() {

        const {texto, cursos } = this.state;

        return (
            <>
                <input type="text" 
                    value={texto} 
                    onChange={this.setTexto} />
                <h2>{this.getText()}</h2>
                <Component02 titulo="Titulo do Componente 2" />
                <ul>
                    { cursos.map((item, index) => <Item key={index} info={item}/>)}
                </ul>
            </>
        );
    }
}