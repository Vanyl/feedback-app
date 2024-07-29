<script>
    export let count;
    export let average;
</script>

<div class="feedback-stats">
    <h4>{count} reviews</h4>
    <h4>ratings average: {average}</h4>
</div>

<style>
    .feedback-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  </style>