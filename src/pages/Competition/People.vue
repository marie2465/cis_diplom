<template>
  <div class="compet component">
    <PeopleHeader class="compet"/>
    <div class="people__group">
      <PeopleTable :table-data="filteredData"/>
      <PeopleForm @searchPeople="searchPeople"/>
    </div>
  </div>
</template>

<script>
import PeopleTable from '../../components/competition/people/PeopleTable'
import PeopleForm from '../../components/competition/people/PeopleForm'
import PeopleHeader from '../../components/competition/people/PeopleHeader'

export default {
  name: 'People',
  data: () => ({
    tableData: [
      {
        firstName: 'Эксперт оценки',
        lastName: 'Кемеровская область',
        position: 'Expert - Тестовая компетенция\n Expert - Тестовая компетенция - Юниоры',
        member: 'Кемеровская область'
      },
      {
        firstName: 'Имя1',
        lastName: 'Фамилия1',
        position: 'Expert - Тестовая компетенция\n Expert - Тестовая компетенция - Юниоры',
        member: 'Кемеровская область'
      },
      {
        firstName: 'тест1',
        lastName: 'тест2',
        position: 'Expert - Тестовая компетенция\n Expert - Тестовая компетенция - Юниоры',
        member: 'Кемеровская область'
      },
      {
        firstName: 'Чорт1',
        lastName: 'Чорт2',
        position: 'Expert - Тестовая компетенция\n Expert - Тестовая компетенция - Юниоры',
        member: 'Кемеровская область'
      }
    ],
    filteredData: []
  }),
  components: {
    PeopleHeader,
    PeopleForm,
    PeopleTable
  },
  methods: {
    searchPeople (searchData) {
      if (!searchData.firstName && !searchData.lastName) {
        this.filteredData = this.tableData
        return false
      }
      let filtered = this.tableData
      filtered = filtered.filter(people => people.firstName.toLowerCase().includes(searchData.firstName))
      filtered = filtered.filter(people => people.lastName.toLowerCase().includes(searchData.lastName))
      this.filteredData = filtered
    }
  }
}
</script>
