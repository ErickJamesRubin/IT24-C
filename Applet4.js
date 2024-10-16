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
                <p>${game.game_name}</p>
                <p class="fw-light">${game.game_genre}</p>
                <p class="text-muted">${game.game_release_year}</p>
                <hr>
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

const gameList = new GameList('Applet4.json');
