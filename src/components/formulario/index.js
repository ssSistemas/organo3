import './Formulario.css'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../../botao'


const Formulario = () => {

    const times = [
        'programação',
        'frontEnd',
        'devops',
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados do amigos</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Time" placeholder="Digite seu time" />
                <ListaSuspensa itens={times}/>
                <Botao>Criar Card</Botao> 
            </form>
        </section>
    )
}

export default Formulario