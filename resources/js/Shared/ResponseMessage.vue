<template>
    <div v-if="$page.flash.success || $page.flash.error || $page.errors || $page.flash.warning" class="row">
        <div class="col-md-12">


            <div v-if="$page.flash.success" class="alert alert-success" role="alert">
                <strong>Erfolgreich!</strong> {{ $page.flash.success }}
            </div>


            <div v-if="$page.flash.error" class="alert alert-danger" role="alert">
                <strong>Fehlgeschlagen!</strong> {{ $page.flash.error }}
            </div>


            <div v-if="$page.flash.warning" class="alert alert-warning" role="alert">
                <strong>Achtung!</strong> {{ $page.flash.warning }}
            </div>


            <div v-if="$page.errors && !hideErrors" class="alert-list">
                <div class="alert alert-danger" role="alert">

                    <ul class="m-0">
                        <template v-for="messages in $page.errors">
                            <li v-for="message in messages">{{ message }}</li>
                        </template>
                    </ul>


                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            // Wenn Errors bereits von der Seite angezeigt werden sollen und nicht noch mal hier in der ResponseMessage
            hideErrors: {
                default: false,
                type: Boolean,
            }
        }
    }
</script>

<style scoped>

</style>
