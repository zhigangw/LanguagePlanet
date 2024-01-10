<template>
    <div class="header-container">
        <div class="header-bar">
            <div class="header-bar-left">
                <p class="header-title">Language Planet</p>
            </div>
            <div class="linkBox">
                <router-link class="routerLink" to="#" v-scroll-to="'#myHobbiesSection'">Founder</router-link>
                <router-link class="routerLink" to="#" v-scroll-to="'#aboutMeSection'">Materials</router-link>
                <router-link class="routerLink" to="#" v-scroll-to="'#photoGallerySection'">Projects</router-link>
                <router-link class="routerLink" to="#" v-scroll-to="'#myProjectsSection'">Participate</router-link>
            </div>
        </div>
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
.header-container {
    @extend .container;
    @extend .p-3;
}

.header-bar {
    @extend .flex-row-container;
    @extend .justify-content-between;
    @extend .w-90;
    @extend .mx-3;
}

.header-bar-left {
    @extend .container;
}

.header-title {
    font-family: Noto Sans;
    font-size: 32px;
    font-weight: 800;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
}

.linkBox {
    @extend .flex-row-container;
    @extend .justify-content-end;
}

.routerLink {
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    @extend .mx-2;
}

a:hover {
    color: #2B70C9;
}
</style>