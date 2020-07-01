<template>
  <div class="centered-text">
    <b-container class="bv-example-row" v-if="!hide">
      <b-row>
        <b-col
          ><h1>
            QuizApp
            <small class="text-muted">test yourself!</small>
          </h1></b-col
        >
      </b-row>
      <b-row class="mt-5">
        <b-col class="animate__animated animate__fadeInDown">
          <b-card
            border-variant="info"
            text-variant="white"
            header="Tech"
            class="text-center"
            @click="goToQuiz"
          >
            <b-card-text>Prove yourself with Tech questions</b-card-text>
          </b-card>
        </b-col>
        <b-col class="animate__animated animate__fadeInDown"
          ><b-card
            border-variant="secondary"
            text-variant="white"
            header="Science"
            class="text-center"
          >
            <b-card-text>Prove yourself with Science questions</b-card-text>
          </b-card></b-col
        >
        <b-col class="animate__animated animate__fadeInDown"
          ><b-card
            border-variant="warning"
            text-variant="black"
            header="Economy"
            class="text-center"
          >
            <b-card-text>Prove yourself with Economy questions</b-card-text>
          </b-card></b-col
        >
      </b-row>
    </b-container>
    <router-view v-if="hide" />
  </div>
</template>
<script>
export default {
  data: function() {
    return { hide: false };
  },
  methods: {
    goToQuiz: function() {
      this.$router.push("quiz");
      this.hide = true;
    }
  }
};
</script>
<style scoped>
.centered-text {
  color: #ffffff;
  position: absolute;
  text-align: center;
  top: 20%;
  width: 100%;
}
.animate__animated.animate__fadeInDown {
  --animate-duration: 2s;
}
</style>
