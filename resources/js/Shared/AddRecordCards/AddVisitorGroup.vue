<template>
    <Card title="Gang gewechselt?">
        <template #description>
            Damit du mit deiner neuen Gruppe demnächst alle Rekode brichst.<br>Trag sie hier ein:
        </template>
       <template #link>
           <a href="#" class="btn btn-primary">
               <i class="mdi mdi-plus"></i>
               Gruppe eintragen
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
