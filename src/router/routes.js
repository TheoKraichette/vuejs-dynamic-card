const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('pages/PricingPage.vue')
      },
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('pages/PricingPage.vue')
      },
      {
        name: 'pricing',
        path: 'pricing',
        component: () => import('pages/PricingPage.vue')
      },
      {
        name: 'pricingCard',
        path: 'pricing',
        component: () => import('src/components/PricingCard.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
