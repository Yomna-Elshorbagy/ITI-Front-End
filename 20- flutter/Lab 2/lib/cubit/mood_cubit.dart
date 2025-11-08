import 'package:bloc/bloc.dart';
import 'package:taskday5/cubit/mood_state.dart';

class MoodCubit extends Cubit<MoodState> {
  MoodCubit() : super(MoodInitial());
  onToggle(bool isHappy) {
    if (isHappy) {
      emit(MoodHappy());
    } else {
      emit(MoodSad());
    }
  }
}
