
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated')
    if (isAuthenticated !== 'true') {
      router.push('/login')
    }
  }, [router])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bem-vindo ao seu Dashboard Financeiro</h1>
      <p>Conteúdo protegido por senha</p>
    </div>
  )
}
