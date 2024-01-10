<template>
    <div id="founderSection" class="backContainer">
        <div class="founder-container">
            <div class="founder-intro-container">
                <p class="founder-intro-header">The founder</p>
                <p class="founder-intro-text">Lingyuan Yan, the founder, is a high schooler who is interested in machine
                    learning and linguistics.
                    Lingyuan has been participating an activity to help the kids from China learn English speaking. He
                    himself is also learning Chinese now. By doing so, he realizes the diversity of the languages and is
                    interested in going deeper in studying languages and the elements of them. How the human being’s
                    language has been developed, and the relationship between the languages, etc.
                    He has an ambition to become a linguistics using modern way like machine learning to reveal the hidden
                    truth in our languages, and the communication of human beings.</p>
            </div>
            <img class="founder-image" src="../assets/images/founder.png">
        </div>
    </div>
</template>
<script>
export default {
    name: "founder",
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

.founder-container {
    @extend .flex-row-container;
    @extend .justify-content-between;
    @extend .w-90;
    @extend .mx-auto;
}

.founder-image {
    @extend .w-40;
}

.founder-intro-container {
    @extend .w-50;
}

.founder-intro-header {
    font-family: Noto Sans;
    font-size: 36px;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
    color: #2B70C9;
}

.founder-intro-text {
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
}
</style>