<script setup lang="ts">

// comment utiliser localement le cdn pour animer depuis animate.css
/*useHead({
      link: [{rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css
        }] 
})
*/
</script>

<template>
    <h1>Page d'accueil</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi temporibus maiores voluptatum, cumque ducimus ab
        dignissimos, iste debitis est nam dolores? Omnis vitae ipsa sequi recusandae dolores maxime ipsam impedit.</p>
    <p class="link">
        <NuxtLink to="/blog">Page de blog</NuxtLink>

        <NuxtLink to="/contact">Page contact</NuxtLink>
    </p>



    <img src="/unity-book.png" alt="couverture du livre depuis public" id="book-public"
        class="book-cover-img animate__animated animate__bounce">

    <img src="~/assets/book-innovation-work.jpg" alt="couverture de livre depuis assets" id="book-asset"
        class="book-cover-img animate__animated animate__backInRight">
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