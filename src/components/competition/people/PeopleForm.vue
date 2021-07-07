<template>
  <div class="people">
    <form class="people__form blue-form">
      <p class="blue-form__head">Search people</p>
      <div class="people__form-body">
        <input type="text" class="people__input input" placeholder="Name" v-model="searchValue.firstName">
        <input type="text" class="people__input input" placeholder="Username" v-model="searchValue.lastName">
        <select name="member" id="countries" class="people__select select">
          <option value="1"></option>
          <option value="1">Russia</option>
          <option value="2">Argentina</option>
          <option value="2">Brazil</option>
          <option value="2">USA</option>
          <option value="2">Germany</option>
          <option value="2">Franc</option>
        </select>
        <select name="positions" id="positions" class="people__select select">
          <option value="1"></option>
          <option value="1">Competitor</option>
          <option value="2">Expert</option>
          <option value="2">Chief Expert</option>
          <option value="2">Deputy Chief Expert</option>
        </select>
        <select name="skills" id="skills" class="people__select select">
          <option value="test competition"></option>
          <option value="test competition">00-Тестовая компетенция</option>
          <option value="test competition junior">00J-Тестовая компетенция юниоры</option>
        </select>
        <button class="people__search btn btn--lightblue" @click="$emit('searchPeople', searchValue)" type="button">
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PeopleForm",
  data: () => ({
    searchValue: {
      firstName: '',
      lastName: ''
    }
  })
}
</script>
