class Engine {
  void start() => print('Engine started');
  void stop() => print('Engine Stopped');
}

class Car {
  //composite class
  Engine engine = Engine();
  int speed = 0;
  void drive() {
    engine.start();
    speed += 10;
    print('car is moving with speed $speed ...');
    engine.stop();
  }
}

void main() {
  Car car = Car();
  car.drive();
  car.drive();
}
