jsproxy_config({
  ver: '140',

  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 62
  },

  // 节点配置
  node_map: {
    'demo-hk': {
      label: '香港节点',
      lines: {
        // 主机:权重
        'dl.slt6.com': 1,
      }
    },
    'demo-sg': {
      label: '新加坡节点',
      lines: {
        'cp.shunleite.com': 1,
      },
    },
    'mysite': {
      label: '当前站点',
      lines: {
        [location.host]: 1,
      }
    },
    // 该节点用于加载大体积的静态资源
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        // 收费版（高权重特殊时候启用）
        //'node-cfworker-2.etherdream.com': 4,

        //'b.007.workers.dev': 1,
        //'b.hehe.workers.dev': 1,
        //'b.lulu.workers.dev': 1,
        //'b.jsproxy.workers.dev': 1,
      }
    }
  },

  /**
   * 默认节点
   */
  node_default: 'mysite',
  // node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  // assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

  // 本地测试时打开，否则访问的是线上的
  assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '<!-- custom html -->',

  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pornhub.com/': {
      redir: 'https://www.baidu.com/'
    },
    'http://91porn.com/': {
      redir: 'https://cn.vuejs.org/'
    },
    'http://www.91porn.com/': {
      redir: 'https://cn.vuejs.org/'
    },
    'https://www.xvideos.com/': {
      redir: 'https://zh-hans.reactjs.org/'
    },
    'https://www.xvideo.com/': {
      redir: 'https://zh-hans.reactjs.org/'
    },
    'http://haha.com/': {
      content: '去学习吧，'
    },
  }
})
