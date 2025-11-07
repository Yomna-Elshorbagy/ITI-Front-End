import 'dart:io';

void main() {
  stdout.write("Enter Principal (P): ");
  double P = double.parse(stdin.readLineSync()!);

  stdout.write("Enter Rate (R): ");
  double R = double.parse(stdin.readLineSync()!);

  stdout.write("Enter Time (T): ");
  double T = double.parse(stdin.readLineSync()!);

  double SI = (P * R * T) / 100;

  print("Simple Interest = $SI");
}
