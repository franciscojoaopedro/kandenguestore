import "./produto.css"

const Produto=(props)=>{
    return(
        <div className="produto" >
            <div className="p-imagens">
                <img src={props.url}  />
            </div>

            <div className="p-info" >
                <h2>No final do mês passado participei de um code challenge onde recebi um layout do Figma e precise implementar a versão web </h2>
                
                <div className="p-preco">
                  <h2>
                  $889.99
                  </h2>
                </div>

                <div className="p-referencia" >
                    <h2>Referencia: <span>172gs7aj</span></h2>
                </div>
            </div>
            <div className="btns" >
               <div className="btn">
               <button className="btn-comprar-agora">Comprar</button>
               </div>
                <div className="btn" >
                <button className="btn-adicionarCarrinho">Adicionar</button>
                </div>
            </div>
        </div>
    )
}

export {Produto}