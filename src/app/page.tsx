import { TopBanner } from './components/TopBanner'
import { ListVideos } from './components/ListVideos'
import { DemoBanner } from './components/DemoBanner'

export const metadata = {
  title: 'Leadster',
  description:
    'Plataforma líder em Marketing Conversacional no Brasil. Pronto para triplicar sua Geração de Leads? Criação e ativação em 4 minutos.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function Home() {
  return (
    <main>
      <TopBanner />
      <ListVideos />
      <DemoBanner />
    </main>
  )
}
