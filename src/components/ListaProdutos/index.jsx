import "./index.css"

import { Produto } from "../Producto"
import { useState,useEffect } from 'react';

import { TodosProdutos } from "../../db/produto";

const ListaProduto=()=>{
    const [produto,setProduto]=useState([])


    useEffect(()=>{
        buscarProdutos();
    },[produto])
    async function buscarProdutos(){
        const data= await TodosProdutos
        setProduto(data)
    }
    
    return(
        <ul className="list-produtos" >
            {produto.map((produto,indice)=><Produto
                url={produto.img}
                preco={produto.preco}
                descricao={produto.descricao}
                referencia={produto.referencia}
                id={indice}
                
                />)}
    
        </ul>
    )
}

export {ListaProduto}