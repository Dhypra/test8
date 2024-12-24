<template>
  <!-- !Label Module -->

  <div class="card-body row container" style="padding: 10px">
    <div class="col-custom">
      <div style="overflow: hidden; border-radius: 5px">
        <div class="text-center row mdl">
          <h1 class="card-title col-6 col-module bg-info m-0 p-4">TMC</h1>
          <h1 class="card-text col-6 col-module p-4 bg-light">
            {{
              module.filter((module) => module.exporter_name == 'TMC').length
            }}
          </h1>
        </div>
      </div>
    </div>

    <div class="col-custom">
      <div style="overflow: hidden; border-radius: 5px">
        <div class="text-center row mdl">
          <h1 class="card-title col-6 col-module bg-info m-0 p-4">STM</h1>
          <h1 class="card-text col-6 col-module p-4 bg-light">
            {{
              module.filter((module) => module.exporter_name == 'TMV').length
            }}
          </h1>
        </div>
      </div>
    </div>

    <div class="col-custom">
      <div style="overflow: hidden; border-radius: 5px">
        <div class="text-center row">
          <h1
            class="card-title col-6 col-module m-0 bg-danger"
            style="font-size: 1.7rem; padding-top: 30px"
          >
            UMWT
          </h1>
          <h1 class="card-text col-6 col-module p-4 bg-light">
            {{
              module.filter((module) => module.exporter_name == 'UMWT').length
            }}
          </h1>
        </div>
      </div>
    </div>

    <div class="col-custom">
      <div style="overflow: hidden; border-radius: 5px">
        <div class="text-center row">
          <h1 class="card-title col-6 col-module m-0 p-4 bg-warning">TMV</h1>
          <h1 class="card-text col-6 col-module p-4 bg-light">
            {{
              module.filter((module) => module.exporter_name == 'TMV').length
            }}
          </h1>
        </div>
      </div>
    </div>

    <div class="col-custom">
      <div style="overflow: hidden; border-radius: 5px">
        <div class="text-center row">
          <h1 class="card-title col-6 col-module m-0 p-4 bg-warning">O/F</h1>
          <h1 class="card-text col-6 col-module p-4 bg-light">
            {{
              console.log(
                module.filter(
                  (module) =>
                    module.exporter_name == 'TMC&STM' ||
                    module.exporter_name == 'UMWT&TMV',
                ).length,
              )
            }}
            {{
              module.filter(
                (module) =>
                  module.exporter_name == 'TMC&STM' ||
                  module.exporter_name == 'UMWT&TMV',
              ).length
            }}
          </h1>
        </div>
      </div>
    </div>
  </div>

  <!-- !Filter Module -->
  <div class="data-uploaded">
    <div class="filter-section">
      <label for="filter-receive">Type Receive</label>
      <VueTreeselect
        v-model="selectedModuleType"
        :multiple="true"
        :options="moduleTypeOptions"
        placeholder="Select Module Type"
        @Click="filterTypeReceive, filteredModule"
        @input="filterExporterOptions"
      />
    </div>

    <div class="filter-section">
      <label for="filter-exporter">Exporter Name</label>
      <VueTreeselect
        v-model="selectedExporter"
        :multiple="true"
        :options="exporterOptions"
        placeholder="Select Exporter Name"
        @Click="filterExporterOptions, filteredModule"
        @input="filterModuleNoOptions"
      />
    </div>

    <div class="filter-section">
      <label for="filter-date">Module No.</label>
      <VueTreeselect
        v-model="selectedModuleNo"
        :multiple="true"
        :options="moduleNoOptions"
        @Click="filterModuleNoOptions, filteredModule"
        placeholder="Select Module No"
      />
    </div>
    {{ console.log(selectedModuleNo) }}
    <div class="filter-section">
      <label for="filter-date">Month Receive</label>
      <input v-model="selectedMonth" type="month" id="filter-unique" />
    </div>
  </div>

  <!-- !Main Table -->
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
          <th>Action</th>
        </tr>
      </thead>
      <!-- <tbody
        v-for="(module, index) in module.slice(page, page + 4)"
        :key="index"
      > -->
      {{
        console.log(filteredModules)
      }}
      <tbody
        v-for="(module, index) in filteredModules.slice(page, page + 10)"
        :key="index"
      >
        <tr>
          <td>{{ index + page + 1 }}</td>
          <td>{{ module.module_type }}</td>
          <td>{{ module.exporter_name }}</td>
          <td>{{ module.module_no }}</td>
          <td>{{ module.module_note }}</td>
          <td>
            {{
              new Date(module.date_receive).toLocaleDateString(['ban', 'id'])
            }}
          </td>
          <td>
            <button
              type="button"
              class="btn btn-secondary"
              @click="handleModalModuleDetail(module._id)"
            >
              Detail
            </button>
            <button
              type="button"
              class="btn btn-primary"
              style="margin-left: 5px"
              @click="handleDelete(index)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <CPagination align="center" aria-label="Page navigation example">
      <CPaginationItem @Click="prevPage()">Previous</CPaginationItem>
      <!-- <CPaginationItem href="#">1</CPaginationItem>
      <CPaginationItem href="#">2</CPaginationItem>
      <CPaginationItem href="#">3</CPaginationItem> -->
      <CPaginationItem @Click="nextPage()">Next</CPaginationItem>
    </CPagination>

    <!-- !Modal Module Detail -->
    <CModal
      size="xl"
      :visible="modalModuleDetail"
      @close="
        () => {
          modalModuleDetail = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle id="OptionalSizesExample1"
          >Content List Module {{ moduleModal[0].module_no }}</CModalTitle
        >
      </CModalHeader>

      <CModalBody class="row">
        <div class="col-2 text-center">
          <h3 class="m-0">Sisa Box</h3>
          <br />
          <h1 class="border border-dark">
            {{
              moduleModal[0].parts.reduce((sum, part) => {
                return sum + (part.qty_remain || 0)
              }, 0)
            }}
          </h1>
        </div>

        <div class="col-2 text-center">
          <h3 class="m-0">From Total</h3>
          <br />
          <h1 class="border border-dark">
            {{
              moduleModal[0].parts.reduce((sum, part) => {
                return sum + (part.qty_kanban || 0)
              }, 0)
            }}
          </h1>
        </div>
        <button
          v-if="moduleModal[0].module_type == 'O/F'"
          type="button"
          class="btn btn-success"
          @click="handleModalAddPartOF(moduleModal[0].exporter_name)"
        >
          Add
        </button>
        <div class="table-section">
          <table class="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Module No</th>
                <th>Part No</th>
                <th>Part Name</th>
                <th>Unique No</th>
                <th>Qty Kanban</th>
                <th>Qty Remain</th>
                <th>Date Tapping</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(modulePart, index) in modalModule"
                :class="[modulePart.qty_remain !==0  ? '' : 'bg-secondary']"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ moduleModal[0].module_no }}</td>
                <td>{{ modulePart.part_no }}</td>
                <td>{{ modulePart.part_name }}</td>
                <td>{{ modulePart.unique_no }}</td>

                <td>
                  <span>{{ modulePart.qty_kanban }}</span>
                </td>
                <td>
                  <span>{{ modulePart.qty_remain }}</span>
                </td>
                <td>
                  {{ console.log(modulePart.date_tapping) }}
                  <span v-if="modulePart.date_tapping == null"></span>
                  <span v-else>{{
                    new Date(modulePart.date_tapping).toLocaleDateString(
                      'id-ID',
                    )
                  }}</span>
                </td>

                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    @click="handleModalPartEdit(index)"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary"
                    style="margin-left: 5px"
                    @click="handleDel(index)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="d-flex justify-content-end table-section">
            <button
              type="button"
              class="btn btn-secondary"
              @click="() => (this.modalModuleDetail = !this.modalModuleDetail)"
            >
              Close
            </button>
          </div>
        </div>
      </CModalBody>
    </CModal>
    <!--!modal Add Part O/F --><CModal
      size="xl"
      :visible="modalAddPart"
      @close="
        () => {
          modalAddPart = false;
          this.selectedPartFilter= null;
        }
      "
      ><CModalHeader
        ><CModalTitle id="OptionalSizesExample1"
          >Content List Module</CModalTitle
        ></CModalHeader
      ><CModalBody class="row"
        ><div class="filter-section">
          <label for="filter-date">Type Receive</label>
          <VueTreeselect
            v-model="selectedPartFilter"
            :multiple="false"
            :options="partTypeOptions"
            placeholder="Select Part Type"
          />
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Module No</th>
              <th>Part No</th>
              <th>Part Name</th>
              <th>Unique No</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(part, index) in dataMasterPart.filter(
                (part) => part.UNIQUE_NO == this.selectedPartFilter,
              )"
            >
              <td>{{ index + 1 }}</td>
              <td>module</td>
              <td>{{ part.PART_NO }}</td>
              <td>{{ part.PART_NAME }}</td>
              <td>{{ part.UNIQUE_NO }}</td>
            </tr>
          </tbody>
        </table>
        <div
          class="col-4"
          v-for="(part, index) in dataMasterPart.filter(
            (part) => part.UNIQUE_NO == this.selectedPartFilter,
          )"
        >
          {{ console.log(module) }}
          <div class="filter-section">
            <label for="filter-date">Mau Tapping berapa box?</label>
            <input
              v-model="qtyTappingPart"
              min="0"
              max="{module.qty_remain}"
              type="number"
            />
          </div>
          
        </div>
        <button
          type="button"
          class="btn btn-info"
          @click="() => {
          modalAddPart = false;
          this.selectedPartFilter= null;
        }"
        >
          Save
        </button>
        <div
          class="rounded col-5 flex-end bg-success"
          style="font-size: 1.5rem; margin-left: 3rem"
          v-if="checkQtyTappingPart == 'benar'"
        >
          Data yang anda masukkan benar!
        </div>
        <div
          class="rounded col-5 flex-end bg-danger"
          style="font-size: 1.5rem; margin-left: 3rem"
          v-if="checkQtyTappingPart == 'salah'"
        >
          Data yang anda masukkan salah, Silahkan periksa qty remain nya
        </div>
        <div
          class="rounded col-5 flex-end bg-warning"
          style="font-size: 1.5rem; margin-left: 3rem"
          v-if="checkQtyTappingPart == 'belum'"
        >
          Masukkan jumlah terlebih dulu!
        </div>
      </CModalBody>
      <button
        v-if="checkQtyTappingPart == 'benar'"
        type="button"
        class="btn btn-info"
        @click="checkTappingPart(module.qty_remain)"
      >
        Save
      </button>
    </CModal>

    <!-- !Modal Edit Part -->
    <CModal
      size="xl"
      :visible="modalEditPart"
      @close="
        () => {
          modalEditPart = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle id="OptionalSizesExample1"
          >Update Part
          {{ modalPart[0].unique_no }}
        </CModalTitle>
      </CModalHeader>

      <CModalBody class="row">
        <div class="table-section">
          <table class="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Module No</th>
                <th>Part No</th>
                <th>Part Name</th>
                <th>Unique No</th>
                <th>Qty Kanban</th>
                <th>Qty Remain</th>
                <th>Date Tapping</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="(part, index) in modalPart">
                <td>
                  {{
                    modalModule.findIndex((module) => module._id == part._id) +
                    1
                  }}
                </td>
                <td>{{ moduleModal[0].module_no }}</td>
                <td>{{ part.part_no }}</td>
                <td>{{ part.part_name }}</td>
                <td>{{ part.unique_no }}</td>

                <td>
                  <span>{{ part.qty_kanban }}</span>
                </td>
                <td>
                  <span>{{ part.qty_remain }}</span>
                </td>
                <td>
                  <span v-if="part.date_tapping == null"></span>
                  <span v-else>{{
                    new Date(part.date_tapping).toLocaleDateString('id-ID')
                  }}</span>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div
            class="filter-section col-2"
            :class="{
              'over-qty':
                qtyTappingPart > module.qty_remain || qtyTappingPart < 0,
            }"
          >
            <label for="filter-date">Mau Update remain berapa box?</label>
            <input v-model="qtyTappingBox" min="0" type="number" />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-info"
          @click="
            () => {
              modalEditPart = false
            }
          "
        >
          Save
        </button>
      </CModalBody>
    </CModal>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import dataMasterPart from '@/views/MasterPart.vue'
