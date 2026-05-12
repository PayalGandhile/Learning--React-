const ListOfRestaurant = [
  {
    "data": {
      "cards": [
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
              "collectionId": "83639",
              "title": "Biryani",
              "description": "Taste these delectable classics, delectable biryanis to make your day.",
              "imageId": "COLLECTIONS/IMAGES/MERCH/2025/3/7/6b765643-8f10-4176-b1f4-5e096d4182c0_biryani nv (3) (1).png",
              "aspectRatio": "3.44",
              "cta": {
                "link": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani,biryani,ads_pc_biryani",
                "type": "collectionv2"
              },
              "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
              "count": "33 restaurants",
              "navBarConfig": {}
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
              "sortConfigs": [
                {
                  "key": "relevance",
                  "title": "Relevance (Default)",
                  "selected": true,
                  "defaultSelection": true
                },
                {
                  "key": "deliveryTimeAsc",
                  "title": "Delivery Time"
                },
                {
                  "key": "modelBasedRatingDesc",
                  "title": "Rating"
                },
                {
                  "key": "costForTwoAsc",
                  "title": "Cost: Low to High"
                },
                {
                  "key": "costForTwoDesc",
                  "title": "Cost: High to Low"
                }
              ],
              "restaurantCount": 33,
              "facetList": [
                {
                  "label": "10 Mins Delivery",
                  "id": "isRestaurantBolt",
                  "selection": "SELECT_TYPE_SINGLESELECT",
                  "facetInfo": [
                    {
                      "label": "10 Mins Delivery",
                      "id": "isRestaurantBoltfacetquery0",
                      "analytics": {},
                      "openFilter": true
                    }
                  ],
                  "viewType": "VIEW_TYPE_FLATTENED",
                  "subLabel": "Filter by",
                  "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
                  "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
                },
                {
                  "label": "Veg/Non-Veg",
                  "id": "isVeg",
                  "selection": "SELECT_TYPE_MULTISELECT",
                  "facetInfo": [
                    {
                      "label": "Non Veg",
                      "id": "isVegfacetquery0",
                      "analytics": {},
                      "openFilter": true
                    },
                    {
                      "label": "Pure Veg",
                      "id": "isVegfacetquery1",
                      "analytics": {},
                      "openFilter": true
                    }
                  ],
                  "viewType": "VIEW_TYPE_HALF_CARD",
                  "subLabel": "Filter by",
                  "openFilter": true
                },
                {
                  "label": "Ratings",
                  "id": "rating",
                  "selection": "SELECT_TYPE_MULTISELECT",
                  "facetInfo": [
                    {
                      "label": "Ratings",
                      "id": "ratingfacetquery0",
                      "analytics": {},
                      "openFilter": true
                    },
                    {
                      "label": "Ratings 4.0+",
                      "id": "ratingfacetquery1",
                      "analytics": {},
                      "openFilter": true
                    }
                  ],
                  "viewType": "VIEW_TYPE_HALF_CARD",
                  "subLabel": "Filter by",
                  "openFilter": true
                },
                {
                  "label": "Delivery Time",
                  "id": "deliveryTime",
                  "selection": "SELECT_TYPE_MULTISELECT",
                  "facetInfo": [
                    {
                      "label": "Less than 30 mins",
                      "id": "deliveryTimefacetquery0",
                      "analytics": {},
                      "openFilter": true
                    },
                    {
                      "label": "Less than 45 mins",
                      "id": "deliveryTimefacetquery1",
                      "analytics": {},
                      "openFilter": true
                    }
                  ],
                  "viewType": "VIEW_TYPE_HALF_CARD",
                  "subLabel": "Filter by",
                  "openFilter": true
                },
                {
                  "label": "Cost For Two",
                  "id": "costForTwo",
                  "selection": "SELECT_TYPE_MULTISELECT",
                  "facetInfo": [
                    {
                      "label": "Less than Rs. 300",
                      "id": "costForTwofacetquery0",
                      "analytics": {},
                      "openFilter": true
                    },
                    {
                      "label": "Rs.300 - Rs.600",
                      "id": "costForTwofacetquery1",
                      "analytics": {},
                      "openFilter": true
                    },
                    {
                      "label": "Greater than Rs. 600",
                      "id": "costForTwofacetquery2",
                      "analytics": {},
                      "openFilter": true
                    }
                  ],
                  "viewType": "VIEW_TYPE_HALF_CARD",
                  "subLabel": "Filter by",
                  "openFilter": true
                }
              ],
              "widgetId": "inlineFacetFilter"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              "layout": {
                "rows": 1,
                "widgetPadding": {
                  "left": 16,
                  "top": 12,
                  "right": 16
                },
                "widgetTheme": {
                  "defaultMode": {
                    "backgroundColour": "#FFFFFF",
                    "theme": "THEME_TYPE_LIGHT",
                    "themeVariant": "THEME_VARIANT_DEFAULT"
                  },
                  "darkMode": {
                    "backgroundColour": "#1B3028",
                    "theme": "THEME_TYPE_DARK",
                    "themeVariant": "THEME_VARIANT_DEFAULT"
                  }
                }
              },
              "id": "restaurantCountWidget",
              "gridElements": {
                "infoWithStyle": {
                  "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                  "text": "Restaurants to explore",
                  "headerStyling": {
                    "textSize": 15,
                    "textColor": "text_color_highest_emphasis",
                    "textFontName": "FONT_NAME_HEADER_H5",
                    "maxLines": 1
                  }
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "763697",
                "name": "New Dwarka Garden Restaurant And Banquet Hall",
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/3/977bd6a8-9ab6-4a9d-9842-5969b551a4fb_e6d92397-d89f-426b-95dc-860a852b89d8.JPG",
                "locality": "Charholi",
                "areaName": "Bhosari",
                "costForTwo": "₹1000 for two",
                "cuisines": [
                  "North Indian",
                  "Biryani",
                  "Chinese",
                  "Kebabs",
                  "Mughlai",
                  "Seafood",
                  "Desserts"
                ],
                "avgRating": 4.2,
                "parentId": "451557",
                "avgRatingString": "4.2",
                "totalRatingsString": "746",
                "promoted": true,
                "adTrackingId": "cid=66740e85-f8d3-4039-a1f0-9bd6c1e3a33c~p=0~adgrpid=66740e85-f8d3-4039-a1f0-9bd6c1e3a33c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=763697~plpr=COLLECTION~eid=861851b8-14d6-4d51-a66d-20b81acd3336~srvts=1778497093388~collid=83639",
                "sla": {
                  "deliveryTime": 41,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "40-45 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-05-11 23:30:00",
                  "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                  }
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {},
                  "commsStyling": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "campaignId": "66740e85-f8d3-4039-a1f0-9bd6c1e3a33c",
                "priceComparisonComms": {}
              },
              "analytics": {},
              "cta": {
                "link": "swiggy://menu?restaurant_id=763697&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1155698",
                "name": "GharSe - Homestyle & Healthy Tiffins",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/24/83cf098b-c319-45d5-975d-479b6c0a0d2a_1155698.JPG",
                "locality": "Nanadeep Society",
                "areaName": "Chovisawadi",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Biryani",
                  "Thalis",
                  "Home Food"
                ],
                "avgRating": 4.1,
                "parentId": "663389",
                "avgRatingString": "4.1",
                "totalRatingsString": "151",
                "sla": {
                  "deliveryTime": 25,
                  "lastMileTravel": 1.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20-30 mins",
                  "lastMileTravelString": "1.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-05-12 02:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "android/static-assets/icons/big_rx.png",
                      "description": "bolt!"
                    },
                    {
                      "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                      "description": "EatRight"
                    },
                    {
                      "imageId": "brand_cards/Badges%202026/123_Best%20in%20Newcomer2026.png",
                      "description": "Best in Newcomer"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        },
                        {
                          "attributes": {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "EatRight",
                            "theme": ""
                          }
                        },
                        {
                          "attributes": {
                            "theme": "",
                            "imageId": "brand_cards/Badges%202026/123_Best%20in%20Newcomer2026.png",
                            "description": "Best in Newcomer"
                          }
                        }
                      ]
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹119"
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {},
                  "commsStyling": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "priceComparisonComms": {}
              },
              "analytics": {},
              "cta": {
                "link": "swiggy://menu?restaurant_id=1155698&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "960710",
                "name": "Swad biryani and cafe",
                "cloudinaryImageId": "ovfqwmyfiudrmb3q03c8",
                "locality": "Bhosari",
                "areaName": "Bhosari",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Biryani",
                  "Cafe"
                ],
                "avgRating": 3.5,
                "parentId": "563441",
                "avgRatingString": "3.5",
                "totalRatingsString": "24",
                "promoted": true,
                "adTrackingId": "cid=e41e85e8-9aa6-4f6c-bab5-ae134d02ed1c~p=1~adgrpid=e41e85e8-9aa6-4f6c-bab5-ae134d02ed1c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=960710~plpr=COLLECTION~eid=2aa460a1-497d-4438-9fa4-157fe4eafbee~srvts=1778497093388~collid=83639",
                "sla": {
                  "deliveryTime": 36,
                  "lastMileTravel": 2.2,
                  "serviceability": "SERVICEABLE",
                  "slaString": "35-40 mins",
                  "lastMileTravelString": "2.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-05-11 22:45:00",
                  "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                  }
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {},
                  "commsStyling": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "campaignId": "e41e85e8-9aa6-4f6c-bab5-ae134d02ed1c",
                "priceComparisonComms": {}
              },
              "analytics": {},
              "cta": {
                "link": "swiggy://menu?restaurant_id=960710&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1201413",
                "name": "1881 Dum House: Lucknow's Legacy",
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/9/23/bbfa7d1b-793d-4905-ae9b-d9883d28025e_e4dc7c2f-1f0e-4592-8fce-a022996f66c3.jpg",
                "locality": "Nanadeep Society",
                "areaName": "Chovisawadi",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "North Indian",
                  "Biryani",
                  "Awadhi"
                ],
                "avgRating": 4.1,
                "parentId": "687728",
                "avgRatingString": "4.1",
                "totalRatingsString": "164",
                "sla": {
                  "deliveryTime": 25,
                  "lastMileTravel": 1.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20-30 mins",
                  "lastMileTravelString": "1.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-05-12 02:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "android/static-assets/icons/big_rx.png",
                      "description": "bolt!"
                    },
                    {
                      "imageId": "brand_cards/Badges%202026/123_Best%20in%20Newcomer2026.png",
                      "description": "Best in Newcomer"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        },
                        {
                          "attributes": {
                            "imageId": "brand_cards/Badges%202026/123_Best%20in%20Newcomer2026.png",
                            "description": "Best in Newcomer",
                            "theme": ""
                          }
                        }
                      ]
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹99"
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {},
                  "commsStyling": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "priceComparisonComms": {}
              },
              "analytics": {},
              "cta": {
                "link": "swiggy://menu?restaurant_id=1201413&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "534417",
                "name": "The Shawarma Co.",
                "cloudinaryImageId": "qtsfqe3wurprnw7esn2e",
                "locality": "Vajpeyi Garden",
                "areaName": "Nigdi",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Arabian",
                  "Beverages"
                ],
                "avgRating": 3.8,
                "parentId": "477048",
                "avgRatingString": "3.8",
                "totalRatingsString": "146",
                "promoted": true,
                "adTrackingId": "cid=dfc83e0c-b2f8-4ec0-83f4-715f732f6441~p=2~adgrpid=dfc83e0c-b2f8-4ec0-83f4-715f732f6441#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=534417~plpr=COLLECTION~eid=a378d4c7-5696-4078-9196-0028576c7b45~srvts=1778497093388~collid=83639",
                "sla": {
                  "deliveryTime": 61,
                  "lastMileTravel": 11.8,
                  "serviceability": "SERVICEABLE",
                  "slaString": "60-70 mins",
                  "lastMileTravelString": "11.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-05-12 00:00:00",
                  "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹109",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {},
                  "commsStyling": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "campaignId": "dfc83e0c-b2f8-4ec0-83f4-715f732f6441",
                "priceComparisonComms": {}
              },
              "analytics": {},
              "cta": {
                "link": "swiggy://menu?restaurant_id=534417&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "971590",
                "name": "Itminaan Matka Biryani - Slow Cooked",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/24/7b6b3dc3-db56-4d6b-9e6d-9bdde4d2da65_971590.JPG",
                "locality": "Nanadeep Society",
                "areaName": "Chovisawadi",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Biryani",
                  "Mughlai"
                ],
                "avgRating": 4.2,
                "parentId": "107673",
                "avgRatingString": "4.2",
                "totalRatingsString": "112",
                "sla": {
                  "deliveryTime": 25,
                  "lastMileTravel": 1.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20-30 mins",
                  "lastMileTravelString": "1.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-05-12 02:00:00",
                  "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹139"
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {},
                  "commsStyling": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "priceComparisonComms": {}
              },
              "analytics": {},
              "cta": {
                "link": "swiggy://menu?restaurant_id=971590&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "658851",
                "name": "Krishna Veg",
                "cloudinaryImageId": "esqwhuv1taucfl2kmevg",
                "locality": "Pingale road",
                "areaName": "Nigdi",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "North Indian",
                  "South Indian",
                  "Chinese",
                  "Beverages",
                  "Snacks"
                ],
                "avgRating": 4.1,
                "veg": true,
                "parentId": "18864",
                "avgRatingString": "4.1",
                "totalRatingsString": "1.8K+",
                "promoted": true,
                "adTrackingId": "cid=3b078116-c0ba-4f2b-a913-15d505744549~p=3~adgrpid=3b078116-c0ba-4f2b-a913-15d505744549#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=658851~plpr=COLLECTION~eid=72f60c78-27de-4f3a-988b-f9055bc081eb~srvts=1778497093388~collid=83639",
                "sla": {
                  "deliveryTime": 57,
                  "lastMileTravel": 10.3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "55-65 mins",
                  "lastMileTravelString": "10.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2026-05-11 23:00:00",
                  "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹80",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "orderabilityCommunication": {
                  "title": {},
                  "subTitle": {},
                  "message": {},
                  "customIcon": {},
                  "commsStyling": {}
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                  }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "campaignId": "3b078116-c0ba-4f2b-a913-15d505744549",
                "priceComparisonComms": {}
              },
              "analytics": {},
              "cta": {
                "link": "swiggy://menu?restaurant_id=658851&source=collection&query=Biryani",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
            }
          }
        }
      ],
    }
  }

]
export default ListOfRestaurant;