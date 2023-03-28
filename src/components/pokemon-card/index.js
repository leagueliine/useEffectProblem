import styled from 'styled-components'
import { useState, useEffect } from 'react'

export const PokemonCard = (props) => {



  return (
    <Main>
      <DivImg>
        <H3>{props.lvl}</H3>
        <Img src={props.img}></Img>
      </DivImg>
      <Div>
        <H2>{props.nome}</H2>
        <P>Status : {props.status}</P>
        <PP>Type: {props.type}</PP>
      </Div>
      <Footer>
        <a src=''></a>
      </Footer>
    </Main>
  )
}


const PP = styled.p`
position:relative;
top: -40px;
`

const P = styled.p`
  position:relative;
  top: -30px;
`

const H2 = styled.h2`
  position:relative;
  top: -13px
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
  left: 164px;
`

const Div = styled.div`
  border-radius: 7px;
  background-color: #8B4513;
  left: -1px;
  top:-22px;
  width: 175px;
  height: 106px;
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
  top: -11px;
  left:23px
`

const Main = styled.main`
  border-radius: 15px;
  padding-top 10px;
  margin-top: 15px;
  padding-left: 15px;
  margin-left: 30px;
  border: 1px solid black;
  width:  200px;
  height: 250px;
  background-color: chocolate;
  `