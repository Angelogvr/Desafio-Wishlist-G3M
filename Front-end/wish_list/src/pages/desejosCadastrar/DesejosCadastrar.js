import { Component } from "react";

class Desejos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDesejos: [],
            descricao: '',
            idUsuario: 0,
            idDesejo: 0,
            dataCadastro: '',
            /* email: '',
            senha: '' */
        }
    };

    componentDidMount() {
        this.listarDesejos()
    }

    listarDesejos = () => {

        fetch('http://localhost:5000/api/Desejos')

            .then(resposta => resposta.json())

            .then(dados => this.setState({ listaDesejos: dados }))

            .catch(erro => console.log(erro))
    }


    cadastrarDesejo = (event) => {

        event.preventDefault()

        fetch('http://localhost:5000/api/Desejos', {

            method: 'POST',

            body: JSON.stringify({
                idUsuario: this.state.idUsuario,
                descricao: this.state.descricao,
                dataCadastro: this.state.dataCadastro,
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

    atualizarData = async (event) => {

        await this.setState({
            dataCadastro: event.target.value,
        });
    };

    limparCampos = () => {
        this.setState({
            listaDesejos: [],
            descricao: '',
            idUsuario: 0,
            idDesejo: 0,
            dataCadastro: '',
            /* email: '',
            senha: '' */
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
                            <input type="number" value={this.state.idUsuario} onChange={this.atualizarUsuario} placeholder="Digite o seu id" />
                            <input type="text" value={this.state.descricao} onChange={this.atualizarEstadoDescricao} placeholder="Digite o seu desejo" />
                            <input type="datetime" value={this.state.dataCadastro} onChange={this.atualizarData} placeholder="Digite a data" />
                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                    <h2>Desejos</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>idDesejo</th>
                                <th>idUsuario</th>
                                <th>descrição</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listaDesejos.map((desejos) => {
                                    return (
                                        <tr>
                                            <td>{desejos.idDesejo}</td>
                                            <td>{desejos.idUsuario}</td>
                                            <td>{desejos.descricao}</td>
                                            <td>{desejos.dataCadastro}</td>
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

export default Desejos
