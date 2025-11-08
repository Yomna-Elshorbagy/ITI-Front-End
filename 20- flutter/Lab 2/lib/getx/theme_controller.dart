import 'package:flutter/material.dart';
import 'package:get/get.dart';

class ThemeController extends GetxController {
  RxBool isDark = false.obs;

  ThemeData get themeData => isDark.value ? darkTheme : lightTheme;

    ThemeData lightTheme = ThemeData(
    brightness: Brightness.light,
    primarySwatch: Colors.amber,
    scaffoldBackgroundColor: Colors.white,
  );

    ThemeData darkTheme = ThemeData(
    brightness: Brightness.dark,
    primarySwatch: Colors.blueGrey,
    scaffoldBackgroundColor: Colors.black87,
  );

    toggleTheme(bool value) {
    isDark.value = value;
    Get.changeTheme(isDark.value ? darkTheme : lightTheme);
  }
}
