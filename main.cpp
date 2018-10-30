#include <iostream>
#include <vector>

using namespace std;

// A sudoku 
int sud[9][9];

// That function returns us vector with numbers from 1 to 9 
vector<int> getFullVector();

// That one prints the sudoku table on the screen
void printSudoku();

// Function that erasing from vector specific value (not from specyific place)
void removeFromVec(vector<int> &v, int what);

void generateSudoku() {
	
	for(int xx=0; xx<9; xx++) { 
		for(int yy=0; yy<9; yy++) {
			// All possible numbers for specific field
			vector<int> v = getFullVector();			
			
			// Checking in row
			for(int i=0; i<9; i++) {
				if(sud[i][yy] != 0) {
					
				}
			}
			
		}
	}
}


/////////////////////////////////////////////////////////////////////////

int main() {

	//generateSudoku();
	
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
			cout << sud[xx][yy] << " ";				
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









