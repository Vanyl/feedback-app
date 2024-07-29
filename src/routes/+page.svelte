<script>
    import "../app.css";
    import FeedbackForm from "../lib/components/FeedbackForm.svelte";
    import FeedbackList from "../lib/components/FeedbackList.svelte";
    import FeedbackStats from "../lib/components/FeedbackStats.svelte";

    let feedback = [
        {
            id: 1,
            rating: 7,
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo perspiciatis expedita laudantium? Natus nihil at fuga rem maiores iure architecto deserunt saepe soluta amet, minus obcaecati animi nisi voluptates dolorum.",
        },
        {
            id: 2,
            rating: 8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex enim voluptatibus? Deleniti nihil est, nisi accusamus, nostrum dignissimos quo perferendis tempora assumenda recusandae iusto? Quam doloremque nihil libero voluptatem!",
        },
        {
            id: 3,
            rating: 8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam veritatis necessitatibus iusto? Alias nulla id modi sapiente. Minus provident autem suscipit ut esse, veniam est voluptas? Natus, repellat assumenda!",
        },
    ];

    const addFeedback = (e) => {
        const newFeedback = e.detail;
        feedback = [newFeedback, ...feedback]; //push to the array
    }

    $: count = feedback.length;
    $: average = feedback.reduce((previousValue, {rating}) =>  previousValue + rating, 0) / feedback.length;

    const deleteFeedback = (e) => {
        const itemId = e.detail;
        feedback = feedback.filter((item) => item.id != itemId);
    };
</script>

<main class="container">
    <FeedbackForm on:add-feedback={addFeedback}/>
    <FeedbackStats {count} {average}/>
    <FeedbackList {feedback} on:delete-feeback={deleteFeedback} />
    <!-- pass props same than <FeedbackList feedback={feedback} because same name/> -->
</main>

<style>
</style>
