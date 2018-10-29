#include <iostream>
#include <vector>

using namespace std;

// A sudoku 
int sud[9][9];

vector<int> getFullVector();

void generateSudoku() {

	for(int xx=0; xx<9; xx++) { 
		for(int yy=0; yy<9; yy++) {
			
		}
	}
}

int main() {

	cout << "Hello, my own, small, black world..." << endl;
		
	generateSudoku();	
		
	return 0;
}

vector<int> getFullVector() {
	vector<int> v;
	for(int i=1; i<=9; i++) {
		v.push_back(i);
	}
	return v;
}
