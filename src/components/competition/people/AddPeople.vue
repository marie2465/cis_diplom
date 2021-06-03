<template>
  <div class="addpeople">

    <router-link class="addpeople__back"
                 to="/competition/people">
      <div class="addpeople__back-arrow">&#11013;</div>
      <div class="addpeople__back addpeople__back-txt">Back to Search</div>
    </router-link>
    <div class="addpeople__header">
      <div class="people__group">
        <h2 class="people__title">People</h2>
        <router-link class="people__add-person btn btn--green" to="/competition/add-people">Add New Person</router-link>
      </div>
    </div>

    <div class="addpeople__person">
      <div class="addpeople__person-header">
        Person
      </div>
      <div class="addpeople__person-container">
        <div class="addpeople__person-info">
          <div class="addpeople__person-blocks">
            <div class="addpeople__person-text">First Name</div>
            <input type="text" class="addpeople__person-inputs input">
          </div>
          <div class="addpeople__person-blocks">
            <div class="addpeople__person-text">Last Name</div>
            <input type="text" class="addpeople__person-inputs input">
          </div>
          <div class="addpeople__person-blocks">
            <div class="addpeople__person-text">Gender</div>
            <select type="text" class="addpeople__person-select select">
              <option value="zero"></option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="addpeople__person-blocks">
            <div class="addpeople__person-text">Member</div>
            <div class="addpeople__person-select">
              <CustomSelect
                :options="items"
                class="selected"
              />
            </div>
          </div>
          <div class="addpeople__person-btn">
            <button class="btn btn--lightblue">Save</button>
          </div>
        </div>
        <div class="addpeople__person-image">
          <div class="addpeople__person-imgs">
            <img src="@/assets/images/photo.png" alt="image" class="addpeople__person-imgs"/>
          </div>
          <div class="addpeople__person-load">
            <button class="addpeople__person-btns">Выбрать файл</button>
            <div class="addpeople__person-texts">Файл не выбран</div>
          </div>
        </div>
      </div>
    </div>
    <div class="addpeople__skills">
      <div class="addpeople__person-header">Skills</div>

      <div class="addpeople__skills-container">
        <div>
          <table class="addpeople__skills-table" ref="table">
            <thead class="addpeople__skills-thead">
            <tr>
              <th scope="col" class="addpeople__skills-column"><div>Position</div></th>
              <th scope="col">Skill</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <div class="addpeople__skills-text">No Position</div>
            </tr>
            <tr >
              <td>
                <div></div>
              </td>
              <td>
                <div></div>
              </td>
            </tr>
            <tr v-if="open===true">
              <td>
                <CustomSelect
                  class="selected"
                  :options="roles"
                />
              </td>
              <td>
                <div class="addpeople__skills-col">
                  <CustomSelect
                    :options="skills"
                    class="selected"/>
                  <button class="btn btn--green addpeople__skills-btn">Save</button>
                  <button class="btn btn--yellow" @click="open=!open">Cancel</button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
          <a class="addpeople__back addpeople__skills-add" v-if="open===false" @click="open=!open">
            <div class="addpeople__back-arrow">&#10010;</div>
            <div class="addpeople__back addpeople__back-txt" >Add Position</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "../component/CustomSelect";

export default {
  name: "AddPeople",
  components: {CustomSelect},
  data: function () {
    return {
      items: [
        ' ',
        'Калининградская область',
        'Московская область',
        'Томская область',
        'Бегородская область',
        'Республика Татарстан',
        'Кемеровская область',
        'Саратовская область'
      ],
      roles: [
        ' ',
        'Competitor',
        'Expert',
        'Chef Expert',
        'Deputy Chief Expert'
      ],
      skills: [
        ' ',
        '01 Тестовая компетенция',
        '00J Тестовая компетенция - junior',
        '09 Программные решения для бизнеса'
      ],
      open: false
    }
  }
}
</script>
