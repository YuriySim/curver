<template>
  <div class="main-layout">
    <nav>
      <div class="navbar">
        <a
          class='btn waves-effect waves-light'
          href='#'
          @click.prevent="logout"
          >
          Logout
        </a>
      </div>
    </nav>

    <main class="content">
      <router-view />
    </main>

    <footer class="footer">
      <p>All rights reserved © 2020-2021 YS Portfolio</p>
    </footer>
  </div>
</template>

<script>
  import messages from '@/utils/messages'

  export default {
    name: 'main-layout',

    methods: {
      //This method logs out when click on the button
      logout() {
        this.$store.dispatch('logout')
      }
    },

    //here computed and watch are automatic error handling
    computed: {
      error() {
        return this.$store.getters.error
      },

      status() {
        return this.$store.getters.status
      }
    },

    watch: {
      error() {
        if (this.error !== null) {
          this.$error(messages[this.error] || 'Something went wrong')
        }
      },

      status() {
        //On successful sending data to backend
        if (this.status == 200) {
          this.$message(messages[this.status])
        }
      }
    },
  }
</script>
