var dataDemo={
    'code':'000',
    'messege':'请求成功',
    'lists':[
        {
            'name':'小明',
            'age':'12',
            'sex':'男'
        },
        {
            'name':'小红',
            'age':'13',
            'sex':'男'
        },
    ]
    
}

exports.getData = function(method,data) {
    var backData={
        "code":'000',
        "msg":'',
        'data':dataDemo
    };
    if(method=='DELETE') {
        backData={
            'code':'999',
            "msg":'不支持DELETE方法'
        }
    }
    return JSON.stringify(backData);
};