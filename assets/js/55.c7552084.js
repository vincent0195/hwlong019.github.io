(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{368:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"容器操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器操作"}},[s._v("#")]),s._v(" "),a("strong",[s._v("容器操作")])]),s._v(" "),a("p",[s._v("容器操作的命令如图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://qaomuu-blog.oss-cn-hangzhou.aliyuncs.com/WjZlsPaURRLmY1eLwvO0lzpMazUDlhAj0zc0uv9HwlM.png",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"容器命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器命令"}},[s._v("#")]),s._v(" "),a("strong",[s._v("容器命令")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建并运行一个容器，运行成功后会返回容器id")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂停，将容器挂起，内存暂存，CPU不再执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pause\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 恢复运行，内存恢复，CPU恢复")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" unpause\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止容器，杀死进程，回收内存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动容器，创建新的进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有运行的容器和状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器运行日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器执行命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定容器，先停止，然后删除所有相关文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h4",{attrs:{id:"创建并运行一个容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建并运行一个容器"}},[s._v("#")]),s._v(" "),a("strong",[s._v("创建并运行一个容器")])]),s._v(" "),a("p",[s._v("举例："),a("code",[s._v("docker run --name containerName -p 80:80 -d nginx")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("docker run")]),s._v("：创建并运行一个容器")]),s._v(" "),a("li",[a("code",[s._v("--name")]),s._v("：给容器起一个名字")]),s._v(" "),a("li",[a("code",[s._v("-p")]),s._v("：容器端口映射，左侧得是宿主机器的端口，右侧是容器端口")])]),s._v(" "),a("blockquote",[a("p",[s._v("默认情况下，容器是隔离环境，直接访问宿主机的80端口，是访问不到容器中的nginx。")])]),s._v(" "),a("blockquote",[a("p",[s._v("将容器的80与宿主机的80关联起来，当访问宿主机的80端口时，就会被映射到容器的80，这样就能访问到nginx了。")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("-d")]),s._v(" ：后台运行容器")]),s._v(" "),a("li",[a("code",[s._v("nginx")]),s._v(" ：镜像名称，可以指定版本号，这里指的是运行最新版本的nginx")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://qaomuu-blog.oss-cn-hangzhou.aliyuncs.com/jSooI1OTT_1wEYIMudzW6ygN8Up9TJH1VNY1eS6Sq4Q.png",alt:"image"}})]),s._v(" "),a("h4",{attrs:{id:"进入容器执行命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入容器执行命令"}},[s._v("#")]),s._v(" "),a("strong",[s._v("进入容器执行命令")])]),s._v(" "),a("p",[s._v("容器内部会模拟一个独立的Linux文件系统，看起来如同一个linux服务器一样")]),s._v(" "),a("p",[s._v("举例："),a("code",[s._v("docker exec -it mynginx bash")])]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("docker exec")]),s._v("：进入容器内部，执行一个命令")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("-it")]),s._v("：给当前进入的容器创建一个标准输入、输出终端，允许与容器交互")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("mynginx")]),s._v("：要进入的容器的名称")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("bash")]),s._v("：进入容器后执行的命令，bash是一个linux终端交互命令")])])]),s._v(" "),a("h4",{attrs:{id:"创建运行nginx容器-例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建运行nginx容器-例"}},[s._v("#")]),s._v(" "),a("strong",[s._v("创建运行Nginx容器[例]")])]),s._v(" "),a("h5",{attrs:{id:"查看帮助文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看帮助文档"}},[s._v("#")]),s._v(" 查看帮助文档")]),s._v(" "),a("p",[s._v("在Docker Hub上查看帮助文档")]),s._v(" "),a("p",[s._v("找到Nginx的详情页，往下拉，有个使用指南")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://qaomuu-blog.oss-cn-hangzhou.aliyuncs.com/8fG5WphZ9vihH5Tct3OTmZPWMJbNyakadiqBmb05q9A.png",alt:"image"}})]),s._v(" "),a("h5",{attrs:{id:"运行容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行容器"}},[s._v("#")]),s._v(" 运行容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mynginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"查看所有容器状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看所有容器状态"}},[s._v("#")]),s._v(" 查看所有容器状态")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"访问nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问nginx"}},[s._v("#")]),s._v(" 访问Nginx")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://qaomuu-blog.oss-cn-hangzhou.aliyuncs.com/ZKbpAM2LHB0d2xE-69Yx7PUwBop8iyBpHtEeTRSmcN4.png",alt:"image"}})]),s._v(" "),a("h5",{attrs:{id:"查看容器日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看容器日志"}},[s._v("#")]),s._v(" 查看容器日志")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs mynginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"持续日志输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持续日志输入"}},[s._v("#")]),s._v(" 持续日志输入")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" mynginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用"),a("code",[s._v("ctrl")]),s._v(" + "),a("code",[s._v("c")]),s._v(" 关闭持续输出")]),s._v(" "),a("h5",{attrs:{id:"进入容器操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入容器操作"}},[s._v("#")]),s._v(" 进入容器操作")]),s._v(" "),a("p",[s._v("进入容器之后，nginx的环境、配置、运行文件全部都在这个文件系统中，包括想要修改的html文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" mynginx "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"修改nginx文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改nginx文件"}},[s._v("#")]),s._v(" 修改Nginx文件")]),s._v(" "),a("p",[s._v("查看DockerHub网站中的nginx页面，可以知道nginx的html目录位置在"),a("code",[s._v("/usr/share/nginx/html")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/share/nginx/html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("容器内部没有"),a("code",[s._v("vi")]),s._v(" 命令，无法直接修改，可以使用下面的命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s#Welcome to nginx#祝月薪过万#g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s#<head>#<head><meta charset=\"utf-8\">#g'")]),s._v(" index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"退出容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#退出容器"}},[s._v("#")]),s._v(" 退出容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"停止容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止容器"}},[s._v("#")]),s._v(" 停止容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop mynginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"查看包括已停止容器的状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看包括已停止容器的状态"}},[s._v("#")]),s._v(" 查看包括已停止容器的状态")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"删除容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[s._v("#")]),s._v(" 删除容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" mynginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"强制删除运行的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制删除运行的容器"}},[s._v("#")]),s._v(" 强制删除运行的容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" mynginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"创建运行redis容器-例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建运行redis容器-例"}},[s._v("#")]),s._v(" "),a("strong",[s._v("创建运行Redis容器[例]")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" redis "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" redis redis-server "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--appendonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("redis-server --appendonly yes")]),s._v("：持久化操作")])])])}),[],!1,null,null,null);a.default=n.exports}}]);