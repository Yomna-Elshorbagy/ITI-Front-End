import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:taskday5/getx/mood_controller.dart';
import 'package:taskday5/getx/theme_controller.dart';
import 'package:taskday5/statefull/mood_details.dart';

class GetxTask extends StatelessWidget {
   GetxTask({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Center(
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
                      fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 20),

                GetX<MoodController>(
                  builder: (moodController) => Column(
                    children: [
                      Switch(
                        value: !moodController.isHappy.value,
                        onChanged: moodController.onToggle,
                      ),
                      SizedBox(height: 20),

                      GetX<ThemeController>(
                        builder: (themeController) => Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(Icons.light_mode_outlined),
                            Switch(
                              value: themeController.isDark.value,
                              onChanged: themeController.toggleTheme,
                            ),
                            Icon(Icons.dark_mode_outlined),
                          ],
                        ),
                      ),
                      SizedBox(height: 20),

                      SizedBox(
                        width: double.maxFinite,
                        height: 50,
                        child: ElevatedButton(
                          onPressed: () {
                            Get.to(MoodDetails(
                              backgroundColor:
                              moodController.backGroundColor.value,
                              mood: moodController.mood.value,
                            ));
                          },
                          child: Text("Show Your Mood"),
                        ),
                      ),
                    ],
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
