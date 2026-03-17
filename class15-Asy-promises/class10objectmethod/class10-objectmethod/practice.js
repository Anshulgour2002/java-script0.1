
// let arr = [
//   {
//     uid: 101,
//     personalInfo: {
//       name: {
//         first: "Rahul",
//         middle: "Kumar",
//         last: "Sharma"
//       },
//       demographics: {
//         age: 24,
//         gender: "Male",
//         nationality: "Indian"
//       },
//       contact: {
//         primary: {
//           email: "rahul.sharma@example.com",
//           phone: "+91-9876543210"
//         },
//         secondary: {
//           email: "rahul.alt@example.com",
//           phone: null
//         },
//         address: {
//           current: {
//             city: "Delhi",
//             state: "Delhi",
//             country: "India",
//             geo: {
//               lat: 28.6139,
//               lng: 77.2090
//             }
//           },
//           permanent: {
//             city: "Lucknow",
//             state: "UP",
//             country: "India"
//           }
//         }
//       }
//     },

//     jobDetails: {
//       employment: {
//         title: "Software Engineer",
//         department: {
//           name: "Engineering",
//           division: {
//             name: "Product Development",
//             budget: {
//               annual: 5000000,
//               approvedBy: "Board"
//             }
//           }
//         },
//         joining: {
//           date: new Date("2022-06-15"),
//           probation: {
//             durationMonths: 6,
//             completed: true,
//             reviews: [
//               { month: 3, rating: 4 },
//               { month: 6, rating: 5 }
//             ]
//           }
//         }
//       },

//       payroll: {
//         salary: {
//           structure: {
//             base: 50000,
//             hra: 15000,
//             allowances: {
//               travel: 5000,
//               food: 3000
//             }
//           },
//           deductions: {
//             tax: 8000,
//             pf: 2000
//           }
//         },
//         bankDetails: {
//           account: {
//             number: "XXXX1234",
//             ifsc: "SBIN0001234"
//           }
//         }
//       },

//       projects: [
//         {
//           name: "E-commerce Platform",
//           deployment: {
//             regions: [
//               {
//                 name: "Asia",
//                 servers: [
//                   { id: "AS-1", uptime: "99.9%" },
//                   { id: "AS-2", uptime: "99.8%" }
//                 ]
//               }
//             ]
//           }
//         }
//       ]
//     },

//     performance: {
//       yearly: {
//         "2023": {
//           ratings: [4, 5],
//           kpi: {
//             tasksCompleted: 120,
//             bugsResolved: 45
//           }
//         }
//       },
//       auditTrail: [
//         {
//           action: "Salary Updated",
//           metadata: {
//             changedBy: "HR",
//             timestamp: new Date()
//           }
//         }
//       ]
//     },

//     accessControl: {
//       roles: [
//         {
//           name: "user",
//           permissions: {
//             modules: {
//               dashboard: ["read"],
//               reports: ["read", "export"]
//             }
//           }
//         }
//       ]
//     }
//   },

//   // ------------------------------------------------------

//   {
//     uid: 102,
//     personalInfo: {
//       name: { first: "Priya", last: "Verma" },
//       contact: {
//         emailHistory: [
//           { email: "priya.old@example.com", active: false },
//           { email: "priya.verma@example.com", active: true }
//         ]
//       }
//     },



//     jobDetails: {
//       employment: {
//         title: "Backend Architect",
//         hierarchy: {
//           reportsTo: {
//             uid: 201,
//             role: "CTO"
//           },
//           manages: [
//             {
//               team: "API Team",
//               members: [
//                 { uid: 301, role: "Developer" },
//                 { uid: 302, role: "Developer" }
//               ]
//             }
//           ]
//         }
//       },







//       systems: {
//         databases: [
//           {
//             name: "UserDB",
//             replicas: [
//               { region: "Asia", status: "Healthy" },
//               { region: "EU", status: "Healthy" }
//             ]
//           }
//         ]
//       }
//     },

//     compliance: {
//       certifications: {
//         technical: [
//           { name: "AWS Architect", level: "Professional" }
//         ],
//         security: {
//           iso27001: {
//             validTill: "2026-12-31",
//             auditHistory: [
//               { year: 2023, status: "Passed" },
//               { year: 2024, status: "Passed" }
//             ]
//           }
//         }
//       }
//     }
//   },

//   // ------------------------------------------------------

//   {
//     uid: 103,
//     personalInfo: {
//       name: { first: "Amit", last: "Kumar" },
//       emergencyContacts: [
//         {
//           relation: "Brother",
//           contact: {
//             phone: "8888888888",
//             address: {
//               city: "Mumbai",
//               zone: {
//                 region: "West",
//                 riskCategory: "Low"
//               }
//             }
//           }
//         }
//       ]
//     },

