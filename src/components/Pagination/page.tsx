import { PageItem, PaginationContainer } from './styles'

export function Pagination() {
  return (
    <PaginationContainer>
      <strong>Página</strong>
      <div>
        <PageItem>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem className="active">3</PageItem>
        <PageItem>4</PageItem>
      </div>
    </PaginationContainer>
  )
}
