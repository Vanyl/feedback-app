<script>
    import { FeedbackStore } from '../../stores';
    import {v4 as uuidv4} from 'uuid'
    import Button from "./Button.svelte";
    import Card from "./Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";

    let text = "";
    let rating = 10;
    let btnDisabled = true;
    let min = 10;
    let message;

    const handleSelect = e => rating = e.detail

    const handleInput = () => {
        if (text.trim().length <= min) {
            message = `Text must be at leat ${min} characters`;
            btnDisabled = true;
        } else {
            message = null;
            btnDisabled = false;
        }
    };

    const handleSubmit = () => {
        if(text.trim().length > min) {
            //create new object
            const newFeedback = {
                id: uuidv4(), //custom id
                text,
                rating: +rating
            }
            // console.log(newFeedback)

            FeedbackStore.update((currentData) => {
                return [newFeedback, ...currentData]
            })

            text = ''
        }
    }
</script>

<Card>
    <header>
        <h2>How would you rate our service with us ?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
       <RatingSelect on:rating-select={handleSelect} />
        <div class="input-group">
            <input
                type="text"
                on:input={handleInput}
                bind:value={text}
                placeholder="tell us something that keeps you coming back"
            />
            <Button type="submit" disabled={btnDisabled}>Send</Button>
        </div>
        {#if message}
            <div class="message">
                {message}
            </div>
        {/if}
    </form>
</Card>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }

    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }

    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }

    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }

    input:focus {
        outline: none;
    }

    .message {
        padding-top: 10px;
        text-align: center;
        color: rebeccapurple;
    }
</style>
