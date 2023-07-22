import React from 'react'

export const DeleteButton = ({ deletaTudo }) => {
  return (
    <button
      onClick={() => {
        deletaTudo()
      }}
      className="deleteAll"
    >
      Deletar Todas
    </button>
  )
}
