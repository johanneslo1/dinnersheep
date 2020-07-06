<template>
    <button @click="deleteItem" class="btn btn-outline-danger btn-xs">
        <i class="mdi mdi-delete"></i>
    </button>
</template>

<script>
    export default {
        props: {
            model: {
                default: {},
                type: Object,
            },
            title: {
                default: 'Möchtest du den Eintrag wirklich löschen?',
                type: String,
            },
            modelPath: {
                default: 'model-names',
                type: String,
            },
            primaryKey: {
                default: 'id',
                type: String,
            }

        },
        methods: {
            deleteItem()
            {
                this.$swal({
                    title: this.title,
                    text: "Diese Aktion kann nicht mehr rückgängig gemacht werden!",
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonText: 'Abbrechen',
                    confirmButtonText: 'Löschen'
                }).then((type) => {
                    if(type && type.value === true)
                        this.$inertia.delete(`/${this.modelPath}/${this.model[this.primaryKey]}`, {
                            preserveScroll: false,
                        });
                });
            }
        }
    }
</script>

<style scoped>

</style>
