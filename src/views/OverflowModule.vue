<template>
  <div class="container">
    <div class="card-body">
      <div class="row" style="padding: 1% 2%">
        <div class="col-md-3 w-100">
          <div style="overflow: hidden" class="row justify-content-between">
            <div class="text-center row mdl col-3">
              <h1
                class="card-title col-6 col-module bg-danger m-0"
                style="font-size: 1.5rem; padding-top: 30px"
              >
                Overflow
              </h1>
              <h1 class="card-text col-6 col-module p-4 bg-light">7</h1>
            </div>
            <div class="col-1 p-0 m-0">
              <button
                @click="handleModal"
                type="button"
                style="font-size: 1rem"
                class="btn btn-danger flex-end"
              >
                +
              </button>
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
      <tbody>
        <tr>
          <td>1</td>
          <td>Route Deleivery</td>
          <td>TMC</td>
          <td>RX2023</td>
          <td>TSB</td>
          <td>2024</td>
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
        <tr>
          <td>1</td>
          <td>Route Deleivery</td>
          <td>TMC</td>
          <td>RX2023</td>
          <td>TSB</td>
          <td>2024</td>
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
        <tr>
          <td>1</td>
          <td>Route Deleivery</td>
          <td>TMC</td>
          <td>RX2023</td>
          <td>TSB</td>
          <td>2024</td>
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
        <tr>
          <td>1</td>
          <td>Route Deleivery</td>
          <td>TMC</td>
          <td>RX2023</td>
          <td>TSB</td>
          <td>2024</td>
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

    <CModal
      size="xl"
      :visible="modal"
      @close="
        () => {
          modal = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle id="OptionalSizesExample1"
          >Content List Module</CModalTitle
        >
      </CModalHeader>
      <CModalBody>
        <div class="table-section">
          <table class="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Module No</th>
                <th>Part No</th>
                <th>Part Name</th>
                <th>Unique No.</th>
                <th>Qty kanban</th>
                <th>Qty remain</th>
                <th>Date Tapping</th>
                <th>Date Overflow</th>
                <th>Date Unpacking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="date" /></td>
                <td><input type="date" /></td>
                <td><input type="date" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </CModalBody>
    </CModal>
  </div>
</template>

<script>
import { ref } from 'vue'
const modal = ref(false)

export default {
  components: {},
  data() {
    return {
      modal,
    }
  },
  methods: {
    handleModal() {
      this.modal = true
    },
  },
}
</script>

<style scoped>
td input {
  border: none;
  width: 100px;
}
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
  height: 6rem;
}
.col-module {
  font-size: 3rem;
  padding: 10px;
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
