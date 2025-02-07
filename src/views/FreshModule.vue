<template>
  <div class="container">
    <div class="card-body">
      <div class="row" style="padding: 10px">
        <div class="col-md-3">
          <div style="overflow: hidden; border-radius: 5px">
            <div class="text-center row mdl">
              <h1 class="card-title col-6 col-module m-0 bg-info p-2">TMC</h1>
              <h1 class="card-text col-6 col-module bg-light p-2">
                {{
                  module.filter((module) => module.exporter_name == 'TMC')
                    .length
                }}
              </h1>
            </div>
            <div class="text-center">
              <h3 class="text-muted col-minmodule mt-1 mb-0">
                Minimal = 10 Modules
              </h3>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style="overflow: hidden; border-radius: 5px">
            <div class="text-center row mdl">
              <h1 class="card-title col-6 col-module m-0 bg-primary p-2">
                STM
              </h1>
              <h1 class="card-text col-6 col-module bg-light p-2">
                {{
                  module.filter((module) => module.exporter_name == 'STM')
                    .length
                }}
              </h1>
            </div>
            <div class="text-center">
              <h3 class="text-muted col-minmodule mt-1 mb-0">
                Minimal = 10 Modules
              </h3>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style="overflow: hidden; border-radius: 5px">
            <div class="text-center row mdl">
              <h1
                class="card-title col-6 col-module m-0 bg-danger pt-4"
                style="font-size: 2rem"
              >
                UMWT
              </h1>
              <h1 class="card-text col-6 col-module bg-light p-2">
                {{
                  module.filter((module) => module.exporter_name == 'UMWT')
                    .length
                }}
              </h1>
            </div>
            <div class="text-center">
              <h3 class="text-muted col-minmodule mt-1 mb-0">
                Minimal = 10 Modules
              </h3>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style="overflow: hidden; border-radius: 5px">
            <div class="text-center row mdl">
              <h1 class="card-title col-6 col-module m-0 bg-warning p-2">
                TMV
              </h1>
              <h1 class="card-text col-6 col-module bg-light p-2">
                {{
                  module.filter((module) => module.exporter_name == 'TMV')
                    .length
                }}
              </h1>
            </div>
            <div class="text-center">
              <h3 class="text-muted col-minmodule mt-1 mb-0">
                Minimal = 10 Modules
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="data-uploaded">
    <div class="filter-section">
      <label for="filter-date">Module Type</label>
      <input type="text" id="filter-date" />
    </div>

    <div class="filter-section">
      <label for="filter-date">Exporter Name</label>
      <input type="text" id="filter-module" />
    </div>

    <div class="filter-section">
      <label for="filter-date">Month Receive</label>
      <input type="text" id="filter-unique" />
    </div>
    <button type="button" class="btn btn-primary" @click="submitForm">
      Submit
    </button>
  </div>

  <div class="table-section">
    <table class="data-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Module Type</th>
          <th>Exp Name</th>
          <th>Module No.</th>
          <th>Module Type</th>
          <th>Date Receive</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-for="(module, index) in module" :key="index">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ module.module_type }}</td>
          <td>{{ module.exporter_name }}</td>
          <td>{{ module.module_no }}</td>
          <td>{{ module.module_note }}</td>
          <td>{{ module.date_receive }}</td>
          <td>
            <button
              type="button"
              class="btn btn-secondary"
              @click="handleEdit(index)"
            >
              Detail
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="handleDelete(index)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <CPagination align="center" aria-label="Page navigation example">
      <CPaginationItem disabled>Previous</CPaginationItem>
      <CPaginationItem href="#">1</CPaginationItem>
      <CPaginationItem href="#">2</CPaginationItem>
      <CPaginationItem href="#">3</CPaginationItem>
      <CPaginationItem href="#">Next</CPaginationItem>
    </CPagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {
    name: 'FreshModule',
  },
  data() {
    return {
      module: [],
      tmc: '',
    }
  },
  mounted() {
    axios.get('http://localhost:5000/module').then((response) => {
      console.log(response.data.data)
      this.module = response.data.data
      this.tmc = response.data.data.filter(
        (module) => module.exporter_name == 'TMC',
      )
      console.log(
        response.data.data.filter((module) => module.exporter_name == 'TMC')
          .length,
      )
    })
  },
}
</script>

<style scoped>
.container {
  padding: 0;
  margin: 0;
  /* margin-top: 2rem; */
  /* height: 20vh; */
}

.bg {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 3px;
  overflow: hidden;
}
.mdl {
  height: 4.5rem;
}
.col-module {
  font-size: 3rem;
  padding: 0;
}

.col-minmodule {
  font-size: 1rem;
  background-color: aquamarine;
}
.title {
  padding: 0 0 0 10px;
  max-height: 3.5rem;
  background-color: #999;
}
.upload-section {
  justify-content: space-between;
  margin: 20px;
}

.filter-section {
  display: grid;
  width: 20%;
}
.filter-section label {
  font-weight: bold;
}
.filter-section input {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 3px;
  border: 0;
  height: 2rem;
}
.file-name {
  margin-left: 10px;
}
.data-uploaded {
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
}
.data-uploaded button {
  position: relative;
  height: 2rem;
  top: 1rem;
}
.table-section {
  margin-top: 10px;
}
.data-table {
  margin: 0 1%;
  margin-bottom: 10px;
  width: 98%;
  border-collapse: collapse;
}
.data-table th {
  background-color: skyblue;
}
.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
.page-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
}

.page-navigation button {
  margin: 0;
  padding: 10px;
  color: black;
  border: 1px skyblue solid;
  cursor: pointer;
  background-color: white;
}

.page-navigation button:hover {
  background-color: #007bff;
}

.page-numbers {
  display: flex;
  align-items: center;
}

.submit-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.submit-button:hover {
  background-color: #0056b3;
}
</style>
