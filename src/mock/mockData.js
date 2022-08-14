import Mock from 'mockjs'

function param20bj(url){
    const search = url.split('?')[1]
    if(!search){
        return {}
    }
    //stringJSON转换为Object
    const result = JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') + 
        '"}'
    )

    return result
}

const hot1 =[
    {
        id:1,
        title:"办公桌",
        img: 'https://randomwordgenerator.com/img/picture-generator/stones-3364325_640.jpg',
        link:'http://www.iwenwiki.com'
    },
    {
        id:2,
        title:"储物柜",
        img: 'https://randomwordgenerator.com/img/picture-generator/52e6d5434e53a514f1dc8460962e33791c3ad6e04e507749712e79d3954bc3_640.jpg',
        link:'http://www.iwenwiki.com'
    },
    {
        id:3,
        title:"照明灯",
        img: 'https://randomwordgenerator.com/img/picture-generator/55e4dd41485aae14f1dc8460962e33791c3ad6e04e507441722973d4914bc5_640.jpg',
        link:'http://www.iwenwiki.com'
    },
    {
        id:4,
        title:"抱枕",
        img: 'https://randomwordgenerator.com/img/picture-generator/57e5dd434a56ac14f1dc8460962e33791c3ad6e04e5074417d2e72d29048c6_640.jpg',
        link:'http://www.iwenwiki.com'
    }
]
export const getHot1 = (config)=>{
    const {cityName} = param20bj(config.url)
    console.log(param20bj(config.url))
    return {code:200,data:hot1,city:cityName}
}

const hot2= [
    {
        id:1,
        title:"照明灯",
        img: 'https://randomwordgenerator.com/img/picture-generator/55e4dd41485aae14f1dc8460962e33791c3ad6e04e507441722973d4914bc5_640.jpg',
        link:'http://www.iwenwiki.com'
    },
    {
        id:2,
        title:"抱枕",
        img: 'https://randomwordgenerator.com/img/picture-generator/57e5dd434a56ac14f1dc8460962e33791c3ad6e04e5074417d2e72d29048c6_640.jpg',
        link:'http://www.iwenwiki.com'
    },
    {
        id:3,
        title:"镜子",
        img: 'https://randomwordgenerator.com/img/picture-generator/52e9d2474f53aa14f1dc8460962e33791c3ad6e04e5074417c2e7dd19e49c6_640.jpg',
        link:'http://www.iwenwiki.com'
    },
    {
        id:4,
        title:"窗帘",
        img: 'https://randomwordgenerator.com/img/picture-generator/lance-asper-BtNGtteMH0c-unsplash.jpg',
        link:'http://www.iwenwiki.com'
    }
]
export const getHot2 = (config)=>{
    const {cityName} = param20bj(config.url)
     
    return {code:200,data:hot2,city:cityName}
}

const cities = []
for(var i = 0; i< 50; i++){
    cities.push(Mock.Random.city())
}

export const getCities = ()=>{
    return {code:200,data:cities}
}

// eslint-disable-next-line
const searchResult = []
for(var j = 0; j< 10; j++){
    searchResult.push({
        id:Mock.Random.natural(1,9999),
        title:Mock.Random.csentence(),
        houseType:'提瓦特最破烂的小木屋',
        price:`<h3>${Mock.Random.natural(1,99999)}摩拉</h3>`,
        rentType:'整租',
        img:'https://randomwordgenerator.com/img/picture-generator/55e4dd41485aae14f1dc8460962e33791c3ad6e04e507441722973d4914bc5_640.jpg'
    })
}

export const getSearchResult = (config)=>{
    const {page} = param20bj(config.url)
    //console.log(param20bj(config.url))
    if(page && page*3 < 10)
        return {code:200,data:searchResult.slice(0,page*3),total:searchResult.length}
    else
        return {code:200,data:searchResult,total:searchResult.length}
}


const fakeDetail = {
    imgs:[
        'http://iwenwiki.com/api/livable/details/1.jpg',
        'http://iwenwiki.com/api/livable/details/2.jpg',
        'http://iwenwiki.com/api/livable/details/3.jpg',
        'http://iwenwiki.com/api/livable/details/4.jpg',
        'http://iwenwiki.com/api/livable/details/5.jpg',
        'http://iwenwiki.com/api/livable/details/6.jpg',
        'http://iwenwiki.com/api/livable/details/7.jpg',
        'http://iwenwiki.com/api/livable/details/8.jpg',
        'http://iwenwiki.com/api/livable/details/9.jpg',
        'http://iwenwiki.com/api/livable/details/10.jpg',
        'http://iwenwiki.com/api/livable/details/11.jpg',
        'http://iwenwiki.com/api/livable/details/12.jpg',
        'http://iwenwiki.com/api/livable/details/13.jpg',
    ],
    title:'豪宅·使馆壹号院4居室-南',
    price:'130000',
    rentType:'整租',
    houseType:'273.97 m^2',
    info:{
        years:"2002年",
        type:"4室1厅",
        level:'17/19层',
        style:'精装性',
        orientation:'朝南'
    }
}
export const getDetail = (config)=>{
    return {code:200,data:fakeDetail}
}

export const login = (config)=>{
    //console.log(config.body)
    const {username,password} = JSON.parse(config.body)
    //console.log(JSON.parse(config.body))
    if(username && password){
        if(username==="admin" && password==="admin"){
            return {code:200,token:"enjy23"}
        }
    }
    return {code:400,message:'fail to login'}
}