<template>
  <div class="component">
    <div class="teams">
      <p class="teams__head">Teams Menegment</p>
      <div class="teams__content">
        <i class="teams__text">Select a skill</i>
        <CustomSelect
          :options="items"
          class="selectes"
          @input="alert(displayToKey($event))"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "@/components/competition/component/CustomSelect";

export default {
  name: "Teams",
  components: {CustomSelect},
  data: function () {
    return {
      items: [
         'first', 'second', 'third'
      ]
    };
  }
}
</script>

<style scoped>

</style>
