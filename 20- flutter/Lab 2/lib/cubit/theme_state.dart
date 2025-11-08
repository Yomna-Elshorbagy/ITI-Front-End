import 'package:flutter/material.dart';

class ThemeState {
  ThemeData themeData;
  bool isDark;
  Color backgroundColor;

  ThemeState(this.themeData, this.isDark, this.backgroundColor);
}

 class LightThemeState extends ThemeState {
  LightThemeState()
      : super(
    ThemeData(
      brightness: Brightness.light,
      primarySwatch: Colors.amber,
    ),
    false,
    Colors.white,
  );
}

class DarkThemeState extends ThemeState {
  DarkThemeState()
      : super(
    ThemeData(
      brightness: Brightness.dark,
      primarySwatch: Colors.blueGrey,
    ),
    true,
    Colors.black87,
  );
}
