<template>
    <nav class="navbar navbar-expand-lg navbar-light pt-3 pb-3">
      <div class="container">
          <inertia-link class="navbar-brand font-weight-bold" href="/">
              <span class="text-primary">dinner.</span>sheep
          </inertia-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

              <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <navbar-link href="/">Home</navbar-link>
                  </li>
                  <li class="nav-item">
                      <navbar-link href="/restaurants">Restaurants</navbar-link>
                  </li>
                  <li class="nav-item">
                      <navbar-link href="/visits">Besuche</navbar-link>
                  </li>
                  <li class="nav-item">
                      <navbar-link href="/meals">Gerichte</navbar-link>
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
      </div>
    </nav>
</template>

<script>
    import NavbarLink from "./NavbarLink";

    export default {
        components: {
            NavbarLink
        }
    }
</script>

<style scoped>

</style>
