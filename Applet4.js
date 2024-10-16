class StudentList {
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
        const gameListContainer = document.getElementById('gameList');
        gameListContainer.innerHTML = games.map(game =>
            `<button class="btn btn-primary" style="margin-top:15px; 
                                                    width:25rem">
                ${game.game_name} | ${game.game_release_year}
            </button><br>`
        ).join('');
    }

    bindSearchEvent() {
        const gameSearchBar = document.getElementById('gameSearchBar');
        const gameSearchListContainer = document.getElementById('gameSearchList');

        gameSearchBar.addEventListener('input', () => {
            this.filterGames(gameSearchBar.value, gameSearchListContainer);
        });

        this.renderGameList(this.games, gameSearchListContainer);
    }

    
    filterGames(query, searchListContainer) {
        const filteredGames = this.games.filter(game => {
            return game.game_name.toLowerCase().includes(query.toLowerCase());
        });

        searchListContainer.innerHTML = '';

        this.renderGameList(filteredGames, searchListContainer);
    }

}

const gameList = new GameList('applet-4.json');