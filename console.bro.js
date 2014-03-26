(function(exports) {
    
    function bro(){
        var args = Array.prototype.slice.call(arguments),
        argsFormatted = args.map(function(arg){
            if('string' === typeof arg){
                return arg + ', bro';
            }else{
                return arg;
            }
        });
        
        console.log.apply(console, argsFormatted);
    }
    
    exports.console = exports.console || {};
    exports.console.bro = bro;

})(this);
