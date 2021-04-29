

// 判断数据类型
function checkedType(target){
    // 判断类型 -typeof -instanceof -toString.call()  -Array.isArray()
    return Object.prototype.toString.call(target).slice(8,-1);
}


// 基于Json序列化的深拷贝【不能处理函数】
function DeepCloneByJSON(target){
    return JSON.parse(Json.stringify(target))
}

// 基于递归思想的深拷贝
function DeepClone(target){

    let result;
    const targetType=checkType(target);

    if(targetType === 'object'){
        // 处理对象
        result={};
    }else if(targetType === 'Array'){
        // 处理数组
        result=[];
    }else{
        // 其他数据类型或者函数
        return result;
    }

    // 遍历目标数据
    for(let key in target){
        // 获取每一项值
        const value=target[key];

        // 递归处理
        result[key]=DeepClone(value)
    }


    // 处理完成后，返回
    return result;
}