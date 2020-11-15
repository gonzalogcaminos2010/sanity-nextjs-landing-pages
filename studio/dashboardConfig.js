export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb11b251db4d72b715638c3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y9s757dp',
                  apiId: '1f1651ab-4687-47c1-81f8-fdde34252f6e'
                },
                {
                  buildHookId: '5fb11b251db4d7271656397e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a2xwrb38',
                  apiId: '1f05abc8-8226-4363-929a-a6be3893dae0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gonzalogcaminos2010/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a2xwrb38.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
