import React from "react";
import { books } from "../dataBase";
import { booksGenre } from "./Books";
// @ts-ignore
import s from './CurrentBookStyle.module.css'

type propsType = {
    genre: booksGenre
    currentBookCode: number
}

export const CurrentBook: React.FC<propsType> = (props) => {

    let currentBook = books[props.genre][props.currentBookCode]

    return (
        <div className={s.body}>


            <img className={s.img} src={currentBook.image} />
            <div className={s.info}>
                <div className={s.title}>
                    {currentBook.name.toUpperCase()}
                </div>
                <div className={s.description}>
                    {currentBook.description}
                </div>
                <div className={s.author}>
                    {currentBook.author}
                </div>
            </div>


        </div>
    )
}