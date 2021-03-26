<template>
  <div class="people__group">
    <div class="people__table">
      <table class="people-table" ref="table">
        <thead class="people-table__thead">
        <tr>
          <th scope="col">
            <label>
              <input type="checkbox" name="all" @change="selectAll" v-model="allSelected">
              <a href="#" class="people-table__link">First name</a>
            </label>
          </th>
          <th scope="col"><a href="#" class="people-table__link">Last name</a></th>
          <th scope="col">Position</th>
          <th scope="col"><a href="#" class="people-table__link">Member</a></th>
        </tr>
        </thead>
        <tbody class="people-table__tbody">
        <tr v-for="num in 5" :key="num">
          <td class="check-box-col">
            <label>
              <input type="checkbox" name="one" @change="select" :value="num.toString()" v-model="selected">
              Эксперт оценки
            </label>
          </td>
          <td class="last-name-col">Кемеровская область</td>
          <td class="position-col">
            Expert - Тестовая компетенция<br>
            Expert - Тестовая компетенция - Юниоры
          </td>
          <td class="member-col">
            Кемеровская область
          </td>
        </tr>
        </tbody>
        <tfoot class="people-table__tfoot">
        <tr>
          <td colspan="1">
            <button type="button" class="btn btn--red">Delete Selected</button>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleTable",
  data: function () {
    return {
      selected: [],
      allSelected:false
    };
  },
  methods: {
    selectAll () {
      this.selected = []
      if (this.allSelected) {
        for (let number = 1; number < 6; number++) {
          this.selected.push(number.toString());
        }
      }
    },
    select () {
      this.allSelected = false
    }
  }
}
</script>

<style scoped>

</style>
