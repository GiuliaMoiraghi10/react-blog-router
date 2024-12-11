import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_API_URI } from '../../baseUrl'

export default function Show() {

    const { id } = useParams()
    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_API_URI}/characters/${id}`)
            .then(res => {
                console.log(res.character);
                setPosts(res.characters);
            })
            .catch(err => {
                console.error(err);
                setPosts(null);
            });
    }, [id]);

    return (
        <h1>Pagina con dettaglio personaggio {id}</h1>

    )
}