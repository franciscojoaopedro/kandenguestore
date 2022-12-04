import "./index.css"
import axios from "axios";
import { Produto } from "../Producto"
import { useState,useEffect } from 'react';

import { TodosProdutos } from "../../db/produto";

const baseURL="https://fakestoreapi.com/products?limit=20"

const ListaProduto=()=>{
    const [produto,setProduto]=useState([])


    useEffect(()=>{
        buscarProdutos();
    },[produto])
    async function buscarProdutos(){
        const data= await axios.get(baseURL)
        .then((response)=> setProduto(response.data))
    }
    
    return(
        <ul className="list-produtos" >
            {produto.map((produto,indice)=><Produto
                url={produto.image}
                preco={produto.price}
                descricao={produto.description}
                referencia={produto.id}
                id={indice}
                
                />)}
    
        </ul>
    )
}

export {ListaProduto}