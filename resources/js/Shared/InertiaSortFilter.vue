<template>
    <div>

        <template v-if="sortFilter.showFilters">
            <!-- Wenn Filter angezeigt werden sollen. -->
            <div
                :class="`input-group`">


                <select v-if="inputType === 'select'" v-model="sortFilter.filters[filterName]" @change="filter"
                        class="form-control custom-select">
                    <option value="0">{{ placeholder }}</option>
                    <slot></slot>
                </select>


                <input v-if="inputType === 'text'" v-model="sortFilter.filters[filterName]" :placeholder="placeholder"
                       @change="filter"
                       class="form-control" aria-describedby="basic-addon1">

                <span @click="sort" class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
  <template v-if="sortFilter.sort.attribute === sortName">
                        <i v-if="sortFilter.sort.direction === 'asc'" class="mdi mdi-sort-ascending"
                           aria-hidden="true"></i>
                        <i v-if="sortFilter.sort.direction === 'desc'" class="mdi mdi-sort-descending"
                           aria-hidden="true"></i>
                    </template>
                <i v-else class="mdi mdi-sort" aria-hidden="true"></i>
                </span>
            </span>
            </div>
        </template>


        <template v-else>
            <!-- Wenn Filter nicht angezeigt werden sollen. -->
           <div @click="sort">
               {{ placeholder }}
               <template v-if="sortFilter.sort.attribute === sortName">
                   <i v-if="sortFilter.sort.direction === 'asc'" class="mdi mdi-sort-ascending"
                      aria-hidden="true"></i>
                   <i v-if="sortFilter.sort.direction === 'desc'" class="mdi mdi-sort-descending"
                      aria-hidden="true"></i>
               </template>
               <i v-else class="mdi mdi-sort" aria-hidden="true"></i>
           </div>

        </template>


    </div>
</template>

<script>
    export default {
        props: {
            sortFilter: Object,
            sortName: String,
            filterName: String,
            placeholder: String,
            inputType: {
                default: 'text',
                type: String,
            },
        },
        mounted() {
            if (!this.sortFilter.filters[this.filterName] && this.inputType === 'select') {
                this.sortFilter.filters[this.filterName] = '0';
            }
        },
        methods: {
            sort() {
                if (this.sortFilter.sort.attribute === this.sortName) {

                    this.sortFilter.sort.direction = this.sortFilter.sort.direction === 'desc' ? 'asc' : 'desc';

                } else {
                    this.sortFilter.sort.attribute = this.sortName;
                    this.sortFilter.sort.direction = 'desc';
                }


                this.filter();

            },
            filter() {
                this.$inertia.visit(``, {
                    preserveScroll: true,
                    preserveState: true,
                    data: {
                        filters: JSON.stringify(this.sortFilter.filters),
                        sort: this.sortFilter.sort.attribute,
                        direction: this.sortFilter.sort.direction,
                    }
                });
            }
        }
    }
</script>

<style scoped>
    div {
        cursor: pointer;
        background-color: #fff !important;
    }

    select {
        outline: none;
        border: none;
    }

    input, span.input-group-text {
        border: none;
        background-color: transparent;
    }

</style>
