<template>
    <div>
        <button v-on="$listeners" v-bind="$attrs" class="button" :class="buttonClass">
            <slot/>
        </button>
    </div>
</template>

<script>
    export default {
        name        : "BaseButton",
        interitAttrs: false, // does not inherit class and style attributes in Vue 2
        props       : {
            buttonClass: {
                type: String
            }
        }
    }
</script>

<style scoped>

</style>