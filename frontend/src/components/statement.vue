<template>
    <div id="statementSection" class="backContainer">
        <div class="statement-container">
            <img class="statement-image" src="../assets/images/statement.png">
            <div class="statement-text-container">
                <p class="statement-header">Mission Statement</p>
                <p class="statement-text">We use language every day. However, very few people know what language is and the
                    elements of a language are. There are more than 7000 languages all over the world. Each of them
                    represents
                    not only the history of a group of people, small or large, but also the development of a civilization.
                    E.g.,
                    Dutch and German are much closer than English and Dutch. That close relationship reflects a piece of
                    history
                    of how the Euro civilization developed. Another interesting example is that in most languages people
                    call
                    their mother in ‘ma’ or similar sound. Why is that?
                    To encourage more people, especially kids and youth to study our languages, we set up this Language
                    Planet,
                    a Non-Profitable Organization, where people can find materials and share their study result easily.
                    Furthermore, more people will become fans of linguistics. </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "statement",
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

.statement-container {
    @extend .flex-row-container;
    @extend .justify-content-between;
    @extend .w-90;
    @extend .mx-auto;
}

.statement-image {
    @extend .w-40;
}

.statement-text-container {
    @extend .w-50;
}

.statement-header {
    font-family: Noto Sans;
    font-size: 36px;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
    color: #2B70C9;
}

.statement-text {
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
}
</style>