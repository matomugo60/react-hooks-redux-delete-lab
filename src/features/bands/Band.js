import React from 'react'
import { useDispatch } from 'react-redux'
import { bandRemoved } from './bandsSlice'

const Band = ({ band }) => {
  const dispatch = useDispatch()
  const handleRemoveItem = () => {
    dispatch(bandRemoved(band.id))
  }
  return (
    <>
      <li key={band.id}>{band.name}</li>
      <button onClick={handleRemoveItem}>Delete Band</button>
    </>
  )
}

export default Band