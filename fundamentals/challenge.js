/*(function Ranger(...nums) {

    if (nums.length == 1) {
        console.log(`Esse número é o: ${nums}`);
    }

})(3);*/

function Ranger(...nums) {

    if (nums.length == 1) {
        for (let x = 1; x <= nums; x++) {
            console.log(x);
        }
    }

    if (nums.length == 2) {
        let menor, maior;

        if (nums[0] > nums[1]) {
            menor = nums[1];
            maior = nums[0];

            for (let z = maior; z >= menor; z--) {
                console.log(`Ordem decrescente: ${z}`);
            }

        } else {
            menor = nums[0];
            maior = nums[1];

            for (let z = menor; z <= maior; z += 1) {
                console.log(`Ordem crescente: ${z}`);
            }
        }
    }

    if (nums.length == 3) {
        let menor, maior;

        if (nums[0] > nums[1]) {
            menor = nums[1];
            maior = nums[0];

            for (let z = maior; z >= menor; z -= nums[2]) {
                console.log(`Vetor3 decrescente = ${z}`);
            }

        } else {
            menor = nums[0];
            maior = nums[1];

            for (let z = menor; z <= maior; z += nums[2]) {
                console.log(`Vetor3 crescente = ${z}`);
            }
        }
    }

    // if (nums.length == 2) {
    //     nums.sort((a, b) => a - b);
    //     for (let y = nums[0]; y <= nums[1]; y++) {
    //         console.log(y);
    //     }
    // }
}

console.log(Ranger(5, 26, 3));


// for x in range(2, 10, 1.5)