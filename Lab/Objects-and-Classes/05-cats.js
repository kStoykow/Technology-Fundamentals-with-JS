function solve(data) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            return `${this.name}, age ${this.age} says Meow\n`;
        }
    }
    function output(template) {
        let r = '';
        data.map(e => {
            let [name, age] = e.split(' ');
            let cat = new template(name, age);
            r += cat.meow();
            return e;
        });

        return r;
    }
    return output(Cat)
}
console.log(solve(['Mellow 2', 'Tom 5']));