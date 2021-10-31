function ajax (url,success,error) {
    // 1.创建异步对象
    var xmlhttp = new XMLHttpRequest();
    // 2.设置请求方式和请求地址
    xmlhttp.open("GET","url","true");
    // 3.发送请求
    xmlhttp.send();
    // 4.监听状态变化
    xmlhttp.onreadystatechange = function (ev2) {
        // 0.请求没初始化
        // 1.服务器连接已经建立
        // 2.请求已经接收
        // 3.请求处理中
        // 4.请求完成，响应就绪
        if(xmlhttp.readyState === 4) {
            if(xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status === 304) {
                success(xmlhttp);
                console.log("ok");
            }else {
                error(xmlhttp);
                console.log("false");
            }
        }
        // 5.处理返回结果
    }
}