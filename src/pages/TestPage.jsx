import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TestPage() {
  const { data } = useSelector((state) => state.character);
  return (
    <div>
      {data.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}
