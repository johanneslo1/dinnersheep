<template>
    <div class="layout-wrapper">
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
.layout-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
}
</style>
