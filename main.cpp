#include <iostream>
#include <vector>

using namespace std;

// A sudoku 
int sud[9][9];

// That function returns us vector with numbers from 1 to 9 
vector<int> getFullVector();

// That one prints the sudoku table on the screen
void printSudoku();

void generateSudoku() {

	for(int xx=0; xx<9; xx++) { 
		for(int yy=0; yy<9; yy++) {
			
		}
	}
}


/////////////////////////////////////////////////////////////////////////

int main() {

	cout << "Hello, my own, small, black world..." << endl;
		
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
	for(int xx=0; xx<9; xx++) { 
		cout << "      ";
		for(int yy=0; yy<9; yy++) {
			cout << sud[xx][yy] << " ";				
		}
		cout << endl;
	}
	cout << endl << "  ~~~~~~~~~~~~~~~~~~~~~~~~~~" << endl << endl;
}











