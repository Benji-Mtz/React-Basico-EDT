import { Component } from "react";

class Calculadora extends Component {
    constructor(props){
        super(props)
        this.state = {
            numero1: 0,
            numero2: 0
        }
    }

    render() {
        return (
            <>
                <h2>{ this.props.name }</h2>
                <form>
                    <input 
                        type="number" 
                        value={ this.state.numero1 } 
                        name="numero1" 
                        onChange={e => {
                            this.setState({
                                ...this.state,
                                numero1: e.target.value
                            })
                        }}
                    />
                    <input 
                        type="number" 
                        value={ this.state.numero2 } 
                        name="numero2"
                        onChange={e => {
                            this.setState({
                                ...this.state,
                                numero2: e.target.value
                            })
                        }}
                    />
                    <input type="submit" name="sumar" value="sumar" />
                </form>
                <span>Resultado: { Number(this.state.numero1) + Number(this.state.numero2) }</span> 
            </>
        );
    }
}

export default Calculadora