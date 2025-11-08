import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:taskday5/provider/mood_provider.dart';
import 'package:taskday5/statefull/mood_details.dart';
import 'package:taskday5/provider/profile_screen.dart';

class ProviderTask extends StatelessWidget {
  ProviderTask({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => MoodProvider(),
      child: Consumer<MoodProvider>(
        builder: (context, moodProvider, _) => Scaffold(

          appBar: AppBar(
            title: Text('mood Screen'),
            centerTitle: true,
          ),

          backgroundColor: moodProvider.backGroundColor,

          body: SafeArea(
            child: Center(
              child: Padding(
                padding: EdgeInsets.all(20.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "What is your mood?",
                      style: TextStyle(
                        color: Colors.black,
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 20),

                    Switch(value: !moodProvider.isHappy, onChanged: moodProvider.onToggle),
                    SizedBox(height: 20),

                    SizedBox(
                      width: double.maxFinite,
                      height: 50,
                      child: ElevatedButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => MoodDetails(
                                backgroundColor: moodProvider.backGroundColor,
                                mood: moodProvider.mood,
                              ),
                            ),
                          );
                        },
                        child: Text("Show Your Mood"),
                      ),
                    ),

                    SizedBox(height: 20),

                    SizedBox(
                      width: double.maxFinite,
                      height: 50,
                      child: ElevatedButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => ProfileScreen(),
                            ),
                          );
                        },
                        child: Text("Go to Profile Screen"),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
