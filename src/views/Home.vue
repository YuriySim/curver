<template>
  <div class="main-wrapper">
    <Loader v-if="loading" />

    <div class="wrapper" v-else>
      <h6>Curves</h6>

      <LineChart
        v-if="dataTable.length != 0"
        :dataTable="dataTable"
        :key="dataTable.length"
      />

      <Form @addToTable="addToTable" />

      <Table
        :dataTable="dataTable"
        :key="dataTable.length"
      />

      <button
        class="btn waves-effect waves-light"
        type="submit"
        @click.prevent="submitHandler"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
  import LineChart from '@/components/home-page/LineChart.vue'
  import Form from '@/components/home-page/Form.vue'
  import Table from '@/components/home-page/Table.vue'

  import messages from '@/utils/messages'

  export default {
    name: 'Home',

    data() {
      return {
        dataTable: [],

        loading: true, //turn on preloader
      }
    },

    methods: {
      //This method adds entered data in dataTable
      addToTable(results) {
        this.dataTable.push(results)
      },

      //This method sends all data to backend
      async submitHandler() {
        await this.$store.dispatch('updateData', this.dataTable)
      },
    },

    async mounted() {
      //Display a message about successful login using query parameter
      if (messages[this.$route.query.message]) {
        this.$message(messages[this.$route.query.message])
      }

      //GET-requestion to backend
      await this.$store.dispatch('fetchData')

      //Save the data received from backend into dataTable
      this.dataTable = this.comDataTable

      this.loading = false //turn off preloader
    },

    computed: {
      comDataTable() {
        return this.$store.getters.dataTable
      }
    },

    components: {
      LineChart,
      Form,
      Table,
    },
  }
</script>
