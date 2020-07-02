<template>
    <div>
        <button :type="type ? type : 'button'" :class="className ? className : 'btn btn-primary'" :disabled="isLoading"
                @click="$emit('click')">
                                            <span v-if="isLoading" class="spinner-border spinner-border-sm"
                                                  role="status" aria-hidden="true"></span>
            <slot v-else>

            </slot>
            {{ isLoading ? ' Lädt...' : text}}
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            type: String,
            isLoading: Boolean,
            text: String,
            className: String,
        }
    }
</script>

<style scoped>

</style>
