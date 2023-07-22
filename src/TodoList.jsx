// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './TodoList.css'
import Icone from './assets/Icone.png'
import { DeleteButton, Form, List } from './components'

function TodoList() {
  const [lista, setLista] = useState([])

  const [novoItem, setNovoItem] = useState('')

  useEffect(() => {
    const list = localStorage.getItem('lista')
    setLista(JSON.parse(list))
  }, [])

  function adicionaItem(form) {
    form.preventDefault()
    if (!novoItem) {
      return
    }
    setLista([...lista, { text: novoItem, isCompleted: false }])
    localStorage.setItem(
      'lista',
      JSON.stringify([...lista, { text: novoItem, isCompleted: false }]),
    )
    setNovoItem('')
    document.getElementById('input-entrada').focus()
  }

  function clicou(index) {
    const listaAux = [...lista]
    listaAux[index].isCompleted = !listaAux[index].isCompleted
    setLista(listaAux)
  }

  function deleta(index) {
    const listaAux = [...lista]
    listaAux.splice(index, 1)
    setLista(listaAux)
  }

  function deletaTudo() {
    setLista([])
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <Form
        novoItem={novoItem}
        setNovoItem={setNovoItem}
        adicionaItem={adicionaItem}
      />
      <div className="listaTarefas">
        <div style={{ textAlign: 'center' }}>
          {lista.length < 1 && (
            <img className="icone-central" src={Icone} alt="" />
          )}
          <List lista={lista} clicou={clicou} deleta={deleta} />
        </div>
        {lista.length > 0 && <DeleteButton deletaTudo={deletaTudo} />}
      </div>
    </div>
  )
}

export default TodoList
