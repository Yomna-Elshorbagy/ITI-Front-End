import 'package:flutter/material.dart';
import 'package:proj1/ui/mood/mood_detail_page.dart';

class MoodApp extends StatelessWidget {
  List<String> moods = ['Happy', 'Sad', 'Excited', 'Calm'];

  MoodApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Guess Mood',
          style: TextStyle(color: Colors.black),
        ),
        backgroundColor: Colors.teal,
        centerTitle: true,
      ),
      body: ListView.builder(
        itemCount: moods.length,
        itemBuilder: (context, index) {
          return Card(
            margin:  EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            elevation: 3,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
              child: ListTile(
                leading:  Icon(Icons.mood, color: Colors.teal),
                title: Text(
                  moods[index],
                  style:  TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
                ),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => MoodDetailPage(mood: moods[index]),
                    ),
                  );
                },
              ),
          );

        },
      ),
    );
  }
}
