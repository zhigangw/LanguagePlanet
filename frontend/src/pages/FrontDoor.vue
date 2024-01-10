<template>
    <div>
        <poster />
        <motto />
        <statement />
        <founder />
        <start />
        <projects />
        <participate />
    </div>
</template>

<script>
import founder from "../components/founder.vue"
import motto from "../components/motto.vue"
import participate from "../components/participate.vue"
import poster from "../components/poster.vue"
import projects from "@/components/projects.vue"
import start from "../components/start.vue"
import statement from "../components/statement.vue"

export default {
    name: "FrontDoor",
    props: {},

    data() {
        return {
        };
    },

    components: {
        founder,
        motto,
        participate,
        poster,
        projects,
        start,
        statement
    },

    created() { },
    mounted() {
    },
    methods: {
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
