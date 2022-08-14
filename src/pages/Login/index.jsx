import React, { useState } from 'react'
import './style.less'
import { UserOutline, EyeInvisibleFill } from 'antd-mobile-icons'
import {tryToLogin} from '../../api'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setLogin} from '../../redux/action'
export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    console.log(username,password)
    tryToLogin({username,password}).then(res=>{
      if(res.code === 200){
        console.log('login succed')
        dispatch(setLogin({token:res.token}))
        navigate('/')
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id='login-container'>
        <div className="input-container phone-container">
          <UserOutline />
          <input type="text" placeholder='用户名/手机号 (admin)' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-container password-container">
          <EyeInvisibleFill />
          <button>发送验证码</button>
          <input type="password" placeholder='输入密码 (admin)' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn-login">登录</button>
      </div>
    </form>

  )
}
