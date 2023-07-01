import { CategoriesContainer, Category } from './styles'

interface CategoryProps {
  id: number
  name: string
}

interface CategoriesProps {
  categories: CategoryProps[]
  isSelected: string
  selectCategory: (category: string) => void
}

export function Categories({
  categories,
  isSelected,
  selectCategory,
}: CategoriesProps) {
  function handleSelectCategory(category: string) {
    selectCategory(category)
  }

  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return (
          <Category
            className={isSelected === category.name ? 'active' : ''}
            onClick={() => handleSelectCategory(category.name)}
            key={category.id}
          >
            {category.name}
          </Category>
        )
      })}
    </CategoriesContainer>
  )
}
