import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CharacterPage() {
    const {id} = useParams();

const [character,setCharacter]= useState(null)

    useEffect(()=>{
        const fetchCharacterPage = async () => {
            const json = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const res = await json.json()
            setCharacter(res);
        }

        fetchCharacterPage()
        
    }, [id])
 
    return (
    <div>
        <p>{character?.name}</p>
        <p>{character?.status}</p>
        <p>{character?.gender}</p>
        <p>{character?.episode}</p>
        <img alt="example" src={character?.image} />
    </div>
  )
}
