import 'package:flutter/material.dart';

class MoodState {
  Color backgroundColor;
  String mood;
  bool isHappy;

  MoodState(this.backgroundColor, this.mood, this.isHappy);
}

class MoodInitial extends MoodState {
  MoodInitial() : super(Colors.grey, 'Initial', false);
}
class MoodHappy extends MoodState {
  MoodHappy() : super(Colors.yellow, "Happy", true);
}
class MoodSad extends MoodState {
  MoodSad() : super(Colors.blue, "Sad", false);
}
