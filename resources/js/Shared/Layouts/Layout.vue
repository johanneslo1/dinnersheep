<template>
    <div>
        <Navbar/>
        <slot></slot>
        <Footer />
    </div>
</template>

<script>
    import Navbar from "../Navbar/Navbar";
    import Footer from "../Footer";

    export default {
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style scoped>

</style>
