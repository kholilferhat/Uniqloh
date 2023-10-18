<template>
  <section class="container">
    <div class="slider-wrapper">
      <div class="slider">
        <video
          id="slide1"
          src="https://image.uniqlo.com/UQ/ST3/id/imagesother/202309_Video_Plan/23fw_flannel_PC.mp4"
          autoplay
          loop
          muted
          class="videoContainer"
        ></video>
        <img
          id="slide2"
          src="https://im.uniqlo.com/global-cms/spa/res5d8df3d694d67ee2411c11f0eaafc615fr.jpg"
          alt=""
        />
        <img
          id="slide3"
          src="https://im.uniqlo.com/global-cms/spa/resd92ed5ea119aa5b654ce582065f83583fr.jpg"
          alt=""
        />
      </div>
      <div class="slider-nav">
        <a href="#slide1"></a>
        <a href="#slide2"></a>
        <a href="#slide3"></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
}
.slider-wrapper {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  /* animation: slide 5s infinite; */
}

.slider {
  display: flex;
  aspect-ratio: 16/9;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

/* @keyframes slide {
  0% {
    transform: translateX(0);
  }
  25%{
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(-100%);
  }

  75%{
    transform: translateX(-200%);
  }
  100%{
    transform: translateX(-300%);
  }
} */

.slider img {
  flex: 1 0 100%;
  scroll-snap-align: start;
  object-fit: cover;
}

.slider video {
  flex: 1 0 100%;
  scroll-snap-align: start;
  object-fit: cover;
}

.slider-nav {
  display: flex;
  column-gap: 1rem;
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.slider-nav a {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.75;
  transition: ease 250ms 1rem;
}

.slider-nav:hover {
  opacity: 1;
}

/* .slider-nav:active{
  width: 1rem;
  height: 1rem;
} */
</style>
