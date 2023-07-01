import { ChangeEvent } from 'react'
import { SortingContainer } from './styles'

interface SortingProps {
  orderByVideos: string
  orderBy: (orderby: string) => void
}

export function Sorting({ orderByVideos, orderBy }: SortingProps) {
  function handleOrderList(event: ChangeEvent<HTMLSelectElement>) {
    orderBy(event.target.value)
  }

  return (
    <SortingContainer>
      <strong>Ordenar por</strong>
      <select value={orderByVideos} onChange={handleOrderList}>
        <option value="">Selecione</option>
        <option value="date">Data de Publicação</option>
        <option value="asc">Ordem Alfabética</option>
      </select>
    </SortingContainer>
  )
}
