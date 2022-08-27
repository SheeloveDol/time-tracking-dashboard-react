import work from '../assets/icon-work.svg'
import play from '../assets/icon-play.svg'
import study from '../assets/icon-study.svg'
import exercise from '../assets/icon-exercise.svg'
import social from '../assets/icon-social.svg'
import selfCare from '../assets/icon-self-care.svg'

const userData = [
    
          {
            id: 1,
            image: work,
            accentBgColor: '#FF8B64',
            cardBgColor: '#1C204B',
            title: "Work",
            timeframes: {
              daily: {
                current: 5,
                previous: 7
              },
              weekly: {
                current: 32,
                previous: 36
              },
              monthly: {
                current: 103,
                previous: 128
              }
            }
          },

         {
            id: 2,
            image: play,
            accentBgColor: '#55C2E6',
            cardBgColor: '#1C204B',
            title: "Play",
            timeframes: {
              daily: {
                current: 1,
                previous: 2
              },
              weekly: {
                current: 10,
                previous: 8
              },
              monthly: {
                current: 23,
                previous: 29
              }
            }
          },
          
         {  
            id: 3,
            image: study,
            accentBgColor: '#FF5E7D',
            cardBgColor: '#1C204B',
            title: "Study",
            timeframes: {
              daily: {
                current: 0,
                previous: 1
              },
              weekly: {
                current: 4,
                previous: 7
              },
              monthly: {
                current: 13,
                previous: 19
              }
            }
          },

         {  
            id: 4,
            image: exercise,
            accentBgColor: '#4BCF82',
            cardBgColor: '#1C204B',
            title: "Exercise",
            timeframes: {
              daily: {
                current: 1,
                previous: 1
              },
              weekly: {
                current: 4,
                previous: 5
              },
              monthly: {
                current: 11,
                previous: 18
              }
            }
          },

         {
            id: 5,
            image: social,
            accentBgColor: '#7335D2',
            cardBgColor: '#1C204B',
            title: "Social",
            timeframes: {
              daily: {
                current: 1,
                previous: 3
              },
              weekly: {
                current: 5,
                previous: 10
              },
              monthly: {
                current: 21,
                previous: 23
              }
            }
          },
          
         {
            id: 6,
            image: selfCare,
            accentBgColor: '#F1C75B',
            cardBgColor: '#1C204B',
            title: "Self Care",
            timeframes: {
              daily: {
                current: 0,
                previous: 1
              },
              weekly: {
                current: 2,
                previous: 2
              },
              monthly: {
                current: 7,
                previous: 11
              }
            }
          }
    
  ]

  export default userData

  /* 
    {
        work:  {
        
            title: "Work",
            timeframes: {
              daily: {
                current: 5,
                previous: 7
              },
              weekly: {
                current: 32,
                previous: 36
              },
              monthly: {
                current: 103,
                previous: 128
              }
            }
          },

        play: {
            title: "Play",
            timeframes: {
              daily: {
                current: 1,
                previous: 2
              },
              weekly: {
                current: 10,
                previous: 8
              },
              monthly: {
                current: 23,
                previous: 29
              }
            }
          },
          
        study: {
            title: "Study",
            timeframes: {
              daily: {
                current: 0,
                previous: 1
              },
              weekly: {
                current: 4,
                previous: 7
              },
              monthly: {
                current: 13,
                previous: 19
              }
            }
          },

        exercise: {
            title: "Exercise",
            timeframes: {
              daily: {
                current: 1,
                previous: 1
              },
              weekly: {
                current: 4,
                previous: 5
              },
              monthly: {
                current: 11,
                previous: 18
              }
            }
          },

        social: {
            title: "Social",
            timeframes: {
              daily: {
                current: 1,
                previous: 3
              },
              weekly: {
                current: 5,
                previous: 10
              },
              monthly: {
                current: 21,
                previous: 23
              }
            }
          },
          
        selfCare:  {
            title: "Self Care",
            timeframes: {
              daily: {
                current: 0,
                previous: 1
              },
              weekly: {
                current: 2,
                previous: 2
              },
              monthly: {
                current: 7,
                previous: 11
              }
            }
          }
    }
  */