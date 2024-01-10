<template>
    <div class="linkBox">
        <router-link class="routerLink" to="#" v-scroll-to="'#aboutMeSection'">About Me</router-link>
        <router-link class="routerLink" to="#" v-scroll-to="'#myHobbiesSection'">My Interests</router-link>
        <router-link class="routerLink" to="#" v-scroll-to="'#myProjectsSection'">Projects & Achievements</router-link>
        <router-link class="routerLink" to="#" v-scroll-to="'#photoGallerySection'">Photo Gallery</router-link>
    </div>
</template>
<script>
export default {
    name: "HeaderGuest",
    components: {},
    computed: {},
    methods: {
    },
};
</script>

<style scoped lang="scss">
.linkBox{
    @extend .d-flex;
    @extend .justify-content-end;
}
a {

    /* Title3 | Black */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 200;
    font-size: 21px;
    line-height: 36px;
    text-decoration: none;
    

    /* identical to box height, or 150% */
    text-align: center;

    /*padding*/
    @extend .mx-3;
    /* White */
    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}
a:hover {
    color: #2B70C9;
}
</style>