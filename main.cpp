#include <iostream>
#include <time.h>
#include <vector>

using namespace std;

// Helping structure
struct Point {
	int x;
	int y;	
};


// A sudoku
int sud[9][9];

// That function returns us vector with all Points from sudoku Table
vector<Point> createHugeVector();

// That one prints the sudoku table on the screen
void printSudoku();

// Function that erasing from vector specific value (not from specyific place)
void removeFromVec(vector<Point> &v, int what);

void removeField(vector<Point> &v, int x, int y);
void removeSquare(vector<Point>, int x, int y);
void removeRow(vector<Point> &v, int y);
void removeColumn(vector<Point> &v, int x);

bool generateSudoku() {
	/* 
	 * Vectors with all fields, where is possible to put there some value
	 * for example: number 3 you can put in each field, that is in  
	 * the v[2] vector (counting from 0)
	*/	
	vector<Point> v[9];
	
	// On begin all vectors are full (each contains all 81 fields that is in sudoku) 
	for(int i=0; i<9; i++) {
		v[i] = createHugeVector();
	}
	
	return true;
}


/////////////////////////////////////////////////////////////////////////

int main() {

	srand(time(NULL));

	/*
	int counter = 0;
	
	while(!generateSudoku()) {
		counter++;
	}
	
	cout << "After " << counter << " times:" << endl;
	*/
	
	//generateSudoku();
	//printSudoku();
	
	return 0;
}

/////////////////////////////////////////////////////////////////////////

vector<Point> createHugeVector() {
	vector<Point> v;
	
	for(int xx=0; xx<9; xx++) {
		for(int yy=0; yy<9; yy++) {
			Point p;
			p.x = xx;
			p.y = yy;
			
			v.push_back(p);
		}
	}
	
	return v;
}

void printSudoku() {
	cout << endl << "  ~~~~~~~~~ SUDOKU ~~~~~~~~~" << endl << endl;
	for(int yy=0; yy<9; yy++) { 
		cout << "      ";
		for(int xx=0; xx<9; xx++) {
			if(sud[xx][yy] != 0) {
				cout << sud[xx][yy];
			}else {
				cout << " ";
			}
			cout << " ";			
		}
		cout << endl;
	}
	cout << endl << "  ~~~~~~~~~~~~~~~~~~~~~~~~~~" << endl << endl;
}

void removeFromVec(vector<int> &v, int what) {
	for(int i=v.size()-1; i>=0; i--) {
		if(v[i] == what) {
			v.erase(v.begin() + i);
			return;
		}
	}
}






