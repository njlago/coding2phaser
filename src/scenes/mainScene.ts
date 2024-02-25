import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "MainScene" });
    }

    create() {
        this.add.image(400, 300, "sky");
    }

    update() {}
}
