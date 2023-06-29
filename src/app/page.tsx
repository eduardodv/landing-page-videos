import { TopBanner } from './components/TopBanner/page'
import { DemoBanner } from './components/DemoBanner/page'

export const metadata = {
  title: 'Leadster',
  description:
    'Plataforma líder em Marketing Conversacional no Brasil. Pronto para triplicar sua Geração de Leads? Criação e ativação em 4 minutos.',
}

export default function Home() {
  return (
    <main>
      <TopBanner />
      <br />
      <DemoBanner />
    </main>
  )
}
