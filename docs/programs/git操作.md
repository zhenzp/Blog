---
title: 【git基本操作】
date: 2020-09-18
author: puzi
categories:
 - 2020-09
tags:
 - 工具
headImg:
 - https://w.wallhaven.cc/full/l3/wallhaven-l39l5l.jpg
---
<Boxx/>
![](https://w.wallhaven.cc/full/e7/wallhaven-e7zjlo.jpg)

## 创建本地分支
- 查看分支：git branch
- 创建分支：git branch name
- 切换分支：git checkout name
- 创建+切换分支：git checkout -b name
### 如果用 git checkout master切换到主分支，在当name分支下进行的文件变更的内容无法看到
- 提交分支到github:git push origin name
## 将分支的更新内容合并到master分支
- 切换master分支：git checkout master
### 合并name分支：git merge name
#### 这时合并到master上内容还没提交到github上，需要push操作
## 删除分支
### 删除本地分支：git branch -d name
### 删除服务器分支：git push origin ：name（分支名前的冒号代表删除）
## clone分支
### 默认会把github仓库所有内容clone到本地
### 但只会在本地默认创建一个master分支
### 查看所有分支名字：git branch -r
### 把远程分支取到本地：git checkout name

## 分支要设置跟踪分支
1. 需要远程仓库地址；
2. 需要提交本地分支
3. 提交本地分支的时候，需要添加参数设置跟踪分支，刚才没设置
4. 如果没设置，则需要手动设置跟踪分支
### git checkout -b newBranch
### git push --set-upstream origin newBranch



### 你那个远程分支， feature-serverdetail，创建的时候，提交了244个多个文件。相当于是所有文件全是新创建，其实没必要。
### 先git checkout dev，然后git pull origin dev，然后git checkout -b fea-serverdetail  (新建本地分支)，然后在fea-serverdetail分之下修改文件后，git push origin fea-serverdetail
### 这样，初始化的代码，是从dev分支上取的，然后加入你要修改的文件和代码就行。


### 强行pull远程代码
#### git fetch --all //只是下载代码到本地，不进行合并操作
#### git reset --hard origin/master  //把HEAD指向最新下载的版本

### cmd 
#### 查看文件 dir
#### 保存树级文件tree /f > tree.txt

- git branch 查看本地分支
- git branch -r 查看远程分支
- git branch -a 查看所有分支
- git  remote show origin 查看remote地址，远程分支，还有本地分支与之相对应关系等信息
- git remote prune origin /git fecht -p 删除远程仓库不存在的分支