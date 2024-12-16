<template>
  <div class="container bg">
    <!-- <div class="title bg-secondary"> -->
    <div class="title">
      <h1>Request Module</h1>
    </div>
    <div class="bRequest row justify-content-between text-center">
      <div class="col-2">
        <h1>5</h1>
        <div>TMC</div>
      </div>
      <div class="col-2">
        <h1>5</h1>
        <div>STM</div>
      </div>
      <div class="col-2">
        <h1>5</h1>
        <div>UMWT</div>
      </div>
      <div class="col-2">
        <h1>5</h1>
        <div>TMV</div>
      </div>
    </div>

    <div class="table-section">
      <table class="data-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Manifest No.</th>
            <th>W/fill Sunter</th>
            <th>Sub Routes</th>
            <th>Request</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>00xxx</td>
            <td>2025</td>
            <td>IN-03</td>
            <td>2024</td>
            <td>
              <button class="bg-primary b-0" @click="handleEdit(index)">
                Edit
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Delete
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                pdf
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Send
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>00xxx</td>
            <td>2025</td>
            <td>IN-03</td>
            <td>2024</td>
            <td>
              <button class="bg-primary b-0" @click="handleEdit(index)">
                Edit
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Delete
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                pdf
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Send
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>00xxx</td>
            <td>2025</td>
            <td>IN-03</td>
            <td>2024</td>
            <td>
              <button class="bg-primary b-0" @click="handleEdit(index)">
                Edit
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Delete
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                pdf
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Send
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>00xxx</td>
            <td>2025</td>
            <td>IN-03</td>
            <td>2024</td>
            <td>
              <button class="bg-primary b-0" @click="handleEdit(index)">
                Edit
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Delete
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                pdf
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Send
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>00xxx</td>
            <td>2025</td>
            <td>IN-03</td>
            <td>2024</td>
            <td>
              <button class="bg-primary b-0" @click="handleEdit(index)">
                Edit
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Delete
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                pdf
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Send
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>00xxx</td>
            <td>2025</td>
            <td>IN-03</td>
            <td>2024</td>
            <td>
              <button class="bg-primary b-0" @click="handleEdit(index)">
                Edit
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Delete
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                pdf
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Send
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>00xxx</td>
            <td>2025</td>
            <td>IN-03</td>
            <td>2024</td>
            <td>
              <button class="bg-primary b-0" @click="handleEdit(index)">
                Edit
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Delete
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                pdf
              </button>
              <button class="bg-danger" @click="handleDelete(index)">
                Send
              </button>
            </td>
          </tr>
          <!-- <tr v-for="(item, index) in data" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.noModule }}</td>
                <td>{{ item.partNo }}</td>
                <td>{{ item.partName }}</td>
                <td>{{ item.uniqueNo }}</td>
                <td>{{ item.box }}</td>
                <td>{{ item.totalPcs }}</td>
                <td>{{ item.wfilSunter }}</td>
                <td>{{ item.request }}</td>
                <td>{{ item.received }}</td>
                <td>
                  <button class="bg-primary b-0" @click="handleEdit(index)">Edit</button>
                  <button class="bg-danger"@click="handleDelete(index)">Delete</button>
                </td>
              </tr> -->
        </tbody>
      </table>

      <div class="page-navigation">
        <button class="previous">Previous</button>
        <div class="page-numbers">
          <span>Page 1 of 5</span>
          <button class="page-number">1</button>
          <button class="page-number">2</button>
          <button class="page-number">3</button>
        </div>
        <button class="next">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestModule',
  component: {},
  data() {
    return {
      selectedFile: null,
      data: [],
      currentPage: 1,
      itemsPerPage: 10,
    }
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0].name
    },
    handleEdit(index) {
      // Logic for editing the item
    },
    handleDelete(index) {
      this.data.splice(index, 1)
    },
    handleSubmit() {
      // Logic for submitting the data
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < Math.ceil(this.data.length / this.itemsPerPage)) {
        this.currentPage++
      }
    },
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

.bRequest {
  padding: 0;
  width: 98%;
  height: 10rem;
  border-radius: 10px;
  margin: 0 1%;
}

.bRequest div {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
}

.bRequest div h1 {
  font-size: 5rem;
}
.bRequest div div {
  font-size: 2rem;
  width: 100%;
}

.bg {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 3px;
  overflow: hidden;
}

.title {
  padding: 0;
  max-height: 3.5rem;
  background-color: #999;
}
.upload-section {
  justify-content: space-between;
  margin: 20px;
}

.filter-section {
  display: grid;
  width: 30%;
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
.table-section {
  margin-top: 10px;
}
.data-table {
  margin: 0 1%;
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
