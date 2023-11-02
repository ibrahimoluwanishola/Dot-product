import React from 'react';

function dot_product(v1, v2) {
    if (v1.length !== v2.length) {
        throw "Vectors must have the same length";
    }

    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }

    return result;
}

function App() {
    const vector1 = [1, 2, 3];
    const vector2 = [4, 5, 6];

    const dotProduct = dot_product(vector1, vector2);

    return (
        <div>
            <h1>Dot Product</h1>
            <p>Vector 1: [1, 2, 3]</p>
            <p>Vector 2: [4, 5, 6]</p>
            <p>Dot Product: {dotProduct}</p>
        </div>
    );
}

export default App;