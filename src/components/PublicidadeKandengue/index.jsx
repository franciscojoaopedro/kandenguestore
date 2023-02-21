import { Logo } from "../Logo"
import "./publicidade.css"
import { useState, useEffect } from 'react';

const PublicidadeKandengue=()=>{
    const [srcImg,setSrcImg]=useState("/public/black.png")


    useEffect(()=>{

    })
    async function imgSlider(url){
        return  setSrcImg(url)
    }
    
    return(
        
        <section className="s-publicidade" >
           <div className="container-pub">
           <div className="texto-pub">
            <h3> Loja em desenvolvimento, para uma melhor experiência na Kandengue Store, use um computador.Obrigado!</h3>
           {
            /*
                 <h3>Os melhores computadores do mundo você encontra na <strong> Kandengue Store</strong>!
Não não se executa uma instrução em computadores sem um processardor. Compra aqui os melhores acessorios de computadores. Aqui vive a <strong>peformance,desempenho,qualidade,velocidade,entrega,</strong> e ainda temos preços mais baratos para acessorios de qualidade..</h3>
            */
           }
            </div>
           <di className="logo-pub">
           <Logo/>
           </di>
            <div className="p-images">
                <img src={srcImg} alt=""  />
               <div className="colors">
               <div className="listcolor">
                   <span id="green" onClick={()=>imgSlider("/public/green.png")}></span>
                   <span id="pink" onClick={()=>imgSlider("/public/pink.png")}></span>
                   <span id="blue" onClick={()=>imgSlider("/public/blue.png")} ></span>
                   <span id="black" onClick={()=>imgSlider("/public/black.png")}></span>
                   <span id="white" onClick={()=>imgSlider("/public/white.png")} ></span>
                    <span id="red" onClick={()=> imgSlider("/public/red.png")}></span>
                </div>
               </div>
            </div>
           </div>
        </section>
    )
}
export {PublicidadeKandengue}