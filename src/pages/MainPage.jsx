import React, { useEffect, useState } from 'react';
import { Flex, Input, } from "antd";
import CharacterCard from '../assets/CharacterCard';
import { useDebounce } from '../useDebounce';
import Pagination from '../components/Pagination';

export function MainPage() {
  const [characters, setCharacters] = useState({ results: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState('')
  const search = useDebounce(name)


  const onChange = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const fetchCharacter = async () => {
      const json = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${search}`)
      const res = await json.json()
      setCharacters(res);
    }

    fetchCharacter()

  }, [currentPage, search])

  return (
    <div>
      <Flex align='center' wrap='wrap' gap='small'>
      <Input placeholder="Basic usage" onChange={(e) => setName(e.target.value)}/>;
        {characters?.results && characters?.results.map(character => (
          <div key={character.id}>
            <CharacterCard id={character.id} name={character.name} status={character.status} gender={character.gender} image={character.image} onClick/>
          </div>
        ))}
      </Flex>
      {/* <Pagination size="large" total={characters?.info?.count} onChange={onChange} current={currentPage} /> */}
      <Pagination total={characters?.info?.count} onChange={onChange}/>
    </div>
  )
}

export default MainPage;