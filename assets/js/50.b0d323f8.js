(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{362:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git基础命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git基础命令"}},[s._v("#")]),s._v(" Git基础命令")]),s._v(" "),a("ul",[a("li",[s._v("Git GUI：Git提供的图形界面工具")]),s._v(" "),a("li",[s._v("Git Bash：Git提供的命令行工具")])]),s._v(" "),a("p",[s._v("Git工作流程图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://qaomuu-blog.oss-cn-hangzhou.aliyuncs.com/jhgSbtb7-LII1UaV-mN0zVWIYLwOeIzTyWo3OsHbRrc.png",alt:"image"}})]),s._v(" "),a("p",[s._v("命令如下：")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("clone(克隆)")]),s._v("：从远程仓库中克隆代码到本地仓库")]),s._v(" "),a("li",[a("strong",[s._v("checkout(检出)")]),s._v("：从本地仓库中检出一个仓库分支然后进行修订")]),s._v(" "),a("li",[a("strong",[s._v("add(添加)")]),s._v("：在提交前先将代码提交到暂存区")]),s._v(" "),a("li",[a("strong",[s._v("commit(提交)")]),s._v("：提交到本地仓库。本地仓库中保存修改的各个历史版本")]),s._v(" "),a("li",[a("strong",[s._v("fetch(抓取)")]),s._v("：从远程库，抓取到本地仓库，不进行任何的合并动作，一般操作比较少。")]),s._v(" "),a("li",[a("strong",[s._v("pull(拉取)")]),s._v("：从远程库拉到本地库，自动进行合并(merge)，然后放到到工作区，相当于fetch+merge")]),s._v(" "),a("li",[a("strong",[s._v("push(推送)")]),s._v("：修改完成后，需要和团队成员共享代码时，将代码推送到远程仓库")])]),s._v(" "),a("h2",{attrs:{id:"基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[s._v("#")]),s._v(" 基本配置")]),s._v(" "),a("ul",[a("li",[s._v("设置用户名和邮箱：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("查看配置信息：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("常用指令配置别名：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 创建文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" ~/.bashrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用于输出git提交日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" git-log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git log --pretty=oneline --all --graph --abbrev-commit'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用于输出当前目录所有文件及基本信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ll")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -al'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h5",{attrs:{id:"乱码问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#乱码问题"}},[s._v("#")]),s._v(" 乱码问题")]),s._v(" "),a("ol",[a("li",[s._v("打开GitBash执行下面命令")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" core.quotepath "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[s._v("${git_home}/etc/bash.bashrc")]),s._v("文件最后加入下面两行")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LANG")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zh_CN.UTF-8"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LC_ALL")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zh_CN.UTF-8"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"基础操作指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础操作指令"}},[s._v("#")]),s._v(" 基础操作指令")]),s._v(" "),a("p",[s._v("Git工作目录下对于文件的修改(增加、删除、更新)会存在几个状态，这些修改的状态会随着执行Git的命令而发生变化。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://qaomuu-blog.oss-cn-hangzhou.aliyuncs.com/_wzB2edgrgW3USeimVu9kqYGehkSJKl4daHx0Cz5IRk.png",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"获取本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取本地仓库"}},[s._v("#")]),s._v(" 获取本地仓库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://qaomuu-blog.oss-cn-hangzhou.aliyuncs.com/jpjvisXFy7QGrov-BA7oWd2EFT5vwWOnVK6x7N_qchw.png",alt:"image"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://qaomuu-blog.oss-cn-hangzhou.aliyuncs.com/i71A_9YJvnPtFHs-xP_TR6AkNZbjy9_NF0CIaWpueWI.png",alt:"image"}})]),s._v(" "),a("p",[s._v("如果创建成功后可在文件夹下看到隐藏的.git目录")]),s._v(" "),a("h3",{attrs:{id:"查看修改的状态-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看修改的状态-status"}},[s._v("#")]),s._v(" 查看修改的状态(status)")]),s._v(" "),a("p",[s._v("查看的修改的状态（暂存区、工作区）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"添加工作区到暂存区-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加工作区到暂存区-add"}},[s._v("#")]),s._v(" 添加工作区到暂存区(add)")]),s._v(" "),a("p",[s._v("添加工作区一个或多个文件的修改到暂存区")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 单个文件名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("通配符\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将所有修改加入暂存区：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"提交暂存区到本地仓库-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交暂存区到本地仓库-commit"}},[s._v("#")]),s._v(" 提交暂存区到本地仓库(commit)")]),s._v(" "),a("p",[s._v("提交暂存区内容到本地仓库的当前分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'注释内容'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"查看提交日志-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看提交日志-log"}},[s._v("#")]),s._v(" 查看提交日志(log)")]),s._v(" "),a("p",[s._v("查看提交记录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# options：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --all 显示所有分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --pretty=oneline 将提交信息显示为一行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --abbrev-commit 使得输出的commitId更简短")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --graph 以图的形式显示")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"版本回退"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[s._v("#")]),s._v(" 版本回退")]),s._v(" "),a("p",[s._v("版本切换，commitID 可以使用"),a("code",[s._v("git log")]),s._v("指令查看。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" commitID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("查看已经删除的记录")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"添加文件至忽略列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加文件至忽略列表"}},[s._v("#")]),s._v(" 添加文件至忽略列表")]),s._v(" "),a("p",[s._v("在工作目录中创建一个名为"),a("code",[s._v(".gitignore")]),s._v("的文件（文件名称固定），列出要忽略的文件模式。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/log/\ntarget/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(".mvn/wrapper/maven-wrapper.jar\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("**/src/main/**/target/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("**/src/test/**/target/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);