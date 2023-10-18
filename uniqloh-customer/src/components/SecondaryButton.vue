<template>
  <button class="secondButton" type="submit" value="submit">
    {{ buttonTitle }}
  </button>
</template>

<script>
export default {
  props: ['buttonTitle']
}
</script>

<style scoped>
button:hover {
  background-color: #1b1b1b;
  color: white;
}

button {
  background-color: white;
  color: #1b1b1b;
  /* border: solid 2px #1b1b1b; */
  border: 2px solid #1b1b1b;

  border-radius: 0;
  font-family: 'd-din', sans-serif;
  font-weight: 600;
  font-size: 18px;
  padding: 8px;
  width: 300px;
  height: 45px;
  transition: all 0.3s ease;
}
</style>
