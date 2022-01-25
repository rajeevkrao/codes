const { API, Regions, Locales, Queue } = require("node-valorant-api");

const APIKey = "RGAPI-0ab7f3cd-efd1-4801-9445-7804f090a937"; // Your API Key

// The third parameter is the Region for the Account API
// choose the one that is the closest to you
const valorant = new API(Regions.NA, APIKey, Regions.AMERICAS); // An API instance for Valorant query

// Example usage of the VAL-CONTENT-V1 API
valorant.ContentV1.getContent(Locales["en-US"]).then(content => {
    console.log(content.characters.map(char => { return char.name }));
});

// Example usage of the ACCOUNT-V1 and VAL-MATCH-V1 API !!! The MatchV1 API requires a Production API Key
valorant.AccountV1.getAccountByRiotID("SoLo", "HK1").then(account => {
    valorant.MatchV1.getMatchesByPuuid(account.puuid).then(matches => {
        console.log(matches);
    })
});

/**
 * Example usage of the VAL-STATUS-V1 API
 * https://developer.riotgames.com/apis#val-status-v1/GET_getPlatformData
 */
valorant.StatusV1.getPlatformData().then(data => {
    console.log(data);
});

/**
 * Example usage of the VAL-MATCH-V1 API
 * Queue: "competitive", "unranked", "spikerush"
 * https://developer.riotgames.com/apis#val-status-v1/GET_getPlatformData
 */
valorant.MatchV1.getRecentMatches(Queue.Competitive).then(data => {
    console.log(data);
})