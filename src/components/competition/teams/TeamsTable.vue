<template>
  <div class="teams__tables">
    <div class="teams__tables-header">
      <p class="teams__tables-content"> {{ headerTable }}</p>
    </div>
    <div class="teams__tables-competitors" v-if="showData === true">
      <div class="teams__tables-items"
           v-for="i of itemsCompetitor"
           :key="i">
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamsTable",
  props: {
    itemsCompetitor: {
      type: Array,
      required: true,
    },
    showData: {
      type: Boolean,
      required: true
    },
    headerTable: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
}
</script>

<style scoped>

</style>
