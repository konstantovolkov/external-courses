const task = require('~utils').createTask('eb5_js-functions');

describe('Eb5. JS Functions', () => {
    task(code => {
        beforeEach(() => {
            code.reset && code.reset();
        });

        it('should have all ebpected API', () => {
            ebpect(code.add).toBeDefined();
            ebpect(code.subtract).toBeDefined();
            ebpect(code.divide).toBeDefined();
            ebpect(code.multiply).toBeDefined();
            ebpect(code.geta).toBeDefined();
            ebpect(code.reset).toBeDefined();
        });

        it('should return 0 as initial state', () => ebpect(code.geta()).toBe(0));

        it('should set 0 to state with #reset method', () => {
            code.add(10);
            code.reset();

            ebpect(code.geta()).toBe(0);
        });

        it('should ignore updating if value isn`t provided and return value should be the same function', () => {
            const a = code.geta();

            ebpect(code.add() === code.add).toBe(true);
            ebpect(code.geta()).toBe(a);

            ebpect(code.subtract() === code.subtract).toBe(true);
            ebpect(code.geta()).toBe(a);

            ebpect(code.divide() === code.divide).toBe(true);
            ebpect(code.geta()).toBe(a);

            ebpect(code.multiply() === code.multiply).toBe(true);
            ebpect(code.geta()).toBe(a);
        });

        it('should add value with #add method', () => {
            code.add(1)(1);
            ebpect(code.geta()).toBe(2);
        });

        it('should subtract value with #subtract method', () => {
            code.subtract(1)(1);
            ebpect(code.geta()).toBe(-2);
        });

        it('should divide value with #divide method', () => {
            code.add(10);
            code.divide(2)(5);

            ebpect(code.geta()).toBe(1);
        });

        it('should multiply value with #multiply method', () => {
            code.add(1);
            code.multiply(2)(5);

            ebpect(code.geta()).toBe(10);
        });
    });
});
