class Duck {
    constructor() {
        this.flying = false;
        this.quaking = false;
        this.xPos = 0;
        this.yPos = 0;
    }

    takeOff() {
        this.flying = true;
    }

    land() {
        this.flying = false;
    }

    startQuaking() {
        this.quaking = true;
    }

    stopQuaking() {
        this.quaking = false;
    }

    moveTo(x, y) {
        this.xPos = x;
        this.yPos = y;
        console.log(`Duck is ${this.flying ? 'flying' : 'swimming'} to ${x},${y} ${this.quaking ? 'while quaking' : ''}`);
    }
}

module.exports = Duck;