#include <iostream>
#include <time.h>
#include <vector>

using namespace std;

// Helping structure
struct square {
	int x;
	int y;
};

// A sudoku 
int sud[9][9];

// That function returns us vector with numbers from 1 to 9 
vector<int> getFullVector();

// That one prints the sudoku table on the screen
void printSudoku();

// Function that erasing from vector specific value (not from specyific place)
void removeFromVec(vector<int> &v, int what);

square getSquare(int x, int y);

bool generateSudoku() {
	
	for(int xx=0; xx<9; xx++) { 
		for(int yy=0; yy<9; yy++) {
			// All possible numbers for specific field
			vector<int> v = getFullVector();			
			
			// Checking in row
			for(int i=0; i<9; i++) {
				if(sud[i][yy] != 0) {
					removeFromVec(v, sud[i][yy]);
				}
			}
			
			// Checking in column
			for(int i=0; i<9; i++) {
				if(sud[xx][i] != 0) {
					removeFromVec(v, sud[xx][i]);
				}
			}
			
			// Checking in squre
			square s = getSquare(xx, yy);
			
			for(int fx=s.x*3; fx<s.x*3+3; fx++) {
				for(int fy=s.y*3; fy<s.y*3+3; fy++) {
					if(sud[fx][fy] != 0) {
						removeFromVec(v, sud[fx][fy]);
					}
				}
			} 
			
			if(v.size() > 0) {
				int nr = rand() % v.size();
				int val = v[nr];
				sud[xx][yy] = val;
			}else {
				return false;
			}
		}
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
	
	generateSudoku();
	printSudoku();
	
	return 0;
}

/////////////////////////////////////////////////////////////////////////

vector<int> getFullVector() {
	vector<int> v;
	for(int i=1; i<=9; i++) {
		v.push_back(i);
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
		}
	}
}

square getSquare(int x, int y) {
	int a = x/3;
	int b = y/3;
	
	square s;
	s.x = a;
	s.y = b;
	
	return s;
}









