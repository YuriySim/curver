<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script>
  import messages from '@/utils/messages'

  export default {
    name: 'empty-layout',

    //here computed and watch are automatic error handling
    computed: {
      error() {
        return this.$store.getters.error
      }
    },

    watch: {
      error() {
        if (this.error !== null) {
          this.$error(messages[this.error] || 'Something went wrong')
        }
      }
    },
  }
</script>
