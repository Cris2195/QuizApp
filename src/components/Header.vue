<template>
  <div class="up">
    <b-navbar type="dark" variant="secondary">
      <b-navbar-brand>QuizApp</b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item active v-if="total !== 10"
          >Domanda n {{ total }}</b-nav-item
        >

        <b-nav-item v-if="total !== 10" active>
          Score : {{ correct }} /{{ totalQuestions }}
        </b-nav-item>
        <b-nav-item v-if="total === 10" @click="goHome" active>
          Torna alla home
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    correct: Number,
    total: Number
  },
  data: function() {
    return { totalQuestions: 10 };
  },
  methods: {
    goHome: function() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.big-btn {
  width: 90px;
  height: 40px;
}
</style>
