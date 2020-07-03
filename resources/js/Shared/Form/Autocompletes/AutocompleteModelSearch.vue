<template>
    <autocomplete :search="search" :get-result-value="resultValueCallback"
                  @submit="(result) => {submitCallback ? submitCallback(result) : submit(result)}"
    />
</template>

<script>
    export default {
        props: {
            model: {
                type: String,
                default: 'Name des Models. Wird genutzt um den richtigen API-Endpunkt anzusprechen.'
            },
            resultValueCallback: Function,
            primaryKey: {
                type: String,
                default: 'id',
            },
            submitCallback: {
                type: Function,
                default: null,
            }
        },
        mounted() {
        },
        methods: {
            submit(result) {
                console.log("asdn");
                // Autocomplete Eintrag wurde ausgewählt
                // Feuere input event um v-model anzusprechen
                this.$emit('input', result[this.primaryKey]);
            },
            search(input) {
                let url = `/api/search/${this.model}/${input}?limit=5`;

                if (input.length < 1) {
                    return []
                }

                return new Promise(resolve => {
                    if (input.length < 3) {
                        return resolve([])
                    }
                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            resolve(data)
                        })
                })
            }
        }
    }
</script>

<style scoped>

</style>
