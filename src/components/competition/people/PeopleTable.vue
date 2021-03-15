<template>
  <div>
    <div class="people__group">
      <div class="people__table">
        <table class="people-table">
          <thead class="people-table__thead">
          <tr>
            <th scope="col">
              <label>
                <input type="checkbox" name="all">
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
            <td class="first-name-col">
              <label><input type="checkbox" name="all"> Эксперт Оценки</label>
            </td>
            <td class="last-name-col">
              Кемеровская область
            </td>
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
            <th scope="col" colspan="1">4 Results</th>
            <td colspan="1">
              <button type="button" class="btn btn--red">Delete Selected</button>
            </td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleTable"
}
</script>

<style scoped>

</style>
