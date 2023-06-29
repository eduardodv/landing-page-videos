import { SortingContainer } from './styles'

export function Sorting() {
  return (
    <SortingContainer>
      <strong>Ordenar por</strong>
      <select name="selectOrder">
        <option value="">Selecione</option>
        <option value="data" selected>
          Data de Publicação
        </option>
        <option value="name">Nome</option>
      </select>
    </SortingContainer>
  )
}
