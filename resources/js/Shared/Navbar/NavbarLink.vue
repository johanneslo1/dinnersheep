<template>
    <inertia-link :class="`nav-item nav-link ${isActive  ? 'active' : ''}`" :href="href">
        <slot></slot>
        <span v-if="isActive" class="sr-only">(current)</span>
    </inertia-link>
</template>

<script>
    export default {
        props: {
            href: {
                default: '#',
                type: String,
            }
        },
        data() {
            return {
                isActive: false,
            }
        },
        mounted() {
           // Add Event Listener
        },
        methods: {
            checkIsActive() {
                return this.isActive = window.location.pathname === this.href;
            }
        }
    }
</script>

<style scoped>

</style>
