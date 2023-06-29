import { CategoriesContainer, Category } from './styles'

export function Categories() {
  return (
    <CategoriesContainer>
      <Category>Agências</Category>
      <Category>Chatbot</Category>
      <Category>Marketing Digial</Category>
      <Category className="active">Geração de Leads</Category>
      <Category>Mídia Paga</Category>
    </CategoriesContainer>
  )
}
