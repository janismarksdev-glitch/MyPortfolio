export class Todo extends Backbone.Model {
    defaults() {
        return {
            title: "My Portfolio",
            done: false,
        };
    }
}
