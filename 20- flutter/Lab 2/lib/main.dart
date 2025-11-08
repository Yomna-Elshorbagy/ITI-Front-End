// import 'package:flutter/material.dart';
// import 'package:provider/provider.dart';
// import 'package:taskday5/provider/mood_provider.dart';
// import 'package:taskday5/provider/mood_screen.dart';
// import 'package:taskday5/statefull/mood_screen.dart';
//
// void main() {
//   runApp(
//     ChangeNotifierProvider(
//       create: (context) => MoodProvider(),
//       child: const MyApp(),
//     ),
//   );
// }
//
// class MyApp extends StatelessWidget {
//   const MyApp({super.key});
//
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Flutter Lab',
//       debugShowCheckedModeBanner: false,
//
//       home: const ProviderTask (),
//
//     );
//   }
// }
//


import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:taskday5/cubit/mood_cubit.dart';
import 'package:taskday5/cubit/mood_cubit_screen.dart';
import 'package:taskday5/cubit/theme.cubit.dart';
import 'package:taskday5/cubit/theme_state.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(create: (context) => MoodCubit()),
        BlocProvider(create: (context) => ThemeCubit()),
      ],
      child: BlocBuilder<ThemeCubit, ThemeState>(
        builder: (context, themeState) {
          return MaterialApp(
            title: 'Flutter Lab',
            debugShowCheckedModeBanner: false,
            theme: themeState.themeData,
            home: const MoodTask(),
          );
        },
      ),
    );
  }
}

//
// import 'package:flutter/material.dart';
// import 'package:get/get.dart';
// import 'package:taskday5/getx/getx_screen.dart';
// import 'package:taskday5/getx/mood_controller.dart';
// import 'package:taskday5/getx/theme_controller.dart';
//
// void main() {
//   runApp(const MyApp());
// }
//
// class MyApp extends StatelessWidget {
//   const MyApp({super.key});
//
//   @override
//   Widget build(BuildContext context) {
//     final themeController = Get.put(ThemeController(), permanent: true);
//     Get.put(MoodController(), permanent: true);
//
//     return Obx(() => GetMaterialApp(
//       title: 'Flutter Lab',
//       debugShowCheckedModeBanner: false,
//       theme: themeController.themeData,
//       home: GetxTask(),
//     ));
//   }
// }
