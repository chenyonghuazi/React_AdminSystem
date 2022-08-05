import React from 'react'
import ReactDOM from 'react-dom/client';

import './assets/base.css' //引入全局样式 （上线项目需要按需引入）
import App from './router/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />


);