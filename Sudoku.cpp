#include <fstream>

#include "Sudoku.h"




SudokuGenerator::SudokuGenerator() {}


bool SudokuGenerator::generateSudoku(int sud[9][9]) {
	/*
	 * Vectors with all fields, where is possible to put there some value
	 * for example: number 3 you can put in each field, that is in
	 * the v[2] vector (counting from 0)
	*/
	vector<Point> v[9];

	// On begin all vectors are full (each contains all 81 fields that is in sudoku table)
	for(int i=0; i<9; i++) {
		v[i] = createHugeVector();
	}

	for(int cur=0; cur<9; cur++) {
		for(int i=0; i<9; i++) {
				if(v[cur].empty()) {
					// Cannot complete sudoku!
					return false;
				}

				Point p = getRandomPoint(v[cur]);

				sud[p.x][p.y] = cur + 1;

				for(int j=0; j<9; j++) {
					removeField(v[j], p.x, p.y);
				}

				removeRow(v[cur], p.y);
				removeColumn(v[cur], p.x);
				removeSquare(v[cur], p.x, p.y);
		}
	}


	// If sudoku has been generated successfully
	return true;
}

vector<Point> SudokuGenerator::createHugeVector() {
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

void SudokuGenerator::removeField(vector<Point> &v, int x, int y) {
	for(int i=v.size()-1; i>=0; i--) {
		if(v[i].x == x) {
			if(v[i].y == y) {
				v.erase(v.begin() + i);
				return;
			}
		}
	}
}

void SudokuGenerator::removeSquare(vector<Point> &v, int x, int y) {
	for(int xx=x/3*3; xx<x/3*3+3; xx++) {
		for(int yy=y/3*3; yy<y/3*3+3; yy++) {
			removeField(v, xx, yy);
		}
	}
}

void SudokuGenerator::removeRow(vector<Point> &v, int y) {
	for(int i=v.size()-1; i>=0; i--) {
		if(v[i].y == y) {
			v.erase(v.begin() + i);
		}
	}
}

void SudokuGenerator::removeColumn(vector<Point> &v, int x) {
	for(int i=v.size()-1; i>=0; i--) {
		if(v[i].x == x) {
			v.erase(v.begin() + i);
		}
	}
}

Point SudokuGenerator::getRandomPoint(vector<Point> &v) {
	int nr = rand() % v.size();
	return v[nr];
}




/////////////////////////////////////////////////////////////////////////

Sudoku::Sudoku() {}

bool Sudoku::generateSudoku() {
	SudokuGenerator g;
	return g.generateSudoku(sud);
}

void Sudoku::print() {
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

// If vector contains some value
bool vContains(vector<int> &v, int val) {
	for(int i=0; i<v.size(); i++) {
		if(v[i] == val) {
			return true;
		}
	}

	return false;
}

bool Sudoku::isCorrect() {
	vector<int> vRow[9];
	vector<int> vSqr[9];

	for(int xx=0; xx<9; xx++) {
		vector<int> vCol;
		for(int yy=0; yy<9; yy++) {
			if(vContains(vCol, sud[xx][yy])) {
				cout << "Col: [x:" << xx << " y:" << yy << "]" << endl;
			}

			if(vContains(vRow[xx], sud[xx][yy])) {
				cout << "Row: [x:" << xx << " y:" << yy << "]" << endl;
			}

			int sqrId = (yy/3 * 3) + xx/3;
			if(vContains(vSqr[sqrId], sud[xx][yy])) {
				cout << "Sqr: [x:" << xx << " y:" << yy << "]" << endl;
			}

			vCol.push_back(sud[xx][yy]);
			vRow[xx].push_back(sud[xx][yy]);
			vSqr[sqrId].push_back(sud[xx][yy]);
		}
	}

	return true;
}










