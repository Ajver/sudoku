#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

// Helping structure
struct Point {
	int x;
	int y;
};

class SudokuGenerator {
public:

	SudokuGenerator();

	// That method is genereting sudoku in the sud array
	bool generateSudoku(int sud[9][9]);

private:

	// That function returns us vector with all Points from sudoku Table
	vector<Point> createHugeVector();

	// Remove field in specific position
	void removeField(vector<Point> &v, int x, int y);

	// x, y are position of field (not square), that is in square for remove
	void removeSquare(vector<Point> &v, int x, int y);

	// Remove all fields with specific y
	void removeRow(vector<Point> &v, int y);

	// Remove all fields with specific x
	void removeColumn(vector<Point> &v, int x);

	// Returns random point from vector and NOT removing that!
	Point getRandomPoint(vector<Point> &v);
};


class Sudoku {
public:

	Sudoku();

	// Function that tests sudoku and returns if is it correct
	bool isCorrect();

	// That one prints the sudoku table on the screen
	void print();

	// Generate the sudoku
	bool generateSudoku();

private:

	// A sudoku table
	int sud[9][9];

};


