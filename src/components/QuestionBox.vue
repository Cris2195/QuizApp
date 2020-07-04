<template>
  <div>
    <b-jumbotron>
      <template v-slot:lead v-if="questionToDisplay.question">
        <p>{{ question }}</p></template
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
          :class="[
            index === selectedIndex && !answered
              ? 'selected'
              : index === selectedIndex && isCorrect && answered
              ? 'correct'
              : index === selectedIndex && !isCorrect && answered
              ? 'wrong'
              : ''
          ]"
        >
          <p>{{ ans }}</p>
        </b-list-group-item>
      </b-list-group>

      <b-button
        class="mt-3 mr-3"
        variant="primary"
        @click="evaluateAnswer()"
        :disabled="selectedIndex === null || answered"
        >Confirm</b-button
      >
      <b-button class="mt-3 mr-3" variant="success" @click="next"
        >Next Question
      </b-button>
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
    return {
      answer: [],
      selectedIndex: null,
      answered: false,
      isCorrect: false
    };
  },
  computed: {
    answers: function() {
      var he = require("he");
      let answers = [...this.questionToDisplay.incorrect_answers];
      answers.push(this.questionToDisplay.correct_answer);
      var decodedAnswers = answers.map(ans => he.decode(ans));
      return decodedAnswers;
    },
    question: function() {
      var he = require("he");
      return he.decode(this.questionToDisplay.question);
    }
  },
  watch: {
    questionToDisplay: {
      immediate: true,
      handler() {
        (this.answered = false),
          (this.selectedIndex = null),
          (this.isCorrect = false);
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
      if (
        this.answers[this.selectedIndex] ===
        this.questionToDisplay.correct_answer
      ) {
        this.$bvToast.toast(`Good, right answer`, {
          title: "Outcome",
          autoHideDelay: 1500,
          variant: "success",
          solid: true
        });
        this.isCorrect = true;
        this.delayNextQuestion();
      } else {
        this.$bvToast.toast(`So bad, wrong answer`, {
          title: "Outcome",
          autoHideDelay: 1500,
          variant: "danger",
          solid: true
        });
        this.delayNextQuestion();
      }
      this.answered = true;
      this.increment(this.isCorrect);
    },
    delayNextQuestion: function() {
      setTimeout(() => {
        this.next();
      }, 1000);
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
  background-color:#D33682;;
}

p {
  color: wheat;
}
</style>
