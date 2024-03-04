import React, { useEffect, useState } from 'react';
import { Flex, Input } from "antd";
import CharacterCard from '../assets/CharacterCard';
import { useDebounce } from '../hooks/useDebounce';
import Pagination from '../components/UI/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter, setSearchText } from '../store/slices/characterSlice';

export function MainPage() {
  const dispatch = useDispatch();
  const { data, searchText } = useSelector((state) => state.character);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');

  const inputHandler = (event) => {
    dispatch(setSearchText(event.target.value));
  };

  useEffect(() => {
    dispatch(fetchCharacter({ currentPage, search: searchText }));
  }, [currentPage, searchText]); 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (windowHeight + scrollTop >= documentHeight - 100) {
      loadMore(); 
    }
  };

  const loadMore = () => {
    if (!isLoading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <Flex align='center' wrap='wrap' gap='small'>
        <Input placeholder="Basic usage" onChange={inputHandler} />
        {data.map(character => (
          <div key={character.id}>
            <CharacterCard id={character.id} name={character.name} status={character.status} gender={character.gender} image={character.image} onClick />
          </div>
        ))}
      </Flex>
      <Pagination total={data?.info?.count} isLoading={isLoading} currentPage={currentPage} onChange={setCurrentPage} />
    </div>
  );
}

export default MainPage;
