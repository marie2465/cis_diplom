<template>
  <div>
    <div class="containers">
      <h2>Import Data</h2>
      <i>Type of data to import :</i>
      <select name="checkbox" id="sel"  v-model="selected">
        <option></option>
        <option value="Marking Scheme">
          <a href="#">Marking Sheme</a>
        </option>
      </select>
      <div v-if=" selected==='Marking Scheme' ">
        <h2>Marking Scheme</h2>
        <p>Marking schemes can now be imported from the Marking Scheme screen.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Import',
  data: function () {
    return {
      selected: ''
    }
  }
}
</script>

<style scoped>

</style>
