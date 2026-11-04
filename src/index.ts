import Backbone from "backbone";

export class Todo extends Backbone.Model {
    defaults() {
        return {
            title: "",
            done: false,
        };
    }
}
