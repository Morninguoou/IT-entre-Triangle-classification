class TriangleCalculator {
    constructor() {
        this.side1Input = document.getElementById('side1');
        this.side2Input = document.getElementById('side2');
        this.side3Input = document.getElementById('side3');
        this.calculateButton = document.getElementById('calculate');
        this.resultDiv = document.getElementById('result');

        this.calculateButton.addEventListener('click', () => this.handleCalculation());
        
        [this.side1Input, this.side2Input, this.side3Input].forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleCalculation();
                }
            });
        });
    }

    validateInput(side1, side2, side3) {
        let isValid = true;
        let errorMsg = '';
        const invalidInputs = [];

        // Check each input individually
        [side1, side2, side3].forEach((side, index) => {
            if (!/^\d*\.?\d+$/.test(side)) {
                isValid = false;
                errorMsg = 'Error-ต้องใส่ตัวเลขอารบิก (ex: 3,5,2) เท่านั้น';
                invalidInputs.push(index);
            } else {
                const value = parseFloat(side);
                if (value <= 0) {
                    isValid = false;
                    errorMsg = 'Error-ต้องใส่ตัวเลขที่มากกว่า 0';
                    invalidInputs.push(index);
                }
            }
        });

        return { 
            isValid, 
            errorMsg, 
            invalidInputs 
        };
    }

    classifyTriangle(side1, side2, side3) {
        const s1 = parseFloat(side1);
        const s2 = parseFloat(side2);
        const s3 = parseFloat(side3);

        if (s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 <= s1) {
            return 'ไม่เป็นรูปสามเหลี่ยม';
        }

        if (s1 === s2 && s2 === s3) {
            return 'สามเหลี่ยมด้านเท่า';
        }

        const sides = [s1, s2, s3].sort((a, b) => a - b);
        const isRightTriangle = Math.abs(Math.pow(sides[0], 2) + Math.pow(sides[1], 2) - Math.pow(sides[2], 2)) < 0.000001;
        
        if (isRightTriangle) {
            return 'สามเหลี่ยมมุมฉาก';
        }

        if (s1 === s2 || s2 === s3 || s1 === s3) {
            return 'สามเหลี่ยมหน้าจั่ว';
        }

        return 'สามเหลี่ยมด้านไม่เท่า';
    }

    resetStyles() {
        [this.side1Input, this.side2Input, this.side3Input, this.resultDiv].forEach(element => {
            element.classList.remove('error', 'warning');
        });
    }

    handleCalculation() {
        this.resetStyles();
        
        const side1 = this.side1Input.value;
        const side2 = this.side2Input.value;
        const side3 = this.side3Input.value;

        const validation = this.validateInput(side1, side2, side3);
        
        if (!validation.isValid) {
            this.resultDiv.textContent = validation.errorMsg;
            this.resultDiv.classList.add('error'); 
            
            // Only add error class to invalid inputs
            const inputs = [this.side1Input, this.side2Input, this.side3Input];
            validation.invalidInputs.forEach(index => {
                inputs[index].classList.add('error');
            });
            return;
        }

        const triangleType = this.classifyTriangle(side1, side2, side3);
        
        if (triangleType === 'ไม่เป็นรูปสามเหลี่ยม') {
            this.resultDiv.textContent = `ไม่สามารถสร้างสามเหลี่ยมได้จากเงื่อนไขที่กำหนด`;
            this.resultDiv.classList.add('warning');
            [this.side1Input, this.side2Input, this.side3Input].forEach(input => {
                input.classList.add('warning');
            });
        } else {
            this.resultDiv.textContent = triangleType;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TriangleCalculator();
});