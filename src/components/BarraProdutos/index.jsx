import "./barraprodutos.css"
import {Link} from "react-router-dom"
const BarraProdutos=()=>{
    return(
        <div className="barra-produtos" >
            <nav>
                <Link to={"/"} className="btn-link-barra" >Home</Link>
                <a href="#" className="btn-link-barra" >Telefones</a>
                <a href="#" className="btn-link-barra" >Relógios</a>
                <a href="#" className="btn-link-barra" >Computadores</a>
                <a href="#" className="btn-link-barra" >Relógios & Acessórios</a>
                <a href="#" className="btn-link-barra" >Apple<span id="ponto">.</span> </a>
            </nav>
        </div>
    )
}

export {BarraProdutos}