0. 安装wamp，这里要用到其内部的4个版本的php,我们这里用**php7.1.16**吧
1. 安装apache最新版（不用wamp的原因是wamp的apache实质上只支持php5，但是提供了配置良好的php7，我们就可以直接采用wamp的php7来完成系列配置）
2. 配置httpd.conf，加载php7模块，添加主页文件支持，添加文件类型支持
3. 把wamp的php7目录下的php.ini拷贝一份到apache bin目录下，同时把php7ts.dll也拷贝过去
4. 将php7目录下的ssleay32.dll和libeay32.dll文件拷贝到apache bin目录下。
5. 使用php7安装composer
6. 使用composer全局安装laravel
7. laravel new blog
8. 使用composer update或者composer install更新php依赖


**一般来说，做完前面8步就可以直接启动了，这里可以用php artisan serve去启动，当然，使用apache也是可以的，注册相应的服务即可**。

**最关键一点在于仿照wamp的配置，或者直接copy它的配置来做。**



1. 项目根目录下，使用php artisan preset react更换前端脚手架为react。
2. 安装nodejs（最新的就可以）
3. 修改package.json, 这里使用最新的antd 3.4.4, 使用npm install安装npm依赖。
4. 编译前端页面 npm run dev
5. 启动apache，可以看到启动页面apache的文件不能热更新，所以说只能php+nodejs的方式。



1. 打开mysql，建立好相应的数据库
2. 关闭apache，配置数据库，通过.env配置。（要等到重启服务器才能生效）
3. 项目根目录下，php artisan make:auth
4. 启动php artisan serve
5. 访问localhost:80/register注册用户
6. 注意一件事情，如果要用react，那么除了单页应用的id - root，别的div不要用root作为id
7. 可能有个比较麻烦的问题：就是后台向前端后台传数据可能需要写大量的api

