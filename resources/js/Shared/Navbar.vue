<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3">
        <a class="navbar-brand font-weight-bold" href="#">
            <span class="text-primary">dinner.</span>sheep
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <inertia-link class="nav-link" href="/">
                        Home <span class="sr-only">(current)</span>
                    </inertia-link>
                </li>
                <li class="nav-item">
                    <inertia-link class="nav-item nav-link" href="/restaurants">Restaurants</inertia-link>
                </li>
                <li class="nav-item">
                    <a class="nav-item nav-link" href="#">Besuchergruppe</a>
                </li>
                <li class="nav-item">
                    <a class="nav-item nav-link" href="#">Lieblingsgerichte</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ $page.auth.user ? $page.auth.user.name : '' }}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <inertia-link class="dropdown-item" href="/account/settings">Einstellungen</inertia-link>
                        <div class="dropdown-divider"></div>
                        <inertia-link class="dropdown-item" href="/logout" method="post">Abmelden</inertia-link>
                    </div>

                </li>
            </ul>

        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
