import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components'

const CardDetalhado = (props) => {

  const [url, setUrl] = useState([]);
  const [char, setChar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
      const data = await res.json()
      const urls = await data.results.map((e) => {
        return e.url
      })
      setUrl([...urls])
    }

    fetchData()
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let contador = 1
      const promises = url.map(async (e) => {
        const dataPromise = await fetch(`https://pokeapi.co/api/v2/pokemon/${contador++}`).then((res) => res.json());
        return dataPromise
      })

      const res = await Promise.all(promises)
      setChar(res)
    }

    fetchData()
  }, [])


  return (
    <DivGl>
      <Main>
        <DivImg>
          <H3>{char[1].height}</H3>
          <Img src={char[1].sprites.front_default}></Img>
          <H2>{char[1].forms[0].name}</H2>
          <P>Base Status : {char[1].stats[0].base_stat}</P>
          <PP>Type: {char[1].types[0].type.name}</PP>
        </DivImg>
        <Div>
          <H2A>Moves</H2A>
          <H3T>Dfire-punch</H3T>
          <H3T>thunder-punch</H3T>
          <H3T>fire-punch</H3T>
          <H3T>thunder-punch</H3T>

        </Div>
        <DivMoves>
          <H2M>Abilitys</H2M>
          <H3T>raio do trovao :</H3T>
          <PD>Während eines Sandsturms hat ein Pokémon mit dieser Fähigkeit einen um 25% erhöhten evasion und es nimmt keinen Schaden durch Sandstürme. Der Bonus zählt nicht als Statuswerte Änderung. Außerhalb vom Kampf: Wenn ein Pokémon mit dieser Fähigkeit an erster Stelle im Team steht, tauchen im Sandsturm nur halb so viele Pokémon auf."</PD>
          <H3T>raio do trovao :</H3T>
          <PD>Während eines Sandsturms hat ein Pokémon mit dieser Fähigkeit einen um 25% erhöhten evasion und es nimmt keinen Schaden durch Sandstürme. Der Bonus zählt nicht als Statuswerte Änderung. Außerhalb vom Kampf: Wenn ein Pokémon mit dieser Fähigkeit an erster Stelle im Team steht, tauchen im Sandsturm nur halb so viele Pokémon auf."</PD>
        </DivMoves>
      </Main>
    </DivGl>

  )
}

export { CardDetalhado }


const H3T = styled.h4`
  position: relative;
  top: -37px;
  color: DeepPink;
`

const PD = styled.p`
  position: relative;
  top: -45px;
  height: 100px;
  overflow: auto;
  scroll-behavior: smooth;
  color: yellow;
  &::-webkit-scrollbar {
    width: 10px;
  };  
  &::-webkit-scrollbar-track {
    background: orange; 
  };
  &::-webkit-scrollbar-thumb {
    background-color: blue; 
    border-radius: 50px;
    border: 3px solid orange;
  }

  `

const DivGl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const PP = styled.p`
position:relative;
top: -157px;
`

const P = styled.p`
  position: relative;
  top: -157px;
`
const H2A = styled.h2`
  position:relative;
  top: -16px;
  color: DarkOrange;
`

const H2M = styled.h2`
  position:relative;
  top: -15px;
  color: DarkOrange;	
`

const H2 = styled.h2`
  position:relative;
  top: -157px;
`

const DivImg = styled.div`
  position: relative;
`

const H3 = styled.h3`
  display:flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 30px;
  height:30px;
  border-radius: 50%;
  color: #000000;
  background: #ffffff;
  position: absolute;
  top: -25px;
  left: 355px;
`

const Img = styled.img`
  position: relative;
  width: 150px;
  top: -11px;
  left: 188px;
`

const Main = styled.main`
  border-radius: 15px;
  padding-top 10px;
  margin-top: 15px;
  padding-left: 15px;
  margin-left: 30px;
  border: 1px solid black;
  width:  392px;
  height: 590px;
  background-color: chocolate;
  `
const Div = styled.div`
  border-radius: 7px;
  background-color: #8B4513;
  left: -1px;
  top: -162px;
  width: 175px;
  height: 211px;
  position: relative;
  padding-left: 10px;
  border: 1px solid orangered;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

const DivMoves = styled.div`
  border-radius: 7px;
  background-color: #8B4513;
  left: 191px;
  top: -375px;
  width: 175px;
  height: 382px;
  position: relative;
  padding-left: 10px;
  border: 1px solid orangered;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
