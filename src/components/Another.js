import React from 'react'
import { useSelector } from 'react-redux'

const Another = () => {
  const value = useSelector((state) => state.value)

  return (
      <div>AnotherComponentCount:{value}</div>
  );
}

export default Another