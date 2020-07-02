<template>
    <GoogleMapsLocationSelector :latitude="51" :longitude="9"
                           @locationUpdated="locationUpdated">
    </GoogleMapsLocationSelector>
</template>

<script>
    import GoogleMapsLocationSelector from "./GoogleMapsLocationSelector";
    export default {
        components: {GoogleMapsLocationSelector},
        mounted() {
            // Dynamic load
            var scriptElm = document.createElement('script');
            scriptElm.id = 'js-googleMaps';
            scriptElm.src = `https://maps.googleapis.com/maps/api/js?key=${window.googleMapsApiKey}`;
            //document.body.appendChild(scriptElm);
        },
        methods: {
            locationUpdated(latlon) {
                console.log(latlon);
            }
        },
        beforeDestroy() {
            document.getElementById('js-googleMaps').remove();
        }
    }
</script>

<style scoped>

</style>
