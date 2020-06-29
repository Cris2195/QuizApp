<template>
  <div>
    <b-jumbotron color="light">
      <template v-slot:lead v-if="questionToDisplay.question">
        <p>{{ questionToDisplay.question }}</p></template
      >

      <hr class="my-4" />

      <b-list-group
        v.if="answers.legth"
        class="animate__animated animate__bounce"
      >
        <b-list-group-item
          v-for="(ans, index) in answers"
          :key="index"
          @click="selectIndex(index)"
          :class="[index === selectedIndex ? 'selected' : '']"
        >
          <p>{{ ans }}</p>
        </b-list-group-item>
      </b-list-group>

      <b-button
        variant="primary"
        @click="evaluateAnswer()"
        :disabled="selectedIndex === null || answered"
        >Confirm</b-button
      >
      <b-button variant="success" @click="next">Next Question </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    questionToDisplay: Object,
    next: Function,
    increment: Function
  },
  data: function() {
    return { answer: [], selectedIndex: null, answered: false };
  },
  computed: {
    answers: function() {
      let answers = [...this.questionToDisplay.incorrect_answers];
      answers.push(this.questionToDisplay.correct_answer);
      return answers;
    }
  },
  watch: {
    questionToDisplay: {
      immediate: true,
      handler() {
        (this.answered = false), (this.selectedIndex = null);
        this.shuffleArray();
      }
    }
  },
  methods: {
    selectIndex: function(index) {
      this.selectedIndex = index;
    },
    shuffleArray: function() {
      var funcShuffle = require("shuffle-array");
      funcShuffle(this.answers);
    },
    evaluateAnswer: function() {
      let isCorrect = false;
      if (
        this.answers[this.selectedIndex] ===
        this.questionToDisplay.correct_answer
      ) {
        this.$bvToast.toast(`Bravo, risposta Giusta`, {
          title: "Risultato",
          autoHideDelay: 1500,
          variant: "success",
          solid: true
        });
        isCorrect = true;
        this.next();
      } else {
        this.$bvToast.toast(`Risposta Sbagliata`, {
          title: "Risultato?",
          autoHideDelay: 1500,
          variant: "danger",
          solid: true
        });
        this.next();
      }
      this.answered = true;
      this.increment(isCorrect);
    }
  }
};
</script>

<style scoped>
.list-group-item:hover {
  background: black;
  cursor: pointer;
}

.selected {
  background-color: #2aa198;
}

.correct {
  background-color: green;
}

.wrong {
  background-color: red;
}

p {
  color: wheat;
}
</style>
