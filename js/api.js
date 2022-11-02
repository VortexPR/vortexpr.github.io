async function paf() {
    const response = await fetch(apikey);
    const data = await response.json();
    const players = await data.Servers[0].Players;
    const working = await data.Servers[0].Online;
    console.log(players);
    console.log(working);
    document.getElementById("pl").innerText = players;
    if (working == true) {
        document.getElementById("work").innerText = 'Працює';
    }else{
        document.getElementById("work").innerText = 'Виключений';
    }
    
}
const apikey = 'https://api.codetabs.com/v1/proxy/?quest=https://api.scpslgame.com/serverinfo.php?id=21704&key=r97nM3qYkp%2FSUFWg9ibvHFoX&lo=true&players=true&online=true'
paf();
