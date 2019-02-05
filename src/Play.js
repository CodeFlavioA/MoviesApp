class Play{
    teams = []

    static addTeam(){
        let input = document.getElementById('newTeam')
        let team = {
            'name': input.value,
            'score': '0'
        }
        this.teams.add(team)
        console.log(this.teams)
    }
    
}

export default Play; 