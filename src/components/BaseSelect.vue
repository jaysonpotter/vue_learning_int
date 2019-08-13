<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <select type="text" :value="value" @change="updateValue" v-bind="$attrs" v-on="$listeners">
            <option
                    v-for="option in options"
                    :value="option"
                    :key="option"
                    :selected="option === value">{{ option }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "BaseSelect",
        inheritAttrs: false, // by default attributes are placed on the parent element aka: the div
        props: {
            options: {
                type: Array,
                required: true
            },
            label: {
                type: String,
                default: ''
            },
            value: [
                String,
                Number
            ]
        },
        methods: {
            updateValue(event){
                this.$emit('input', event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>