import 'package:flutter/material.dart';

class MoodProvider extends ChangeNotifier {
  Color backGroundColor = Colors.blueGrey.shade100;
  bool isHappy = true;
  String mood = "Sad";

  void onToggle(bool value) {
    if (isHappy) {
      mood = "Happy";
      backGroundColor = Colors.indigo.shade100;
      isHappy = false;
    } else {
      mood = "Sad";
      backGroundColor = Colors.teal.shade100;
      isHappy = true;
    }
    notifyListeners();
  }
}
