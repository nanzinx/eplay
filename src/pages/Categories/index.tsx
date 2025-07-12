import Banner from '../../components/Banner'
import { ProductsList } from '../../components/ProductsList'
import { Game } from '../Home'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && fightGames && sportGames && simulationGames && rpgGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportGames} title="Esportes" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
        <ProductsList games={fightGames} title="Luta" background="gray" />
        <ProductsList games={rpgGames} title="RPG" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
