import { useState,useEffect } from 'react';
import {useParams} from "react-router-dom"
import axios from "axios"
import {Header} from "../../components/Header";
import { BarraProdutos } from '../../components/BarraProdutos';
import {Footer} from "../../components/Footer"

import "./produtoid.css"


const ProdutoId=()=>{
  const {id}=useParams();
  let baseURL="https://fakestoreapi.com"

  const [produtoid,setProdutoId]=useState([])

  async function buscarProdutoPorId (){
    const res= await axios.get(`${baseURL}/products/${id}`)
   .then((response)=>setProdutoId(response.data))
  }

  useEffect(()  =>{
    buscarProdutoPorId()
  },[])

    return(
       <section>
        <Header/>
        <BarraProdutos/>
         <div id="produto" key={produtoid.id}>
              <div className='container'>
              <div className="image" >
                    <img src={produtoid.image} alt="imagem do produto"  width={200} />
               </div>
               <div className='texto'>
                    <div className="title">
                       <h3>{produtoid.title}</h3>
                    </div>
                      <div className="category">
                        <h3>
                        Categoria: {produtoid.category}
                        </h3>
                      </div>
                    <div>
                      <div className="description">
                            <h4>
                                   <span>Especificação:</span>  {produtoid.description}
                            </h4>
                      </div>
                    <div className='price'>
                      <h3>Price: {produtoid.price}</h3>
                    </div>
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
         </div>
        <Footer/>
       </section>
    )
}


export default ProdutoId;