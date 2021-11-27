import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date())
  const [data, setData] = useState('')
  const [completed, setComplete] = useState(false)
  const [todo, setTodo] = useState([])
  const [filterItem, setFilterItem] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (data && startDate) {
      const newTodo = {
        id: new Date().getTime().toString(),
        data,
        startDate,
        completed,
      }
      setTodo([...todo, newTodo])

      setStartDate(new Date())
      setComplete(false)
      setData('')
    } else {
      alert('please enter all the value')
    }
  }
  useEffect(() => {
    setFilterItem([...todo])
  }, [todo])

  const handleFilter = (e) => {
    let value = e.target.value

    if (value === 'all') {
      setFilterItem(todo)
    }
    if (value === 'completed') {
      let newValue = todo.filter((item) => item.completed === true)
      setFilterItem(newValue)
    }
    if (value === 'incomplete') {
      let newValue = todo.filter((item) => item.completed === false)
      setFilterItem(newValue)
    }
  }

  return (
    <AppContext.Provider
      value={{
        startDate,
        setStartDate,
        data,
        setData,
        completed,
        setComplete,
        handleSubmit,
        todo,
        handleFilter,
        filterItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
