import React, { Component } from 'react';
import { Component02 } from './Component02';
import { Item } from './Item';
import { Link } from 'react-router-dom';

export class Component01 extends Component {

    state = {
        texto : "Meu primeiro componente em classe",
        cursos: [
            "React.js",
            "Angular",
            "React.js",
            "Angular"
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

    componentDidMount(){
        console.log('componentDidMount do Component01');
        setTimeout(()=> {
            this.setState({cursos: [
                "React.js",
                "Angular",
                "Vue.js",
                "Next.js",
                "C#",
                "PHP",
                "Kotlin",
                "Python",
            ]});
        }, 3000);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate do Component01');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount do Component01');
    }

    render() {

        const {texto, cursos } = this.state;

        return (
            <>
                <Link to="/componente2">Componente2</Link>
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