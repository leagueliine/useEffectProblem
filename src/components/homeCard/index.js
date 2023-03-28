import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { PokemonCard } from '../pokemon-card'

const HomeCard = (props) => {


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
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      let contador = 1
      const promises = url.map(async (e) => {
        const dataPromise = await fetch(`https://pokeapi.co/api/v2/pokemon/${contador++}`).then((res) => res.json());
        return dataPromise
      })

      const res = await Promise.all(promises)
      console.log(res[1].forms[0].name)
      setChar(res)
    }
    fetchData()
  },)

  return (
    <>
      <Header>
        <Input type='search' placeholder='Filtre aqui' />
      </Header>
      <Div>
        {

          char.map((e, i) => {
            return (
              <PokemonCard key={i} type={char[i].types[0].type.name} lvl={char[i].height} img={char[i].sprites.front_default} nome={char[i].forms[0].name} status={char[i].stats[0].base_stat}></PokemonCard>
            )
          })
        }
      </Div>
    </>
  )
}

const Input = styled.input`
  position: relative;
  top: 11px;
  border-radius: 5px;
  left: 1113px;
  height: 25px;
  font-weight: bold;
`

const Header = styled.header`
  background-color: aqua;
  width: 100%;
  height: 50px;
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
  `

export { HomeCard }