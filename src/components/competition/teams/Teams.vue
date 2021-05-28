<template>
  <div class="component">
    <div class="teams">
      <div>
        <div class="teams__head">
          <div class="teams__head-name">Teams Menegment</div>
        </div>
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
            :showData="true"
            headerTable="Competitor not in team"/>
        </div>
        <div class="teams__table-btn">
          <button class="btn btn--lightblue teams__btn">
            Group
            <span class="chevron right"></span>
          </button>
          <button class="btn btn--lightblue teams__btn">
            <span class="chevron left"></span>
            Ungroup
          </button>
        </div>
        <div class="teams__table-imports">
          <TeamsTable
            :showData="false"
            headerTable="Teams"
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
        {
          body: '(16) Конкурсант Республика Татарстан',
          done: false
        },
        {
          body: '(42) Конкурсант Кемеровская область',
          done: false
        },
        {
          body: '(50) Конкурсант МО',
          done: false
        },
        {
          body: '(77) Конкурсант Москва',
          done: false
        }
      ],
      headertable: 'Competitor not in team',
      selected: ''
    }
  }
}
</script>

<style scoped>

</style>
