import 'package:flutter/material.dart';

class MoodDetailPage extends StatelessWidget {
  final String mood;

   const MoodDetailPage({super.key, required this.mood});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('$mood Mood'),
          backgroundColor: Colors.teal,
          centerTitle: true,
        ),
        body: Center(
          child: Text(
            'You selected: $mood',
            style: TextStyle(
              fontSize: 26,
              fontWeight: FontWeight.bold,
              color: Colors.black87,
            ),
          ),
        ),
    );
  }
}
