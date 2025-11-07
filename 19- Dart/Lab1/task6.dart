import 'dart:io';

void main() {
  stdout.write("Enter your weight (kg): ");
  double weight = double.parse(stdin.readLineSync()!);

  stdout.write("Enter your height (m): ");
  double height = double.parse(stdin.readLineSync()!);

  double bmi = weight / (height * height);

  print("Your BMI is ${bmi.toStringAsFixed(2)}");

  if (bmi < 18.5) {
    print("You are underweight.");
  } else if (bmi < 25) {
    print("You have a normal weight.");
  } else if (bmi < 30) {
    print("You are overweight.");
  } else {
    print("You are obese.");
  }
}
