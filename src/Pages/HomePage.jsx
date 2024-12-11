import imageHome from '../assets/harryPotterHome.jpg'
import style from './HomePage.module.css'
import Card from '../Components/Card'
import { characters } from '../Characters'
import axios from 'axios'
import { BASE_API_URI } from '../baseUrl'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function HomePage() {

    const [characters, setCharacters] = useState([])

    const { id } = useParams()

    function fetchCharacters() {
        axios.get(`${BASE_API_URI}/characters`)
            .then(res => {
                console.log(res);
                setCharacters(res.data.characters)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchCharacters()
    }, [id])

    return (
        <div>
            <h1 className={style.title}>La magia di Harry Potter</h1>
            <img className={style.imgHome} src={imageHome} alt="" />
            <h2 className={style.sub_title}>Scegli il personaggio</h2>
            <section className={style.container}>
                <div className={style.row}>
                    {characters.map((character) => (
                        <div key={character.id} className={style.col_4}>
                            <Card name={character.name} image={character.image} />
                        </div>
                    ))}

                </div>
            </section>
        </div>
    )
}
