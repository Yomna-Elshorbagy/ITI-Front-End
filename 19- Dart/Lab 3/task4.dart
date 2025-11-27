class Employee {
  String name;
  double baseSallary;
  Employee(this.name, this.baseSallary);
  double calcSallary() => baseSallary;
}

class FullTimeEmployee extends Employee {
  double bonus;

  FullTimeEmployee(String name, double baseSallary, this.bonus)
    : super(name, baseSallary);

  @override
  double calcSallary() {
    return baseSallary + bonus;
  }
}

class PartTimeEmployee extends Employee {
  int hoursWorked;
  double hourlyRate;

  PartTimeEmployee(String name, this.hoursWorked, this.hourlyRate)
    : super(name, 0);

  @override
  double calcSallary() {
    return hoursWorked * hourlyRate;
  }
}

class Intern extends Employee {
  Intern(String name, double baseSallary) : super(name, baseSallary);

  @override
  double calcSallary() {
    return baseSallary * 0.5;
  }
}

void main() {
  List<Employee> employees = [
    FullTimeEmployee("yomna", 3000, 500),
    PartTimeEmployee("aya", 800, 20),
    Intern("menna", 2000),
  ];

  double totalSalary = 0;

  for (Employee emp in employees) {
    double salary = emp.calcSallary();
    print("${emp.name} sallary ${salary.toStringAsFixed(2)}");
    totalSalary += salary;
  }
}
