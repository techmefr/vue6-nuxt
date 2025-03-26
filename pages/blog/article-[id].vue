<template>
    <h1>Article {{ route.params.id }}</h1>
    <p>Contenue de l'article {{ route.params.id }} :
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum iste corrupti, natus molestias quas aliquid
        mollitia debitis deserunt quidem similique omnis vel aut quo explicabo, ducimus praesentium amet illo non.</p>
    <NuxtLink to="/blog">Retour au blog</NuxtLink>
</template>

<script>
const route = useRoute()
const id = route.params.id

//fetch API pour récupérer le contenu par son id
</script>