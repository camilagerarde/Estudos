System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logTimeOfExecution(inSeconds = false) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                let unid = 'ms';
                let divisor = 1;
                if (inSeconds) {
                    unid = 's';
                    divisor = 1000;
                }
                console.log('---------------------');
                console.log(`parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const result = originalMethod.apply(this, args);
                console.log(`Resultado do método: ${JSON.stringify(result)}`);
                const t2 = performance.now();
                console.log(`${propertyKey} demorou ${(t2 - t1) / divisor} ${unid}`);
                console.log('-----------------------');
                return result;
            };
            return descriptor;
        };
    }
    exports_1("logTimeOfExecution", logTimeOfExecution);
    return {
        setters: [],
        execute: function () {
        }
    };
});
