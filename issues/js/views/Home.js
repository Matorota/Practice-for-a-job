import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>YOUR OWN TO DO LIST!!!</h1>
            <p>MANAGE YOUR TIME MORE EFFICIENTLY.</p>
        `;
    }
}