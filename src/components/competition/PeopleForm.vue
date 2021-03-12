<template>
  <div class="component">
    <div class="people">
      <div class="people__group">
        <h2 class="people__title">People</h2>
        <button class="people__add-person btn btn--green">Add new person</button>
      </div>
      <div class="people__group">
        <div class="people__table">
          <table class="people-table">
            <thead class="people-table__thead">
            <tr>
              <th scope="col">
                <label><input type="checkbox" name="all"> First name</label>
              </th>
              <th scope="col">Last name</th>
              <th scope="col">Position</th>
              <th scope="col">Member</th>
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
            <tfoot>
            <tr>
              <th scope="row" colspan="2">Total albums</th>
              <td colspan="2">77</td>
            </tr>
            </tfoot>
          </table>
        </div>
        <form class="people__form blue-form">
          <p class="blue-form__head">Search people</p>
          <div class="people__form-body">
            <input type="text" class="people__input input">
            <input type="text" class="people__input input">
            <select name="countries" id="countries" class="people__select select">
              <option value="1">Russia</option>
              <option value="2">Argentina</option>
            </select>
            <select name="positions" id="positions" class="people__select select">
              <option value="1">Russia</option>
              <option value="2">Argentina</option>
            </select>
            <select name="skills" id="skills" class="people__select select">
              <option value="1">Russia</option>
              <option value="2">Argentina</option>
            </select>
            <button class="people__search btn btn--lightblue">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleForm"
}
</script>
