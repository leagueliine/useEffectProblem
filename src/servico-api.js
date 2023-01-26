export async function pokemons (){
  let res = await fetch('https://pokeapi.co/api/v2/pokemon/');
  return await res.json()
};

export async function criarElementos(){
  const data = await pokemons();
  return(
  await data.results.map((e, index) => {
    return <h2 key={index}>{e.name}</h2>
  })
  )
};
