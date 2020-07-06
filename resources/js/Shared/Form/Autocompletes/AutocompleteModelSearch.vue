<template>
    <autocomplete :search="search" :get-result-value="resultValueCallback" :disabled="disabled"
                  @submit="(result) => {submitCallback ? submitCallback(result) : submit(result)}"
    />
</template>

<script>
    export default {
        props: {
            // Name des Models. Wird genutzt um den richtigen API-Endpunkt anzusprechen.
            model: {
                type: String,
                default: 'model'
            },
            resultValueCallback: Function,
            primaryKey: {
                type: String,
                default: 'id',
            },
            submitCallback: {
                type: Function,
                default: null,
            },
            disabled: {
                default: false,
                type: Boolean,
            }
        },
        mounted() {
        },
        methods: {
            submit(result) {
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

<style>
    .autocomplete-input {
        color: #8A98AC;
        border: 1px solid #ced4da;
        display: block;
        width: 100%;
        height: calc(1.5em + .75rem + 2px);
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        padding: .375rem .75rem;
        background-color: #fff;
        background-clip: padding-box;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        background-image: none;
    }

    .autocomplete-result {
        padding: 12px;
        background: none;
    }
    [data-position=below] .autocomplete-result-list {
        border-top-color: transparent;
        border-radius: .25rem;
        padding-bottom: 0px;
        text-align: left;
    }

    .autocomplete-input:focus, .autocomplete-input[aria-expanded=true] {
        box-shadow: none;
        border-color: #007bff;
    }

</style>
