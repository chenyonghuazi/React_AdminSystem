function remSize(){
    //获取设备的宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if(deviceWidth>=750){
        deviceWidth = 750
    }
    if(deviceWidth<=320){
        deviceWidth = 320
    }
    //通过修改html的font-size而重置rem， 默认1rem = 16px
    //如果是750，那么750 / 7.5 = 100， 1rem = 100px
    //如果是375，那么375 / 7.5 = 50,  1rem = 50px （320 / 7.5 = 42.667)
    document.documentElement.style.fontSize = (deviceWidth/7.5) + 'px'
    //console.log(document.documentElement.style.fontSize)

    //设置body字体大小
    //这个fontSize设置会覆盖html的font-size，因为html的font size重置了1rem默认16px
    document.querySelector('body').style.fontSize = 0.3 + 'rem' //12.8px - 30px
}
//初始化
remSize()

//当窗口发生变化
window.onresize=function(){
    remSize()
}