module.exports = {
    devServer:{
        disableHostCheck: true,
        port:9001,
        proxy:{
            // '/api':{
            //     target:'http://newkayak.iptime.org:9000',
            //     changeOrigin:true
            // },
            // '/admin':{
            //     target:'http://newkayak.iptime.org:9000',
            //     changeOrigin:true
            // }
            '/api':{
                target:'http://localhost:9000',
                changeOrigin:true
            },
            '/admin':{
                target:'http://localhost:9000',
                changeOrigin:true
            }
        }
    },
}