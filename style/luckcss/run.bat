browser-sync start --server --files "**" --directory true --open "external" --reloadDelay 0 --startPath "index.html"

#browser-sync start --server --files "css/*.css, html/*.html, *.html"
#browser-sync start --server --files "css/*.css, html/*.html, images/*.*, images/**/*.*, json/*.json, php/*.php,  *.html"

# 监听当前目录下的所有文件改动刷新浏览器
# --files "**"

# //就能局域访问 默认 127.0.0.1
# host "127.0.0.1",

# //端口
# --port 3000,

# // external||false||true external=本机IP地址打开,   true=localhost打开,     false=不打开
# --open "external",

#//代理的地址，可以代理node php iis等服务器同步刷新
# --proxy "127.0.0.1:80",

# --timestamps:false

# //默认路径显示的列表位置
# --startPath "", //如 /a/b/

# // 指定浏览器
# --browser "google chrome" // 或  ["google chrome","firefox"]

# // 延迟刷新，默认0
# --reloadDelay 0,

# 是否载入css修改，默认true
# --injectChanges false,