//     jobDetails: {
//       infrastructure: {
//         cloud: {
//           provider: "AWS",
//           accounts: [
//             {
//               id: "ACC-01",
//               environments: {
//                 production: {
//                   clusters: [
//                     {
//                       name: "Cluster-A",
//                       nodes: [
//                         {
//                           nodeId: "N1",
//                           specs: {
//                             cpu: "8 Core",
//                             memory: "32GB",
//                             storage: {
//                               type: "SSD",
//                               volumes: [
//                                 { id: "V1", size: "500GB" }
//                               ]
//                             }
//                           }
//                         }
//                       ]
//                     }
//                   ]
//                 }
//               }
//             }
//           ]
//         }
//       }
//     },

//     incidentManagement: {
//       incidents: [
//         {
//           id: "INC001",
//           severity: {
//             level: 1,
//             description: "Critical outage"
//           },
//           timeline: {
//             detected: new Date(),
//             resolved: null
//           }
//         }
//       ]
//     }
//   }
// ];


// // arr[2].jobDetails.infrastructure.cloud.accounts[0].environments.production.clusters[0].nodes[0].specs.memory="40 GB"
// // console.log(arr[2].jobDetails.infrastructure.cloud.accounts[0].environments.production.clusters[0].nodes[0].specs.memory)
// arr[1].jobDetails.employment.hierarchy.manages[0].members[1].uid="303"
// console.log(first)





let ob1 = {
  id: 74498,
  basicInfo: {
    title: {
      name: "Only Child",
      slug: "only-child",
      alternativeTitles: [
        { language: "Spanish", title: "Hijo Único" },
        { language: "French", title: "Enfant Unique" }
      ]
    },
    type: "Scripted",
    language: "English",
    genres: [
      { name: "Comedy", subGenres: ["Dark Comedy", "Family Comedy"] }
    ],
    duration: {
      runtime: null,
      averageRuntime: 28,
      unit: "minutes"
    }
  },

  releaseDetails: {
    premiered: "2024-11-21",
    ended: null,
    status: {
      current: "To Be Determined",
      history: [
        { year: 2024, status: "Announced" },
        { year: 2025, status: "Running" }
      ]
    },
    regionAvailability: [
      {
        country: {
          name: "United Kingdom",
          code: "GB",
          timezone: "Europe/London"
        },
        streaming: {
          platform: {
            id: 26,
            name: "BBC iPlayer",
            officialSite: "https://www.bbc.co.uk/iplayer"
          },
          subscriptionType: "Free",
          videoQuality: ["HD", "Full HD"]
        }
      }
    ]
  },

  ratingsAndReviews: {
    rating: {
      average: 6.2,
      votes: 1200,
      breakdown: {
        fiveStar: 300,
        fourStar: 400,
        threeStar: 250,
        twoStar: 150,
        oneStar: 100
      }
    },
    criticReviews: [
      {
        criticName: "John Smith",
        agency: "TV Weekly",
        score: 7.5,
        comments: {
          positives: ["Strong character writing", "Emotional depth"],
          negatives: ["Slow pacing in episode 2"]
        }
      }
    ]
  },

  seasons: [
    {
      seasonNumber: 1,
      totalEpisodes: 6,
      episodes: [
        {
          episodeNumber: 1,
          title: "The Long Goodbye",
          duration: 30,
          cast: [er
            
            {
              actor: {
                name: "Actor A",
                age: 45,
                social: {
                  instagram: "@actorA",
                  twitter: "@actorA_official"
                }
              },
              role: "Richard"
            }
          ],
          production: {
            director: "Jane Doe",
            writers: ["Writer 1", "Writer 2"],
            filmingLocations: [
              {
                city: "London",
                coordinates: {
                  lat: 51.5072,
                  long: -0.1276
                }
              }
            ]
          }
        }
      ]
    }
  ],

  mediaAssets: {
    images: {
      poster: {
        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/544/1361493.jpg",
        original: "https://static.tvmaze.com/uploads/images/original_untouched/544/1361493.jpg",
        metadata: {
          sizeInKB: 450,
          format: "jpg",
          resolution: {
            width: 680,
            height: 1000
          }
        }
      }
    },
    trailers: [
      {
        title: "Official Trailer",
        url: "https://youtube.com/trailer-link",
        duration: "2:30",
        stats: {
          views: 150000,
          likes: 5000,
          comments: 320
        }
      }
    ]
  },

  externalIds: {
    tvmaze: 74498,
    thetvdb: 456340,
    imdb: null,
    apiLinks: {
      self: {
        href: "https://api.tvmaze.com/shows/74498"
      },
      previousEpisode: {
        href: "https://api.tvmaze.com/episodes/3044815",
        name: "The Long Goodbye"
      }
    }
  },

  analytics: {
    popularity: {
      weight: 93,
      weeklyTrend: [
        { week: "2024-W48", rank: 10 },
        { week: "2024-W49", rank: 7 }
      ]
    },
    audienceDemographics: {
      ageGroups: [
        { group: "18-25", percentage: 35 },
        { group: "26-40", percentage: 40 },
        { group: "40+", percentage: 25 }
      ],
      genderSplit: {
        male: 48,
        female: 52
      }
    }
  }
};
obj1.seasons[0].production.

