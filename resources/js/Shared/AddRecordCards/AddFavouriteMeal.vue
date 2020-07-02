<template>

    <Card title="Neues Lieblingsgericht?">
        <template #description>
            Damit du nicht vergisst, was dein neustes Lieblingsgericht ist.<br>Trag's hier schnell ein:
        </template>
        <template #link>
            <a href="#" class="btn btn-primary">
                <i class="mdi mdi-plus"></i>
                Gericht eintragen
            </a>
        </template>
    </Card>

</template>

<script>
    import Card from "./Card";

    export default {
        components: {
            Card
        }
    }
</script>

<style scoped>

</style>
