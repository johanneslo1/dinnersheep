<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">
                {{ title }}
            </h5>
            <p class="card-text">
               <slot name="description"></slot>
            </p>
            <slot name="link"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                default: 'Titel',
                type: String,
            }
        }
    }
</script>

<style scoped>

</style>
