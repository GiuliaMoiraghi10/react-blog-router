import style from './Card.module.css'
import Button from './Button'
import imgHarry from '../assets/harryPotter.webp'


export default function Card(props) {

    return (
        <div className={style.card}>
            <img className={style.image} src={props.image} alt="" />
            <div className={style.card_body}>
                <h3 className={style.card_title}>{props.name}</h3>
                <Button />
            </div>
        </div>
    )
}