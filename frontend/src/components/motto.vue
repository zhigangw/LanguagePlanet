<template>
    <div id="mottoSection" class="backContainer">
        <p class="motto-text">“ A language, then is a medium of communication specific to a society; it forms part of the
            culture of that
            society. “</p>
        <p class="motto-from">-- An Introduction to Linguistics, Stuart C. Poole’. </p>
    </div>
</template>
<script>
export default {
    name: "motto",
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

.motto-text {
    font-family: Noto Sans;
    font-size: 32px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: center;
    color: #222222;
    @extend .w-70;
    @extend .mx-auto;
}

.motto-from {
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: #222222;
    @extend .w-40;
    @extend .mx-auto;
}
</style>