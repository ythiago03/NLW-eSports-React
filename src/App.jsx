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

const channelsListData = [
    {
        url: "https://www.twitch.tv/alanzoka",
        imageUrl: "https://static.wikia.nocookie.net/youtube/images/e/e7/Alanzoka.jpg", 
        imageAlt: "Alanzoka Logo"
    },
    {
        url: "https://www.youtube.com/@rocketseat",
        imageUrl: "https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactjs/3.0.2/1588456824702/Microsoft.VisualStudio.Services.Icons.Default", 
        imageAlt: "Rocketseat Logo"
    },
    {
        url: "https://www.youtube.com/@ruriohama",
        imageUrl: "https://yt3.googleusercontent.com/gw6BRWav3SyG39C2kmEM1VSb5ocjEWuKRBKPhRndqOKmAxj3rzB5OOVQKeE0751DJrPWJH7c=s900-c-k-c0x00ffffff-no-rj", 
        imageAlt: "Ruri Ohama Logo"
    },
]

const socialListData = [
    {
        url: "https://github.com/ythiago03",
        imageUrl: "https://ythiago03-links.netlify.app/images/github.svg", 
        imageAlt: "Github Logo"
    },
    {
        url: "https://instagram.com/ythiago03",
        imageUrl: "https://ythiago03-links.netlify.app/images/instagram.svg", 
        imageAlt: "Instagram Logo"
    },
    {
        url: "https://bit.ly/thiagofidencio",
        imageUrl: "https://ythiago03-links.netlify.app/images/linkedin.svg", 
        imageAlt: "Linkedin Logo"
    },
]

export function App () {
    return(
        <div className="App">
            <Header />

            <main>
                <Section 
                    className="games-list" 
                    title="Meus jogos" 
                    subTitle="Os games que eu mais curto jogar!" 
                >
                    {
                        gameListData.map(element => {
                            return (
                                <ListItem 
                                    href={element.url} 
                                    src={element.imageUrl} 
                                    alt={element.imageAlt} 
                                />
                            )
                        })
                    }
                </Section>    

                <Section 
                    className="channel-list" 
                    title="Canais e Streamers" 
                    subTitle="Lista de canais e transmissões que não perco!" 
                >
                    {
                        channelsListData.map(element => {
                            return (
                                <ListItem 
                                    href={element.url} 
                                    src={element.imageUrl} 
                                    alt={element.imageAlt} 
                                />
                            )
                        })
                    }
                </Section>   

                <Section 
                    className="social-list" 
                    title="Minhas redes" 
                    subTitle="Se conecte comigo agora mesmo!" 
                >
                    {
                        socialListData.map(element => {
                            return (
                                <ListItem 
                                    href={element.url} 
                                    src={element.imageUrl} 
                                    alt={element.imageAlt} 
                                />
                            )
                        })
                    }
                </Section>   
            </main>
        </div>
    )
}