<template>
    <div id="projectsSection" class="backContainer">
        <div class="project-header-container">
            <p class="project-header-text">Past projects & events by Language Planet</p>
        </div>
        <div class="project-galary-container">
            <img class="project-image" src="../assets/images/projects.png">
            <div class="project-description-container">
                <p class="project-title">Title of the project</p>
                <p class="project-summary">Here is the description of this project: Libero dolor sed enim integer nunc.
                    Integer habitasse elit libero non eu a ut. Est quam adipiscing dui fermentum. Vel congue in at amet
                    vulputate congue lorem. Quis cras consectetur sit pellentesque tortor enim. Vel in aenean duis nec arcu
                    id. Magna enim dignissim enim auctor tortor est urna nunc a. Condimentum risus cursus vestibulum
                    integer. Proin eu sapien dignissim a in habitant ultrices quis pharetra. </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "projects",
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

.project-header-container {
    @extend .container;
    @extend .my-3;
}

.project-galary-container {
    @extend .flex-row-container;
    @extend .justify-content-between;
    @extend .w-90;
    @extend .mx-auto;
}

.project-header-text {
    font-family: Noto Sans;
    font-size: 36px;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: center;
    color: #2B70C9;
}

.project-image {
    @extend .w-60;
    @extend .mx-auto;
}

.project-description-container {
    @extend .w-30;
    @extend .mx-auto;
}

.project-title {
    font-family: Noto Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
}

.project-summary {
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
}
</style>