import React from 'react'
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './redux/store'
import './assets/css/common.less'
import './assets/js/rem'

import App from './router/index' //引入router组件
import './mock' //引入mockjs接口

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);