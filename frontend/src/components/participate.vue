<template>
    <div id="participateSection" class="backContainer">
        <div class="participate-header-container">
            <p class="participate-header-text">How to participate?</p>
        </div>
        <div class="participate-content-container">
            <p class="participate-content-text">Write to <a
                    href="mailto:lingyuanyan@hotmail.com">lingyuanyan@hotmail.com</a> and we can start from there. </p>
        </div>
    </div>
</template>
<script>
export default {
    name: "participate",
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

.participate-header-container {
    @extend .container;
    @extend .my-3;
}

.participate-content-container {
    @extend .container;
    @extend .my-3;
}

.participate-header-text {
    font-family: Noto Sans;
    font-size: 36px;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: center;
    color: #2B70C9;
}

.participate-content-text {
    font-family: Noto Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
    color: #222222;
}
</style>