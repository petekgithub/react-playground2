import React from 'react'
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Persons from './Persons';




const Refresh = () => {

  const navigate = useNavigate();

  // function handleClick() {
  //   navigate("/persons")
  // }

  return (
    <>
      <button onClick={() => navigate(-1)}>go back</button>
      <Routes>
        <Route exact path="/" element={<Persons persons={[]} />}/>
      </Routes>
    </>
  )
}

export default Refresh;