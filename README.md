## Movie ticket微信票务小程序-后端

### 后端项目说明
技术选型：

- 框架：Egg.js

- 数据库：Mysql

- ORM：Sequelize

- 运行环境：Linux/CentOS

- 其他：egg-sequelize、腾讯云COS SDK、小程序Faas(Function as a server) SDK;

传统MVC架构，view层使用EJS模板引擎来驱动Vue build后的Dist文件，挂载index后使用egg-cluster来管理进程，后续若无Worker agent需求会
修改为pm2来守护进程，据说runtime operation log容易实现；（主要是我不会多进程，没错就是这么理直气壮！）

未考虑Nginx进行代理转发与负载均衡（我觉得Node HTTP稳中带狠 -.-^）

middleware里简单封装了暂时遇到的permission检查，主要检查JS token和csrf（其实是一个意思）来防止Post，不过毫无卵用，图个心里安慰，爬虫只要带着Egg-cookie就直接通过csrf了；

mysql使用了sequelize这个ORM来操作数据库，回忆起hibernate泪流满面，sequelize是真爱，通过简单的create model和control里impor model即可对数据库进行CRUD操作；

使用sequelize的sync()、sync.alert、sync.force属性能很轻松的对数据库进行迁移和重置，当前版本从coding.net(你为什么要移除个人用户！)迁移到Github管理，后续会改写使用Egg的高级框架Miaway来进行改写；
相信使用基于IOC思想和Typescript的midway后能更加规范；



### Explain
Movie ticket是一款在线票务、购物小程序，主要针对国内海外人士在线购票的一款在线购物系统。


主要包含以下3个系统模块：

movie-ticket-wechart(小程序主体)

wx-scheme-admin(后台管理)

wx-scheme-server(后端)；

前端主要使用Vue-create脚手架开发，后端使用egg作为主要框架；小程序使用了VantUi/iViewUi等。
（了解更多相关资料点击下方链接。）


<table>
<tr>
    <th>小程序主体</th>
    <td>
    <a href="https://github.com/gejigejigeji/Movie-ticket-Wechart">https://github.com/gejigejigeji/Movie-ticket-Wechart</a>
    </td>
    <td>movie-ticket-wechart</td>
</tr>
<tr>
   <th>小程序后台管理</th>
    <td>
    <a href="https://github.com/gejigejigeji/wx-scheme-admin">https://github.com/gejigejigeji/wx-scheme-admin</a>
    </td>
    <td>wx-scheme-admin</td>
</tr>
<tr>
   <th>小程序后端</th>
    <td>
    <a href="https://github.com/gejigejigeji/wx-scheme-server">
    https://github.com/gejigejigeji/wx-scheme-server</a>
    </td>
    <td>当前项目</td>
</tr>
</table>


### Example

<img src="https://raw.githubusercontent.com/gejigejigeji/Movie-ticket-Wechart/master/images-folder/view1.png" width="281px" height="609px" /> 

<img src="https://raw.githubusercontent.com/gejigejigeji/Movie-ticket-Wechart/master/images-folder/view3.jpg" width="281px" height="609px" /> 

### 花里胡哨的Banner

<img src="https://raw.githubusercontent.com/gejigejigeji/Movie-ticket-Wechart/master/images-folder/view2.gif" width="281px" height="609px" /> 








