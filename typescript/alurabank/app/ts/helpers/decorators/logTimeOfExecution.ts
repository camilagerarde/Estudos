export function logTimeOfExecution(inSeconds: boolean = false) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      let unid = 'ms';
      let divisor = 1;
      if(inSeconds) {
        unid = 's';
        divisor = 1000;
      }
      console.log('---------------------');
      console.log(`parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
      const t1 = performance.now();
      const result = originalMethod.apply(this, args);
      console.log(`Resultado do método: ${JSON.stringify(result)}` )
      const t2 = performance.now();
      console.log(`${propertyKey} demorou ${(t2 - t1)/divisor} ${unid}`);
      console.log('-----------------------')
      return result;
    }
    return descriptor;
  }
}