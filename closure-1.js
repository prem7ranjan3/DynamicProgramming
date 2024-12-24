function outerHeight(outer){
    function innerHeight(inner){
        return inner+outer;
    }
    return innerHeight;
}

console.log(outerHeight(3)(2));