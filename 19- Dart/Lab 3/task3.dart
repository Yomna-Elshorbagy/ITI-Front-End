class Book {
  String title;
  String author;
  bool isAvailable;

  Book(this.title, this.author, {this.isAvailable = true});

  void borrow() {
    if (isAvailable) {
      isAvailable = false;
      print('$title has been borrowed.');
    } else {
      print('$title is already borrowed!');
    }
  }

  void returnBook() {
    if (!isAvailable) {
      isAvailable = true;
      print('$title has been returned.');
    } else {
      print('$title was not borrowed.');
    }
  }

  void printStatus() {
    String status;

    if (isAvailable) {
      status = 'Available';
    } else {
      status = 'Borrowed';
    }
    print('$title by $author : $status');
  }
}

void main() {
  List<Book> library = [
    Book('Book1', 'yomna'),
    Book('Book 2', 'Aya'),
    Book('Book 3', 'yousra'),
  ];

  library[0].borrow();
  library[1].borrow();
  library[1].returnBook();

  for (var book in library) {
    book.printStatus();
  }

  int borrowedCount = library.where((book) => !book.isAvailable).length;
  print('Total borrowed books: $borrowedCount');
}
