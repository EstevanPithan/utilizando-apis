import React, { useState } from 'react'
import * as S from './styled'
import useGithub from '../../hooks/github-hooks'

function Header() {
  const { getUser } = useGithub()

  const [usernameForSearch, setusernameForSearch] = useState()

  const submitGetUser = () => {
    if (!usernameForSearch) return
    return getUser(usernameForSearch)
  }

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite aqui para pesquisar..."
          onChange={event => setusernameForSearch(event.target.value)}
        />
        <button onClick={submitGetUser}>Buscar</button>
      </S.Wrapper>
    </header>
  )
}

export default Header
