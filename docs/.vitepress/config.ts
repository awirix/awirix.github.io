import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'en-US',
    title: 'Awirix',
    description: 'Multimedia Metascraper',

    head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

    themeConfig: {
        nav: nav(),

        socialLinks: [
            { icon: 'github', link: 'https://github.com/awirix/awirix' }
        ],

        footer: {
            message: 'Released under MIT License.',
            copyright: 'Copyright © 2022-present Metafates'
        },

        sidebar: {
            '/guide/': [
                {
                    text: 'Introduction',
                    collapsible: true,
                    items: [
                        {
                            text: 'What is Awirix?',
                            link: '/guide/introduction/what-is-awirix'
                        }
                    ]
                },
                {
                    text: 'Extensions',
                    collapsible: true,
                    items: [
                        {
                            text: 'Overview',
                            link: '/guide/extensions/overview'
                        },
                        {
                            text: 'Creating an Extension',
                            link: '/guide/extensions/creating-an-extension'
                        },
                        {
                            text: 'Structure',
                            link: '/guide/extensions/structure'
                        },
                        {
                            text: 'Library',
                            link: '/guide/extensions/library'
                        }
                    ]
                },
                {
                    text: 'Config',
                    collapsible: true,
                    items: [
                        {
                            text: 'Fields',
                            link: '/guide/config/fields'
                        }
                    ]
                }
            ]
        }
    }
});

function nav() {
    return [
        { text: 'Guide', link: '/guide/introduction/what-is-awirix' },
        { text: 'Config', link: '/config' },
        { text: 'Download', link: '/download' },
        {
            text: '0.1.0',
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/vivi-app/vivi/blob/main/CHANGELOG.md'
                },
                {
                    text: 'Contributing',
                    link: 'https://github.com/vivi-app/vivi/blob/main/CONTRIBUTING.md'
                }
            ]
        }
    ];
}
