import { writable } from "svelte/store";

export const FeedbackStore = writable(
    [
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
    ]
)