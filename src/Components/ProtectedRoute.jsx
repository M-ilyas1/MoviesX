import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const ProtectedRoute = (props) => {
    const {Element} = props;
    let navigate = useNavigate()
    useEffect(() => {
      let login = localStorage.getItem('login')
      if(!login){
        navigate('/logIn')
      }
    })

  return (
    <div>
        <Element />
    </div>
  )
}

export default ProtectedRoute