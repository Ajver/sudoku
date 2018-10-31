#include <iostream>
#include <fstream>
#include <time.h>

#include "Sudoku.h"

using namespace std;

int main() {

	srand(time(NULL));

	Sudoku sudoku;

	int counter = 0;

	while(!sudoku.generateSudoku()) {
		counter++;
	}

	cout << endl;
	cout << "After " << counter << " times:" << endl;
	cout << "Is correct: " << (sudoku.isCorrect() ? "true" : "false") << endl;


	sudoku.print();

	cout << endl;

	return 0;
}

/////////////////////////////////////////////////////////////////////////








