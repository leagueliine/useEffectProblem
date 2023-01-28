import pikachu from '../../img/pikachu.png'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Card = (props) => {
 const [pokemon, setPokemon] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await res.json()
      console.log(data)
      setPokemon(data.results)
    }

    fetchData()
  },[])

  console.log(pokemon)
 
  return (
    <>
      <ul>

        {
          pokemon.map(({name, url}) => {
            return (
              <li key={name}>O nome do Pokemon é {name} <br/> Essa é a URL {url}</li>
              
            )
          })
        }
      </ul>
    </>

    
//     <Main>
//       <div>
//         <Img src={pikachu} alt='imagem do pokemon'></Img>
//       </div>
//       <Div>
//       <h2>Pikachu</h2>
//       <p>Type</p>
//       </Div>
//       <Footer>
//         <a src=''>Read More</a>
//       </Footer>
//     </Main>
  ) 
}

const Div = styled.div`
  border-radius: 7px;
  background-color: #8B4513;
  left: -1px;
  top:4px;
  width: 226px;
  height: 125px;
  position: relative;
  padding-left: 10px;
  border: 1px solid orangered;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

const Footer = styled.footer`
  top: 287px;
  position: absolute;
  padding-left: 149px;

`

const Img = styled.img`
  position: relative;
  width: 150px;
  top: -3px;
  left:47px
`

const Main = styled.main`
  border-radius: 15px;
  padding-top 10px;
  margin-top: 15px;
  padding-left: 15px;
  margin-left: 30px;
  border: 1px solid black;
  width:  250px;
  height: 300px;
  background-color: chocolate;
  `

export { Card }
 
