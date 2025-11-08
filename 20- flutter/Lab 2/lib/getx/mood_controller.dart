import 'package:flutter/material.dart';
import 'package:get/get.dart';

class MoodController extends GetxController {
  Rx<Color> backGroundColor = Colors.white70.obs;
  RxBool isHappy = true.obs;
  RxString mood = "Sad".obs;
  onToggle(bool value) {
    if (value) {
      mood.value = "Happy";
      backGroundColor.value = Colors.teal;
      isHappy.value = false;
    } else {
      mood.value = "Sad";
      backGroundColor.value = Colors.amber;
      isHappy.value = true;
    }
  }
}
