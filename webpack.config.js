var path=require("path");
var {VueLoaderPlugin}=require("vue-loader")
module.exports={
    entry:path.join(__dirname,"src/main.js"),
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/.vue$/,
                loader:"vue-loader"
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}