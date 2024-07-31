<script>
    import "../app.css";
    import FeedbackForm from "../lib/components/FeedbackForm.svelte";
    import FeedbackList from "../lib/components/FeedbackList.svelte";
    import FeedbackStats from "../lib/components/FeedbackStats.svelte";

</script>

<main class="container">
    <FeedbackForm />
    <FeedbackStats />
    <!-- {count} {average} we use it now in FeedbackList with store -->
    <FeedbackList /> 
    <!-- removed {feedback} cause we access it from store -->
    <!-- pass props same than <FeedbackList feedback={feedback} because same name/> -->
</main>

<style>
</style>
