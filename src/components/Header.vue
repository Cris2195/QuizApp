<template>
  <b-nav tabs>
    <b-nav-item active class="display-3">QuizApp</b-nav-item>
    <b-nav-item class="display-3" v-if="total!==10">
      Score : {{ correct }} / {{ total }}</b-nav-item
    >
  </b-nav>
</template>

<script>
export default {
  props: {
    correct: Number,
    total: Number
  },
  data: function() {
    return {};
  }
};
</script>
