
module.exports = {
  title: '萌萌哒的瑞萌萌',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/V.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
      logo: '/V.png',  // 左上角logo
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        {text: '学习笔记',
          items: [
            {text: 'HTML', link: '/HTML/'},
            {text: 'CSS', link: '/CSS/'},
            {text: 'Sass', link: '/Sass/'},
            {text: 'Less', link: '/Less/'},
            {text: 'Bootstrap4', link: '/Bootstrap4/'},
            {text: 'JSON', link: '/JSON/'},
            {text: 'AJAX', link: '/AJAX/'},
            {text: 'Linux', link: '/Linux/'},
            {text: 'Git', link: '/Git/'},
            {text: 'Vue', link: '/Vue/'},
            {text: 'HTTP', link: '/HTTP/'},
            {text: 'Webpack', link: '/Webpack/'}
          ] },
        {text: 'GitHub', link: 'https://github.com/KongC-X'}      
      ],
      sidebar: {
        '/HTML/': [
          ''
        ],
        '/CSS/': [
          ''
        ],
        '/Sass/': [
          ''
        ],
        '/Less/': [
          ''
        ],
        '/Bootstrap4/': [
          ''
        ],
        '/JSON/': [
          ''
        ],
        '/AJAX/': [
          ''
        ],
        '/Linux/': [
          ''
        ],
        '/Git/': [
          ''
        ],
        '/Webpack/': [
          ''
        ],
        '/Vue/': [
          ''
        ],
        '/HTTP/': [
          ''
        ]
      }// 侧边栏配置
    },
  plugins: [
      ['vuepress-plugin-helper-live2d', {
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)>>>取值请参考：
        // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        model: 'hibiki',
        display: {
          position: "right", // 显示位置：left/right(default: 'right')
          width: 135, // 模型的长度(default: 135)
          height: 300, // 模型的高度(default: 300)
          hOffset: 65, //  水平偏移(default: 65)
          vOffset: 0, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8 // 模型透明度(default: 0.8)
        }
      }
    }
  ]
]
};