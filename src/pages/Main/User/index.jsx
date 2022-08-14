import React from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function User() {
  const navigate = useNavigate()
  const {user} = useSelector(state=>state.login)

  return (
    <div>
      {user.token !== "" ? <span>用户名：admin</span> : <button onClick={()=>navigate('/login')}>请登录</button>}
    </div>
  )
}
