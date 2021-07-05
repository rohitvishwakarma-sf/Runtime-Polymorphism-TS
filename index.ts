class Shape {
    Draw(): void {
        console.log("drawing empty");

    }
}

class Rectangle extends Shape {
    Draw(): void {
        console.log("Drawing rectangle");

    }
}
class Circle extends Shape {
    Draw(): void {
        console.log("Drawing circle");

    }
}

let shape: Shape = new Rectangle();

shape.Draw();
shape = new Circle();
shape.Draw();