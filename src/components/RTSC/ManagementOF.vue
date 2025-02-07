<template>
  <div class="container">
    <div class="bg head-module">
      <!-- Header Section -->
      <div
        class="head-module text-center"
        style="
          font-size: 1.5rem;
          color: white;
          background-color: navy;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        "
      >
        <!-- Menu Buttons -->
        <div style="position: absolute; left: 0; top: 0; padding: 0; margin: 0">
          <button
            @click="selectMenu('in')"
            :class="menuSelected == 'in' ? 'menuSelected' : 'notSelected'"
            class="button-3"
            type="button"
          >
            IN
          </button>
          <button
            @click="selectMenu('out')"
            :class="menuSelected == 'out' ? 'menuSelected' : 'notSelected'"
            class="button-3"
            type="button"
          >
            OUT
          </button>
          <button
            @click="selectMenu('edit')"
            :class="menuSelected == 'edit' ? 'menuSelected' : 'notSelected'"
            class="button-3"
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
            <label for="filter-date"> Module Code </label>
            <label
              style="
                background-color: green;
                color: white;
                padding: 5px;
                width: 50px;
              "
            >
              {{ selectedOption ? selectedOption : 'All' }}
            </label>
            <div>
              <div class="row">
                <!-- Module Code List -->
                <div
                  v-for="(module, index) in uniqueModules"
                  :key="module.M_CODE"
                  class="dropdown-option col-1 text-center"
                  :class="{ selected: module.M_CODE === selectedOption }"
                  @click="selectOption(module.M_CODE)"
                >
                  {{ module.M_CODE }}
                  <p style="position: absolute; font-size: 0.6rem">
                    {{ module.count }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <div class="filter-section">
                <label>Part No</label>
                <input id="partNo" v-model="partNo" v-focus type="text" />
              </div>
              <div v-if="menuSelected === 'edit'" class="filter-section">
                <label>Qty Remain</label>
                <input v-model="qtyRemain" type="number" />
              </div>
            </div>
            <div v-if="partUnique" class="col-6">
              <div class="filter-section">
                <label>Unique No</label>
                <input :value="partUnique" disabled />
              </div>
              <div class="filter-section">
                <label>Part Name</label>
                <input :value="partName" disabled />
              </div>
            </div>
          </div>

          <div class="action-buttons">
            <button @click="clear" class="button-3 menuSelected">Clear</button>
            <button
              v-if="menuSelected === 'edit'"
              @click="editRemainPart"
              class="button-3 menuSelected"
            >
              Submit
            </button>
          </div>
        </div>

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
          <tbody>
            <tr
              v-for="(module, index) in uniqueParts"
              :key="module.M_CODE"
              @dblclick="
                handleDoubleClick(module.MODULE_CODE, module.PART_NUMBER)
              "
            >
              <td>{{ module.MODULE_CODE }}</td>
              <td>{{ module.PART_NUMBER }}</td>
              <td>{{ module.PART_NAME }}</td>
              <td>{{ module.UNIQUE_NO }}</td>
              <td>{{ module.count }}</td>
              <td>1</td>
              <td>{{ module.SHIFT }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ManagementOF',
  data() {
    return {
      moduleCode: [],
      isDropdownOpen: false,
      selectedOption: '',
      partNo: '',
      partUnique: '',
      partName: '',
      partList: [],
      menuSelected: 'in',
      qtyRemain: null,
    }
  },
  watch: {
    selectedOption: 'applyFilters',
    partNo: 'applyFilters',
  },
  mounted() {
    this.fetchData()
  },
  computed: {
    uniqueModules() {
      return this.moduleCode.reduce((acc, current) => {
        const existing = acc.find((item) => item.M_CODE === current.M_CODE)
        if (existing) {
          existing.count += 1
        } else {
          acc.push({ ...current, count: current.MODULE_CODE ? 1 : 0 })
        }
        console.log(acc)
        return acc.sort((a, b) => b.count - a.count)
      }, [])
    },
    uniqueParts() {
      return this.partList.reduce((acc, current) => {
        const existing = acc.find(
          (item) =>
            item.MODULE_CODE === current.MODULE_CODE &&
            item.PART_NUMBER === current.PART_NUMBER,
        )
        if (existing) {
          existing.count += 1
        } else {
          acc.push({ ...current, count: 1 })
        }
        return acc
      }, [])
    },
  },
  methods: {
    async fetchData() {
      try {
        const [masterPartRes, masterModuleRes, containModuleRes] =
          await Promise.all([
            axios.get('http://localhost:3000/getMasterPart'),
            axios.get('http://localhost:3000/getMasterModule'),
            axios.get('http://localhost:3000/getContainModule'),
          ])

        this.masterPart = masterPartRes.data.masterPart
        this.masterModule = masterModuleRes.data.masterModule
        this.moduleCode = masterModuleRes.data.masterModule
        this.partList = containModuleRes.data.containModule
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },

    clear() {
      this.isDropdownOpen = false
      this.selectedOption = ''
      this.partNo = ''
      this.partUnique = ''
      this.partName = ''
      this.partList = []
    },

    selectOption(option) {
      this.selectedOption = this.selectedOption === option ? '' : option
      this.isDropdownOpen = false
    },

    selectMenu(menu) {
      this.clear()
      this.menuSelected = menu
    },

    async editRemainPart() {
      const soundSuccess = new Audio(require('@/assets/audio/success.wav'))
      const soundFailed = new Audio(require('@/assets/audio/fail.wav'))

      const filteredPart = this.masterPart.find((part) =>
        this.partNo.includes(part.PART_NO),
      )

      if (
        filteredPart &&
        this.qtyRemain !== null &&
        this.selectedOption !== null
      ) {
        try {
          await axios.post('http://localhost:3000/setRemainPart', {
            moduleCode: this.selectedOption,
            partNo: filteredPart.PART_NO,
            countPart: this.qtyRemain,
          })

          soundSuccess.play()
          await this.fetchData()
          this.clear()
        } catch (error) {
          console.error('Error editing remain part:', error)
          soundFailed.play()
        }
      }
    },

    // async applyFilters() {
    //   try {
    //     const partNoCleaned = this.partNo.replaceAll('/', '')

    //     if (this.selectedOption && this.partNo) {
    //       const { data } = await axios.get(
    //         `http://localhost:3000/getContainModule/modulePart/${this.selectedOption}/${partNoCleaned}`,
    //       )
    //       this.partList = data.containModule
    //     } else if (this.selectedOption) {
    //       const { data } = await axios.get(
    //         `http://localhost:3000/getContainModule/module/${this.selectedOption}`,
    //       )
    //       this.partList = data.containModule
    //     } else if (this.partNo) {
    //       const { data } = await axios.get(
    //         `http://localhost:3000/getContainModule/part/${partNoCleaned}`,
    //       )
    //       this.partList = data.containModule
    //     } else {
    //       const { data } = await axios.get(
    //         'http://localhost:3000/getContainModule',
    //       )
    //       this.partList = data.containModule
    //     }
    //   } catch (error) {
    //     console.error('Error applying filters:', error)
    //   }
    // },
    async applyFilters() {
      const soundSuccess = new Audio(require('@/assets/audio/success.wav'))
      const soundFailed = new Audio(require('@/assets/audio/fail.wav'))

      console.log(this.partNo)

      if (this.selectedOption) {
        axios
          .get(
            `http://localhost:3000/getContainModule/module/${this.selectedOption}`,
          )
          .then((response) => {
            this.partList = response.data.containModule
          })
      } else {
        axios.get('http://localhost:3000/getContainModule').then((response) => {
          this.partList = response.data.containModule
        })
      }
      if (this.partNo) {
        axios
          .get(
            `http://localhost:3000/getContainModule/part/${this.partNo.replaceAll(
              '/',
              '',
            )}`,
          )
          .then((response) => {
            this.partList = response.data.containModule
          })

        if (this.partNo && this.selectedOption) {
          axios
            .get(
              `http://localhost:3000/getContainModule/modulePart/${
                this.selectedOption
              }/${this.partNo.replaceAll('/', '')}`,
            )
            .then((response) => {
              this.partList = response.data.containModule
              console.log(response.data.containModule)
            })
        }
        const filteredPart = this.masterPart.find((part) =>
          this.partNo.includes(part.PART_NO),
        )

        const filteredModule = this.masterModule.find(
          (part) =>
            this.partNo.includes(part.PART_NUMBER) &&
            this.selectedOption === part.MODULE_CODE,
        )

        if (
          this.selectedOption &&
          filteredPart &&
          this.menuSelected === 'out'
        ) {
          if (filteredModule) {
            axios
              .post('http://localhost:3000/deleteData', {
                moduleCode: this.selectedOption,
                partNo: filteredPart.PART_NO,
              })
              .then(() => {
                soundSuccess.play()
                this.partNo = ''
                axios
                  .get('http://localhost:3000/getMasterModule')
                  .then((response) => {
                    this.masterModule = response.data.masterModule
                    this.moduleCode = response.data.masterModule
                  })
              })
          } else {
            soundFailed.play()
            this.partNo = ''
            alert(
              `Part ${filteredPart.PART_NAME}(${filteredPart.PART_NO}) not found in module`,
            )
          }
        } else if (
          this.selectedOption &&
          filteredPart &&
          this.menuSelected === 'in'
        ) {
          axios
            .post('http://localhost:3000/addData', {
              moduleCode: this.selectedOption,
              partNo: filteredPart.PART_NO,
            })
            .then(() => {
              soundSuccess.play()
              this.partNo = ''
              axios
                .get('http://localhost:3000/getMasterModule')
                .then((response) => {
                  this.masterModule = response.data.masterModule
                  this.moduleCode = response.data.masterModule
                })
            })
        } else if (this.menuSelected === 'edit') {
          if (filteredPart) {
            this.partNo = filteredPart.PART_NO
            this.partUnique = filteredPart.UNIQUE_NO
            this.partName = filteredPart.PART_NAME
          }
        }
      }
    },

    handleDoubleClick(module, partNo) {
      this.applyFilters(module, partNo)
    },

    submit() {
      console.log('Submit action for edit menu')
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
  background-color: #2ea44f;
}
.notSelected {
  background-color: #91ac8f;
}
/* CSS */
.button-3 {
  height: 2.25rem;
  width: 5rem;
  appearance: none;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  bottom: 4px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, 0.1);
  color: rgba(255, 255, 255, 0.8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
}
</style>
