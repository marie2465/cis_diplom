<template>
  <div class="component">
    <AuditEventsHeader/>
    <AuditEventsForm/>
  </div>
</template>

<script>
import AuditEventsForm from "@/components/competition/audit/AuditEventsForm";
import AuditEventsHeader from "@/components/competition/audit/AuditEventsHeader";
export default {
  name: "AuditEvents",
  components: {AuditEventsHeader, AuditEventsForm}
}
</script>

<style scoped>

</style>
