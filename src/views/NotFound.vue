<template>
    <div>
        <h1>Oops!</h1>
        <p>The {{ resource }} you're looking for is not here.</p>
        <router-link :to="{name: 'event-list'}">Back to home page</router-link>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        props: {
            resource: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>