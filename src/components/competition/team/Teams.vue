<template>
  <div class="component">
    <div class="teams">
      <p class="teams__head">Teams Menegment</p>
      <div class="teams__content">
        <i class="teams__text">Select a skill</i>
        <CustomSelect
          :options="['go', 'python', 'rust', 'javascript']"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '@/components/competition/team/CustomSelect'

export default {
  name: "Teams",
  components: {
    CustomSelect
  }
}
</script>

<style scoped>

</style>
