import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModifcada = `${props.placeholder}...`
    return (

        <form>
            <section>
                <div className="campo_texto">
                    <label>{props.label}</label>
                    <input placeholder={placeholderModifcada}></input>
                </div>
            </section>
        </form>
    )
}

export default CampoTexto