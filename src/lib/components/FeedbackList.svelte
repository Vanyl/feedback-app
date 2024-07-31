<script>
    // import {onMount, onDestroy} from 'svelte'
    import {FeedbackStore} from '../../stores.js'
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";

    // let feedback = [];
    // const unsuscribe = FeedbackStore.subscribe((data) => feedback = data) //suscribe to access to data

    // onMount(() => {
    //     console.log('mounted')
    // })

    // onDestroy(() => {
    //     unsuscribe()
    // })

</script>

{#each $FeedbackStore as fb (fb.id)}
     <div in:scale out:fade='{{duration: 500}}'> <!--  transition:fade -->
        <FeedbackItem item={fb} />
    </div>
{/each}
