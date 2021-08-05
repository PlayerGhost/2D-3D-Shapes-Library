let l, r, t, c, pa, pl, py, s

function setup() {
    createCanvas(640, 480, WEBGL)
    createEasyCam()

    l = new Line(-350, 0, -250, 0)
    r = new Rectangle(-200, 0, 50, 50)
    t = new Triangle(0, 0, 0, 80, 80, 80)
    c = new Circle(-200, 200, 4000, 5000)

    pl = new Plane(100, 0, 0, 50, 50, 50)
    pa = new Parallelogram(300, -100, 0, 50, 150, 250)
    py = new Pyramid(100, 200, 0, 50, 50, 50, 50)
    s = new Sphere(300, 200, 0, 50, 50, 50)
}

function draw() {
    background(52)
    fill(255, 0, 0)

    //l.translate(3, 0)
    l.rotation(2)
    l.setColor("#ff0000")
    l.draw()

    //r.translate(3, 0)
    r.rotation(2)
    r.setColor("#ff0000")
    r.draw()

    //t.translate(3, 0)
    t.rotation(2)
    t.setColor("#ff0000")
    t.draw()

    //c.translate(-1, -1)
    c.rotation(2)
    c.setColor("#ff0000")
    c.draw()

    //pl.translate(3, 0, 0)
    pl.rotationX(2)
    pl.rotationY(2)
    pl.rotationZ(2)
    pl.setColor("#ff0000")
    pl.draw()

    //pa.translate(1, 0, 0)
    pa.rotationX(2)
    pa.rotationY(2)
    pa.rotationZ(2)
    pa.setColor("#ff0000")
    pa.draw()

    //s.translate(1, 0, 0)
    s.rotationX(2)
    s.rotationY(2)
    s.rotationZ(2)
    s.setColor("#ff0000")
    s.draw()

    //py.translate(3, 0, 0)
    py.rotationX(2)
    py.rotationY(2)
    py.rotationZ(2)
    py.setColor("#ff0000")
    py.draw()
}