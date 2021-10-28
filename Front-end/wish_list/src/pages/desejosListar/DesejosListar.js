import { Component } from "react";
import './indexListar.css';
import banner from '../home/Assets/banner.png'

class DesejosListar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDesejos: [],
            descricao: '',
            dataCadastro: '',
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
                        <span class="spanTt">Lista de Desejos</span>
                        <img src={banner} alt="" srcset=""></img>
                        <table class="tb">
                            <thead>
                                <tr>
                                    <th class="desejoTh">Desejo</th>
                                    <th class="DtTh">Data de Criação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listaDesejos.map((desejos) => {
                                        return (
                                            <tr>
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
                        <a class="quaselog" href="http://localhost:3000/">Wishlist</a>
                    </footer>
                </main>
            </body>
        )
    }
}

export default DesejosListar