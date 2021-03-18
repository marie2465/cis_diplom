<template>
  <div>
    <div class="component">
      <p class="import__head">Export Data</p>
      <div class="import__container">
        <i class="import__text import__text-header">Type of data to export :</i>
        <select class="import__select" name="checkbox" id="sel" v-model="selected">
          <option></option>
          <option value="Marking Scheme">
            <a href="#">Marking Sheme</a>
          </option>
        </select>
      </div>
      <div class="import__row" v-if=" selected==='Marking Scheme' ">
        <div class="import__row-header">
          Marking Scheme
        </div>
        <div class="import__con">
          <div class="import__row-padded">Export a marking scheme to the marking scheme spreadsheet</div>
          <div class="import__row-padded">
            <i class="import__text">Skills</i>
            <select class="select import__select-check" name="checkbox">
              <option></option>
              <option value="test competition">
                <a href="#">00-Тестовая компетенция</a>
              </option>
              <option value="test competition junior">
                <a href="#">00J-Тестовая компетенция юниоры</a>
              </option>
            </select>
          </div>
          <div class="import__row__padded">
            <i class="import__text">Format</i>
            <select class="select import__select-cis" name="values" id="selected">
              <option value="cis 4.1">cis 4.1</option>
              <option value="cis 4.0">cis 4.0</option>
            </select>
          </div>
          <button class="import__button btn btn--lightblue" type="submit">Export</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExportForm",
  data: function () {
    return {
      selected: ''
    }
  }
}
</script>

<style scoped>

</style>
