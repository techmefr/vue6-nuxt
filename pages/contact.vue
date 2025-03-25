<template>
    <h1>Page de contact</h1>
    <p>Utilisez ce formulaire pour nous envoyer votre message.</p>
    <SimpleButton>
        <NuxtLink to="/">Accueil</NuxtLink>
    </SimpleButton>
</template>

<script setup lang="ts">
// définir un autre layout à utiliser (déjà créé précédemment dans layouts)
definePageMeta({
    layout: 'custom'
})
</script>
