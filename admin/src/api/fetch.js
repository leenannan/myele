import axios from 'axios';

var instance = axios.create({
  baseURL: 'www.zn.com:9080',
  timeout: 1000,
});

//服务地址
const baseUrl = 'www.zn.com:9080';
let subDomain = {
	accounts:{
        users: baseUrl +'/accounts/users/'
	},
    common: {
        dict: baseUrl+'/mobile/dict/',//获取字典
        upload: baseUrl+'/mobile/file/base64/upload',//上传图片 base64
        file: baseUrl+'/mobile/file/upload',//上传图片 文件
        card: baseUrl+'/mobile/file/card/info'   //身份证识别
    },
    order: {
        list: baseUrl+'/mobile/statOrder/list',//订单列表
        detail: baseUrl+'/mobile/statOrder/',//订单详情
    }
};

let fetch ={
	baseUrl,
	subDomain
};

instance.interceptors.request.use(  
        config => {  
            var xtoken = getXtoken()  
            if(xtoken != null){  
                config.headers['X-Token'] = xtoken  
            }  
            if(config.method=='post'){  
                config.data = {  
                    ...config.data,  
                    _t: Date.parse(new Date())/1000,  
                }  
            }else if(config.method=='get'){  
                config.params = {  
                    _t: Date.parse(new Date())/1000,  
                    ...config.params  
                }  
            }  
            return config  
        },function(error){  
            return Promise.reject(error)  
        }  
    ) 

     
instance.interceptors.response.use(function (response) {  
    // token 已过期，重定向到登录页面  
    if (response.data.code == 4){  
        localStorage.clear()  
        router.replace({  
                        path: '/Login',  
                        query: {redirect: router.currentRoute.fullPath}  
                    })  
    }  
    return response  
}, function (error) {  
    // Do something with response error  
    return Promise.reject(error)  
})  





     //    axios.get(`${baseUrl}${subDomain.order.list}`,{
	 //    params:{id:1}
	 //   })
	 //   .then(function(res){
	 //    console.log(res)
	 //   })
	 //   .catch(function(error){
	 //    console.log(error)
	 // })

export {fetch};