import style from './About.module.css'
import about from '../assets/about.jpg'

export default function About() {
    return (
        <div>
            <h1 className={style.title}>About</h1>
            <img className={style.imgHome} src={about} alt="" />
            <div className={style.about_text}>
                <h3 className={style.about_title}>Storia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, maxime? Eaque assumenda eos ab vero perspiciatis consequatur quaerat tenetur veniam porro officia, quidem perferendis quod beatae vitae, incidunt cumque maxime. Ipsa voluptate quibusdam, distinctio ea, ipsum veritatis dolorem officiis tenetur deleniti minus nostrum iure accusamus culpa error nulla repellat excepturi asperiores, quis molestias. Quam unde officiis praesentium ipsum vero. Dolores aperiam beatae explicabo corrupti provident voluptatum voluptatem aut commodi eveniet amet, reprehenderit esse illo earum voluptas dolorum enim cumque veniam ullam sed aliquid accusantium, ipsum sit iure! Commodi provident quam autem fuga consectetur suscipit quo, quia laudantium dolorem voluptates adipisci.</p>
            </div>
            <div className={style.about_text}>
                <h3 className={style.about_title}>Curiosità</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, maxime? Eaque assumenda eos ab vero perspiciatis consequatur quaerat tenetur veniam porro officia, quidem perferendis quod beatae vitae, incidunt cumque maxime. Ipsa voluptate quibusdam, distinctio ea, ipsum veritatis dolorem officiis tenetur deleniti minus nostrum iure accusamus culpa error nulla repellat excepturi asperiores, quis molestias. Quam unde officiis praesentium ipsum vero. Dolores aperiam beatae explicabo corrupti provident voluptatum voluptatem aut commodi eveniet amet, reprehenderit esse illo earum voluptas dolorum enim cumque veniam ullam sed aliquid accusantium, ipsum sit iure! Commodi provident quam autem fuga consectetur suscipit quo, quia laudantium dolorem voluptates adipisci.</p>
            </div>
        </div>
    )
}

