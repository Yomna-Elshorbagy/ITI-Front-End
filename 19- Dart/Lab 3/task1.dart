void main() {
  List<String> groceries = ["milk", "rice"];

  groceries.add('tomato');
  groceries.add('banana');
  groceries.add('apple');

  groceries.remove('apple');

  print('items of groceries are: ');
  for (String item in groceries) {
    print(' item is : $item');
  }
}
