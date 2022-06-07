import React from 'react'
import * as S from '../repository-item/layout'

function RepositoryItem({ name, linkToRepo, fullName }) {
  return (
    <S.Wrapper>
      <h2> {name} </h2>
      <h4> Full Name: </h4>
      <a target="_blank" rel="noreferrer" href={linkToRepo}>
        {fullName}
      </a>
    </S.Wrapper>
  )
}

export default RepositoryItem
