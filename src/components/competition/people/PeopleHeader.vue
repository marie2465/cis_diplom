<template>
  <div class="people__group">
    <h2 class="people__title">People</h2>
    <router-link class="people__add-person btn btn--green" to="/competition/add-people">Add New Person</router-link>
  </div>
</template>

<script>
export default {
  name: "PeopleHeader"
}
</script>
