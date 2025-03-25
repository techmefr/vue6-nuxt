<template>
    <h1>Page d'accueil</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi temporibus maiores voluptatum, cumque ducimus ab
        dignissimos, iste debitis est nam dolores? Omnis vitae ipsa sequi recusandae dolores maxime ipsam impedit.</p>
    <p class="link">
        <NuxtLink to="/blog">Page de blog</NuxtLink>

        <NuxtLink to="/contact">Page contact</NuxtLink>
    </p>



    <img src="/unity-book.png" alt="couverture du livre depuis public" id="book-public" class="book-cover-img">

    <img src="~/assets/book-innovation-work.jpg" alt="couverture de livre depuis assets" id="book-asset"
        class="book-cover-img">
</template>

<script></script>

<style scoped>
.book-cover-img {
    width: 150px;
    margin: 1em;
    height: 200px;
}

.link {
    display: flex;
    gap: 1em;
}
</style>