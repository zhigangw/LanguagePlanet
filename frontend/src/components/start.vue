<template>
    <div id="startSection" class="backContainer">
        <div class="start-title-container">
            <p class="start-title-text">How to start if I am interested in Linguistics</p>
        </div>
        <div class="book-galary-container">
            <div class="book-container">
                <img class="book-image" src="../assets/images/an-introduction-to-linguistics.png">
                <div class="book-title-container">
                    <a class="book-link" href="https://a.co/d/dBPZVvw" target="_blank"><span class="book-title-span">An
                            Introduction To
                            Linguistics</span></a>
                </div>
                <p class="book-summary">This is a great start for everyone who has an interest in understanding what
                    linguistics is about. After reading the book, you will know what a language is, and what elements of a
                    language are. You will also have pretty good sense about linguistics terms like lexis, semantics,
                    phonetics, etc.</p>
            </div>
            <div class="book-container">
                <img class="book-image" src="../assets/images/language-in-thought-and-action.png">
                <div class="book-title-container">
                    <a class="book-link" href="https://a.co/d/gKMMhLE" target="_blank"><span
                            class="book-title-span">Language in
                            Thought and Action</span></a>
                </div>
                <p class="book-summary">This is a book about semantics. In fact, it is more a book teaching people how to
                    use language to express in a well form than an academic one. Once you read the book, you will be amazed
                    by the power of a language in a good form. From renowned professor and former U.S. Senator S. I.
                    Hayakawa
                    discusses the role of language.</p>
            </div>
            <div class="book-container">
                <img class="book-image" src="../assets/images/the-horse-the-wheel-and-language.png">
                <div class="book-title-container">
                    <a class="book-link" href="https://a.co/d/3m2sTRP" target="_blank"> <span class="book-title-span">The
                            Horse, the Wheel,
                            and Language</span></a>
                </div>
                <p class="book-summary">Roughly half the world's population speaks languages derived from a shared
                    linguistic source known as Proto-Indo-European. But who were the early speakers of this ancient mother
                    tongue, and how did they manage to spread it around the globe? Until now their identity has remained a
                    tantalizing mystery to linguists, archaeologists...
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "start",
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

.start-title-container {
    @extend .container;
    @extend .my-3;
}

.start-title-text {
    font-family: Noto Sans;
    font-size: 36px;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: center;
    color: #2B70C9;
    @extend .w-90;
    @extend .mx-auto;
}

.book-galary-container {
    @extend .flex-row-container;
    @extend .justify-content-between;
    @extend .w-90;
    @extend .mx-auto;
}

.book-container {
    @extend .container;
    @extend .w-30;
    @extend .mx-auto;
}

.book-image {
    @extend .w-50;
    @extend .mx-auto;
}

.book-title-container {
    @extend .container;
    @extend .w-100;
}

.book-title-span {
    font-family: Noto Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
    @extend .text-truncate;
}

.book-link {
    color: #FF9900;
}

.book-summary {
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #777777;
}
</style>