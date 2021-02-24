<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Just a tribute to simple apps everywhere
    </p>
    <div class="button-container">
      <!--one web component on a page-->
      <div class="item">
        <h2>A Button component in a div</h2>
        <simple-button content="This is a button component in a div"></simple-button>
      </div>
      <!--one web component in another web component-->
      <simple-card>
        <h2>A Button component in a Card component</h2>
        <simple-button content="This is a button component in a card component"></simple-button>
      </simple-card>
      <!--just an native html element on a page-->
      <div class="item">
        <h2>A native HTML button in a DIV</h2>
        <button>Not a web component</button>
      </div>
    </div>
  </div>
</template>

<script>
import '../webComponents/simple-button';
import '../webComponents/simple-card';

export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
button {
  padding: 15px;
  margin: 15px;
}

.item {
  width: 250px;
  height: 250px;
  margin: 15px;
  padding: 15px;
}

.button-container {
  margin: 25px;
  display: flex;
  justify-content: center;
}
</style>
