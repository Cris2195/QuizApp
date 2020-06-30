<template>
  <div id="app">
    <div class="progress" v-if="!loaded">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
        style="width: 100%"
      ></div>
    </div>
    <div v-else>
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <Header :correct="qtaCorrect" :total="total" />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-container class="bv-example-row">
              <b-row>
                <b-col sm="6" offset="3" v-if="questions.length"
                  ><QuestionBox
                    v-if="total !== 10"
                    :questionToDisplay="questions[index]"
                    :next="nextQuestion"
                    :increment="increment"
                  />
                  <div v-else>
                    <div>
                      <b-jumbotron
                        bg-variant="solid"
                        text-variant="white"
                        border-variant="dark"
                        class="animate__animated animate__bounce"
                      >
                        <template v-slot:header>QuizApp Terminato</template>

                        <template v-slot:lead>
                          <p class="display-3">
                            Score : {{ qtaCorrect }}
                          </p></template
                        >

                        <hr class="my-4" />

                        <div v-if="qtaCorrect > 5">
                          <p>Eheh test passato per un pelo!</p>
                        </div>
                        <div v-else-if="qtaCorrect > 8">
                          <p>Wow sei andato benissimo</p>
                        </div>
                        <div v-else>
                          <p>Quiz andato malissimo!!!</p>
                        </div>
                      </b-jumbotron>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import QuestionBox from "./components/QuestionBox.vue";
import Header from "./components/Header.vue";
export default {
  components: {
    QuestionBox,
    Header
  },
  data: function() {
    return {
      title: "QuizApp",
      questions: [],
      index: 0,
      currentQuestion: Object,
      total: 0,
      qtaCorrect: 0,
      loaded: false,
      valueLoading: 0,
      finished: false
    };
  },
  methods: {
    nextQuestion: function() {
      this.index++;
    },
    increment: function(isCorrect) {
      if (isCorrect) {
        this.qtaCorrect++;
      }
      this.total++;
    },
    isFinished: function() {
      this.isFinished = true;
    }
  },
  mounted: function() {
    fetch("https://opentdb.com/api.php?amount=10&category=18", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.questions = data.results;
        this.currentQuestion = this.questions[this.index];
        this.loaded = true;
      });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
