let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
par = par.toLowerCase().split(" ").join(""); //split convert into a Array.
for (let letter of par){
    if (letter in counts) {
        counts[letter]+=1;
    }
    else {
        counts[letter]=1;
    }
}
console.log(counts);