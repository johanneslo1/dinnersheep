<template>
    <small v-if="$page.errors && $page.errors[name]" :id="`${name}_error`" class="form-text text-muted">
        <ul class="text-danger">
            <li v-for="error in $page.errors[name]">{{ error }}</li>
        </ul>
    </small>
</template>

<script>
    export default {
        props: {
            name: null
        }
    }
</script>

<style scoped>

</style>
