<template>
  <div class="custom-container text-start">
    <p class="title-text h5 text-muted">
      <i>Pending Releases</i> <small>all pending releases by user</small>
    </p>

    <div>
      <b-table-simple small hover>
        <b-thead>
          <b-tr class="table-header">
            <b-th>RECIPIENT FIRST NAME</b-th>
            <b-th>RECIPIENT LAST NAME</b-th>
            <b-th>COMPANY</b-th>
            <b-th>MRN</b-th>
            <b-th>NAME</b-th>
            <b-th>DELIVERY METHOD</b-th>
            <b-th>STATUS</b-th>
            <b-th>REASON</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody class="table-body">
          <b-tr v-for="(data, index) in tableData" :key="index">
            <b-td>{{ data.firstName }}</b-td>
            <b-td>{{ data.lastName }}</b-td>
            <b-td>{{ data.company }}</b-td>
            <b-td>{{ data.mrn }}</b-td>
            <b-td>{{ data.name }}</b-td>
            <b-td>{{ data.deliveryMethod }}</b-td>
            <b-td>{{ data.status }}</b-td>
            <b-td>{{ data.reason }}</b-td>
            <b-td
              ><b-button variant="warning" size="sm"
                >Continue Release</b-button
              ></b-td
            >
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tableData: [
      {
        firstName: "VIBE",
        lastName: "HIPE",
        company: "TRIPE",
        mrn: "",
        name: "",
        deliveryMethod: "",
        status: "Pending",
        reason: "",
      },
      {
        firstName: "Donald",
        lastName: "French",
        company: "VertiSoft Corp",
        mrn: "002701",
        name: "SMART, NANCY IH",
        deliveryMethod: "dhfrench@vertisoft.com",
        status: "Pending",
        reason: "testing",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.title-text {
  small {
    font-size: 15px;
    font-style: italic;
    font-weight: 400;
  }
}
.table-header {
  th {
    font-size: 11px;
    vertical-align: top;
  }
}

.table-body {
  tr td {
    vertical-align: middle;
    font-size: 14px;
  }
}
</style>
