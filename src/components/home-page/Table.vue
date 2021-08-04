<template>
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Unit</th>
        <th>Reach% 1+</th>
        <th>Reach% 2+</th>
        <th>Reach% 3+</th>
        <th>Reach% 4+</th>
        <th>Reach% 5+</th>
        <th>Reach% 6+</th>
        <th>Reach% 7+</th>
        <th>Reach% 8+</th>
        <th>Reach% 9+</th>
        <th>Reach% 10+</th>
        <th> </th>
      </tr>
    </thead>

    <tbody v-for="(item, idx) of dataTable" :key="item.unit">
      <tr class="backlight">
        <td>{{ idx + 1 }}</td>
        <td>{{ item.unit }}</td>
        <td>{{ item.reach[0] }}</td>
        <td>{{ item.reach[1] }}</td>
        <td>{{ item.reach[2] }}</td>
        <td>{{ item.reach[3] }}</td>
        <td>{{ item.reach[4] }}</td>
        <td>{{ item.reach[5] }}</td>
        <td>{{ item.reach[6] }}</td>
        <td>{{ item.reach[7] }}</td>
        <td>{{ item.reach[8] }}</td>
        <td>{{ item.reach[9] }}</td>
        <td>
          <a
            class="waves-effect waves-light btn" @click.prevent="deleteData(idx)"
          >
            <i class="material-icons">delete</i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>

  <p class="text-p" v-if="dataTable.length == 0">Data not created!</p>
</template>

<script>
  export default {
    name: 'Table',

    props: {
      dataTable: {
        required: true,
        type: Array,
      },
    },

    methods: {
      deleteData(idx) {
        this.dataTable.splice(idx, 1)
        this.$message('Deleted')
      },
    },
  }
</script>
