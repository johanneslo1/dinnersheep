<template>

    <form @submit.prevent="search">
        <div v-if="show" class="input-group">
            <input v-model="value" type="text" @input="search" class="form-control" placeholder="Suchen..." aria-label="Suchen..." aria-describedby="button-addon-group">
<!--            <div class="input-group-append">-->
<!--                <button @click="search" class="btn btn-primary" type="button" id="button-addon-group">-->
<!--                    <i class="mdi mdi-magnify"></i>-->
<!--                    </button>-->
<!--            </div>-->
        </div>
    </form>

</template>

<script>
    export default {
        data() {
            return {
                value: '',
                show: true,
            }
        },
        mounted() {
            let params = new URLSearchParams(window.location.search);
            this.value = params.get('search');
            this.show = !(params.get('filters'));
        },
        methods: {
            search()
            {
                this.$inertia.visit(`?search=${encodeURI(this.value)}`, {
                    preserveScroll: false,
                    preserveState: true,
                });
            }
        }
    }
</script>

<style scoped>
</style>
