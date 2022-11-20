import { Header } from "../../components/Header"
import { Produto } from "../../components/Producto"
import { ListaProduto } from "../../components/ListaProdutos"
import { Footer } from "../../components/Footer"
import { PublicidadeKandengue } from "../../components/PublicidadeKandengue"
import { BarraProdutos } from "../../components/BarraProdutos"


const Home =()=>{
    return(
        <div className="h-home">
            <Header/>
            <BarraProdutos/>
            <PublicidadeKandengue/>
            <ListaProduto/>
            <Footer/>
        </div>
    )
}
export default Home