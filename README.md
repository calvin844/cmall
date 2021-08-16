    
``	这是一个vue的单页面富应用程序，整个网站只有一个页面构成，主要通过vue-router控制URL并把相应的组件显示在页面上，页面主要分为首页，分类，购物车，用户中心四大模块，通过页面底部的tabbar进行切换，由于是演示开源项目，暂时只是完成了首页，商品详细页面和购物车页面的编写，网页通过Vue2.0和vue cli3来搭建。
``
    
``  首页：在数据方面，首先是感谢王红元老师免费提供的首页部分数据接口，剩下的数据是借用蘑菇街接口提供的数据，由于跨域，也顺便练习axios的本地访问，所以我把数据拷贝为本地的json文件进行读取使用，接口数据和本地数据我都是通过axios进行访问。首先是标题通过封装一个公共标题组件，再通过调用时给不同的具名插槽插入具体数据而实现标题组件的复用和自定义，轮播图和推荐分类是接口数据提供的数据，根据数据做简单的组件封装和布局，再引入组件，注册和进行显示，这边就不多做讲解了。商品列表标题也是一个独立封装的组件，通过点击事件返回更新相应的商品列表显示，这里我做了一个吸顶效果，为了更好的滑动体验，我在这里使用了better-scroll的插件，为了在better-scroll中实现吸顶效果，我放置了2个商品列表标题的组件，当我们滑动页面，better-scroll会实时进行滑动位置的返回，根据滑动位置，我们控制显示页面文档流中的商品列表标题或者页面吸顶效果的商品列表标题，并在发生点击后同步2个组件的数据。商品列表这边使用的数据是本地json文件数据，利用vue的图片懒加载插件实现图片的懒加载效果，并通过Better-Scroll实现上拉加载第二页的效果，由于图片加载的高度，会导致Better-Scroll的高度问题，这里为了解决这个问题，子组件每加载完一张图片后都会通过总线给父组件发送图片加载完成事件，父组件收到事件通知后，就会刷新Better-Scroll的高度，为了防止事件调用过于频繁，这里使用了防抖函数。首页还使用了keep-alive技术，在用户离开页面记录Better-Scroll滑动的高度，当用户回到首页时Better-Scroll回到上次滑动高度而不需要重新从顶部滑动。这里回到顶部是一个公共组件，我使用了vue的混入技术，当Better-Scroll滑动到一定高度的时候，就会显示回到顶部的按钮，点击按钮能在一定时间内返回顶部。
``
``商品详细：在数据方面，商品详细页面的数据均来自本地json文件，首先是顶部的标题栏，同样是通过定义插槽公共的标题组件来实现，这里我做了一个页面板块高亮的效果，点击标题栏相应板块会有高亮效果并且跳转到相应版块的部分，相对应的，如果滑动到相应的版块，这里也会通过监听Better-Scroll的高度来设置标题栏相应板块的高亮效果。对于不同的版块我这里都是用了独立的组件封装，同时也是读取图片完成后及时更新Better-Scroll的高度以解决滑动卡顿的问题。回到顶部也一样是使用vue混入技术实现。在加入购物车功能上，由于并没有真正使用数据库，因此，我是通过VueX状态管理来实现添加购物车的功能，通过mapActions把VueX的actions方法映射到组件中进行调用，通过Promise返回来判断是否执行成功，并且显示添加新商品和当前商品数量+1两种提示，提示弹框通过封装公共插件的方式来封装toast自定义插件并实现相关调用。
``
    
``购物车：在数据方面，我直接读取VueX中购物车的数据进行展示，在添加购物车的时候，我同时给购物车内商品添加了一个checked的属性作为是否选中需要结算的商品的标识，点击商品列表前的勾选标识或者全选时，通过数据的filter和find来改变商品的标识属性，选择结算商品后，页面底部会显示已选择商品的总价和商品数
``
    
##作为演示项目，项目暂时放置在前公司的服务器上，并且设置shell脚本在三个月后进行项目相关文件的删除
    
