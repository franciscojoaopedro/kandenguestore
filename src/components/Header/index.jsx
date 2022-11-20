import "./header.css";

import {Logo} from "../Logo"
import { Input } from "../Input";

const Header=()=>{
    return(
        <header className="h-header" >
            <nav>
            <Logo/>
            
            <Input
                placeholder="pesquisar produto"

            />
              <ul>
                <li>
                    <select className="s-idioma" >
                        <option value="English" key="">En</option>
                        <option value="" key="">Pt</option>
                    </select>
                </li>
                <li><a href="#" className="btn-links" >Produtos</a></li>
                <li><a href="#" className="btn-links" >Carrinho</a></li>
              </ul>
            </nav>
        </header>
    )
}

export {Header}