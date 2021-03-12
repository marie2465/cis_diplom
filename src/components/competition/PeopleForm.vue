<template>
  <div class="component">
    <table class="people-table">
      <thead>
      <tr>
        <th scope="col">
          <label>First name <input type="checkbox" name="All"></label>
        </th>
        <th scope="col">Last name</th>
        <th scope="col">Position</th>
        <th scope="col">Member</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="first-name-col">
          Эксперт Оценки
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
      <tfoot>
      <tr>
        <th scope="row" colspan="2">Total albums</th>
        <td colspan="2">77</td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "PeopleForm"
}
</script>
