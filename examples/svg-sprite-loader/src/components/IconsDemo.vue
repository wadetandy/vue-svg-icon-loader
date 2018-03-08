<template>
  <div>
    <h2>Basic Icon</h2>
    <div>
      <clipboard-icon width='1.5em' height='1.5em'/>
    </div>
    <h2>Color with CSS</h2>
    <div>
      <clipboard-icon class='blue' width='1.5em' height='1.5em'/>
    </div>
    <h2>Sizing with CSS</h2>
    <div>
      <clipboard-icon class='big'/>
      <clipboard-icon class='small'/>
    </div>
    <h2>Dynamic Size</h2>
    <div>
      <input type="range" min="1" max="5" class="slider" v-model="size">
      <div>
        <clipboard-icon :width='`calc(1em * ${size})`' :height='`calc(1em * ${size})`'/>
      </div>
    </div>
    <h2>Gradients</h2>
    <div>
      <clipboard-icon class='big' fill='url(#grad1)'>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
      </clipboard-icon>
    </div>
  </div>
</template>

<script>
import ClipboardIcon from './clipboard.svg'

export default {
  components: {
    ClipboardIcon
  },
  data() {
    return {
      size: 2
    }
  }
}
</script>

<style scoped>
.blue {
  color: blue;
}

.big {
  width: 64px;
  height: 64px;
}

.small {
  width: 16px;
  height: 16px;
}
</style>
