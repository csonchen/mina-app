@echo off
chcp 65001
:begin


set branch=
set /p branch=请输入要拉取的分支名:

echo 您输入的分支名是：%branch%
git checkout .
git checkout %branch%
git pull origin %branch%
pause