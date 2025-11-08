import 'package:flutter/material.dart';

class MoodDetails extends StatelessWidget {
  const MoodDetails(
      {super.key, required this.backgroundColor, required this.mood});
  final Color backgroundColor;
  final String mood;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Current Mood'),
        centerTitle: true,
      ),
      backgroundColor: backgroundColor,

      body: SafeArea(
        child: Center(
          child: Text(
            "your Mood Is $mood",
            style: TextStyle(
                color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}
