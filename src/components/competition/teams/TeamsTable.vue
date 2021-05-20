<template>
  <div class="teams__tables">
    <div class="teams__tables-header">
      <p class="teams__tables-content"> {{ headerTable }}</p>
    </div>
    <div class="teams__tables-competitors" v-if="showData">
      <div class="teams__tables-items"
           v-for="(value, index) of itemsCompetitor"
           :key="index">
        {{ value }}
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
      default: () => []
    },
    showData: {
      type: Boolean,
      default: () => false
    },
    headerTable: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {};
  }
}
</script>

<style scoped>

</style>
