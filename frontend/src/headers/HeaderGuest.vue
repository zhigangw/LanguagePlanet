<template>
    <div class="header-container">
        <div class="header-bar">
            <div class="header-bar-left">
                <p class="header-title">Language Planet</p>
            </div>
            <div class="linkBox">
                <router-link class="routerLink" to="#" v-scroll-to="'#founderSection'">Founder</router-link>
                <router-link class="routerLink" to="#" v-scroll-to="'#mottoSection'">Materials</router-link>
                <router-link class="routerLink" to="#" v-scroll-to="'#projectsSection'">Projects</router-link>
                <router-link class="routerLink" to="#" v-scroll-to="'#participateSection'">Participate</router-link>
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
    color: #2B70C9;

}

.linkBox {
    @extend .flex-row-container;
    @extend .justify-content-end;
    @extend .flex-wrap;
}

.routerLink {
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    @extend .mx-2;
    color: #222222;

}

a:hover {
    color: #2B70C9;
}
</style>