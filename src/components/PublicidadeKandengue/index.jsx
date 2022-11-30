import { Logo } from "../Logo"
import "./publicidade.css"

const PublicidadeKandengue=()=>{
    return(
        

        <section className="s-publicidade" >
           <div className="container">
           <div className="texto">
                <h3>Os melhores computadores do mundo você encontra na <strong> Kandengue Store</strong>!
Não não se executa uma instrução em computadores sem um processardor. Compra aqui os melhores acessorios de computadores. Aqui vive a <strong>peformance,desempenho,qualidade,velocidade,entrega,</strong> e ainda temos preços mais baratos para acessorios de qualidade..</h3>
            </div>
            <Logo/>
            <div className="p-images">
                <img src="../../../public/iphones/blue.png " alt="" />

               <div className="colors">
               <div className="listcolor">
                   <span id="green" >1</span>
                   <span>1</span>
                   <span>1</span>
                   <span>1</span>
                   <span>1</span>
                   <span>1</span>
                </div>
               </div>
            </div>
           </div>
        </section>
    )
}
export {PublicidadeKandengue}