function solve(input) {
    let register = {};

    for (const line of input) {
        let [system, component, sub] = line.split(' | ');

        if (!register.hasOwnProperty(system)) {
            register[system] = {};
        }

        if (!register[system].hasOwnProperty(component)) {
            register[system][component] = [];
        }

        register[system][component].push(sub);
    }

    let sortedSystems = Object.keys(register).sort((a, b) => Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b));

    sortedSystems.forEach(system => {
        console.log(system);

        let sortedComponents = Object.keys(register[system]).sort((a, b) => Object.keys(register[system][b]).length - Object.keys(register[system][a]).length);

        sortedComponents.forEach(component => {
            console.log(`|||${component}`);
            register[system][component].forEach(sub => console.log(`||||||${sub}`));
        });
    });
}
solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'])