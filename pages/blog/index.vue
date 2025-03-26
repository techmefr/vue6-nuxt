<template>
    <h1>Liste des articles</h1>
    <ul>
        <li v-for="o in 5">
            <NuxtLink :to="'/blog/article-' + i">Article {{ i }}</NuxtLink>
        </li>

    </ul>
    <NuxtLink to="/blog/article-1">Lire l'article 1</NuxtLink>

    {{ route }}

</template>

<script>
</script>