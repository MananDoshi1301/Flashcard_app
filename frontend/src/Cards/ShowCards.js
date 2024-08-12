import React, { useEffect, useState } from 'react'
import styles from "./ShowCard.module.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from './Card/Card'
import cx from "classnames";
import { ArrowRightCircleFill, ArrowLeftCircleFill } from 'react-bootstrap-icons';
import axios from "axios";

const ShowCards = () => {
    const [cards, setCards] = useState(null)

    // const [currentCard, setCurrentCard] = useState(cards[0])

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const API = "http://localhost:5000/"
                const response = await axios.get(API)
                if (response.status == 200) {
                    setCards(response.data.data)
                    console.log(response.data)
                }
            } catch (error) {
                console.log(error)
                alert("The app has failed!")
            }

        }
        fetchCards()
    }, [])

    return (

        <div className={styles.showCards}>

            <div className={styles.renderCards}>
                <Carousel
                    centerMode={true}
                    centerSlidePercentage={100}
                    autoPlay={false}
                    className={styles.carousel}
                >
                    {cards && cards.map((item, key) => {
                        return (

                            <div className={styles.cardSlide} >
                                <Card question={item.question} answer={item.answer} key={key} />
                            </div>

                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default ShowCards