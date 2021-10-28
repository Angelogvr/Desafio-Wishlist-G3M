import { Component } from "react";
import './indexCriar.css';

class DesejosCadastrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDesejos: [],
            descricao: '',
            idUsuario: 0,
            idDesejo: 0,
            /* dataCadastro: '', */
        }
    };

    cadastrarDesejo = (event) => {

        event.preventDefault()

        fetch('http://localhost:5000/api/Desejos', {

            method: 'POST',

            body: JSON.stringify({
                idUsuario: this.state.idUsuario,
                descricao: this.state.descricao,
                /* dataCadastro: this.state.dataCadastro, */
            }),

            headers: { 'Content-Type': 'application/json' }
        })

            .then(console.log('Desejo cadastrado!!!'))

            .catch(erro => console.log(erro))

            .then(this.BuscarDesejos)

            .then(this.LimparCampos)
    }

    atualizarEstadoDescricao = async (event) => {

        await this.setState({
            descricao: event.target.value,
        });
    };

    atualizarUsuario = async (event) => {

        await this.setState({
            idUsuario: event.target.value,
        });
    };

    /* atualizarData = async (event) => {

        await this.setState({
            dataCadastro: event.target.value,
        });
    }; */

    limparCampos = () => {
        this.setState({
            listaDesejos: [],
            descricao: '',
            idUsuario: 0,
            idDesejo: 0,
            /* dataCadastro: '', */
        })
    }
    
    render() {
        return (
            <body>
                <header class="header">
                    <h1 class="quaselog">Wishlist</h1>
                </header>
                <main>
                    <div class="pratcMain">
                        <span class="desjN">Escreva abaixo o seu novo desejo</span>
                        <form onSubmit={this.cadastrarDesejo}>
                            <div class="alinhamento">
                                <input class="input" type="number" value={this.state.idUsuario} onChange={this.atualizarUsuario} placeholder="Digite o seu id" />
                                <input class="input" type="text" value={this.state.descricao} onChange={this.atualizarEstadoDescricao} placeholder="Escreva aqui seu desejo!" />
                                <button type="submit">Adicionar</button>
                            </div>
                        </form>
                    </div>
                </main>
                <footer>
                    <span class="quaselog">Wishlist</span>
                </footer>
            </body>
        )
    }
}

export default DesejosCadastrar
