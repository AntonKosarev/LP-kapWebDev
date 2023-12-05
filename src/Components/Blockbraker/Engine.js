class Engine {

    options = {
        canvas: null,
        context: null,
        // brick
        brickWidth: 100,
        brickHeight: 50,
        brickMargin: 50,
        brickColor: "#0095DD",
        ballColor: "#0095DD",
        paddleColor: "#0095DD",
        // wall
        wallPosition: {x: 0, y: 0},
        rows: 4,
        columns: 8,
        wall: [],
    };

    constructor(options) {
        this.options = {...this.options, ...options};
    }

    eventsHandler() {
        console.log("event: ", this);
    }


    // let canvas = null;
    // let context = null;
    init() {
        console.log("this.options: ", this.options);

        // this.wall.collection = this.wall.build();
        // console.log("this.options: ", this.wall.collection);

        this.getPaddle();
        this.getBall();
        this.buildWall();

        // window.addEventListener("mousedown", this.eventsHandler, false);
        // window.addEventListener("mousemove", this.eventsHandler, false);
        // window.addEventListener("keydown", this.eventsHandler, false);
        // window.addEventListener("keyup", this.eventsHandler, false);
    }

    getWindow() {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    }

    getPaddle(position = {x: 0, y: 0}) {
        let paddle = {
            color: this.options.paddleColor,
            height: 10,
            width: 150,
            position: position,
            speed: 0,
            control: {
                rightPressed: false,
                leftPressed: false,
                deltaPosition: 7,
            },
        }
        console.log("paddle: ", paddle);
        return paddle;
    }

    getBall(position = {x: 0, y: 0}) {
        let ball = {
            color: this.options.ballColor,
            color_rect: "#393b42",
            radius: 12,
            isPastAPaddle: false,
            spin: 0,
            corner: 0,
        }
        console.log("ball: ", ball);
        return ball;
    }

    getBrick(position = {x: 0, y: 0}) {
        let brick = {
            broken: false,
            color: this.options.brickColor,
            width: this.options.brickWidth,
            height: this.options.brickHeight,
            position: {
                a: {x: 0, y: 0},
                b: {x: 0, y: 0},
                c: {x: 0, y: 0},
                d: {x: 0, y: 0},
            }
        };
        brick.position.a.x = position.x;
        brick.position.a.y = position.y;
        brick.position.b.x = position.x + brick.width;
        brick.position.b.y = position.y;
        brick.position.c.x = position.x + brick.width;
        brick.position.c.y = position.y - brick.height;
        brick.position.d.x = position.x;
        brick.position.d.y = position.y - brick.height;

        console.log("brick: ", brick);
        return brick;
    }

    buildWall() {
        let collection = [];
        let brick;
        let wallPosition = this.options.wallPosition;
        let brickPosition = {x: 0, y: 0};
        for (let column = 0; column < this.options.columns; column++) {
            brickPosition.x = wallPosition.x * (column + 1)
            for (let row = 0; row < this.options.rows; row++) {
                brickPosition.y = wallPosition.y * (row + 1)
                brick = this.getBrick(brickPosition);
                collection.push(brick);
            }
        }
        console.log("collection: ", collection);
        return collection;
    }

};

export default Engine;