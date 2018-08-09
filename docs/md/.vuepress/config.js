module.exports = {
    title: 'guns-lite',
    description: '快速使用guns-lite构建web应用程序',
    base:'/guns-lite/',
    evergreen:true,
    themeConfig: {
        nav: [
            { text: '文档', link: '/' },
            { text: '项目主页', link: 'https://github.com/enilu/guns-lite' },
        ],
        sidebar: [
            {
                title: '基本准备',
                collapsable: false,
                children:[
                   '/base/jdkAndMaven'
                ]
            },

            {
                title: '30分钟将本项目跑起来',
                collapsable: false,
                children: [
                    '/quickstart/quickstart',
                    '/quickstart/clone',
                    '/quickstart/initDb',
                    '/quickstart/config',
                    '/quickstart/startup'
                ]
            },
            {
                title: '开发第一个功能-参数管理',
                collapsable: false,
                children: [
                    '/hello_guns/hello_guns',
                    '/hello_guns/create_table',
                    '/hello_guns/base',
                    '/hello_guns/list',
                    '/hello_guns/add',
                    '/hello_guns/delete',
                    '/hello_guns/update',
                    '/hello_guns/menuAndPermission'
                ]
            }
        ]

    }
}