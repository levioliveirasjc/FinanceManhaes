
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (password === 'minhasfinancas2025') {
      localStorage.setItem('authenticated', 'true')
      router.push('/')
    } else {
      setError('Senha incorreta')
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite a senha"
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <button onClick={handleLogin} style={{ marginLeft: '1rem', padding: '0.5rem' }}>
        Entrar
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
