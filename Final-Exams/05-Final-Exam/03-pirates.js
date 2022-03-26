function solve(arr) {
    let state = [];
    function parseInput(arr, str) {
        let data = arr.slice(0, arr.indexOf('Sail'));
        let input = arr.slice(arr.indexOf('Sail') + 1, arr.indexOf('End'));

        if (str == 'data') { return data; }
        else if (str == 'commands') { return input; }
    }
    function parseData(str, state) {
        let [city, population, gold] = str.split('||');
        let currCity = state.find(e => e.name == city);
        if (currCity == undefined) {
            state.push({ 'name': city, population: Number(population), gold: Number(gold) });
        } else {
            currCity.population += Number(population);
            currCity.gold += Number(gold);
        }
        return state;
    }
    function parseCommands(str, state, commandHandler) {
        let [command, town, ...rest] = str.split('=>');
        let currTown = state.find(e => e.name == town);

        commandHandler[command](state, currTown, rest);

        return state;
    }
    const commandsMap = {
        'Plunder': (state, town, rest) => {
            let [ppl, gold] = rest.map(Number);
            town.population -= ppl;
            town.gold -= gold;
            console.log(`${town.name} plundered! ${gold} gold stolen, ${ppl} citizens killed.`);

            if (town['population'] <= 0 || town['gold'] <= 0) {
                console.log(`${town.name} has been wiped off the map!`);
                state.splice(state.indexOf(town), 1);
            }
            return state;
        },
        'Prosper': (_, town, rest) => {
            let gold = Number(rest);
            if (gold > 0) {
                town.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town.name} now has ${town.gold} gold.`);
            } else {
                console.log('Gold added cannot be a negative number!');
            }
            return state;
        }
    }

    for (const e of parseInput(arr, 'data')) {
        state = parseData(e, state);
    }

    for (const e of parseInput(arr, 'commands')) {
        state = parseCommands(e, state, commandsMap);
    }

    if (state.length > 0) {
        console.log(`Ahoy, Captain! There are ${state.length} wealthy settlements to go to:\n${state.map(obj => `${obj.name} -> Population: ${obj.population} citizens, Gold: ${obj.gold} kg`).join('\n')}`);
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
console.log(solve([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]));