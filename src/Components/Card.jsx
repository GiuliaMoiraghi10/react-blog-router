import style from './Card.module.css'
import Button from './Button'
import imgHarry from '../assets/harryPotter.webp'
import { BASE_API_URI } from '../baseUrl'
import { Link } from 'react-router-dom'
import { characters } from '../Characters'
import Show from '../Pages/SecondPages/Show'


export default function Card(props) {

    const { id, name, image } = props

    return (
        <div className={style.card}>
            <img className={style.image} src={props.image} alt="" />
            <div className={style.card_body}>
                <h3 className={style.card_title}>{props.name}</h3>
                <div>
                    <Button />
                </div>
            </div>
        </div>
    )
}