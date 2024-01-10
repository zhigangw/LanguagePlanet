import { createRouter, createWebHistory } from 'vue-router';

import HeaderGuest from "../../headers/HeaderGuest.vue";
import FrontDoor from "../../pages/FrontDoor.vue";
import FooterGuest from "../../footers/FooterGuest.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // guest
        {
            name: 'front-door',
            path: '/',
            meta: {
                title: 'Lingyuan\'s personal webpage',
                requiredRoles: [userRoleEnum.NONE],
                metaTags: [
                    {
                        name: 'description',
                        content: 'The home page of Lingyuan Yan\'s webpage.'
                    },
                    {
                        property: 'og:description',
                        content: 'The home page of Lingyuan Yan\'s webpage.'
                    }
                ],
            },
            components: { default: FrontDoor, footer: FooterGuest, header: HeaderGuest },
            /*children: [
              {
                name: 'team-members',
                path: ':teamId',
                component: TeamMembers,
                props: true
              } // /teams/t1
            ]*/
        },
    ],

    linkActiveClass: 'active',
    /*    scrollBehavior(_, _2, savedPosition) {
          if (savedPosition) {
            return savedPosition;
          }
          return { left: 0, top: 0 };
        }
    */
});
