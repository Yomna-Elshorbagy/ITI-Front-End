void main() {
  Map<String, int> grades = {'yomna': 90, 'Aya': 75, 'Omar': 80, 'Ahmed': 85};

  grades.forEach((name, grade) {
    if (grade >= 60) {
      print('$name passed with $grade');
    } else {
      print('$name failed with $grade');
    }
    ;
  });
  String topStudent = '';
  int topGrade = 0;

  grades.forEach((name, grade) {
    if (grade > topGrade) {
      topGrade = grade;
      topStudent = name;
    }
  });

  print('Top Student: $topStudent ($topGrade)');
}
