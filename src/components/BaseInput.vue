<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input type="text" :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners">
    </div>
</template>

<script>
    export default {
        name: "BaseInput",
        inheritAttrs: false, // by default attributes are placed on the parent element aka: the div
        props: {
            label: {
                type: String,
                default: ''
            },
            value: [
                String,
                Number
            ]
        },
        computed: {
            listeners(){
                return {
                    ...this.$listeners,
                    input: this.updateValue
                }
            }
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