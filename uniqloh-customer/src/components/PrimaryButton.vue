<template>
  <button type="submit" value="submit">{{ buttonTitle }}</button>
</template>

<script>
export default {
  props: ['buttonTitle']
}
</script>

<style scoped>
button {
  border-radius: 0;
  background-color: #1b1b1b;
  border: none;
  color: white;
  font-family: 'd-din', sans-serif;
  font-weight: 600;
  font-size: 18px;
  padding: 8px;
  width: 300px;
  height: 45px;
  transition: all 0.3s ease;
}
button:hover {
  width: 300px;
  background-color: #ed1d24;
}
</style>
