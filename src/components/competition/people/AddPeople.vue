<template>
  <div class="component">
    <div class="addpeople">
      <div class="addpeople__back">
        <a>Back to search</a>
      </div>
      <div class="addpeople__header">
        <div class="people__group">
          <h2 class="people__title">People</h2>
          <router-link class="people__add-person btn btn--green" to="/add-people">Add New Person</router-link>
        </div>
        <div class="addpeople__person">
          <div class="addpeople__person-header">
            Person
          </div>
          <div class="addpeople__person-container">
            <div class="addpeople__person-info">
              <div class="addpeople__person-blocks">
                <div class="addpeople__person-text">First Name</div>
                <input type="text" class="addpeople__person-inputs">
              </div>
              <div class="addpeople__person-blocks">
                <div class="addpeople__person-text">Last Name</div>
                <input type="text" class="addpeople__person-inputs">
              </div>
              <div class="addpeople__person-blocks">
                <div class="addpeople__person-text">Gender</div>
                <select type="text" class="people__select select">
                  <option value="zero"></option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="addpeople__person-blocks">
                <div class="addpeople__person-text">Gender</div>
                <CustomSelect

                />
              </div>
              <div class="addpeople__person-btn"></div>
            </div>
            <div class="addpeople__person-image">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "../component/CustomSelect";
export default {
  name: "AddPeople",
  components: {CustomSelect}
}
</script>
