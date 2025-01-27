# Triangle Classification Program

A web-based application that classifies triangles based on their side lengths. The program can identify different types of triangles including equilateral, isosceles, scalene, and right triangles.

## Features

- Input validation for triangle side lengths
- Classification of triangles into the following types:
  - Equilateral Triangle 
  - Isosceles Triangle
  - Scalene Triangle
  - Right Triangle
- Error handling for invalid inputs
- Responsive design

## Installation and Running

1. Clone the repository:
```bash
git clone https://github.com/NineWP/IT-entre-Triangle-classification.git
cd triangle-calculator
```

2. Build the Docker image:
```bash
docker build -t triangle-classification .
```

3. Run the container:
```bash
docker run -d -p 8000:80 triangle-classification
```

4. Access the application:
Open your web browser and navigate to `http://localhost:8000`

## Usage

1. Enter the lengths of three sides of a triangle in the input fields
2. Click the "ENTER" button or press Enter key
3. The program will display the triangle type or show an error message if the input is invalid

## Input Validation

The program validates the following conditions:
- All inputs must be positive numbers
- Only Arabic numerals are accepted
- The sum of any two sides must be greater than the third side (triangle inequality theorem)

## Error Messages

- Red border: Invalid input format or negative numbers
- Yellow border: Invalid triangle (violates triangle inequality theorem)

## Development Team

1. Worrapon Rangsee (64010761)
2. Nirada Aromsakaree (65010549)
