import React, { useEffect, useState } from 'react';
import { Flex, Input, } from "antd";
import CharacterCard from '../assets/CharacterCard';
import { useDebounce } from '../hooks/useDebounce';
import Pagination from '../components/UI/Pagination/Pagination';
import { useDispatch, useSelector, } from 'react-redux';
import {fetchCharacter, setSearchText} from '../store/slices/characterSlice'

export function MainPage() {
  const dispatch = useDispatch()
  
  const {data,searchText } = useSelector(((state) => state.character))


  const [characters, setCharacters] = useState({ results: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(true)
 
  // const search = useDebounce(name)


  const onChange = (page) => {
    setCurrentPage(page)
  }
  const inputHandler = (event) => {
    dispatch(setSearchText(event.target.value))
  }

  // useEffect(() => {
  //   const fetchCharacter = async () => {
  //     const json = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${search}`)
  //     const res = await json.json()
  //     setCharacters(res);
  //   }

// try {
//   setIsLoading(false)
//   fetchCharacter()
// } catch (error) {
//   console.log(error)
// }finally{
//   setIsLoading(true)
// }

//   }, [currentPage, search])

useEffect(()=>{
  dispatch(fetchCharacter({currentPage,search: searchText}))
  console.log(data)
},[dispatch, searchText])

  return (
    <div>
      <Flex align='center' wrap='wrap' gap='small'>
      <Input placeholder="Basic usage" onChange={inputHandler}/>;
        {data.map(character => (
          <div key={character.id}>
            <CharacterCard id={character.id} name={character.name} status={character.status} gender={character.gender} image={character.image} onClick/>
          </div>
        ))}
      </Flex>
      {/* <Pagination size="large" total={characters?.info?.count} onChange={onChange} current={currentPage} /> */}
      <Pagination total={data?.info?.count} isLoading={isLoading} onChange={onChange}/>
    </div>
  )
}

export default MainPage;