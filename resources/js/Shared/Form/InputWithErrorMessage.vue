<template>
    <div>

        <textarea v-if="type === 'textarea'" v-model="modelData[modelKey]"
                  :class="`form-control ${$page.errors && $page.errors[modelKey] ? 'has-error' : ''}`"
                  :id="`input_${modelKey}`" :aria-describedby="`${modelKey}_error`" :placeholder="placeholder" id=""
                  cols="30" rows="10">

        </textarea>

        <input v-else v-model="modelData[modelKey]" :type="type"
               :class="`form-control ${$page.errors && $page.errors[modelKey] ? 'has-error' : ''}`"
               :id="`input_${modelKey}`" :aria-describedby="`${modelKey}_error`" :placeholder="placeholder">
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
