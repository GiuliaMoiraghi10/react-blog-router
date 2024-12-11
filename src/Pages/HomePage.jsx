import imageHome from '../assets/harryPotterHome.jpg'
import style from './HomePage.module.css'
import Card from '../Components/Card'
import { characters } from '../Characters'
import axios from 'axios'
import { BASE_API_URI } from '../baseUrl'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function HomePage() {

    return (
        <div>
            <h1 className={style.title}>La magia di Harry Potter</h1>
            <img className={style.imgHome} src={imageHome} alt="" />
            <p className={style.description}>Harry Potter è una saga fantasy scritta da J.K. Rowling, che racconta le avventure di un giovane mago, Harry, cresciuto in una famiglia adottiva, i Dursley, che lo maltrattano e lo tengono all'oscuro della sua vera natura. Alla vigilia del suo undicesimo compleanno, Harry scopre di essere un mago e di appartenere a una famiglia di maghi. Riceve un invito per frequentare la scuola di magia di Hogwarts.

                A Hogwarts, Harry scopre di essere famoso nel mondo magico per aver sconfitto, da neonato, il più temuto mago oscuro di tutti i tempi, Lord Voldemort, che aveva ucciso i suoi genitori. Voldemort tentò di uccidere anche Harry, ma il suo incantesimo fallì, lasciando sul viso di Harry una cicatrice a forma di saetta. Da quel momento, Harry diventa il "Bambino che è sopravvissuto" e una figura centrale nel conflitto tra il bene e il male nel mondo magico.

                Durante i suoi anni a Hogwarts, Harry fa amicizia con Ron Weasley e Hermione Granger, che diventano i suoi compagni più fedeli. Insieme, affrontano numerosi pericoli e misteri, tra cui la scoperta della Camera dei Segreti, la difesa contro le forze oscure, e il tentativo di fermare il ritorno di Voldemort. Nel quarto anno, durante il Triwizard Tournament, Voldemort ritorna in carne e ossa, e la minaccia per il mondo magico diventa sempre più concreta.

                Nei libri successivi, Harry e i suoi amici si preparano alla battaglia finale contro Voldemort e i suoi seguaci, i Mangiamorte. La saga culmina nel settimo libro, Harry Potter e i Doni della Morte, in cui Harry scopre la verità su se stesso, sui Doni della Morte, e sull'importanza del sacrificio. Alla fine, Harry riesce a sconfiggere Voldemort, ma non senza subire molte perdite lungo il cammino.

                La storia di Harry Potter è una riflessione sulla lotta tra il bene e il male, sul valore dell'amicizia, del coraggio, e della lealtà. La saga ha avuto un enorme impatto culturale, ispirando film, parchi tematici, e un'intera generazione di lettori.</p>
        </div>
    )
}
