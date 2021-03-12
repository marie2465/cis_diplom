<template>
  <div>
    <div class="import">
      <div class="import__content">
        <p class="import__head">Export Data</p>
      </div>
      <div class="import__conteiner">
        <i class="import__text">Type of data to export :</i>
        <select class="import__select" name="checkbox" id="sel" v-model="selected">
          <option></option>
          <option value="Marking Scheme">
            <a href="#">Marking Sheme</a>
          </option>
        </select>
      </div>

      <div class="import__row" v-if=" selected==='Marking Scheme' ">
        <div class="import__row__header">
          Marking Scheme
        </div>
        <div class="import__con">
          <div class="import__row__padded">Export a marking scheme to the marking scheme spreadsheet</div>
          <div class="import__row__padded1">
            <i>Skills</i>
            <select class="import__select__check" name="checkbox">
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
            <i>Format</i>
            <select class="import__select__cis" name="values" id="selected">
              <option value="cis 4.1">cis 4.1</option>
              <option value="cis 4.0">cis 4.0</option>
            </select>
          </div>
          <button class="import__button" type="submit">Export</button>
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
