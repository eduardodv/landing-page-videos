import { PageItem, PaginationContainer } from './styles'

interface PaginationProps {
  postsPerPage: number
  totalPosts: number
  currentPage: number
  paginate: (pageNumber: number) => void
}

export function Pagination({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
}: PaginationProps) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  function handlePaginate(number: number) {
    paginate(number)
  }

  return (
    <PaginationContainer>
      <strong>Página</strong>
      <div>
        {pageNumbers.map((number) => {
          return (
            <PageItem
              onClick={() => handlePaginate(number)}
              key={number}
              className={number === currentPage ? 'active' : ''}
            >
              {number}
            </PageItem>
          )
        })}
      </div>
    </PaginationContainer>
  )
}
