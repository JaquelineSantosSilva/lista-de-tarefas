import React from 'react'

export const Form = ({ adicionaItem, setNovoItem, novoItem }) => {
  return (
    <form onSubmit={adicionaItem}>
      <input
        id="input-entrada"
        type="text"
        value={novoItem}
        onChange={(e) => {
          setNovoItem(e.target.value)
        }}
        placeholder="Adicione uma tarefa"
      />
      <button className="add" type=" submit">
        Add
      </button>
    </form>
  )
}
