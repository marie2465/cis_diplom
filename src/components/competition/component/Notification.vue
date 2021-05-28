<template>
  <div class="notification">
    <transition-group name="transition-animated"
                      class="notification_list">
      <div class="notification__text"
           v-for="message in messages"
           :key="message.id"
           :class="message.context"
      >
        {{ message.name }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    messages: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    hideNotification() {
      let vm = this;
      if (this.messages.length) {
        setTimeout(function () {
          vm.messages.splice(vm.messages.length - 1, 1)
        }, 3000)
      }
    }
  },
  watch: {
    messages() {
      this.hideNotification()
    }
  },
  mounted() {
    this.hideNotification()
  }
}
</script>

<style scoped>

</style>
