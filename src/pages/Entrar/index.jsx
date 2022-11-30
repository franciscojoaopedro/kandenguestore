import { Header } from "../../components/Header"
import "./entrar.css"


const Entrar=()=>{
    return(
        <>
         <Header/>
    <div className="entrar">
        <div className="inputs">
        <div>
            <input type="email" placeholder="email" />
        </div>
        <div>
        <input type="password" placeholder="senha" autoComplete="*******"  />
        </div>
        <div className="btn-box">
            <button className="btn-entrar">Entrar</button>
        </div>
        </div>
    </div>
        </>
    )
}

export default Entrar