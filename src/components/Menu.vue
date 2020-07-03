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
            :class="[hover ? 'change' : '']"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            @click="goToQuiz('TECH')"
          >
            <b-card-text>Prove yourself with Tech's questions</b-card-text>
          </b-card>
        </b-col>
        <b-col class="animate__animated animate__fadeInDown"
          ><b-card
            border-variant="secondary"
            text-variant="white"
            header="Science"
            class="text-center"
            :class="[sci ? 'change' : '']"
            @mouseover="sci = true"
            @mouseleave="sci = false"
            @click="goToQuiz('SCIENCE')"
          >
            <b-card-text>Prove yourself with Science's questions</b-card-text>
          </b-card></b-col
        >
        <b-col class="animate__animated animate__fadeInDown"
          ><b-card
            border-variant="warning"
            text-variant="black"
            header="General"
            class="text-center"
            :class="[gen ? 'change' : '']"
            @mouseover="gen = true"
            @mouseleave="gen = false"
            @click="goToQuiz('GENERAL')"
          >
            <b-card-text
              >Prove yourself with General knowledge's questions</b-card-text
            >
          </b-card></b-col
        >
      </b-row>
      <b-row class="mt-5">
        <b-col class="animate__animated animate__fadeInDown">
          <b-card
            border-variant="primary"
            text-variant="white"
            header="VideoGames"
            class="text-center"
            :class="[gam ? 'change' : '']"
            @mouseover="gam = true"
            @mouseleave="gam = false"
            @click="goToQuiz('GAMES')"
          >
            <b-card-text>Prove yourself with Games's questions</b-card-text>
          </b-card>
        </b-col>
        <b-col class="animate__animated animate__fadeInDown"
          ><b-card
            border-variant="success"
            text-variant="white"
            header="Films"
            class="text-center"
            @click="goToQuiz('FILMS')"
            :class="[fil ? 'change' : '']"
            @mouseover="fil = true"
            @mouseleave="fil = false"
          >
            <b-card-text>Prove yourself with Film's questions</b-card-text>
          </b-card></b-col
        >
        <b-col class="animate__animated animate__fadeInDown"
          ><b-card
            border-variant="danger"
            text-variant="black"
            header="History"
            class="text-center"
            :class="[sto ? 'change' : '']"
            @mouseover="sto = true"
            @mouseleave="sto = false"
            @click="goToQuiz('HISTORY')"
          >
            <b-card-text>Prove yourself with History's questions</b-card-text>
          </b-card></b-col
        >
      </b-row>
    </b-container>
    <router-view v-if="hide" />
  </div>
</template>
<script>
import { CategoryEnum, IdEnum } from "../categoryEnum.js";
export default {
  data: function() {
    return {
      hide: false,
      hover: false,
      sci: false,
      gen: false,
      sto: false,
      fil: false,
      gam: false
    };
  },
  methods: {
    goToQuiz: function(cat) {
      let id = "";
      switch (cat) {
        case CategoryEnum.TECH:
          id = IdEnum.TECH;
          break;
        case CategoryEnum.SCIENCE:
          id = IdEnum.SCIENCE;
          break;
        case CategoryEnum.GENERAL:
          id = IdEnum.GENERAL;
          break;
        case CategoryEnum.FILMS:
          id = IdEnum.FILMS;
          break;
        case CategoryEnum.GAMES:
          id = IdEnum.GAMES;
          break;
        case CategoryEnum.HISTORY:
          id = IdEnum.HISTORY;
          break;
      }
      this.$router.push("quiz/" + id);
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
.change {
  cursor: pointer;
  background-color: black;
}
</style>
