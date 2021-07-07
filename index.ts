interface Shape {
    Draw(): void;
}

class Rectangle implements Shape {
    Draw(): void {
        console.log("Drawing rectangle");

    }
}
class Circle implements Shape {
    Draw(): void {
        console.log("Drawing circle");

    }
}

let shape: Shape = new Rectangle();

shape.Draw();
shape = new Circle();

shape.Draw();