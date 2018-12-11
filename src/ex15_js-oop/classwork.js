class Shape {
    calcArea() {}
};

class Triangle extends Shape {
    calcArea(h, w) {
        return (h * w) / 2;
    }
};

class Square extends Shape {
    calcArea(w) {
        return w * w;
    }
};