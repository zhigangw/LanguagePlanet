<template>
    <div id="posterSection" class="backContainer">
        <img class="poster-image" src="../assets/images/poster.png" />
    </div>
</template>
<script>
export default {
    name: "poster",
    components: {},
    computed: {},
    methods: {
    },
};
</script>

<style scoped lang="scss">
.backContainer {
    @extend .container;
    @extend .my-3;
}

.poster-image {
    @extend .mx-auto;
    @extend .w-90;
    padding: 10px;
    border-radius: 8px;
    gap: 16px;
}
</style>