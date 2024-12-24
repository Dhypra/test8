<template>
  <div class="container">
    <div class="bg head-module">
      <div
        class="head-module"
        style="font-size: 1.5rem; background-color: gray"
      >
        Information
      </div>
      <div class="row m-1 mb-2">
        <!--!Filter -->
        <div class="data-uploaded mb-3 p-0">
          <div class="filter-section">
            <label for="filter-date">Production Date</label
            ><input v-model="selectedDate" type="date" id="filter-unique" />
          </div>
          <div class="filter-section">
            <label for="filter-date">Shift</label
            ><select v-model="selectedShift" name="module" id="module">
              <option value="All">All</option>
              <option value="Day Shift">Day Shift</option>
              <option value="Night Shift">Night Shift</option>
            </select>
          </div>
          <div class="filter-section">
            <label for="filter-date">Group</label
            ><select v-model="selectedGroup" name="module" id="module">
              <option value="All">All</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
            </select>
          </div>
        </div>
        <!--!Card Label -->
        <div class="col-4">
          <div style="overflow: hidden; border-radius: 5px">
            <div class="row mdl">
              <h1 class="card-title col-6 col-module bg-info m-0 pt-2">
                Module Unpacking
              </h1>
              <h1 class="card-text col-6 text-center fz1 bg-light">
                {{
                  module
                    .filter((module) => module.module_type !== 'O/F')
                    .filter((module) =>
                      module.parts.some((part) => part.status == 'unpacking'),
                    ).length
                }}
              </h1>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div style="overflow: hidden; border-radius: 5px">
            <div class="row mdl">
              <h1 class="card-title col-6 col-module bg-info m-0 pt-2">
                Module Tapping
              </h1>
              <h1 class="card-text col-6 text-center fz1 bg-light">
                {{
                  module
                    .filter((module) => module.module_type !== 'O/F')
                    .filter((module) =>
                      module.parts.some((part) => part.status == 'tapping'),
                    ).length
                }}
              </h1>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div style="overflow: hidden; border-radius: 5px">
            <div class="row mdl">
              <h1 class="card-title col-6 col-module bg-info m-0 pt-2">
                O/F Tapping
              </h1>
              <h1 class="card-text col-6 text-center fz1 bg-light">
                {{
                  module.filter((module) => module.module_type == 'O/F').length
                }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--!Table Module -->
  <div class="bg head-module mt-2">
    <div class="head-module" style="font-size: 1.5rem; background-color: gray">
      Data Unpacking
    </div>
    <table class="data-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Module Type</th>
          <th>Module process</th>
          <th>Exp Name</th>
          <th>Module No.</th>
          <th>Module Type</th>
          <th>Date Receive</th>
          <th>Action</th>
        </tr>
      </thead>
      <!--!List Module -->
      <tbody
        v-for="(module, index) in module.slice(page, page + 10)"
        :key="index"
      >
        <!--{{console.log(module)}}-->
        <tr>
          <td>{{ index + page + 1 }}</td>
          <td>{{ module.module_type }}</td>
          <td>{{ getModuleStatus(module) }}</td>
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
              @click="handleModal(module._id)"
            >
              Detail</button
            ><button
              type="button"
              class="btn btn-danger"
              @click="handleDelete(module._id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!--!Pagination --><CPagination
      align="center"
      aria-label="Page navigation example"
      ><CPaginationItem @Click="prevPage()">Previous</CPaginationItem
      ><!--<CPaginationItem href="#">1</CPaginationItem><CPaginationItem href="#">2</CPaginationItem><CPaginationItem href="#">3</CPaginationItem>--><CPaginationItem
        @Click="nextPage()"
        >Next</CPaginationItem
      ></CPagination
    >
  </div>

  <!--!delete Module -->
  <CModal
    size="xl"
    :visible="moduleDelete"
    @close="
      () => {
        moduleDelete = false
      }
    "
    ><CModalBody style="font-size: 8rem; text-align: center"
      >R U Sure delete module{{
        modalMod[0].module_no
      }}?<br /><!--{{let id=modalMod[0]._id}}--><button
        type="button"
        class="btn btn-danger"
        @click="handleDeleteConfirm(modalMod[0]._id)"
      >
        Delete
      </button></CModalBody
    ></CModal
  >
  <!--!Modal Detail Module --><CModal
    size="xl"
    :visible="modal"
    @close="
      () => {
        modal = false
      }
    "
    ><CModalHeader
      ><CModalTitle id="OptionalSizesExample1"
        >Content List Module{{ modalMod.modal_no }}</CModalTitle
      ></CModalHeader
    ><CModalBody class="row">
      <div class="col-2 text-center">
        <h3 class="m-0">Sisa Box</h3>
        <br />
        <h1 class="border border-dark">
          <!-- {{ console.log(modalMod)}} -->
          {{
            modalMod.parts.reduce(
              (sum, part) => sum + (part.qty_remain || 0),
              0,
            )
          }}
          <!--{{moduleModal[0].parts.reduce((sum,part)=>{return sum+(part.qty_remain||0)},0)}}-->
        </h1>
      </div>
      <div class="col-2 text-center">
        <h3 class="m-0">From Total</h3>
        <br />
        <h1 class="border border-dark">
          {{
            modalMod.parts.reduce(
              (sum, part) => sum + (part.qty_kanban || 0),
              0,
            )
          }}
        </h1>
      </div>

      <button
        type="button"
        class="btn btn-success"
        @click="handleModalAddPartOf(modalMod)"
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
              <th>Date Unpacking</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(module, index) in modalModule"
              :class="module.status !== 'overflow' ? 'bg-secondary' : ''"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ modalMod.module_no }}</td>
              <td>{{ module.part_no }}</td>
              <td>{{ module.part_name }}</td>
              <td>{{ module.unique_no }}</td>
              <td>
                <input
                  v-if="editIndex === index"
                  v-model="module.qty_kanban"
                /><span v-else>{{ module.qty_kanban }}</span>
              </td>
              <td>
                <input
                  v-if="editIndex === index"
                  v-model="module.qty_remain"
                /><span v-else>{{ module.qty_remain }}</span>
              </td>
              <td>
                <input
                  v-if="editIndex === index"
                  v-model="module.date_unpacking"
                  type="date"
                /><span v-if="module.date_unpacking == null">{{
                  module.date_unpacking
                }}</span
                ><span v-else>{{
                  new Date(module.date_unpacking).toLocaleDateString('id-ID')
                }}</span>
              </td>
              <td>5</td>
              <td>
                <button
                  type="button"
                  class="btn btn-warning"
                  @click="handleModalPartEdit(index)"
                >
                  Edit</button
                ><button
                  type="button"
                  class="btn btn-primary"
                  @click="handleDel(index)"
                >
                  Del
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div></CModalBody
    ></CModal
  >

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
      <CModalTitle id="OptionalSizesExample1">Update Part </CModalTitle>
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
                  modalModule.findIndex((module) => module._id == part._id) + 1
                }}
              </td>
              <td>x</td>
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

  <!--!Modal Add Part  --><CModal
    size="xl"
    :visible="modalAddPart"
    @close="
      () => {
        modalAddPart = false
      }
    "
    ><CModalHeader
      ><CModalTitle id="OptionalSizesExample1"
        >Content List Module{{ modalMod.modal_no }}</CModalTitle
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
        {{ console.log(selectedPartFilter) }}
      </div>
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
            <th>Latest Tapping</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(module, index) in modalModule.filter(
              (part) => part.unique_no == selectedPartFilter,
            )"
          >
            {{
              console.log(editModal)
            }}
            <td>{{ index + 1 }}</td>
            <td>{{ modalMod.module_no }}</td>
            <td>{{ module.part_no }}</td>
            <td>{{ module.part_name }}</td>
            <td>{{ module.unique_no }}</td>
            <td>{{ module.qty_kanban }}</td>
            <td>{{ module.qty_remain - numberTapping }}</td>
            <td>
              <span v-if="module.date_tapping == null">{{
                module.date_tapping
              }}</span
              ><span v-else>{{
                new Date(module.date_tapping).toLocaleDateString('id-ID')
              }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="col-4"
        v-for="(module, index) in modalModule.filter(
          (part) => part.unique_no == selectedPartFilter,
        )"
      >
        {{ console.log(module) }}
        <div
          class="filter-section"
          :class="{
            'over-qty':
              qtyTappingPart > module.qty_remain || qtyTappingPart < 0,
          }"
        >
          <label for="filter-date">Mau Tapping berapa box?</label>
          <input
            :class="{
              'over-qty':
                qtyTappingPart > module.qty_remain || qtyTappingPart < 0,
            }"
            v-model="qtyTappingPart"
            min="0"
            max="{module.qty_remain}"
            type="number"
          />
        </div>

        <button
          type="button"
          class="btn btn-info"
          @click="checkTappingPart(module.qty_remain)"
        >
          Check
        </button>
      </div>

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

  <!--!Delete List Part --><CModal
    size="xl"
    :visible="del"
    @close="
      () => {
        del = false
      }
    "
    ><CModalBody style="font-size: 8rem; text-align: center"
      >R U Sure delete{{ delModal.part_no }}?<button
        type="button"
        class="btn btn-xl btn-danger"
        @click="handleDel(index)"
      >
        Delete
      </button></CModalBody
    ></CModal
  >
