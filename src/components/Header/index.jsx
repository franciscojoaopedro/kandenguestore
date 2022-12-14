import "./header.css";

import {Logo} from "../Logo"
import { Input } from "../Input";
import Entrar from "../../pages/Entrar";

const Header=()=>{
    return(
        <header className="h-header" >
            <nav>
            <Logo/>
            
            <Input
                placeholder="Pesquisar"

            />
              <ul>
                <li>
                    <select className="s-idioma" >
                        <option value="English" key="">En</option>
                        <option value="" key="">Pt</option>
                    </select>
                </li>
                <li><a href="#" className="btn-links" >Produtos</a></li>
                <li><a href="#" className="btn-links"  >Entrar</a></li>
                <li><a href="#" className="btn-links" >Registrar</a></li>
                <li><a href="#" className="btn-links" >Carrinho  <span id="conter"  >7</span> </a></li>
              </ul>
            </nav>
        </header>
    )
}

export {Header}