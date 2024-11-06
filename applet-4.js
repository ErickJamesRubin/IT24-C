class GameList {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.games = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.renderGameList(this.games); 
        this.bindSearchEvent();
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            this.games = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderGameList(games) {
        const gameSearchListContainer = document.getElementById('gameSearchList');
        gameSearchListContainer.innerHTML = '';  

        games.forEach(game => {
            gameSearchListContainer.innerHTML += `
                <div class="game-box p-3 mb-3" style="background-color: skyblue; border-radius: 5px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
                    <h5>${game.game_name}</h5>
                    <p class="fw-light">Genre: ${game.game_genre}</p>
                    <p class="text-muted">Year Published: ${game.game_release_year}</p>
                </div>
            `;
        });
    }
    
    bindSearchEvent() {
        const gameSearchBar = document.getElementById('gameSearchBar');

        gameSearchBar.addEventListener('input', () => {
            this.filterGames(gameSearchBar.value);
        });

        this.renderGameList(this.games);
    }

    filterGames(query) {
        const filteredGames = this.games.filter(game => {
            return game.game_name.toLowerCase().includes(query.toLowerCase()) ||
                   (game.game_genre && game.game_genre.toLowerCase().includes(query.toLowerCase()));
        });

        this.renderGameList(filteredGames);   
    }
}

const gameList = new GameList('applet-4.json');
