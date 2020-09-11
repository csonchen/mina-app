@echo off
chcp 65001
:begin

set /p branch=请输入要拉取的分支名:

echo 您输入的分支名是：%branch%
git checkout -m %branch%
git pull origin %branch%
echo "恭喜你，代码拉取成功了，按任意键退出程序。"
pause