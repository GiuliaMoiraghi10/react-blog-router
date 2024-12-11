import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_API_URI } from '../../baseUrl'
import { characters } from '../../Characters'
import placeHolder from '../../assets/harryPotterHome.jpg'

export default function Show() {

    const { id } = useParams()
    const [characters, setCharacters] = useState()

    useEffect(() => {
        axios.get(`${BASE_API_URI}/characters/${id}`)
            .then(res => {
                console.log(res.character);
                setCharacters(res.characters);
            })
            .catch(err => {
                console.error(err);
                setCharacters();
            });
    }, [id]);

    const navigate = useNavigate()

    return (
        <main>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <h1>Pagina con dettaglio personaggio {id}</h1>
                {/* <h1>{characters.name}</h1> */}
            </div>
            {/* <figure>
                <img src={characters.image ? `${BASE_API_URI}/${characters.image}` : placeHolder} alt={characters.name} />
            </figure>
            <div>
                <p>{characters.description}</p>
            </div> */}
        </main>
    )
}