const modalModuleDetail = ref(false)
const modalEditPart = ref(false)
const modalAddPart = ref(!1)
// import the component
import VueTreeselect from 'vue3-treeselect'
// import the styles
import 'vue3-treeselect/dist/vue3-treeselect.css'

export default {
  components: {
    name: 'Summary',
    VueTreeselect,
  },
  data() {
    return {
      dataMasterPart: dataMasterPart.masterPart,

      module: [],
      moduleModal: {},
      filteredModules: [],
      selectedPartFilter: null,

      modalModuleDetail,
      modalEditPart,
      modalAddPart,

      modalModule: [],
      modalPart: [],

      qtyTappingPart: 0,

      qtyTappingBox: 0,
      dateTappingBox: null,

      //filter
      selectedModuleType: [],
      selectedExporter: [],
      selectedModuleNo: [],
      moduleTypeOptions: [],
      exporterOptions: [],
      moduleNoOptions: [],

      selectedMonth: new Date(),
      page: 0,
      moduleNo: 0,
      editIndex: null,
    }
  },
  mounted() {
    axios.get('http://localhost:5000/module').then((response) => {
      console.log(response.data.data)
      this.module = response.data.data
      // this.tmc = response.data.data.filter(
      //   (module) => module.exporter_name == 'TMC',
      // )
      this.filteredModules = response.data.data
      // console.log(this.moduleTypeOptions);
    })
  },
  computed: {
    filteredModule() {
      this.filteredModules = this.module.filter((module) => {
        const typeMatch =
          this.selectedModuleType.length == 0
            ? this.selectedModuleType
            : this.selectedModuleType.includes(module.module_type)
        const exporterMatch =
          this.selectedExporter.length == 0
            ? this.selectedExporter
            : this.selectedExporter.includes(module.exporter_name)
        const moduleMatch =
          this.selectedModuleNo.length == 0
            ? this.selectedModuleNo
            : this.selectedModuleNo.includes(module.module_no)
        return typeMatch && exporterMatch && moduleMatch
      })
      console.log(this.filteredModules)
    },
    filterTypeReceive() {
      this.moduleTypeOptions = [
        ...new Set(this.module.map((m) => m.module_type)),
      ].map((type) => ({
        id: type,
        label: type,
      }))
    },
    // Filtered data based on selected filters
    filterExporterOptions() {
      // this.exporterOptions=[
      //   ...new Set(this.module.map((m) => m.exporter_name)),
      // ].map((type) => ({
      //   id: type,
      //   label: type,
      // }))
      // console.log(this.selectedModuleType.length)
      // console.log(this.selectedModuleType.length)
      // console.log(this.selectedModuleType.length)
      if (this.selectedModuleType.length == 2) {
        this.exporterOptions = this.module
          .filter(
            (module) =>
              module.module_type === this.selectedModuleType[0] ||
              module.module_type === this.selectedModuleType[1],
          )
          .map((module) => module.exporter_name)
          .filter((value, index, self) => self.indexOf(value) === index) // Unique values
          .map((name) => ({
            id: name,
            label: name,
          }))
      } else {
        console.log(this.selectedModuleType.length)
        this.exporterOptions = this.module
          .filter((module) => module.module_type === this.selectedModuleType[0])
          .map((module) => module.exporter_name)
          .filter((value, index, self) => self.indexOf(value) === index) // Unique values
          .map((name) => ({
            id: name,
            label: name,
          }))
      }
      // // this.selectedExporter = null;
      // // this.selectedModuleNo = null;
      // // this.moduleNoOptions = [];
    },
    filterModuleNoOptions() {
      // this.moduleNoOptions =[
      //     ...new Set(this.module.map((m) => m.module_no)),
      //   ].map((type) => ({
      //     id: type,
      //     label: type,
      //   }))
      this.moduleNoOptions = this.module
        .filter((module) =>
          this.selectedExporter.some((exporter) =>
            this.selectedModuleType.some(
              (moduleType) =>
                module.exporter_name === exporter &&
                module.module_type === moduleType,
            ),
          ),
        )
        .map((name) => ({
          id: name.module_no,
          label: name.module_no,
        }))

      // this.selectedModuleNo = null
    },
  },
  methods: {
    getModuleStatus(parts) {
      const hasNullTapping = parts.some((part) => part.date_tapping == null)
      return hasNullTapping ? 'Fresh Module' : 'Tapping Module'
    },
    handleModalModuleDetail(id) {
      console.log(id)
      this.moduleModal = this.module.filter((module) => module._id == id)
      console.log(this.module.filter((module) => module._id == id))
      console.log(this.module.filter((module) => module._id == id)[0].module_no)
      this.moduleNo = this.module.filter(
        (module) => module._id == id,
      )[0].module_no
      this.modalModule = this.module.filter(
        (module) => module._id == id,
      )[0].parts
      this.modalModuleDetail = !modalModuleDetail.value
    },
    handleModalAddPartOF(option) {
      console.log(option)
      const dataPart = dataMasterPart.masterPart
      this.partTypeOptions = dataPart
        .filter((part) =>
          option == 'TMC&STM'
            ? part.SUPPLIER_NAME == 'TMC' || part.SUPPLIER_NAME == 'STM'
            : part.SUPPLIER_NAME == 'UMWT' || part.SUPPLIER_NAME == 'TMV',
        )
        .map((part) => ({
          id: part.UNIQUE_NO,
          label: part.UNIQUE_NO,
        }))
      console.log(this.partTypeOptions)
      // this.partTypeOptions = num.parts.map((part) => ({
      //   id: part.unique_no,
      //   label: part.unique_no,
      // }))
      this.modalAddPart = !modalAddPart.value
    },
    handleModalPartEdit(num) {
      this.modalPart = [this.modalModule[num]]
      this.modalEditPart = !modalEditPart.value
      // console.log(this.modalModule[0])
    },

    checkTappingPart(check, max, date) {
      console.log(date)

      if (check < max && check > 0 && date != null) {
        this.qtyTappingPart = 'benar'
      } else {
        this.qtyTappingPart = 'salah'
      }
    },

    handleDel() {
      this.del = !del.value
    },
    prevPage() {
      if (this.page > 9) {
        this.page = this.page - 10
      } else {
      }
    },
    nextPage() {
      if (this.page < this.module.length - 10) {
        this.page = this.page + 10
        console.log('add')
      } else {
      }
    },
    editItem(index) {
      // Set the edit index for the row
      this.editIndex = index
    },
    saveEdit(index) {
      // Save the edited values and reset the edit index
      this.editIndex = null
      console.log('Saved:', this.modalModule[index])
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

.bg {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 3px;
  overflow: hidden;
}
.mdl {
  height: 5.5rem;
}
.col-module {
  font-size: 2.5rem;
  padding: 10px;
}

.col-custom {
  flex: 1 1 20%; /* This gives each column 20% of the width */
  padding: 1rem;
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
.filter-section input,
.filter-section select {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 3px;
  border: 0;
  height: 2rem;
}

input[type='checkbox']:checked {
  content: 'edit';
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
  margin: 10px;
}
.data-table {
  margin: 0 1%;
  margin-bottom: 10px;
  width: 98%;
  border-collapse: collapse;
}
/* .data-table input {
  width: 7rem;
} */
.data-table th {
  background-color: skyblue;
}
.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
tr {
  border: yellow 1px solid;
}

.over-qty {
  color: red;
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
