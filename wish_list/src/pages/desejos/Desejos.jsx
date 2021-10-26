import { Component } from "react";

export default class Desejos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDesejos: [],
            nomeDesejo: '',
            idUsuario: 1,
            email: ''
        }
    };

    listarDesejos = () => {

        fetch('http://localhost:5000/api/Desejo')

            .then(resposta => resposta.json())

            .then(dados => this.setState({ listaDesejos: dados }))

            .catch(erro => console.log(erro))
    }


    cadastrarDesejo = (event) => {

        event.preventDefault()

        fetch('http://localhost:5000/api/Desejo', {

            method: 'POST',

            body: JSON.stringify({
                nomeDesejo: this.state.nomeDesejo,
            }),

            headers: { 'Content-Type': 'application/json' }
        })

            .then(console.log('Desejo cadastrado!!!'))

            .catch(erro => console.log(erro))

            .then(this.BuscarDesejos)

            .then(this.LimparCampos)
    }

    atualizarEstadoTitulo = async (event) => {

        this.setState({
            nomeDesejo: event.target.value
        });
    };

    atualizarEmail = async (event) => {

        this.setState({
            email: event.target.value
        });
    };

    limparCampos = () => {
        this.setState({
            nomeDesejo: '',
            idUsuario: 0
        })
    }

    render() {
        return (
            <main>
                <div>
                    <div>
                        <h1>WishList</h1>
                        <form onSubmit={this.cadastrarDesejo}>
                            <h2>Cadastrar novo desejo</h2>
                            <input type="text" value={this.state.email} onChange={this.atualizarEmail} placeholder="Digite o seu email" />
                            <input type="text" value={this.state.nomeDesejo} onChange={this.atualizarEstadoTitulo} placeholder="Digite o seu desejo" />
                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                    <h2>Desejos</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome Desejo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listaDesejos.map((desejos) => {
                                    return (
                                        <tr key={desejos.idDesejo}>
                                            <td>{desejos.idDesejo}</td>
                                            <td>{desejos.nomeDesejo}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        )
    }
}
