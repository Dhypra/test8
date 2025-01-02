<template>
  <div class="container">
    <div class="bg head-module">
      <!-- Header Section -->
      <div
        class="head-module text-center"
        style="font-size: 1.5rem; color: white; background-color: navy"
      >
        <!-- Menu Buttons -->
        <div style="position: absolute; left: 0; top: 0; padding: 0; margin: 0">
          <button
            @click="selectMenu('in')"
            :class="menuSelected == 'in' ? 'menuSelected' : ''"
            style="height: 2.25rem; width: 5rem"
            type="button"
          >
            IN
          </button>
          <button
            @click="selectMenu('out')"
            :class="menuSelected == 'out' ? 'menuSelected' : ''"
            style="height: 2.25rem; width: 5rem"
            type="button"
          >
            OUT
          </button>
          <button
            @click="selectMenu('edit')"
            :class="menuSelected == 'edit' ? 'menuSelected' : ''"
            style="height: 2.25rem; width: 5rem"
            type="button"
          >
            EDIT
          </button>
        </div>
        Management Overflow Import Part
      </div>

      <div class="m-1 mb-2">
        <!-- Filter Section -->
        <div class="data-uploaded p-0">
          <div class="filter-section">
            <label for="filter-date">
              Module Code
              <label
                v-if="selectedOption"
                style="background-color: green; color: white; padding: 5px"
              >
                {{ selectedOption }}
              </label>
            </label>
            <div>
              <div class="row">
                <!-- Module Code List -->
                <div
                  v-for="(module, index) in moduleCode.sort(
                    (a, b) => b.parts.length - a.parts.length,
                  )"
                  :key="index"
                  class="dropdown-option col-1 text-center"
                  :class="{ selected: module.module === selectedOption }"
                  @click="selectOption(module.module)"
                >
                  {{ module.module }}
                  <p style="position: absolute; font-size: 0.6rem">
                    {{ module.parts.length }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Input Fields -->
          <div class="row">
            <div class="col-6">
              <div class="filter-section">
                <label for="filter-date">Part No</label>
                <input v-model="partNo" type="text" />
              </div>

              <div class="filter-section" v-if="menuSelected == 'edit'">
                <label>Qty Remain</label>
                <input v-model="qtyRemain" type="number" />
              </div>
            </div>
            <div v-if="partUnique" class="col-6">
              <div class="filter-section">
                <label for="filter-date">Unique No</label>
                <input :value="partUnique" disabled />
              </div>

              <div class="filter-section">
                <label>Part Name</label>
                <input :value="partName" disabled />
              </div>
            </div>
          </div>
          <button @click="clear">Clear</button>
          <button v-if="menuSelected == 'edit'" @click="clear">Submit</button>
        </div>

        <!-- Data Table -->
        <table class="data-table">
          <thead>
            <tr>
              <th>Module</th>
              <th>Part Number</th>
              <th>Part Name</th>
              <th>Unique No</th>
              <th>Qty Remain</th>
              <th>Qty Kanban</th>
              <th>Shift</th>
            </tr>
          </thead>
          <template v-for="module in partList" :key="module.module">
            <tr
              v-for="(part, index) in module.parts"
              :key="index"
              @dblclick="handleDoubleClick(module.module, part.part_no)"
            >
              <td>{{ module.module }}</td>
              <td>{{ part.part_no }}</td>
              <td>{{ part.part_name }}</td>
              <td>{{ part.unique_no }}</td>
              <td>{{ part.qty_remain }}</td>
              <td>{{ part.qty_kanban }}</td>
              <td>day</td>
            </tr>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import dataModule from '@/components/RTSC/dataModuleCode.vue'
import dataMasterPart from '@/views/MasterPart.vue'

export default {
  name: 'ManagementOF',
  data() {
    return {
      moduleCode: dataModule.data, // Data module codes
      partData: dataMasterPart.masterPart, // Master parts data
      isDropdownOpen: false, // Dropdown visibility toggle
      selectedOption: null, // Selected module
      partNo: '', // Input filter for Part No
      partUnique: '', // Displayed unique number
      partName: '', // Displayed part name
      partList: [], // Filtered list of parts
      menuSelected: 'in', // Currently selected menu
      qtyRemain: '', // Quantity remaining for 'edit'
    }
  },
  watch: {
    // Apply filters when selectedOption or partNo changes
    selectedOption: 'applyFilters',
    partNo: 'applyFilters',
  },
  mounted() {
    // Initialize partList with all modules
    this.partList = this.moduleCode
  },
  methods: {
    // Clear all inputs and reset data
    clear() {
      this.isDropdownOpen = false
      this.selectedOption = null
      this.partNo = ''
      this.partUnique = ''
      this.partName = ''
      this.partList = []
    },

    // Toggle dropdown visibility
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },

    // Select a module option
    selectOption(option) {
      this.selectedOption = this.selectedOption === option ? null : option
      this.isDropdownOpen = false // Close dropdown
    },

    // Select a menu ('in', 'out', 'edit')
    selectMenu(menu) {
      this.clear()
      this.menuSelected = menu
      console.log(this.menuSelected)
    },

    // Apply filters based on selectedOption and partNo
    applyFilters() {
      console.log(this.partNo)
      let filteredList = this.moduleCode

      if (this.selectedOption) {
        filteredList = filteredList.filter(
          (module) => module.module === this.selectedOption,
        )
      }

      if (this.partNo) {
        filteredList = filteredList
          .map((module) => ({
            ...module,
            parts: module.parts.filter(
              (part) => part.part_no && part.part_no == this.partNo,
            ),
          }))
          .filter((module) => module.parts.length > 0) // Remove empty modules
      }

      this.partList = filteredList

      const matchingPart = this.partData.find(
        (part) => part.PART_NO == this.partNo,
      )

      const sound = new Audio(require('@/assets/audio/success.mp3'))

      const foundPart = this.partData.find((part) =>
        this.partNo.includes(part.PART_NO),
      )
      console.log(foundPart)

      if (
        foundPart &&
        (this.menuSelected === 'in' || this.menuSelected === 'out')
      ) {
        sound.play() // Play sound on match
        this.partNo = '' // Clear input
      }

      this.partUnique = matchingPart ? matchingPart.UNIQUE_NO : ''
      this.partName = matchingPart ? matchingPart.PART_NAME : ''
    },

    // Handle double-click on table rows
    handleDoubleClick(moduleCode, partNo) {
      this.selectedOption = moduleCode
      this.partNo = partNo
      this.applyFilters()
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

.filter-section {
  display: grid;
  margin-bottom: 1rem;
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
  padding: 0.5rem;
  cursor: pointer;
}

.dropdown {
  position: relative;
}

.dropdown-button {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  width: 100%;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1;
  width: 100%;
}

.dropdown-column {
  display: flex;
  flex-direction: column;
}

.dropdown-option {
  color: white;
  margin: 3px;
  background-color: #3e5879;
  border-radius: 5px;
  height: 3rem;
  padding: 10px;
  cursor: pointer;
  white-space: nowrap;
}

.dropdown-option:hover {
  background-color: #007bff;
  color: white;
}

.dropdown-option.selected {
  background-color: green;
  color: white;
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

.menuSelected {
  background-color: greenyellow;
}
</style>
