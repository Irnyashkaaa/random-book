import React, { useState } from 'react'
//@ts-ignore
import { ChooseBookForm } from './ChooseBookForm.tsx'
// @ts-ignore
import { CurrentBook } from './CurrentBook.tsx'

export type booksGenre = 'novels' | 'classical' | 'detectives' | 'fantasy' | 'antiUtopia' | 'manga' | 'psyhology' | 'bussiness' | 'culture'

export const Books = () => {

    const [genre, setGenre] = useState<booksGenre>('novels')
    const [currentBookCode, setCurrentBookCode] = useState<number>(0)

    return (
        <React.Fragment>
            <ChooseBookForm setGenre={setGenre} setCurrentBook={setCurrentBookCode}/>
            <CurrentBook genre={genre} currentBookCode={currentBookCode}/>
        </React.Fragment>
    )
}