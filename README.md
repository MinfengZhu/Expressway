# Expressway

## Requirement
- Node.js
- cnpm

## How to use
进入项目dev分支
```
git clone git@github.com:Twilightsnow/Expressway.git
git checkout dev
```
or
```
git clone -b dev git@github.com:Twilightsnow/Expressway.git
```
安装运行
```
cd Express
cnpm install 
npm start // 前端

cd server
cnpm install
npm start // 后端
```
每个人开发从 `dev` 分支 checkout 出一个自己的独立分支，然后 do something，开发完毕后再 merge 到 `dev` 分支上。

比如：

```
git checkout -b llj
do something
git checkout dev
git merge llj
git branch -d llj
```

## 代码规范
- common是公共库
- server是网页后端
- 每个js文件不要超过1000行，模块化
- js文件之间的调用顺序要清晰，尽量避免多个视图的调用