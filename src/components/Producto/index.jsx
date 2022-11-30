import "./produto.css"

import { useState } from "react"


const Produto=(props)=>{
    
    const [carrinho,setCarrinho]=useState([
        {name_produto:"relogio",preco_produto:121,referencia:"122331",descricao:"Os melhores computadores do mundo você encontra na Kandengue Store! "},
        {name_produto:"relogio1",preco_produto:121,referencia:"1221",descricao:"Os melhores computadores do mundo você encontra na Kandengue Store! "},
        {name_produto:"relogio2",preco_produto:121,referencia:"4342",descricao:"Os melhores computadores do mundo você encontra na Kandengue Store! "},
        {name_produto:"relogio3",preco_produto:121,referencia:"5356",descricao:"Os melhores computadores do mundo você encontra na Kandengue Store! "},
        {name_produto:"relogio4",preco_produto:121,referencia:"7453",descricao:"Os melhores computadores do mundo você encontra na Kandengue Store! "},
    ])

    const adicionarNoCarrinho=(event)=>{
        event.preventDefault()
        alert("adicionado ao carrinho")
        console.log(event)
       localStorage.setItem("produtos",JSON.stringify(carrinho))       
    }

    const LetrasMaiosculas=(content)=>{
        let descricao=content.toUpperCase()
        
        return descricao
    }

    return(
        <form className="produto" key={props.id}>
            <div className="p-imagens">
                <img src={props.url}  />
            </div>

            <div className="p-info" >
                <h2>{LetrasMaiosculas(props.descricao)}</h2>
                
                <div className="p-preco">
                  <h2>
                 {props.preco}
                  </h2>
                </div>

                <div className="p-referencia" >
                    <h2>Referencia: <span>{props.referencia}</span></h2>
                </div>
            </div>
            <div className="btns" >
              {<div className="btn">
               <button className="btn-comprar-agora">Comprar</button>
                </div>}
                <div className="btn" >
                <button className="btn-adicionarCarrinho"
                 onClick={adicionarNoCarrinho}   
                >Adicionar</button>
                </div>
            </div>
        </form>
    )
}

export {Produto}