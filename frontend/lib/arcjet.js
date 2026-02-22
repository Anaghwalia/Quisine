import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/next";

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    rules:[
        shield({
            mode:"LIVE"
        })
        ,
         detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE",
        "CATEGORY:PREVIEW"
      ],
    }),
    ]
})

// Free -> 10 scans per month and 5 meal recommendation

export const freePantryScans = aj.withRule(
    tokenBucket({
        mode:"LIVE",
        characteristics: ["userId"],
        refillRate: 10,
        interval: "30d",
        capacity:10,
    })
);


export const freeMealRecommendations = aj.withRule(
    tokenBucket({
        mode:"LIVE",
        characteristics: ["userId"],
        refillRate: 5,
        interval: "30d",
        capacity:5,
    })
);
// Pro tier -> unlimited 
// 1000 requests per day 


export const proTierLimit = aj.withRule(
    tokenBucket({
        mode:"LIVE",
        characteristics: ["userId"],
        refillRate: 1000,
        interval: "1d",
        capacity:1000,
    })
);
