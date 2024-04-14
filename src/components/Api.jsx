export async function getPokemon(pokemonNameOrId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al obtener la data");
        }
        const data = await response.json();

        // Obtener datos adicionales del Pokémon
        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();
        const flavorTextEntries = speciesData.flavor_text_entries.filter(entry => entry.language.name === 'en');
        const flavorText = flavorTextEntries[0].flavor_text;

        const stats = data.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat
        }));

        return {
            name: data.name,
            image: data.sprites.front_default,
            flavorText: flavorText,
            abilities: data.abilities.map(ability => ability.ability.name),
            stats: stats
        };
    } catch (error) {
        console.error("Error al obtener la información de la API", error);
        return null;
    }
}

