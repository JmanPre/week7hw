// A list of players on the team
let teamPlayers =[
    {fullName: 'Neymar Jr', age: 32, kitNUmber: 10},
    {fullName: 'Kevin De Bruyne', age: 33, kitNUmber: 17},
    {fullName: 'Alexander Isak', age: 25, kitNUmber: 14},
    {fullName: 'Mohamed Salah', age: 32, kitNUmber: 11},
    {fullName: 'Carlos Baleba', age: 21, kitNumber:20},
    {fullName: 'Ryan Gravenberch', age: 22, kitNUmber: 38},
    {fullName: 'Alejandro Grimaldo', age: 29, kitNUmber: 12},
    {fullName: 'Alessandro Bastoni', age: 25, kitNUmber: 95},
    {fullName: 'Edmond Tapsoba', age: 25, kitNUmber: 2},,
    {fullName: 'Giovannin Di Lorenzo', age: 31, kitNUmber: 22},
    {fullName: 'Mike Maignan', age: 29, kitNUmber: 16},
]
// sorting by the players kit number
teamPlayers.sort((a, b) => a.kitNUmber - b.kitNUmber); 
console.log(teamPlayers);

// The coach gives each induvidual player a message before the match that is catered to them and their personality/playstyle
teamPlayers.forEach((kitNUmber)=> {
    if (kitNUmber === 10) {
        coachMessages.push('Ahh yes, the prince who never became king, go create for us Neymar.')
        console.log(coachMessages);
    }})
teamPlayers.forEach((kitNUmber)=>{
    if (kitNUmber === 17) {
        coachMessages.push('The best midfielder to ever grace the premier league, go be a playmaker Kevin.')
        console.log(coachMessages)
    }})
teamPlayers.forEach((kitNUmber)=>{
    if (kitNUmber === 14) {
        coachMessages.push('Death, taxes, and Alexander the great finishing. Go be the scroresheets wort nightmare.')
        console.log(coachMessages)
    }})
teamPlayers.forEach((kitNUmber)=>{
    if (kitNUmber === 11) {
        coachMessages.push('The Egyptian king, show them just how scary you can be when youy never walk alone.')
        console.log(coachMessages)

    }})
teamPlayers.forEach((kitNUmber)=>{
    if (kitNUmber === 20) {
        coachMessages.push('My starboy, control the game as you always do, and be that engine in the middle.')
        console.log(coachMessages)

    }})
teamPlayers.forEach((kitNUmber)=>{
    if (kitNUmber === 38) {
    coachMessages.push('The grave digger, continue to put in the dirty work, that no one else will.')
        console.log(coachMessages)
    }})
teamPlayers.forEach((kitNUmber)=>{
    if (kitNUmber === 12) {
        coachMessages.push('They will never see you coming on the overlap, but once they do, its much too late.')
        console.log(coachMessages)

    }})
teamPlayers.forEach((kitNUmber)=>{
    if (kitNUmber === 95) {
        coachMessages.push('You are the leader of this team, show no mercy and defend like your life depends on it.')
        console.log(coachMessages)
    }})
teamPlayers.forEach((kitNUmber)=>{
    if (kitNUmber === 2) {
        coachMessages.push('You are underrated, no one trusts you like I do, show them.')
        console.log(coachMessages)

    }})
teamPlayers.forEach((kitNUmber)=>{
    if (kitNUmber === 22) {
        coachMessages.push('You are the reason the team runs like a perfect storm, now go and be the lightning.')
        console.log(coachMessages)
    }})
teamPlayers.forEach((kitNUmber)=>{
    if (kitNUmber === 16) {
        coachMessages.push('You are my last line of defense, allow nothing past you, no exceptions.')
        console.log(coachMessages)

    }})