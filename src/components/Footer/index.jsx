import { Logo } from "../Logo"
import "./footer.css"

const Footer=()=>{

    return (
        <footer className="f-footer" >
            <nav>
        <div className="logo">
        <Logo/>
        </div>
        <ul className="rede-social">
            <li className="social">
                <a href="" id="facebook">Facebook</a>
            </li>
            <li className="social">
                <a href="" id="instagram">Instagram</a>
            </li>
            <li className="social">
            <a href="" id="whatsapp">WhatsApp</a>
            </li>
        </ul>
            </nav>

        </footer>
    )
}

export {Footer}