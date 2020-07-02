<template>
    <div>
        <input v-model="modelData[modelKey]" :type="type" :class="`form-control ${$page.errors && $page.errors[modelKey] ? 'has-error' : ''}`" :id="`input_${modelKey}`" :aria-describedby="`${modelKey}_error`" :placeholder="placeholder">
        <InputErrorMessages :name="modelKey"/>
    </div>
</template>

<script>
    import InputErrorMessages from "./InputErrorMessages";

    export default {
        props: {
            modelData: null,
            modelKey: {
                default: '',
                type: String,
            },
            type: {
                default: 'text',
                type: String,
            },
            placeholder: {
                default: '',
                type: String,
            }
        },
        components: {
            InputErrorMessages
        }
    }
</script>

<style scoped>

</style>
