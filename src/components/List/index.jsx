import React from 'react'

export const List = ({ lista, clicou, deleta }) => {
  return lista.map((item, index) => (
    <div key={index} className={item.isCompleted ? 'item completo' : 'item'}>
      <span
        onClick={() => {
          clicou(index)
        }}
      >
        {item.text}
      </span>
      <button
        onClick={() => {
          deleta(index)
        }}
        className="del"
      >
        Deletar
      </button>
    </div>
  ))
}