</template>
<script>
import { CModalBody } from '@coreui/vue'
import axios from 'axios'
import { ref } from 'vue'
import parts from '@/views/dataParts.vue'
import { add } from 'date-fns'
import VueTreeselect from 'vue3-treeselect'
import 'vue3-treeselect/dist/vue3-treeselect.css'
const modal = ref(!1)
const ModalAddModule = ref(!1)
const moduleDelete = ref(!1)
const modalEditPart = ref(!1)
const modalAddPart = ref(!1)
const del = ref(!1)
export default {
  components: { name: 'TappingModule', VueTreeselect },
  data() {
    return {
      modal,
      moduleDelete,
      modalEditPart,
      modalAddPart,
      del,
      module: [],
      modalPart: [],
      ModalAddModule,
      selectedShift: 'All',
      selectedGroup: 'All',
      selectedDate: new Date().toLocaleDateString(),
      selectedPartFilter: null,

      qtyTappingPart: 0,
      numberTapping: 0,
      checkQtyTappingPart: null,

      part_no: '',
      part_name: '',
      unique_no: '',
      qty_kanban: '',
      qty_remain: '',
      date_tapping: null,
      date_overflow: null,
      date_unpacking: null,
      page: 0,
      modalModule: [],
      modalMod: 0,
      editIndex: null,
      editModal: {},
      delModal: {},
      listPart: 0,
    }
  },
  mounted() {
    axios.get('http://localhost:5000/module').then((response) => {
      console.log(response.data.data)
      this.module = response.data.data
      console.log(
        response.data.data.filter((module) => module.exporter_name == 'TMC')
          .length,
      )
    })
    console.log(parts)
  },
  computed: {
    filteredModule() {
      return this.module.filter((module) => {
        const matchShift =
          this.selectedShift === 'All' ||
          module.module_type === this.selectedShift
        console.log(this.selectedExporter)
        const matchExporter =
          this.selectedGroup === 'All' ||
          module.exporter_name === this.selectedGroup

        const matchDate =
          this.selectedDate === new Date().toLocaleDateString() ||
          module.exporter_name === this.selectedGroup

        // let mts = new Date(this.selectedDate)
        // let mtd = new Date(module.date_receive)
        // let mtn = new Date()
        // console.log(mtn)
        // const matchMonth = this.selectedDate==this.mtn || mtd == mts
        // this.page = 0
        return matchModuleType && matchExporter && matchMonth
      })
    },
  },
  methods: {
    getModuleStatus(module) {
      console.log(module)
      if (module.module_type == 'O/F') return 'O/F Tapping'
      const hasNullTapping = module.parts.some(
        (part) => part.date_tapping != null,
      )
      return hasNullTapping ? 'Module Tapping' : 'Module Unpacking'
    },
    handleModal(id) {
      console.log(id)
      console.log(this.module.filter((module) => module._id == id)[0].module_no)
      this.modalMod = this.module.filter((module) => module._id == id)[0]
      this.modalModule = this.module.filter(
        (module) => module._id == id,
      )[0].parts
      this.modal = !modal.value
      this.edit = !1
      this.del = !1
    },
    handleDelete(id) {
      console.log(this.module.filter((module) => module._id == id)[0])
      this.modalMod = [this.module.filter((module) => module._id == id)[0]]
      console.log(!moduleDelete.value)
      this.moduleDelete = !moduleDelete.value
    },
    handleDeleteConfirm(id) {
      console.log(id)
      axios
        .delete('http://localhost:5000/module/' + id)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      this.moduleDelete = !moduleDelete.value
    },
    handleModalAddPartOf(num) {
      this.partTypeOptions = num.parts.map((part) => ({
        id: part.unique_no,
        label: part.unique_no,
      }))
      this.modalAddPart = !modalAddPart.value
    },
    handleDel(num) {
      this.del = !del.value
      console.log(this.modalModule[num])
      this.delModal = this.modalModule[num]
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
      this.editIndex = index
    },
    saveEdit(index) {
      this.editIndex = null
      console.log('Saved:', this.modalModule[index])
    },
    addList() {
      this.listPart = this.listPart + 1
      console.log(this.listPart)
    },
    handleModalPartEdit(num) {
      console.log(num)
      console.log(this.modalModule)
      console.log(this.modalModule[num])
      this.modalPart = [this.modalModule[num]]
      console.log(this.modalPart)
      console.log(modalEditPart.value)
      this.modalEditPart = !this.modalEditPart.value
    },
    handleModalAddModule() {
      console.log(parts)
      this.ModalAddModule = !ModalAddModule.value
    },
    checkTappingPart(num) {
      this.numberTapping = this.qtyTappingPart
      if (this.qtyTappingPart == 0) {
        this.checkQtyTappingPart = 'belum'
      } else if (this.qtyTappingPart <= num && this.qtyTappingPart > 0) {
        this.checkQtyTappingPart = 'benar'
      } else if (this.qtyTappingPart > num || this.qtyTappingPart < 0) {
        this.checkQtyTappingPart = 'salah'
      }
    },
  },
}
</script>
<style scoped>
.container {
  padding: 0;
  margin: 0;
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
  font-size: 2rem;
}
.fz1 {
  padding: 0;
  font-size: 5rem;
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
  width: 25%;
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

.over-qty {
  color: red;
}

.file-name {
  margin-left: 10px;
}
.data-uploaded {
  display: flex;
  justify-content: space-between;
  width: 98%;
  margin: 0 1%;
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
.data-table input {
  width: 5.5rem;
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
