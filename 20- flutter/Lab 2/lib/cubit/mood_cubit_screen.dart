import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:taskday5/cubit/mood_cubit.dart';
import 'package:taskday5/cubit/mood_state.dart';
import 'package:taskday5/cubit/theme.cubit.dart';
import 'package:taskday5/statefull/mood_details.dart';

class MoodTask extends StatelessWidget {
  const MoodTask({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<MoodCubit, MoodState>(
      builder: (context, state) {
        final moodCubit = context.read<MoodCubit>();
        final themeCubit = context.read<ThemeCubit>();
        final isDark = context.watch<ThemeCubit>().state.isDark;

        return SafeArea(
          child: Scaffold(
            backgroundColor: context.watch<ThemeCubit>().state.backgroundColor,
            body: Center(
              child: Padding(
                padding: EdgeInsets.all(20.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "What is your mood?",
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 20),
                    Switch(
                      value: state.isHappy,
                      onChanged: moodCubit.onToggle,
                    ),
                    SizedBox(height: 20),

                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.wb_sunny_outlined),
                        Switch(
                          value: isDark,
                          onChanged: themeCubit.toggleTheme,
                        ),
                        Icon(Icons.dark_mode_outlined),
                      ],
                    ),

                    SizedBox(height: 20),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => MoodDetails(
                              backgroundColor: state.backgroundColor,
                              mood: state.mood,
                            ),
                          ),
                        );
                      },
                      child: Text("Show Your Mood"),
                    ),
                  ],
                ),
              ),
            ),
          )

        );
      },
    );
  }
}

