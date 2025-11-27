class Student {
  String name;
  List<int> grades;

  Student(this.name, this.grades);

  double average() {
    if (grades.isEmpty) return 0;
    int sum = grades.reduce((a, b) => a + b);
    return sum / grades.length;
  }

  void printReport() {
    double avg = average();
    String status = avg >= 60 ? 'Pass' : 'Fail';
    print('$name: average ${avg.toStringAsFixed(2)} - $status');
  }
}

void main() {
  List<Student> students = [
    Student('yomna', [90, 80, 70]),
    Student('aya', [50, 60, 55]),
    Student('mona', [85, 95, 90]),
  ];

  students.forEach((s) => s.printReport());

  students.sort((a, b) => b.average().compareTo(a.average()));
  var top = students.first;
  print('Top student: ${top.name} (${top.average()})');
}
