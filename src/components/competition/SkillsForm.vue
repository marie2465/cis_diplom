<template>
  <div class="component">
    <div class="skills">
      <div class="skills__header">
        <p>Skills</p>
      </div>
      <div class="skills__selectes">
        <i class="skills__selectes__text">Select a skills</i>
        <select name="values" id="checks" class="skills__selectes__sel">
          <option value="zero"></option>
          <option value="test competition">
            <a href="#">00-Тестовая компетенция</a>
          </option>
          <option value="test competition junior">
            <a href="#">00J-Тестовая компетенция юниоры</a>
          </option>
        </select>
        <button type="submit" class="skills__selectes__button-green">New</button>
        <button type="submit" class="skills__selectes__button-red">Delete</button>
      </div>
      <div class="skills__forms">
        <div class="skills__forms__head">
          <p>Skill Details</p>
        </div>
        <div class="skills__table">
          <table>
            <tr>
              <th class="skills__table__heads">Skill Number</th>
              <td>
                <input type="text">
              </td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                <input type="text">
                <select name="lang" id="lang" class="import__select">
                  <option value="English">English</option>
                  <option value="Chinese">Chinese (China)</option>
                  <option value="French">French</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Type</th>
              <td>
                <select name="lang" id="type" class="import__select">
                  <option value="zero"></option>
                  <option value="Official">Official</option>
                  <option value="Demonstration">Demonstration</option>
                  <option value="Host Member">Host Member</option>
                  <option value="Presentation">Presentation</option>
                  <option value="Exhibition">Exhibition</option>
                </select>
              </td>
            </tr>
            <tr>
              <th></th>
              <td class="skills__checkboxes">
                <div class="skills__checkbox">
                  <p>
                    <input type="checkbox" name="a" value="Competitors are organised in teams">
                    Competitors are organised in teams
                  </p>
                </div>
                <div class="skills__checkbox">
                  <p>
                    <input type="checkbox" name="a" value="Allow compatriot marking">
                    Allow compatriot marking
                  </p>
                </div>
                <div class="skills__checkbox">
                  <p>
                    <input type="checkbox" name="a" value="Allow to generate a landscape marking form">
                    Allow to generate a landscape marking form
                  </p>
                </div>
                <div class="skills__checkbox">
                  <p>
                    <input type="checkbox" name="a" value="Generate final results and medals">
                    Generate final results and medals
                  </p>
                </div>
                <div class="skills__checkbox">
                  <p>
                    <input type="checkbox" name="a" value="Exclude from member results comparison">
                    Exclude from member results comparison</p>
                </div>
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                <button class="skills__button" type="submit">Save</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsForm"
}
</script>

<style scoped>

</style>
