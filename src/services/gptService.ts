import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const generateItinerary = async (data: { destination: string; date: string; length: string; group: string; budget: string; activity: string }) => {
  // Input validation
  if (!data.destination || !data.date || !data.length || !data.group || !data.budget || !data.activity) {
    return null;
  }

  // Construct prompt for GPT API
  const prompt = `You are an expert traveller and backpacker who has seen the world and know every destination's ins and outs. Create a ${data.length}-day itinerary for a ${data.group} trip to ${data.destination} with a budget of: ${data.budget}, starting on: ${data.date}. Plan 5 programs for each day in the following category(s): ${data.activity}. Return the requested data according to the specified details in the form of a json object with the following outline/format. Only return the requested json and nothing else, no matter what! Make sure to watch out for the types too. Here comes the format:
  {"destination": {"numberOfDays": Number,"destinationCity": String,"destinationCountry": String,"currency": String,"oneDollarInLocalCurrency": Number,"languagesSpoken": Array,"timeThereInUtcFormat": String // eg. UTC + 2,"capitalOfTheCountry": String, "localWeather": String // eg. monsoon or continental or etc, "temperatureRangeThroughTheYear": String,"shortDescription": String // 2-3 sentances, "shortHistory": String // 2-3 sentances,"startDate": String,"endDate": String},"itinerary":[{"day": number, "date": String // eg. dayoftheweek day month, "program": [{"id": Number // continue with the next number on the next day,"programOrPlaceName": String, "timeSpentThere": String, "location": String, coordinateOfEvent: [lng: number // longtitude as 5 decimals, lat: number // latitude as 5 decimals] // array like [lng, lat], "shortDescriptionOfProgram": String // 2-3 sentances}, // ... Repeat for each program]}, // ... Repeat for each day], "estimatedCosts": [{"category": Accommodation, "hostelCostPerNight": Number, "hotelCostPerNight": Number,"luxuryHotelCostPerNight": Number,"airbnbCostPerNight": Number}, {"category": "Transportation","busCost": Number,"taxiCost": Number,"trainCost": Number,"rentalCost": Number},{"category": Food,"streetFoodCost": Number,"budgetRestaurantCost": Number,"fancyRestaurantCost": Number,"traditionalFoodCost": Number}, {"category": Activities, "mainActivityForEachDay": [{"mainActivityName": String,"costOfProgram": Number}, // ... Repeat for each day's main event and cost of program should be in inr]}]}`;

  try {
    // const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    //   model: "gpt-4o-mini", // Model in use
    //   messages: [{role: "system", content: "You are a travel planning assistant."}, {role: "user", content: prompt}],
    //   response_format: { type: "json_object" },
    //   max_tokens: 4090,
    // }, {
    //   headers: {
    //     'Authorization': `Bearer ${API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    // });
    const response = [{
      "destination": {
        "numberOfDays": 3,
        "destinationCity": "Hyderabad",
        "destinationCountry": "India",
        "currency": "INR",
        "oneDollarInLocalCurrency": 83,
        "languagesSpoken": ["Telugu", "Hindi", "English", "Urdu"],
        "timeThereInUtcFormat": "UTC + 5:30",
        "capitalOfTheCountry": "New Delhi",
        "localWeather": "tropical",
        "temperatureRangeThroughTheYear": "15°C to 40°C",
        "shortDescription": "Hyderabad is a vibrant city blending rich history with modern growth, famous for its cuisine, heritage, and bustling streets.",
        "shortHistory": "Founded in 1591 by the Qutb Shahi dynasty, Hyderabad has a history of being a key center of trade and culture, renowned for its diamond and pearl industry.",
        "startDate": "2024-09-23",
        "endDate": "2024-09-25"
      },
      "itinerary": [
        {
          "day": 1,
          "date": "Monday 23 September",
          "program": [
            {
              "id": 1,
              "programOrPlaceName": "Hike at Khajaguda Hills",
              "timeSpentThere": "3 hours",
              "location": "Khajaguda, Hyderabad",
              "coordinateOfEvent": [78.38894, 17.39236],
              "shortDescriptionOfProgram": "Start your day with an early morning hike at Khajaguda Hills. It offers breathtaking views of the city and rock formations."
            },
            {
              "id": 2,
              "programOrPlaceName": "Spa and Wellness at O2 Spa",
              "timeSpentThere": "2 hours",
              "location": "Banjara Hills, Hyderabad",
              "coordinateOfEvent": [78.44444, 17.41448],
              "shortDescriptionOfProgram": "Relax and rejuvenate at O2 Spa in Banjara Hills, offering a range of therapies for wellness and relaxation."
            },
            {
              "id": 3,
              "programOrPlaceName": "Heritage Walk at Golkonda Fort",
              "timeSpentThere": "2 hours",
              "location": "Golkonda, Hyderabad",
              "coordinateOfEvent": [78.40009, 17.38331],
              "shortDescriptionOfProgram": "Explore the historic Golkonda Fort with a guided heritage walk, learning about its rich history and architectural marvels."
            },
            {
              "id": 4,
              "programOrPlaceName": "Yoga Session at Isha Yoga Center",
              "timeSpentThere": "1.5 hours",
              "location": "Jubilee Hills, Hyderabad",
              "coordinateOfEvent": [78.41398, 17.43014],
              "shortDescriptionOfProgram": "Attend a calming yoga session at Isha Yoga Center to balance your mind and body in a serene atmosphere."
            },
            {
              "id": 5,
              "programOrPlaceName": "Sunset Walk at Necklace Road",
              "timeSpentThere": "1 hour",
              "location": "Necklace Road, Hyderabad",
              "coordinateOfEvent": [78.47249, 17.42242],
              "shortDescriptionOfProgram": "End your day with a peaceful sunset walk along the Necklace Road, enjoying the view of Hussain Sagar Lake."
            }
          ]
        },
        {
          "day": 2,
          "date": "Tuesday 24 September",
          "program": [
            {
              "id": 6,
              "programOrPlaceName": "Morning Hike at Ananthagiri Hills",
              "timeSpentThere": "3.5 hours",
              "location": "Ananthagiri, Vikarabad",
              "coordinateOfEvent": [77.89007, 17.34787],
              "shortDescriptionOfProgram": "Take a day trip to Ananthagiri Hills, about 1.5 hours from Hyderabad, for a refreshing hike in a dense forest setting."
            },
            {
              "id": 7,
              "programOrPlaceName": "Ayurvedic Massage at Kairali Ayurvedic Center",
              "timeSpentThere": "2 hours",
              "location": "Banjara Hills, Hyderabad",
              "coordinateOfEvent": [78.44577, 17.42041],
              "shortDescriptionOfProgram": "Experience an authentic Ayurvedic massage at Kairali Ayurvedic Center, known for its healing therapies and wellness treatments."
            },
            {
              "id": 8,
              "programOrPlaceName": "Lunch at Chutneys Restaurant",
              "timeSpentThere": "1 hour",
              "location": "Banjara Hills, Hyderabad",
              "coordinateOfEvent": [78.44577, 17.42041],
              "shortDescriptionOfProgram": "Enjoy a traditional South Indian vegetarian meal at Chutneys, famous for its variety of dosas and chutneys."
            },
            {
              "id": 9,
              "programOrPlaceName": "Therapeutic Meditation at Art of Living Center",
              "timeSpentThere": "2 hours",
              "location": "Kondapur, Hyderabad",
              "coordinateOfEvent": [78.36583, 17.47249],
              "shortDescriptionOfProgram": "Participate in a guided meditation session at the Art of Living Center for mental clarity and relaxation."
            },
            {
              "id": 10,
              "programOrPlaceName": "Evening Walk at KBR National Park",
              "timeSpentThere": "1 hour",
              "location": "Jubilee Hills, Hyderabad",
              "coordinateOfEvent": [78.42198, 17.42523],
              "shortDescriptionOfProgram": "Conclude your day with a serene walk at KBR National Park, a peaceful oasis in the city with abundant greenery."
            }
          ]
        },
        {
          "day": 3,
          "date": "Wednesday 25 September",
          "program": [
            {
              "id": 11,
              "programOrPlaceName": "Morning Meditation at Shambhavi Mudra Center",
              "timeSpentThere": "1.5 hours",
              "location": "Madhapur, Hyderabad",
              "coordinateOfEvent": [78.38595, 17.44741],
              "shortDescriptionOfProgram": "Start your day with an enriching meditation session at Shambhavi Mudra Center to center yourself and enhance mental wellness."
            },
            {
              "id": 12,
              "programOrPlaceName": "Wellness Retreat at Moksh Interactive Wellness Center",
              "timeSpentThere": "2 hours",
              "location": "Banjara Hills, Hyderabad",
              "coordinateOfEvent": [78.44444, 17.41527],
              "shortDescriptionOfProgram": "Spend time at Moksh Wellness Center for relaxation and rejuvenation through their specialized therapies."
            },
            {
              "id": 13,
              "programOrPlaceName": "Visit to Shilparamam Cultural Village",
              "timeSpentThere": "2 hours",
              "location": "Hitech City, Hyderabad",
              "coordinateOfEvent": [78.38443, 17.44579],
              "shortDescriptionOfProgram": "Explore traditional Indian handicrafts and cultural performances at Shilparamam, a vibrant cultural village."
            },
            {
              "id": 14,
              "programOrPlaceName": "Lunch at Café Niloufer",
              "timeSpentThere": "1 hour",
              "location": "Lakdikapul, Hyderabad",
              "coordinateOfEvent": [78.46892, 17.39857],
              "shortDescriptionOfProgram": "Taste the famous Irani chai and Osmania biscuits at Café Niloufer, a popular local café with a heritage vibe."
            },
            {
              "id": 15,
              "programOrPlaceName": "Closing Yoga and Meditation at Dhyana Yoga Studio",
              "timeSpentThere": "1.5 hours",
              "location": "Hitech City, Hyderabad",
              "coordinateOfEvent": [78.38456, 17.44604],
              "shortDescriptionOfProgram": "End your trip with a peaceful yoga and meditation session at Dhyana Yoga Studio for mental and physical balance."
            }
          ]
        }
      ],
      "estimatedCosts": [
        {
          "category": "Accommodation",
          "hostelCostPerNight": 20,
          "hotelCostPerNight": 60,
          "luxuryHotelCostPerNight": 150,
          "airbnbCostPerNight": 40
        },
        {
          "category": "Transportation",
          "busCost": 0.5,
          "taxiCost": 10,
          "trainCost": 0.8,
          "rentalCost": 30
        },
        {
          "category": "Food",
          "streetFoodCost": 2,
          "budgetRestaurantCost": 5,
          "fancyRestaurantCost": 20,
          "traditionalFoodCost": 10
        },
        {
          "category": "Activities",
          "mainActivityForEachDay": [
            {
              "mainActivityName": "Hike at Khajaguda Hills",
              "costOfProgram": 0
            },
            {
              "mainActivityName": "Hike at Ananthagiri Hills",
              "costOfProgram": 15
            },
            {
              "mainActivityName": "Meditation at Shambhavi Mudra Center",
              "costOfProgram": 10
            }
          ]
        }
      ]},
        {
          "destination": {
            "numberOfDays": 3,
            "destinationCity": "Delhi",
            "destinationCountry": "India",
            "currency": "INR",
            "oneDollarInLocalCurrency": 83,
            "languagesSpoken": ["Hindi", "English", "Punjabi", "Urdu"],
            "timeThereInUtcFormat": "UTC + 5:30",
            "capitalOfTheCountry": "New Delhi",
            "localWeather": "continental",
            "temperatureRangeThroughTheYear": "5°C to 40°C",
            "shortDescription": "Delhi is a bustling metropolis that merges ancient history with modern living, known for its rich cultural heritage, monuments, and vibrant markets.",
            "shortHistory": "Delhi has been continuously inhabited since the 6th century BC and has served as a capital for various empires, from the Mughal dynasty to modern India.",
            "startDate": "2024-09-23",
            "endDate": "2024-09-25"
          },
          "itinerary": [
            {
              "day": 1,
              "date": "Monday 23 September",
              "program": [
                {
                  "id": 1,
                  "programOrPlaceName": "Morning Yoga at Lodhi Gardens",
                  "timeSpentThere": "1.5 hours",
                  "location": "Lodhi Gardens, New Delhi",
                  "coordinateOfEvent": [77.21949, 28.59326],
                  "shortDescriptionOfProgram": "Start your day with a rejuvenating yoga session amidst the historical beauty of Lodhi Gardens."
                },
                {
                  "id": 2,
                  "programOrPlaceName": "Wellness Spa at The Imperial Spa",
                  "timeSpentThere": "2 hours",
                  "location": "Connaught Place, New Delhi",
                  "coordinateOfEvent": [77.22053, 28.63153],
                  "shortDescriptionOfProgram": "Relax at one of the most luxurious spas in Delhi, offering a range of Ayurvedic treatments."
                },
                {
                  "id": 3,
                  "programOrPlaceName": "Visit to Humayun's Tomb",
                  "timeSpentThere": "1.5 hours",
                  "location": "Humayun's Tomb, Nizamuddin, Delhi",
                  "coordinateOfEvent": [77.25068, 28.59329],
                  "shortDescriptionOfProgram": "Explore the magnificent Mughal architecture at Humayun's Tomb, a UNESCO World Heritage site."
                },
                {
                  "id": 4,
                  "programOrPlaceName": "Evening Walk at India Gate",
                  "timeSpentThere": "1 hour",
                  "location": "Rajpath, New Delhi",
                  "coordinateOfEvent": [77.22951, 28.61291],
                  "shortDescriptionOfProgram": "Take an evening walk around India Gate, a war memorial, and enjoy the serene ambiance as the city lights up."
                },
                {
                  "id": 5,
                  "programOrPlaceName": "Dinner at Saravana Bhavan",
                  "timeSpentThere": "1.5 hours",
                  "location": "Connaught Place, New Delhi",
                  "coordinateOfEvent": [77.22097, 28.63258],
                  "shortDescriptionOfProgram": "Indulge in authentic South Indian vegetarian cuisine at one of the city's most famous restaurants."
                }
              ]
            },
            {
              "day": 2,
              "date": "Tuesday 24 September",
              "program": [
                {
                  "id": 6,
                  "programOrPlaceName": "Hike at Aravalli Biodiversity Park",
                  "timeSpentThere": "3 hours",
                  "location": "Vasant Kunj, New Delhi",
                  "coordinateOfEvent": [77.15193, 28.52776],
                  "shortDescriptionOfProgram": "Enjoy an early morning hike through the lush green trails of the Aravalli Biodiversity Park."
                },
                {
                  "id": 7,
                  "programOrPlaceName": "Ayurvedic Massage at Kairali Ayurvedic Center",
                  "timeSpentThere": "2 hours",
                  "location": "Mehrauli, New Delhi",
                  "coordinateOfEvent": [77.17745, 28.51764],
                  "shortDescriptionOfProgram": "Experience the healing powers of Ayurveda with a full-body massage at Kairali Ayurvedic Center."
                },
                {
                  "id": 8,
                  "programOrPlaceName": "Lunch at Café Lota",
                  "timeSpentThere": "1.5 hours",
                  "location": "Pragati Maidan, New Delhi",
                  "coordinateOfEvent": [77.25154, 28.61336],
                  "shortDescriptionOfProgram": "Relish contemporary Indian cuisine with a modern twist at Café Lota, located near the National Crafts Museum."
                },
                {
                  "id": 9,
                  "programOrPlaceName": "Meditation at Osho Meditation Center",
                  "timeSpentThere": "2 hours",
                  "location": "Greater Kailash, New Delhi",
                  "coordinateOfEvent": [77.24252, 28.54237],
                  "shortDescriptionOfProgram": "Join a guided meditation session at the Osho Meditation Center to refresh your mind and soul."
                },
                {
                  "id": 10,
                  "programOrPlaceName": "Evening Stroll at Deer Park",
                  "timeSpentThere": "1 hour",
                  "location": "Hauz Khas, New Delhi",
                  "coordinateOfEvent": [77.20269, 28.55388],
                  "shortDescriptionOfProgram": "Take a relaxing evening stroll at Deer Park, a peaceful green space where you might spot deer and peacocks."
                }
              ]
            },
            {
              "day": 3,
              "date": "Wednesday 25 September",
              "program": [
                {
                  "id": 11,
                  "programOrPlaceName": "Hike to Surajkund Lake",
                  "timeSpentThere": "3 hours",
                  "location": "Surajkund, Faridabad",
                  "coordinateOfEvent": [77.27823, 28.48996],
                  "shortDescriptionOfProgram": "Explore the scenic trails leading to the Surajkund Lake, an ancient reservoir just outside Delhi."
                },
                {
                  "id": 12,
                  "programOrPlaceName": "Wellness Retreat at Aheli Spa, The Roseate",
                  "timeSpentThere": "2 hours",
                  "location": "Samalkha, New Delhi",
                  "coordinateOfEvent": [77.12468, 28.53443],
                  "shortDescriptionOfProgram": "Rejuvenate with holistic wellness therapies at the luxurious Aheli Spa at The Roseate."
                },
                {
                  "id": 13,
                  "programOrPlaceName": "Visit to Qutub Minar",
                  "timeSpentThere": "1.5 hours",
                  "location": "Mehrauli, New Delhi",
                  "coordinateOfEvent": [77.18557, 28.52444],
                  "shortDescriptionOfProgram": "Marvel at the iconic Qutub Minar, a UNESCO World Heritage site and one of the tallest brick minarets in the world."
                },
                {
                  "id": 14,
                  "programOrPlaceName": "Lunch at Indian Accent",
                  "timeSpentThere": "1.5 hours",
                  "location": "The Lodhi, New Delhi",
                  "coordinateOfEvent": [77.24384, 28.59458],
                  "shortDescriptionOfProgram": "Enjoy a gourmet Indian meal at Indian Accent, known for its innovative dishes and fine dining experience."
                },
                {
                  "id": 15,
                  "programOrPlaceName": "Evening Yoga at Tattva Yoga Studio",
                  "timeSpentThere": "1.5 hours",
                  "location": "Lajpat Nagar, New Delhi",
                  "coordinateOfEvent": [77.24353, 28.57158],
                  "shortDescriptionOfProgram": "Conclude your trip with a relaxing evening yoga session at Tattva Yoga Studio to unwind and reflect on your journey."
                }
              ]
            }
          ],
          "estimatedCosts": [
            {
              "category": "Accommodation",
              "hostelCostPerNight": 15,
              "hotelCostPerNight": 50,
              "luxuryHotelCostPerNight": 180,
              "airbnbCostPerNight": 35
            },
            {
              "category": "Transportation",
              "busCost": 0.4,
              "taxiCost": 8,
              "trainCost": 0.6,
              "rentalCost": 25
            },
            {
              "category": "Food",
              "streetFoodCost": 2,
              "budgetRestaurantCost": 5,
              "fancyRestaurantCost": 25,
              "traditionalFoodCost": 12
            },
            {
              "category": "Activities",
              "mainActivityForEachDay": [
                {
                  "mainActivityName": "Morning Yoga at Lodhi Gardens",
                  "costOfProgram": 0
                },
                {
                  "mainActivityName": "Hike at Aravalli Biodiversity Park",
                  "costOfProgram": 0
                },
                {
                  "mainActivityName": "Hike to Surajkund Lake",
                  "costOfProgram": 0
                }
              ]
            }
          ]
        
        
      },
      {
        "destination": {
          "numberOfDays": 3,
          "destinationCity": "Shimla",
          "destinationCountry": "India",
          "currency": "INR",
          "oneDollarInLocalCurrency": 83.04,
          "languagesSpoken": ["Hindi", "English"],
          "timeThereInUtcFormat": "UTC +5:30",
          "capitalOfTheCountry": "New Delhi",
          "localWeather": "mountainous",
          "temperatureRangeThroughTheYear": "5°C to 30°C",
          "shortDescription": "Shimla, a beautiful hill station nestled in the Himalayas, is known for its scenic views, cool climate, and colonial architecture. It's a popular destination for trekking and wellness retreats.",
          "shortHistory": "Once the summer capital of British India, Shimla has a rich colonial history, with many buildings from the British era still standing today. The town is famous for its role in British-Indian politics.",
          "startDate": "2024-09-23",
          "endDate": "2024-09-25"
        },
        "itinerary": [
          {
            "day": 1,
            "date": "Monday 23 September",
            "program": [
              {
                "id": 1,
                "programOrPlaceName": "Jakhoo Temple Hike",
                "timeSpentThere": "2 hours",
                "location": "Jakhoo Hill",
                "coordinateOfEvent": [77.1800, 31.1035],
                "shortDescriptionOfProgram": "A moderate hike up Jakhoo Hill to the famous Jakhoo Temple, offering stunning panoramic views of Shimla and the surrounding mountains."
              },
              {
                "id": 2,
                "programOrPlaceName": "Mall Road Stroll",
                "timeSpentThere": "1.5 hours",
                "location": "Mall Road, Shimla",
                "coordinateOfEvent": [77.1734, 31.1048],
                "shortDescriptionOfProgram": "Explore Shimla's famous Mall Road, lined with shops, cafes, and colonial-era buildings, perfect for an evening stroll."
              },
              {
                "id": 3,
                "programOrPlaceName": "Kufri Wellness Retreat",
                "timeSpentThere": "2 hours",
                "location": "Kufri",
                "coordinateOfEvent": [77.2672, 31.0989],
                "shortDescriptionOfProgram": "Spend time at a wellness retreat in Kufri, indulging in yoga, meditation, and natural therapies."
              },
              {
                "id": 4,
                "programOrPlaceName": "Evening Meditation at Tara Devi Temple",
                "timeSpentThere": "1 hour",
                "location": "Tara Devi Temple",
                "coordinateOfEvent": [77.1386, 31.0688],
                "shortDescriptionOfProgram": "A peaceful evening meditation session at the ancient Tara Devi Temple, known for its tranquil surroundings."
              },
              {
                "id": 5,
                "programOrPlaceName": "Dinner at Cafe Shimla Times",
                "timeSpentThere": "1.5 hours",
                "location": "Mall Road, Shimla",
                "coordinateOfEvent": [77.1734, 31.1048],
                "shortDescriptionOfProgram": "Enjoy a delicious meal at Cafe Shimla Times, known for its cozy ambiance and stunning views of the city."
              }
            ]
          },
          {
            "day": 2,
            "date": "Tuesday 24 September",
            "program": [
              {
                "id": 6,
                "programOrPlaceName": "Chadwick Falls Hike",
                "timeSpentThere": "3 hours",
                "location": "Chadwick Falls",
                "coordinateOfEvent": [77.1451, 31.1192],
                "shortDescriptionOfProgram": "A refreshing hike through dense forests leading to Chadwick Falls, one of Shimla’s most beautiful waterfalls."
              },
              {
                "id": 7,
                "programOrPlaceName": "Relaxation at Wildflower Hall Spa",
                "timeSpentThere": "2 hours",
                "location": "Wildflower Hall, Mashobra",
                "coordinateOfEvent": [77.2452, 31.1523],
                "shortDescriptionOfProgram": "Unwind with a luxurious spa experience at the renowned Wildflower Hall, offering Himalayan-inspired wellness therapies."
              },
              {
                "id": 8,
                "programOrPlaceName": "Lunch at Himachali Rasoi",
                "timeSpentThere": "1 hour",
                "location": "Mall Road, Shimla",
                "coordinateOfEvent": [77.1734, 31.1048],
                "shortDescriptionOfProgram": "Enjoy authentic Himachali cuisine at this quaint restaurant, serving traditional local dishes like Siddu and Dham."
              },
              {
                "id": 9,
                "programOrPlaceName": "Nature Walk in Glen Forest",
                "timeSpentThere": "1.5 hours",
                "location": "Glen Forest",
                "coordinateOfEvent": [77.1734, 31.0845],
                "shortDescriptionOfProgram": "A relaxing nature walk through Glen Forest, surrounded by towering deodar and pine trees, offering a peaceful retreat from the city's hustle."
              },
              {
                "id": 10,
                "programOrPlaceName": "Evening Yoga Session at Himalayan Iyengar Yoga Centre",
                "timeSpentThere": "1.5 hours",
                "location": "Shimla",
                "coordinateOfEvent": [77.1734, 31.1048],
                "shortDescriptionOfProgram": "End the day with a calming yoga session at this renowned yoga center, focusing on holistic well-being."
              }
            ]
          },
          {
            "day": 3,
            "date": "Wednesday 25 September",
            "program": [
              {
                "id": 11,
                "programOrPlaceName": "Mashobra Valley Hike",
                "timeSpentThere": "3 hours",
                "location": "Mashobra Valley",
                "coordinateOfEvent": [77.2500, 31.1517],
                "shortDescriptionOfProgram": "An early morning hike through Mashobra Valley, offering breathtaking views of the surrounding hills and villages."
              },
              {
                "id": 12,
                "programOrPlaceName": "Relaxation and Ayurveda Massage",
                "timeSpentThere": "2 hours",
                "location": "Ananda Wellness Retreat",
                "coordinateOfEvent": [77.1734, 31.1048],
                "shortDescriptionOfProgram": "Experience traditional Ayurvedic therapies at this wellness retreat, designed to rejuvenate both body and mind."
              },
              {
                "id": 13,
                "programOrPlaceName": "Lunch at Cafe Sol",
                "timeSpentThere": "1 hour",
                "location": "Mall Road, Shimla",
                "coordinateOfEvent": [77.1734, 31.1048],
                "shortDescriptionOfProgram": "A delightful lunch at Cafe Sol, offering a mix of continental and local dishes, with a scenic view of the surrounding hills."
              },
              {
                "id": 14,
                "programOrPlaceName": "Hike to Summer Hill",
                "timeSpentThere": "1.5 hours",
                "location": "Summer Hill, Shimla",
                "coordinateOfEvent": [77.1549, 31.1054],
                "shortDescriptionOfProgram": "An easy hike to Summer Hill, a quiet spot offering stunning views of the sunset over Shimla."
              },
              {
                "id": 15,
                "programOrPlaceName": "Sunset Yoga at the Ridge",
                "timeSpentThere": "1 hour",
                "location": "The Ridge, Shimla",
                "coordinateOfEvent": [77.1734, 31.1048],
                "shortDescriptionOfProgram": "Conclude your trip with a sunset yoga session at The Ridge, Shimla’s most iconic spot, overlooking the majestic mountains."
              }
            ]
          }
        ],
        "estimatedCosts": [
          {
            "category": "Accommodation",
            "hostelCostPerNight": 15,
            "hotelCostPerNight": 50,
            "luxuryHotelCostPerNight": 200,
            "airbnbCostPerNight": 40
          },
          {
            "category": "Transportation",
            "busCost": 1,
            "taxiCost": 10,
            "trainCost": 5,
            "rentalCost": 30
          },
          {
            "category": "Food",
            "streetFoodCost": 3,
            "budgetRestaurantCost": 8,
            "fancyRestaurantCost": 25,
            "traditionalFoodCost": 10
          },
          {
            "category": "Activities",
            "mainActivityForEachDay": [
              {
                "mainActivityName": "Jakhoo Temple Hike",
                "costOfProgram": 0
              },
              {
                "mainActivityName": "Chadwick Falls Hike",
                "costOfProgram": 0
              },
              {
                "mainActivityName": "Mashobra Valley Hike",
                "costOfProgram": 0
              }
            ]
          }
        ]
      }
      
      
  
    ]
  
    
    // Extracting and parsing the content from the response
    // const contentString = response.data.choices[0].message.content;
const  contentString = response[2];
    // If response is a string parse it into json, if it's json return normally
    if (typeof contentString === 'string') {
      const parsedContent = JSON.parse(contentString);
      return parsedContent;
  } else {
      return contentString;
  }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error calling OpenAI API:', error.message);
      if (error.response) {
        console.error(error.response.data);
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }
    return null;
  }
};