import './index.css'

import { Header } from './components/Header'
import { Section } from './components/Section'
import { ListItem } from "./components/ListItem"

const gameListData = [
    {
        url: "https://osu.ppy.sh/home",
        imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21465_IGDB-272x380.jpg", 
        imageAlt: "Osu! Logo"
    },
    {
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege",
        imageUrl: "https://www.mobileupdatebr.com.br/wp-content/uploads/2018/08/Tom-Clancy%E2%80%99s-Rainbow-Six-Siege-capa.jpg", 
        imageAlt: "Rainbow six siege capa"
    },
    {
        url: "https://store.playstation.com/pt-br/product/UP9000-CUSA07820_00-THELASTOFUSPART2",
        imageUrl: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02ljdBodKFBiziorYgqftLE.png", 
        imageAlt: "The last of us 2 capa"
    },
]


export function App () {
    return(
        <div className="App">
            <Header />

            <main>
                <Section title="Meus jogos" subTitle="Os games que eu mais curto jogar!" >
                    {/* <ListItem href="https://osu.ppy.sh/home" src="https://static-cdn.jtvnw.net/ttv-boxart/21465_IGDB-272x380.jpg" alt="Osu! Logo" /> */}

                    {
                    gameListData.map(element => {
                        return (
                            <ListItem 
                                href={element.url} 
                                src={element.imageUrl} 
                                alt={element.imageAlt} />
                        )
                    })}
                </Section>    

                <Section title="Canais e Streamers" subTitle="Lista de canais e transmissões que não perco!" >

                </Section>        
            </main>
        </div>
    )
}