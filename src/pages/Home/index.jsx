import { Header } from "../../components/Header"
import { ListaProduto } from "../../components/ListaProdutos"
import { Footer } from "../../components/Footer"
import { PublicidadeKandengue } from "../../components/PublicidadeKandengue"
import { BarraProdutos } from "../../components/BarraProdutos"


const Home =()=>{
    return(
        <div className="h-home">
            <Header/>
           <div>
             <BarraProdutos/>
           </div>
          <PublicidadeKandengue/>
            <ListaProduto/>
            <Footer/>
        </div>
    )
}
export default Home