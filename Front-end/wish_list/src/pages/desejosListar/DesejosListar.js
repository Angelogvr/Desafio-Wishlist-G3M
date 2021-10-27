import { Component } from "react";
import './indexListar.css';
/* import '../home/Assets/banner' */

class DesejosListar extends Component {
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

    render() {
        return (
            <body>
                <header class="header">
                    <h1 class="quaselog">Wishlist</h1>
                </header>
                <main>
                    <div class="semiMain">
                        <span class="spanTt">Wishlist de Username</span>
                        <img src="../Assets/undraw_To_do_re_jaef 1.png" alt="" srcset=""></img>
                        <table class="tb">
                            <thead>
                                <tr>
                                    <th>idDesejo</th>
                                    <th>idUsuario</th>
                                    <th class="desejoTh">Desejo</th>
                                    <th class="DtTh">Data de Criação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listaDesejos.map((desejos) => {
                                        return (
                                            <tr>
                                                <td>{desejos.idDesejo}</td>
                                                <td>{desejos.idUsuario}</td>
                                                <td class="desejCad">{desejos.descricao}</td>
                                                <td class="dataCad">{desejos.dataCadastro}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <footer>
                        <span class="quaselog">Wishlist</span>
                    </footer>
                </main>
            </body>
        )
    }
}

export default DesejosListar