<template>
    <div>
        <AutocompleteModelSearch  id="restaurant_id"
                                 :model="model" primary-key="id" :submit-callback="submit"
                                 :resultValueCallback="resultValueCallback"/>


        <p v-if="autocomplete_message" class="mt-2 mb-2 text-danger">{{ autocomplete_message }}</p>
        <div class="table-responsive mt-3">
            <table class="table">
                <tbody>
                <tr v-for="(item, index) in selectedValues">
                    <td>{{ resultValueCallback(item) }}</td>
                    <td class="text-right">
                        <button @click="removeItem(index)" class="btn btn-xs btn-danger">
                            <i class="mdi mdi-minus"></i>
                        </button>
                    </td>
                </tr>
                <slot name="table_end"></slot>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import AutocompleteModelSearch from "./AutocompleteModelSearch";

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
            value: Array,
        },
        components: {
            AutocompleteModelSearch,
        },
        data() {
            return {
                autocomplete_message: '',
                selectedValues: this.value,
            }
        },
        mounted() {

        },
        methods: {
            removeItem(index) {
                this.selectedValues.splice(index, 1);
            },
            submit(result) {

                let el = this.selectedValues.find(element => element[this.primaryKey] === result[this.primaryKey]);

                if (el) {
                    // let index = this.selectedValues.indexOf(el);
                    // this.removeItem(index);
                    this.autocomplete_message = 'Der Eintrag wurde bereits ausgewählt!';
                } else {
                    this.selectedValues.push(result);
                    this.$emit('input', this.selectedValues);
                }
            },
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
