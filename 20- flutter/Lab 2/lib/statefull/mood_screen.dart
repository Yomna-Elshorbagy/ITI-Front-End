import 'package:flutter/material.dart';
import 'package:taskday5/statefull/mood_details.dart';

class MoodTask extends StatefulWidget {
  const MoodTask({super.key});

  @override
  State<MoodTask> createState() => MoodTaskState();
}

class MoodTaskState extends State<MoodTask> {
  bool isHappy = true;
  String mood = "Happy";
  Color backgroundColor = Colors.white70;

  onToggle(bool value) {
    setState(() {
      isHappy = !isHappy;
      mood = isHappy ? "Happy" : "Sad";
      backgroundColor = isHappy ? Colors.grey : Colors.blueGrey;
    });
  }

  @override
  Widget build(BuildContext context) {
    IconData moodIcon = isHappy ? Icons.sentiment_very_satisfied : Icons.sentiment_dissatisfied;

    return SafeArea(
      child: Scaffold(
        backgroundColor: backgroundColor,
        body: Center(
          child: Padding(
            padding: EdgeInsets.all(25.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [

                Text(
                  "What's your mood today?",
                  style: TextStyle(
                    color: Colors.black87,
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 30),

                Icon(
                  moodIcon,
                  color: isHappy ? Colors.deepOrange : Colors.indigo,
                  size: 100,
                ),
                SizedBox(height: 20),

                Text(
                  "You are feeling $mood",
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w600,
                    color: Colors.black87,
                  ),
                ),
                SizedBox(height: 30),

                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Sad",
                      style: TextStyle(fontSize: 18, color: Colors.black54),
                    ),
                    Switch(
                      value: isHappy,
                      onChanged: onToggle,
                      activeColor: Colors.orangeAccent,
                      inactiveThumbColor: Colors.indigo,
                      inactiveTrackColor: Colors.indigo.shade200,
                    ),
                    Text(
                      "Happy",
                      style: TextStyle(fontSize: 18, color: Colors.black54),
                    ),
                  ],
                ),
                SizedBox(height: 40),

                SizedBox(
                  width: double.infinity,
                  height: 55,
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.teal,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(14),
                      ),
                      elevation: 5,
                    ),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => MoodDetails(
                            backgroundColor: backgroundColor,
                            mood: mood,
                          ),
                        ),
                      );
                    },
                    icon: Icon(Icons.arrow_forward_ios, color: Colors.white),
                    label: Text(
                      "Show Your Mood",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
