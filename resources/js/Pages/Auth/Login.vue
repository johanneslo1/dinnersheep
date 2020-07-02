<template>
    <div class="container">
        <div class="row align-items-center min-vh-100">
            <div class="col">
                <div class="card m-3">
                    <div class="card-header">
                        <h2>Login</h2>
                    </div>
                    <div class="card-body">
                        <ResponseMessage />
                        <form @submit.prevent="submit">
                            <div class="form-group">
                                <label for="inputEmail">E-Mail</label>
                                <input v-model="form.data.email" type="email" class="form-control" placeholder="E-Mail..." id="inputEmail" >
                            </div>
                            <div class="form-group">
                                <label for="inputPassword">Passwort</label>
                                <input v-model="form.data.password" type="password" class="form-control" placeholder="Passwort..." id="inputPassword">
                            </div>
                            <div class="form-group form-check">
                                <input v-model="form.data.keepLoggedIn" type="checkbox" class="form-check-input" id="checkKeepLoggedIn">
                                <label class="form-check-label" for="checkKeepLoggedIn">Eingeloggt bleiben?</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Einloggen</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import ResponseMessage from "../../Shared/ResponseMessage";

    export default {
        components: {
            ResponseMessage,
        },
        data() {
          return {
              form: {
                  data: {
                      email: 'test@test.com',
                      password: 'secret',
                      keepLoggedIn: true,
                  }
              }
          }
        },
        methods: {
            submit() {
                this.$inertia.post(``, this.form.data)
            }
        }
    }
</script>

<style scoped>
    .row {}
</style>
