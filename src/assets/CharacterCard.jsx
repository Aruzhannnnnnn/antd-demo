import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterCard(props) {
  const { id, name, status, gender, image } = props;


  return (
    <Link to={`/character/${id}`}>
      <Card
        key={id}
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={image} />}
      >
        <p>{name}</p>
        <p>{status}</p>
        <p>{gender}</p>
      </Card>
    </Link>
  );
}
