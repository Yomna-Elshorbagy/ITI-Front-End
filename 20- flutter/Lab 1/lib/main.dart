import 'package:flutter/material.dart';
import 'package:proj1/ui/login/login_screen.dart';
import 'package:proj1/ui/mood/mood_screen.dart';
import 'package:proj1/ui/home/profile_screen.dart';
import 'package:proj1/ui/home/welcome_screen.dart';
import 'package:proj1/ui/home/home_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Lab',
      debugShowCheckedModeBanner: false,

      // home: const WelcomeScreen (),
      initialRoute: '/login',

      routes: {
        '/welcome': (context) => const WelcomeScreen(),
        '/login': (context) => const LoginScreen(),
        '/home': (context) => const Home(),
        '/mood': (context) =>  MoodApp(),
        '/profile': (context) =>  Profile(),
      },
    );
  }
}

