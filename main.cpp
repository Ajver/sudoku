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

// Remove field in specific position
void removeField(vector<Point> &v, int x, int y);

// x, y are position of field (not square), that is in square for remove
void removeSquare(vector<Point>, int x, int y);

// Remove all fields with specific y
void removeRow(vector<Point> &v, int y);

// Remove all fields with specific x
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

void removeField(vector<Point> &v, int x, int y) {
	for(int i=0; i<v.size(); i++) {
		if(v[i].x == x) {
			if(v[i].y == y) {
				v.erase(v.begin() + i);
				return;
			}
		}
	}
}

void removeSquare(vector<Point> &v, int x, int y) {
	int xx = x/3 * 3;
	int xy = y/3 * 3;
	int toX = xx + 3;
	int toY = yy + 3;
	
	for( ; xx<toX; xx++) {
		for( ; yy<toY; yy++) {
			removeField(v, xx, yy);
		}
	}
}

void removeRow(vector<Point> &v, int y) {
	for(int i=v.size()-1; i>=0; i++) {
		if(v[i].y == y) {
			v.erase(v.begin() + i);
		}
	}
}

void removeColumn(vector<Point> &v, int x) {
	for(int i=v.size()-1; i>=0; i++) {
		if(v[i].x == x) {
			v.erase(v.begin() + i);
		}
	}
}












