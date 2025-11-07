import 'dart:io';

void main() {
  int a = 10;
  int b = 3;

  print("Sum: ${a + b}");
  print("Difference: ${a - b}");
  print("Product: ${a * b}");
  print("Division: ${a / b}");
  print("Remainder: ${a % b}");
}


////////////////////////////////

// when user enter the numbers
void main() {
  stdout.write("enter first number: ");
  int a = int.parse(stdin.readLineSync()!);

  stdout.write("enter second number: ");
  int b = int.parse(stdin.readLineSync()!);

  print("Sum: ${a + b}");
  print("Difference: ${a - b}");
  print("Product: ${a * b}");
  print("Division: ${a / b}");
  print("Remainder: ${a % b}");
}
