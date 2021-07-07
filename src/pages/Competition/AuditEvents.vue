<template>
  <div class="component">
    <AuditEventsHeader/>
    <AuditEventsForm/>
    <AuditEventsTable/>
  </div>
</template>

<script>
import AuditEventsForm from "@/components/competition/audit/AuditEventsForm";
import AuditEventsHeader from "@/components/competition/audit/AuditEventsHeader";
import AuditEventsTable from "@/components/competition/audit/AuditEventsTable";
export default {
  name: "AuditEvents",
  components: {AuditEventsTable, AuditEventsHeader, AuditEventsForm}
}
</script>

<style scoped>

</style>
