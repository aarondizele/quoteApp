<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card quote m-3 p-2">
        <div class="card-block">
          <slot></slot>
        </div>
      </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .quote{
    transition: .2s;
  }
  .quote:hover{
    background-color: #333;
    cursor: pointer;
    color: white;
  }
</style>
