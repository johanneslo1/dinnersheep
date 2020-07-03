<template>
    <Card title="Restaurantbesuch eintragen">
        <template #description>
            Warst du gerade etwas essen gehen? Wir hoffen, es hat dir geschmeckt!
        </template>
        <template #link>
            <inertia-link href="/visits/create" class="btn btn-primary">
                <i class="mdi mdi-plus"></i>
                Besuch eintragen
            </inertia-link>
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
