<template>
  <div class="component">
    <div class="teams">
      <div>
        <p class="teams__head">Teams Menegment</p>
        <div class="teams__content">
          <i class="teams__text">Select a skill</i>
          <CustomSelect
            :options="items"
            class="selected"
            v-model="selected"
          />
        </div>
      </div>
      <div class="teams__table" v-if="selected !== null">
        <div class="teams__table-import">
          <TeamsTable
            :itemsCompetitor="itemsCompetitor"
            :showData="showData = true"
            :headerTable="headertable = 'Competitor not in team'"/>
        </div>
        <div class="teams__table-btn">
          <button class="btn btn--lightblue teams__btn" disabled>
            Group
            <span class="chevron right"></span>
          </button>
          <button class="btn btn--lightblue teams__btn" disabled>
            <span class="chevron left"></span>
            Ungroup
          </button>
        </div>
        <div class="teams__table-imports">
          <TeamsTable
            :showData="showData = false"
            :headerTable="headertable = 'Teams'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '@/components/competition/component/CustomSelect'
import TeamsTable from '@/components/competition/teams/TeamsTable'

export default {
  name: 'Teams',
  components: {
    TeamsTable,
    CustomSelect
  },
  data: function () {
    return {
      items: [
        'first', 'second', 'third'
      ],
      itemsCompetitor: [
        '(16) Конкурсант Республика Татарстан',
        '(42) Конкурсант Кемеровская область',
        '(50) Конкурсант МО',
        '(77) Конкурсант Москва'
      ],
      headertable: 'Competitor not in team',
      selected: ''
    }
  }
}
</script>

<style scoped>

</style>
