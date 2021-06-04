<template>
  <div class="component">
    <div class="skills">
      <div class="skills__header">
        <p>Skills</p>
      </div>
      <div class="skills__selectes">
        <i class="skills__selectes__text">Select a skill</i>
        <select name="values" id="checks" class="skills__select select" v-model="selectedOption">
          <option value="zero"></option>
          <option value="test competition">00-Тестовая компетенция</option>
          <option value="test competition junior">00J-Тестовая компетенция юниоры</option>
        </select>
        <button type="submit" class="skills__selectes__button-green btn btn--green" @click="addData()">New</button>
        <button type="submit" class="skills__selectes__button-red btn btn--red" disabled ref="deleteButton">Delete</button>
      </div>
      <div class="skills__form blue-form">
        <div class="blue-form__head">
          <p>Skill Details</p>
        </div>
        <div class="skills__table" :class="showData ? 'skills__table--disabled' : ''">
          <table>
            <tbody>
              <tr>
                <th class="skills__table-heads">Skill Number</th>
                <td>
                  <input class="skills__table-input input" type="text" :disabled="showData"
                         v-model="number">
                </td>
              </tr>
              <tr>
                <th class="skills__table-heads">Name</th>
                <td>
                  <input class="skills__table-input input" type="text" :disabled="showData"
                         v-model="name">
                  <select name="lang" id="lang" class="skills__select select" :disabled="showData" v-model="language">
                    <option value="English" :selected="formData[selectedOption].language === 'English'">English</option>
                    <option value="Chinese" :selected="formData[selectedOption].language === 'Chinese'">Chinese (China)</option>
                    <option value="French" :selected="formData[selectedOption].language === 'French'">French</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th class="skills__table-heads">Type</th>
                <td>
                  <select name="lang" id="type" class="skills__select select" :disabled="showData" v-model="type">
                    <option value="zero" :selected="formData[selectedOption].type === null"></option>
                    <option value="Official" :selected="formData[selectedOption].type === 'Official'">
                      Official
                    </option>
                    <option value="Demonstration" :selected="formData[selectedOption].type === 'Demonstration'">
                      Demonstration
                    </option>
                    <option value="Host Member" :selected="formData[selectedOption].type === 'Host Member'">
                      Host Member
                    </option>
                    <option value="Presentation" :selected="formData[selectedOption].type === 'Presentation'">
                      Presentation
                    </option>
                    <option value="Exhibition" :selected="formData[selectedOption].type === 'Exhibition'">
                      Exhibition
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <th></th>
                <td class="skills__checkboxes">
                  <div class="skills__checkbox">
                    <label>
                      <input type="checkbox" name="a" value="Competitors are organised in teams" :disabled="showData">
                      Competitors are organised in teams
                    </label>
                  </div>
                  <div class="skills__checkbox">
                    <label>
                      <input type="checkbox" name="a" value="Allow compatriot marking" :disabled="showData">
                      Allow compatriot marking
                    </label>
                  </div>
                  <div class="skills__checkbox">
                    <label>
                      <input type="checkbox" name="a" value="Allow to generate a landscape marking form" :disabled="showData">
                      Allow to generate a landscape marking form
                    </label>
                  </div>
                  <div class="skills__checkbox">
                    <label>
                      <input type="checkbox" checked name="a" value="Generate final results and medals" :disabled="showData">
                      Generate final results and medals
                    </label>
                  </div>
                  <div class="skills__checkbox">
                    <label>
                      <input type="checkbox" name="a" value="Exclude from member results comparison" :disabled="showData">
                      Exclude from member results comparison
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <button class="skills__button btn btn--lightblue" type="submit" :disabled="showData" @click="clear()">Save</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsForm",
  data: () => ({
    showData: true,
    selectedOption: 'zero',
    formData: {
      'zero': {
        number: null,
        name: null,
        language: null,
        type: null
      },
      'test competition': {
        number: '00',
        name: 'Тестовая компетенция',
        language: 'English',
        type: 'Official'
      },
      'test competition junior': {
        number: '00J',
        name: 'Тестовая компетенция юниоры',
        language: 'Chinese',
        type: 'Official'
      },
    },
    number: null,
    name: null,
    language: 'English',
    type: null
  }),
  methods: {
    addData() {
      this.showData = false
      this.$refs.deleteButton.disabled = true
      this.name = null
      this.number=null
    },
    clear(){
      this.name = null
      this.number=null
    }
  },
  watch: {
    selectedOption() {
      this.showData = this.selectedOption === 'zero';
      this.$refs.deleteButton.disabled = this.selectedOption === 'zero'
    }
  }
}
</script>

<style scoped>

</style>
