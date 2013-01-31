console.bro = function() {
    var args = Array.prototype.slice.call(arguments).join(' ');
    
    console.log(args, ', bro');
}
