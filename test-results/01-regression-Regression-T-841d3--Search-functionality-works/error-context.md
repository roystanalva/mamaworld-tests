# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 01-regression.spec.js >> Regression Tests - Home Page >> 09. Search functionality works
- Location: tests\playwright\01-regression.spec.js:48:3

# Error details

```
TimeoutError: page.fill: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('input[type="search"], input[placeholder*="Search"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - paragraph [ref=e14]: Hurry Up, Shop Now!
        - paragraph [ref=e16]: 50% Off
      - generic [ref=e18]:
        - img [ref=e19]
        - paragraph [ref=e23]: 00H:50M:47S
    - generic [ref=e24]:
      - link "Search" [ref=e26] [cursor=pointer]:
        - /url: /search
        - generic [ref=e28]:
          - img [ref=e29]
          - textbox [ref=e31]
          - paragraph [ref=e32]: Search
      - link "logo__Mama World" [ref=e33] [cursor=pointer]:
        - /url: /
        - img "logo__Mama World" [ref=e34]
      - generic [ref=e35]:
        - link [ref=e36] [cursor=pointer]:
          - /url: /orders
          - button [ref=e37]:
            - img [ref=e39]
        - link [ref=e41] [cursor=pointer]:
          - /url: /bag
          - button [ref=e42]:
            - img [ref=e44]
    - list [ref=e48]:
      - listitem [ref=e49] [cursor=pointer]:
        - link "HOME" [ref=e50]:
          - /url: https://mamaworld.in/
          - paragraph [ref=e51]: HOME
      - listitem [ref=e52] [cursor=pointer]:
        - link "MATERNITY NIGHT WEAR" [ref=e53]:
          - /url: https://mamaworld.in/only-night-wear/collection/Aahm3Wot
          - paragraph [ref=e54]: MATERNITY NIGHT WEAR
      - listitem [ref=e55] [cursor=pointer]:
        - link "MATERNITY CO-ORD SET" [ref=e56]:
          - /url: /collection/keR5QsOH
          - paragraph [ref=e57]: MATERNITY CO-ORD SET
      - listitem [ref=e58] [cursor=pointer]:
        - link "NEW ARRIVALS" [ref=e59]:
          - /url: /collection/cF1wR54K
          - paragraph [ref=e60]: NEW ARRIVALS
      - listitem [ref=e61] [cursor=pointer]:
        - link "BESTSELLER" [ref=e62]:
          - /url: /collection/kRr89Z5K
          - paragraph [ref=e63]: BESTSELLER
  - generic [ref=e64]:
    - generic [ref=e67]:
      - img [ref=e69] [cursor=pointer]
      - generic [ref=e74]:
        - link [ref=e77] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e80]
        - link "BANNERS_undefined__undefined" [ref=e83] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img "BANNERS_undefined__undefined" [ref=e86]
        - link [ref=e89] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/keR5QsOH
          - img [ref=e92]
        - link [ref=e95] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/kRr89Z5K
          - img [ref=e98]
        - link [ref=e101] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e104]
        - link [ref=e107] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e110]
        - link [ref=e113] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e116]
        - link [ref=e119] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/keR5QsOH
          - img [ref=e122]
        - link [ref=e125] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/kRr89Z5K
          - img [ref=e128]
        - link [ref=e131] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e134]
        - link [ref=e137] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e140]
      - img [ref=e142] [cursor=pointer]
      - list [ref=e146]:
        - listitem [ref=e147] [cursor=pointer]
        - listitem [ref=e149] [cursor=pointer]
        - listitem [ref=e151] [cursor=pointer]
        - listitem [ref=e153] [cursor=pointer]
        - listitem [ref=e155] [cursor=pointer]
    - generic [ref=e159]:
      - generic [ref=e160]: CATEGORY
      - generic [ref=e164]:
        - link "CATEGORY_MATERNITY_NIGHT_SUIT___Mama World MATERNITY NIGHT SUIT" [ref=e167] [cursor=pointer]:
          - /url: /NIGHT-WEAR/collection/gkqvHb7d
          - generic [ref=e168]:
            - img "CATEGORY_MATERNITY_NIGHT_SUIT___Mama World" [ref=e169]
            - paragraph [ref=e170]: MATERNITY NIGHT SUIT
        - link "CATEGORY_CORD_SET__Mama World CORD SET" [ref=e173] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/keR5QsOH
          - generic [ref=e174]:
            - img "CATEGORY_CORD_SET__Mama World" [ref=e175]
            - paragraph [ref=e176]: CORD SET
    - generic [ref=e178]:
      - generic [ref=e179]: SHOP BY CATEGORIES
      - generic [ref=e180]:
        - link "SHOP_BY_CATEGORIES_undefined__undefined EXPLORE FEEDING & MATERNITY DRESS" [ref=e182] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/gkqvHb7d
          - generic [ref=e183]:
            - img "SHOP_BY_CATEGORIES_undefined__undefined" [ref=e186]
            - link "EXPLORE FEEDING & MATERNITY DRESS" [ref=e188]:
              - /url: https://mamaworld.in/collection/gkqvHb7d
              - button "EXPLORE FEEDING & MATERNITY DRESS" [ref=e189]:
                - paragraph [ref=e191]: EXPLORE FEEDING & MATERNITY DRESS
        - link "SHOP_BY_CATEGORIES_undefined__undefined EXPLORE NIGHT WEAR" [ref=e193] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/gkqvHb7d
          - generic [ref=e194]:
            - img "SHOP_BY_CATEGORIES_undefined__undefined" [ref=e197]
            - link "EXPLORE NIGHT WEAR" [ref=e199]:
              - /url: https://mamaworld.in/collection/gkqvHb7d
              - button "EXPLORE NIGHT WEAR" [ref=e200]:
                - paragraph [ref=e202]: EXPLORE NIGHT WEAR
        - link "SHOP_BY_CATEGORIES_undefined__undefined EXPLORE BEST SELLER" [ref=e204] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/kRr89Z5K
          - generic [ref=e205]:
            - img "SHOP_BY_CATEGORIES_undefined__undefined" [ref=e208]
            - link "EXPLORE BEST SELLER" [ref=e210]:
              - /url: https://mamaworld.in/collection/kRr89Z5K
              - button "EXPLORE BEST SELLER" [ref=e211]:
                - paragraph [ref=e213]: EXPLORE BEST SELLER
    - img "BANNNER_undefined__undefined" [ref=e220]
    - generic [ref=e222]:
      - generic [ref=e223]:
        - paragraph [ref=e225]: IN THE SPOTLIGHT
        - link "View All" [ref=e227] [cursor=pointer]:
          - /url: /IN-THE-SPOTLIGHT/collection/Vd_QRvSB
          - paragraph [ref=e228]: View All
      - generic [ref=e230]:
        - generic [ref=e232]:
          - paragraph [ref=e236]: Extra 50% OFF
          - link [ref=e237] [cursor=pointer]:
            - /url: /Navy-Blue---Gold-Ethnic-Floral-Print-Cotton-Maternity/catalogue/aSuykBLz/q1_5ccJy
            - generic [ref=e238]:
              - generic [ref=e240]:
                - generic [ref=e241]:
                  - generic [ref=e243]:
                    - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined" [ref=e244]
                    - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined" [ref=e245]
                  - generic:
                    - generic:
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                  - generic:
                    - generic:
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                  - generic:
                    - generic:
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                - article [ref=e246]:
                  - img [ref=e247]
                  - img [ref=e251]
              - paragraph [ref=e255]: Navy Blue & Gold Ethnic Floral Print Cotton Maternity Suit Set – 3-Piece Ensemble with Striped Trousers and Matching Dupatta
              - generic [ref=e256]:
                - text: ₹1,499₹3,999
                - generic [ref=e257]: 62% OFF
        - generic [ref=e261]:
          - paragraph [ref=e265]: Extra 50% OFF
          - link "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton Royal blue Floral Print Maternity & Feeding Kurta Set ₹1,299₹3,49962% OFF" [ref=e266] [cursor=pointer]:
            - /url: /Cotton-Royal-blue-Floral-Print-Maternity---Feeding-Kurta/catalogue/TBHUdBbL/PogSA9ws
            - generic [ref=e267]:
              - generic [ref=e269]:
                - generic [ref=e270]:
                  - generic [ref=e272]:
                    - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined" [ref=e273]
                    - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined" [ref=e274]
                  - generic:
                    - generic:
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                - article [ref=e275]:
                  - img [ref=e276]
                  - img [ref=e280]
              - paragraph [ref=e284]: Cotton Royal blue Floral Print Maternity & Feeding Kurta Set
              - generic [ref=e285]:
                - text: ₹1,299₹3,499
                - generic [ref=e286]: 62% OFF
        - generic [ref=e290]:
          - paragraph [ref=e294]: Extra 50% OFF
          - link "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton Purple Floral Print Maternity Kurta Set ₹1,299₹3,49962% OFF" [ref=e295] [cursor=pointer]:
            - /url: /Cotton-Purple-Floral-Print-Maternity-Kurta-Set/catalogue/OQY_jFcF/Ssn9tRSy
            - generic [ref=e296]:
              - generic [ref=e298]:
                - generic [ref=e299]:
                  - generic [ref=e301]:
                    - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined" [ref=e302]
                    - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined" [ref=e303]
                  - generic:
                    - generic:
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                - article [ref=e304]:
                  - img [ref=e305]
                  - img [ref=e309]
              - paragraph [ref=e313]: Cotton Purple Floral Print Maternity Kurta Set
              - generic [ref=e314]:
                - text: ₹1,299₹3,499
                - generic [ref=e315]: 62% OFF
        - generic [ref=e319]:
          - paragraph [ref=e323]: Extra 50% OFF
          - link "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton Wine Floral Print Maternity Kurta Set (Top & Bottom) ₹1,299₹3,49962% OFF" [ref=e324] [cursor=pointer]:
            - /url: /Cotton-Wine-Floral-Print-Maternity-Kurta-Set---Top/catalogue/aUYjoIzo/TioeAis0
            - generic [ref=e325]:
              - generic [ref=e327]:
                - generic [ref=e328]:
                  - generic [ref=e330]:
                    - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined" [ref=e331]
                    - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined" [ref=e332]
                  - generic:
                    - generic:
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                - article [ref=e333]:
                  - img [ref=e334]
                  - img [ref=e338]
              - paragraph [ref=e342]: Cotton Wine Floral Print Maternity Kurta Set (Top & Bottom)
              - generic [ref=e343]:
                - text: ₹1,299₹3,499
                - generic [ref=e344]: 62% OFF
    - generic [ref=e356]: Your browser does not support HTML video.
    - generic [ref=e358]:
      - generic [ref=e359]:
        - paragraph [ref=e361]: ALL PRODUCTS
        - link "View All" [ref=e363] [cursor=pointer]:
          - /url: /collection/all-products
          - paragraph [ref=e364]: View All
      - generic [ref=e366]:
        - generic [ref=e368]:
          - paragraph [ref=e372]: Extra 50% OFF
          - link [ref=e373] [cursor=pointer]:
            - /url: /Navy-Blue---Gold-Ethnic-Floral-Print-Cotton-Maternity/catalogue/aSuykBLz/q1_5ccJy
            - generic [ref=e374]:
              - generic [ref=e376]:
                - generic [ref=e377]:
                  - generic [ref=e379]:
                    - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined" [ref=e380]
                    - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined" [ref=e381]
                  - generic:
                    - generic:
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                  - generic:
                    - generic:
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                  - generic:
                    - generic:
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                      - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined"
                - article [ref=e382]:
                  - img [ref=e383]
                  - img [ref=e387]
              - paragraph [ref=e391]: Navy Blue & Gold Ethnic Floral Print Cotton Maternity Suit Set – 3-Piece Ensemble with Striped Trousers and Matching Dupatta
              - generic [ref=e392]:
                - text: ₹1,499₹3,999
                - generic [ref=e393]: 62% OFF
        - generic [ref=e397]:
          - paragraph [ref=e401]: Extra 50% OFF
          - link "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton Royal blue Floral Print Maternity & Feeding Kurta Set ₹1,299₹3,49962% OFF" [ref=e402] [cursor=pointer]:
            - /url: /Cotton-Royal-blue-Floral-Print-Maternity---Feeding-Kurta/catalogue/TBHUdBbL/PogSA9ws
            - generic [ref=e403]:
              - generic [ref=e405]:
                - generic [ref=e406]:
                  - generic [ref=e408]:
                    - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined" [ref=e409]
                    - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined" [ref=e410]
                  - generic:
                    - generic:
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                      - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined"
                - article [ref=e411]:
                  - img [ref=e412]
                  - img [ref=e416]
              - paragraph [ref=e420]: Cotton Royal blue Floral Print Maternity & Feeding Kurta Set
              - generic [ref=e421]:
                - text: ₹1,299₹3,499
                - generic [ref=e422]: 62% OFF
        - generic [ref=e426]:
          - paragraph [ref=e430]: Extra 50% OFF
          - link "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton Purple Floral Print Maternity Kurta Set ₹1,299₹3,49962% OFF" [ref=e431] [cursor=pointer]:
            - /url: /Cotton-Purple-Floral-Print-Maternity-Kurta-Set/catalogue/OQY_jFcF/Ssn9tRSy
            - generic [ref=e432]:
              - generic [ref=e434]:
                - generic [ref=e435]:
                  - generic [ref=e437]:
                    - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined" [ref=e438]
                    - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined" [ref=e439]
                  - generic:
                    - generic:
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                      - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined"
                - article [ref=e440]:
                  - img [ref=e441]
                  - img [ref=e445]
              - paragraph [ref=e449]: Cotton Purple Floral Print Maternity Kurta Set
              - generic [ref=e450]:
                - text: ₹1,299₹3,499
                - generic [ref=e451]: 62% OFF
        - generic [ref=e455]:
          - paragraph [ref=e459]: Extra 50% OFF
          - link "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton Wine Floral Print Maternity Kurta Set (Top & Bottom) ₹1,299₹3,49962% OFF" [ref=e460] [cursor=pointer]:
            - /url: /Cotton-Wine-Floral-Print-Maternity-Kurta-Set---Top/catalogue/aUYjoIzo/TioeAis0
            - generic [ref=e461]:
              - generic [ref=e463]:
                - generic [ref=e464]:
                  - generic [ref=e466]:
                    - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined" [ref=e467]
                    - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined" [ref=e468]
                  - generic:
                    - generic:
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                      - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined"
                - article [ref=e469]:
                  - img [ref=e470]
                  - img [ref=e474]
              - paragraph [ref=e478]: Cotton Wine Floral Print Maternity Kurta Set (Top & Bottom)
              - generic [ref=e479]:
                - text: ₹1,299₹3,499
                - generic [ref=e480]: 62% OFF
    - generic [ref=e484]:
      - generic [ref=e485]:
        - paragraph [ref=e487]: BEST SELLER
        - link "View All" [ref=e489] [cursor=pointer]:
          - /url: /collection/best-sellers
          - paragraph [ref=e490]: View All
      - generic [ref=e492]:
        - generic [ref=e494]:
          - paragraph [ref=e498]: Extra 50% OFF
          - link "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral Pink Feeding & Maternity Dress With Zippers (Top & Bottom) ₹1,149₹2,29950% OFF" [ref=e499] [cursor=pointer]:
            - /url: /Coral-Pink-Feeding---Maternity-Dress-With-Zippers-/catalogue/uDgmyyF_/K2Rw6mJe
            - generic [ref=e500]:
              - generic [ref=e502]:
                - generic [ref=e503]:
                  - generic [ref=e505]:
                    - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e506]
                    - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e507]
                  - generic:
                    - generic:
                      - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - article [ref=e508]:
                  - img [ref=e509]
                  - img [ref=e513]
              - paragraph [ref=e517]: Coral Pink Feeding & Maternity Dress With Zippers (Top & Bottom)
              - generic [ref=e518]:
                - text: ₹1,149₹2,299
                - generic [ref=e519]: 50% OFF
        - generic [ref=e523]:
          - paragraph [ref=e527]: Extra 50% OFF
          - link "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion Blue Feeding Night Suits With Zippers (Top & Bottom) ₹1,099₹2,19950% OFF" [ref=e528] [cursor=pointer]:
            - /url: /Persion-Blue-Feeding-Night-Suits-With-Zippers--Top-/catalogue/q7JszNcg/TlH0gTuH
            - generic [ref=e529]:
              - generic [ref=e531]:
                - generic [ref=e532]:
                  - generic [ref=e534]:
                    - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e535]
                    - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e536]
                  - generic:
                    - generic:
                      - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                - article [ref=e537]:
                  - img [ref=e538]
                  - img [ref=e542]
              - paragraph [ref=e546]: Persion Blue Feeding Night Suits With Zippers (Top & Bottom)
              - generic [ref=e547]:
                - text: ₹1,099₹2,199
                - generic [ref=e548]: 50% OFF
        - generic [ref=e552]:
          - paragraph [ref=e556]: Extra 50% OFF
          - link "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine Feeding & Maternity Dress With Zippers (Top & Bottom) ₹1,149₹2,29950% OFF" [ref=e557] [cursor=pointer]:
            - /url: /Wine-Feeding---Maternity-Dress-With-Zippers--Top/catalogue/pUUijh83/EskUMYiU
            - generic [ref=e558]:
              - generic [ref=e560]:
                - generic [ref=e561]:
                  - generic [ref=e563]:
                    - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e564]
                    - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e565]
                  - generic:
                    - generic:
                      - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - article [ref=e566]:
                  - img [ref=e567]
                  - img [ref=e571]
              - paragraph [ref=e575]: Wine Feeding & Maternity Dress With Zippers (Top & Bottom)
              - generic [ref=e576]:
                - text: ₹1,149₹2,299
                - generic [ref=e577]: 50% OFF
        - generic [ref=e581]:
          - paragraph [ref=e585]: Extra 50% OFF
          - link "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee Feeding Night Suits With Zippers (Top & Bottom) ₹1,099₹2,19950% OFF" [ref=e586] [cursor=pointer]:
            - /url: /Coffee-Feeding-Night-Suits-With-Zippers--Top--/catalogue/eTLQ-BPV/wWF5mP3k
            - generic [ref=e587]:
              - generic [ref=e589]:
                - generic [ref=e590]:
                  - generic [ref=e592]:
                    - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e593]
                    - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e594]
                  - generic:
                    - generic:
                      - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                  - generic:
                    - generic:
                      - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                      - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                - article [ref=e595]:
                  - img [ref=e596]
                  - img [ref=e600]
              - paragraph [ref=e604]: Coffee Feeding Night Suits With Zippers (Top & Bottom)
              - generic [ref=e605]:
                - text: ₹1,099₹2,199
                - generic [ref=e606]: 50% OFF
    - generic [ref=e610]:
      - generic [ref=e611]:
        - generic [ref=e612]: CUSTOMERS FEEDBACK
        - link "View All" [ref=e614] [cursor=pointer]:
          - /url: /testimonials?type=product_testimonial
          - paragraph [ref=e615]: View All
      - generic [ref=e617]:
        - img [ref=e619] [cursor=pointer]
        - generic [ref=e624]:
          - generic [ref=e627]:
            - img [ref=e629]
            - generic [ref=e630]:
              - paragraph [ref=e631]: Rajalaxmi
              - generic [ref=e632]:
                - img [ref=e633]
                - img [ref=e635]
                - img [ref=e637]
                - img [ref=e639]
                - img [ref=e641]
                - paragraph [ref=e643]: 25/02/26
              - paragraph [ref=e645]:
                - text: I am always impressed with the support I have been getting. Quick responses from the staff and accommodating my needs at times when requested encourag..
                - paragraph [ref=e646] [cursor=pointer]: know more
          - generic [ref=e649]:
            - img [ref=e651]
            - generic [ref=e652]:
              - paragraph [ref=e653]: Amrita
              - generic [ref=e654]:
                - img [ref=e655]
                - img [ref=e657]
                - img [ref=e659]
                - img [ref=e661]
                - paragraph [ref=e663]: 02/03/26
              - paragraph [ref=e665]:
                - text: They treat the customer so generously also they hear our problems and try to solve them also they replied in WhatsApp quickly which I really liked. Th..
                - paragraph [ref=e666] [cursor=pointer]: know more
          - generic [ref=e669]:
            - img [ref=e671]
            - generic [ref=e672]:
              - paragraph [ref=e673]: Rubi
              - generic [ref=e674]:
                - img [ref=e675]
                - img [ref=e677]
                - img [ref=e679]
                - img [ref=e681]
                - img [ref=e683]
                - paragraph [ref=e685]: 28/02/26
              - paragraph [ref=e687]:
                - text: I have ordered and received several items now, and I have to say, I am in love with this store!!!! Everything I have received fit perfectly, and is go..
                - paragraph [ref=e688] [cursor=pointer]: know more
          - generic [ref=e691]:
            - img "CUSTOMERS_FEEDBACK_Prachi__undefined" [ref=e693]
            - generic [ref=e694]:
              - paragraph [ref=e695]: Prachi
              - generic [ref=e696]:
                - img [ref=e697]
                - img [ref=e699]
                - img [ref=e701]
                - img [ref=e703]
                - img [ref=e705]
                - paragraph [ref=e707]: 30/03/26
              - paragraph [ref=e709]:
                - text: They treat the customer so generously also they hear our problems and try to solve them also they replied in WhatsApp quickly which I really liked. Hi..
                - paragraph [ref=e710] [cursor=pointer]: know more
          - generic [ref=e713]:
            - img "CUSTOMERS_FEEDBACK_Neha__undefined" [ref=e715]
            - generic [ref=e716]:
              - paragraph [ref=e717]: Neha
              - generic [ref=e718]:
                - img [ref=e719]
                - img [ref=e721]
                - img [ref=e723]
                - img [ref=e725]
                - img [ref=e727]
                - paragraph [ref=e729]: 27/03/26
              - paragraph [ref=e731]:
                - text: I liked the color of the dress. The fitting is just perfect. Very comfortable to wear. Even the fabric is very soft. The package came before time, gre..
                - paragraph [ref=e732] [cursor=pointer]: know more
          - generic [ref=e735]:
            - img "CUSTOMERS_FEEDBACK_Anjali__undefined" [ref=e737]
            - generic [ref=e738]:
              - paragraph [ref=e739]: Anjali
              - generic [ref=e740]:
                - img [ref=e741]
                - img [ref=e743]
                - img [ref=e745]
                - img [ref=e747]
                - img [ref=e749]
                - paragraph [ref=e751]: 25/03/26
              - paragraph [ref=e753]:
                - text: The quality and color is as shown in the picture. I just hope the color remains the same even after washing :) I just received my order, ( a day early..
                - paragraph [ref=e754] [cursor=pointer]: know more
          - generic [ref=e757]:
            - img [ref=e759]
            - generic [ref=e760]:
              - paragraph [ref=e761]: Nisha
              - generic [ref=e762]:
                - img [ref=e763]
                - img [ref=e765]
                - img [ref=e767]
                - img [ref=e769]
                - img [ref=e771]
                - paragraph [ref=e773]: 23/03/26
              - paragraph [ref=e775]:
                - text: Firstly, the fabric is incredibly soft and stretchy, which is perfect for accommodating my growing bump. I never feel restricted or uncomfortable, eve..
                - paragraph [ref=e776] [cursor=pointer]: know more
          - generic [ref=e779]:
            - img [ref=e781]
            - generic [ref=e782]:
              - paragraph [ref=e783]: Nidhi
              - generic [ref=e784]:
                - img [ref=e785]
                - img [ref=e787]
                - img [ref=e789]
                - img [ref=e791]
                - img [ref=e793]
                - paragraph [ref=e795]: 22/03/26
              - paragraph [ref=e796]: love these feeding suits They're comfortable, convenient for feeding. Highly recommended for any mom looking for both fashion and functionality
          - generic [ref=e799]:
            - img [ref=e801]
            - generic [ref=e802]:
              - paragraph [ref=e803]: Disha
              - generic [ref=e804]:
                - img [ref=e805]
                - img [ref=e807]
                - img [ref=e809]
                - img [ref=e811]
                - img [ref=e813]
                - paragraph [ref=e815]: 20/03/26
              - paragraph [ref=e817]:
                - text: I absolutely love these feeding suits! They're comfortable, stylish, and super convenient for nursing. Finally, a chic solution for breastfeeding on t..
                - paragraph [ref=e818] [cursor=pointer]: know more
          - generic [ref=e821]:
            - img [ref=e823]
            - generic [ref=e824]:
              - paragraph [ref=e825]: Aayushi
              - generic [ref=e826]:
                - img [ref=e827]
                - img [ref=e829]
                - img [ref=e831]
                - img [ref=e833]
                - img [ref=e835]
                - paragraph [ref=e837]: 18/03/26
              - paragraph [ref=e839]:
                - text: These feeding suits are a game-changer for nursing moms like me! They're incredibly comfortable, stylish, and make breastfeeding so much easier. I fee..
                - paragraph [ref=e840] [cursor=pointer]: know more
          - generic [ref=e843]:
            - img [ref=e845]
            - generic [ref=e846]:
              - paragraph [ref=e847]: Niharika
              - generic [ref=e848]:
                - img [ref=e849]
                - img [ref=e851]
                - img [ref=e853]
                - img [ref=e855]
                - img [ref=e857]
                - paragraph [ref=e859]: 17/03/26
              - paragraph [ref=e861]:
                - text: These feeding suits are a lifesaver! They make nursing so much easier and discreet. Comfortable, stylish, and practical—all in one. Highly recommend f..
                - paragraph [ref=e862] [cursor=pointer]: know more
          - generic [ref=e865]:
            - img [ref=e867]
            - generic [ref=e868]:
              - paragraph [ref=e869]: Shweta
              - generic [ref=e870]:
                - img [ref=e871]
                - img [ref=e873]
                - img [ref=e875]
                - img [ref=e877]
                - img [ref=e879]
                - paragraph [ref=e881]: 15/03/26
              - paragraph [ref=e883]:
                - text: love this feeding suits! Comfortable, stylish, and practical. The perfect blend of fashion and function for moms. this suits are a must-have for nurs..
                - paragraph [ref=e884] [cursor=pointer]: know more
          - generic [ref=e887]:
            - img [ref=e889]
            - generic [ref=e890]:
              - paragraph [ref=e891]: Surabhi
              - generic [ref=e892]:
                - img [ref=e893]
                - img [ref=e895]
                - img [ref=e897]
                - img [ref=e899]
                - img [ref=e901]
                - paragraph [ref=e903]: 13/03/26
              - paragraph [ref=e905]:
                - text: "\" Full-figured and Fabulous indeed! I just got my order and I LOVE everything! Well-made, flattering and reasonably priced Thank you for remembering t.."
                - paragraph [ref=e906] [cursor=pointer]: know more
          - generic [ref=e909]:
            - img [ref=e911]
            - generic [ref=e912]:
              - paragraph [ref=e913]: Tulsi roy
              - generic [ref=e914]:
                - img [ref=e915]
                - img [ref=e917]
                - img [ref=e919]
                - img [ref=e921]
                - img [ref=e923]
                - paragraph [ref=e925]: 11/03/26
              - paragraph [ref=e927]:
                - text: It's a beautiful dress, everyone appreciated me for this. But, It's written that it can be washed in machine. Great service, fast shipping, and very r..
                - paragraph [ref=e928] [cursor=pointer]: know more
          - generic [ref=e931]:
            - img [ref=e933]
            - generic [ref=e934]:
              - paragraph [ref=e935]: Akanksha
              - generic [ref=e936]:
                - img [ref=e937]
                - img [ref=e939]
                - img [ref=e941]
                - img [ref=e943]
                - img [ref=e945]
                - paragraph [ref=e947]: 10/03/26
              - paragraph [ref=e949]:
                - text: "\"Good fabric quality. Very elegant and classy dress. A bit long dress for short heighted people. Without any doubt you can go for it. Quick responses .."
                - paragraph [ref=e950] [cursor=pointer]: know more
          - generic [ref=e953]:
            - img [ref=e955]
            - generic [ref=e956]:
              - paragraph [ref=e957]: Anusha
              - generic [ref=e958]:
                - img [ref=e959]
                - img [ref=e961]
                - img [ref=e963]
                - img [ref=e965]
                - img [ref=e967]
                - paragraph [ref=e969]: 09/03/26
              - paragraph [ref=e971]:
                - text: "\"My first order from Saurabh Enterprises. When I ordered, I was a tad skeptical, like everyone is on the first try, of what I would receive for such .."
                - paragraph [ref=e972] [cursor=pointer]: know more
          - generic [ref=e975]:
            - img [ref=e977]
            - generic [ref=e978]:
              - paragraph [ref=e979]: Kanishka sharma
              - generic [ref=e980]:
                - img [ref=e981]
                - img [ref=e983]
                - img [ref=e985]
                - img [ref=e987]
                - img [ref=e989]
                - paragraph [ref=e991]: 07/03/26
              - paragraph [ref=e993]:
                - text: "\"Absolutely love this dress is on point and fitting is as expected. Couldn't have wished for anything better.. All the orders are exactly like adverti.."
                - paragraph [ref=e994] [cursor=pointer]: know more
          - generic [ref=e997]:
            - img [ref=e999]
            - generic [ref=e1000]:
              - paragraph [ref=e1001]: Sapna
              - generic [ref=e1002]:
                - img [ref=e1003]
                - img [ref=e1005]
                - img [ref=e1007]
                - img [ref=e1009]
                - img [ref=e1011]
                - paragraph [ref=e1013]: 05/03/26
              - paragraph [ref=e1015]:
                - text: Fabric is soft suitable for summer , color and stitch is good . I like how the stitch is so perfect and fit .I just received my order, ( a day early!!..
                - paragraph [ref=e1016] [cursor=pointer]: know more
          - generic [ref=e1019]:
            - img [ref=e1021]
            - generic [ref=e1022]:
              - paragraph [ref=e1023]: Parul K.
              - generic [ref=e1024]:
                - img [ref=e1025]
                - img [ref=e1027]
                - img [ref=e1029]
                - img [ref=e1031]
                - img [ref=e1033]
                - paragraph [ref=e1035]: 03/03/26
              - paragraph [ref=e1037]:
                - text: This is my first purchase of this brand Saurabh Enterprises where I have been completely satisfied with the cloth quality, the color and the pattern. ..
                - paragraph [ref=e1038] [cursor=pointer]: know more
          - generic [ref=e1041]:
            - img [ref=e1043]
            - generic [ref=e1044]:
              - paragraph [ref=e1045]: Namita
              - generic [ref=e1046]:
                - img [ref=e1047]
                - img [ref=e1049]
                - img [ref=e1051]
                - img [ref=e1053]
                - img [ref=e1055]
                - paragraph [ref=e1057]: 26/02/26
              - paragraph [ref=e1059]:
                - text: I ordered several products...not only they were beautiful and exactly like the pictures, but they were also delivered extremely quickly to my home in ..
                - paragraph [ref=e1060] [cursor=pointer]: know more
          - generic [ref=e1063]:
            - img [ref=e1065]
            - generic [ref=e1066]:
              - paragraph [ref=e1067]: Rajalaxmi
              - generic [ref=e1068]:
                - img [ref=e1069]
                - img [ref=e1071]
                - img [ref=e1073]
                - img [ref=e1075]
                - img [ref=e1077]
                - paragraph [ref=e1079]: 25/02/26
              - paragraph [ref=e1081]:
                - text: I am always impressed with the support I have been getting. Quick responses from the staff and accommodating my needs at times when requested encourag..
                - paragraph [ref=e1082] [cursor=pointer]: know more
          - generic [ref=e1085]:
            - img [ref=e1087]
            - generic [ref=e1088]:
              - paragraph [ref=e1089]: Amrita
              - generic [ref=e1090]:
                - img [ref=e1091]
                - img [ref=e1093]
                - img [ref=e1095]
                - img [ref=e1097]
                - paragraph [ref=e1099]: 02/03/26
              - paragraph [ref=e1101]:
                - text: They treat the customer so generously also they hear our problems and try to solve them also they replied in WhatsApp quickly which I really liked. Th..
                - paragraph [ref=e1102] [cursor=pointer]: know more
          - generic [ref=e1105]:
            - img [ref=e1107]
            - generic [ref=e1108]:
              - paragraph [ref=e1109]: Rubi
              - generic [ref=e1110]:
                - img [ref=e1111]
                - img [ref=e1113]
                - img [ref=e1115]
                - img [ref=e1117]
                - img [ref=e1119]
                - paragraph [ref=e1121]: 28/02/26
              - paragraph [ref=e1123]:
                - text: I have ordered and received several items now, and I have to say, I am in love with this store!!!! Everything I have received fit perfectly, and is go..
                - paragraph [ref=e1124] [cursor=pointer]: know more
          - generic [ref=e1127]:
            - img [ref=e1129]
            - generic [ref=e1130]:
              - paragraph [ref=e1131]: Prachi
              - generic [ref=e1132]:
                - img [ref=e1133]
                - img [ref=e1135]
                - img [ref=e1137]
                - img [ref=e1139]
                - img [ref=e1141]
                - paragraph [ref=e1143]: 30/03/26
              - paragraph [ref=e1145]:
                - text: They treat the customer so generously also they hear our problems and try to solve them also they replied in WhatsApp quickly which I really liked. Hi..
                - paragraph [ref=e1146] [cursor=pointer]: know more
          - generic [ref=e1149]:
            - img [ref=e1151]
            - generic [ref=e1152]:
              - paragraph [ref=e1153]: Neha
              - generic [ref=e1154]:
                - img [ref=e1155]
                - img [ref=e1157]
                - img [ref=e1159]
                - img [ref=e1161]
                - img [ref=e1163]
                - paragraph [ref=e1165]: 27/03/26
              - paragraph [ref=e1167]:
                - text: I liked the color of the dress. The fitting is just perfect. Very comfortable to wear. Even the fabric is very soft. The package came before time, gre..
                - paragraph [ref=e1168] [cursor=pointer]: know more
          - generic [ref=e1171]:
            - img [ref=e1173]
            - generic [ref=e1174]:
              - paragraph [ref=e1175]: Anjali
              - generic [ref=e1176]:
                - img [ref=e1177]
                - img [ref=e1179]
                - img [ref=e1181]
                - img [ref=e1183]
                - img [ref=e1185]
                - paragraph [ref=e1187]: 25/03/26
              - paragraph [ref=e1189]:
                - text: The quality and color is as shown in the picture. I just hope the color remains the same even after washing :) I just received my order, ( a day early..
                - paragraph [ref=e1190] [cursor=pointer]: know more
          - generic [ref=e1193]:
            - img [ref=e1195]
            - generic [ref=e1196]:
              - paragraph [ref=e1197]: Nisha
              - generic [ref=e1198]:
                - img [ref=e1199]
                - img [ref=e1201]
                - img [ref=e1203]
                - img [ref=e1205]
                - img [ref=e1207]
                - paragraph [ref=e1209]: 23/03/26
              - paragraph [ref=e1211]:
                - text: Firstly, the fabric is incredibly soft and stretchy, which is perfect for accommodating my growing bump. I never feel restricted or uncomfortable, eve..
                - paragraph [ref=e1212] [cursor=pointer]: know more
          - generic [ref=e1215]:
            - img [ref=e1217]
            - generic [ref=e1218]:
              - paragraph [ref=e1219]: Nidhi
              - generic [ref=e1220]:
                - img [ref=e1221]
                - img [ref=e1223]
                - img [ref=e1225]
                - img [ref=e1227]
                - img [ref=e1229]
                - paragraph [ref=e1231]: 22/03/26
              - paragraph [ref=e1232]: love these feeding suits They're comfortable, convenient for feeding. Highly recommended for any mom looking for both fashion and functionality
          - generic [ref=e1235]:
            - img [ref=e1237]
            - generic [ref=e1238]:
              - paragraph [ref=e1239]: Disha
              - generic [ref=e1240]:
                - img [ref=e1241]
                - img [ref=e1243]
                - img [ref=e1245]
                - img [ref=e1247]
                - img [ref=e1249]
                - paragraph [ref=e1251]: 20/03/26
              - paragraph [ref=e1253]:
                - text: I absolutely love these feeding suits! They're comfortable, stylish, and super convenient for nursing. Finally, a chic solution for breastfeeding on t..
                - paragraph [ref=e1254] [cursor=pointer]: know more
          - generic [ref=e1257]:
            - img [ref=e1259]
            - generic [ref=e1260]:
              - paragraph [ref=e1261]: Aayushi
              - generic [ref=e1262]:
                - img [ref=e1263]
                - img [ref=e1265]
                - img [ref=e1267]
                - img [ref=e1269]
                - img [ref=e1271]
                - paragraph [ref=e1273]: 18/03/26
              - paragraph [ref=e1275]:
                - text: These feeding suits are a game-changer for nursing moms like me! They're incredibly comfortable, stylish, and make breastfeeding so much easier. I fee..
                - paragraph [ref=e1276] [cursor=pointer]: know more
          - generic [ref=e1279]:
            - img [ref=e1281]
            - generic [ref=e1282]:
              - paragraph [ref=e1283]: Niharika
              - generic [ref=e1284]:
                - img [ref=e1285]
                - img [ref=e1287]
                - img [ref=e1289]
                - img [ref=e1291]
                - img [ref=e1293]
                - paragraph [ref=e1295]: 17/03/26
              - paragraph [ref=e1297]:
                - text: These feeding suits are a lifesaver! They make nursing so much easier and discreet. Comfortable, stylish, and practical—all in one. Highly recommend f..
                - paragraph [ref=e1298] [cursor=pointer]: know more
          - generic [ref=e1301]:
            - img [ref=e1303]
            - generic [ref=e1304]:
              - paragraph [ref=e1305]: Shweta
              - generic [ref=e1306]:
                - img [ref=e1307]
                - img [ref=e1309]
                - img [ref=e1311]
                - img [ref=e1313]
                - img [ref=e1315]
                - paragraph [ref=e1317]: 15/03/26
              - paragraph [ref=e1319]:
                - text: love this feeding suits! Comfortable, stylish, and practical. The perfect blend of fashion and function for moms. this suits are a must-have for nurs..
                - paragraph [ref=e1320] [cursor=pointer]: know more
          - generic [ref=e1323]:
            - img [ref=e1325]
            - generic [ref=e1326]:
              - paragraph [ref=e1327]: Surabhi
              - generic [ref=e1328]:
                - img [ref=e1329]
                - img [ref=e1331]
                - img [ref=e1333]
                - img [ref=e1335]
                - img [ref=e1337]
                - paragraph [ref=e1339]: 13/03/26
              - paragraph [ref=e1341]:
                - text: "\" Full-figured and Fabulous indeed! I just got my order and I LOVE everything! Well-made, flattering and reasonably priced Thank you for remembering t.."
                - paragraph [ref=e1342] [cursor=pointer]: know more
          - generic [ref=e1345]:
            - img [ref=e1347]
            - generic [ref=e1348]:
              - paragraph [ref=e1349]: Tulsi roy
              - generic [ref=e1350]:
                - img [ref=e1351]
                - img [ref=e1353]
                - img [ref=e1355]
                - img [ref=e1357]
                - img [ref=e1359]
                - paragraph [ref=e1361]: 11/03/26
              - paragraph [ref=e1363]:
                - text: It's a beautiful dress, everyone appreciated me for this. But, It's written that it can be washed in machine. Great service, fast shipping, and very r..
                - paragraph [ref=e1364] [cursor=pointer]: know more
          - generic [ref=e1367]:
            - img [ref=e1369]
            - generic [ref=e1370]:
              - paragraph [ref=e1371]: Akanksha
              - generic [ref=e1372]:
                - img [ref=e1373]
                - img [ref=e1375]
                - img [ref=e1377]
                - img [ref=e1379]
                - img [ref=e1381]
                - paragraph [ref=e1383]: 10/03/26
              - paragraph [ref=e1385]:
                - text: "\"Good fabric quality. Very elegant and classy dress. A bit long dress for short heighted people. Without any doubt you can go for it. Quick responses .."
                - paragraph [ref=e1386] [cursor=pointer]: know more
          - generic [ref=e1389]:
            - img [ref=e1391]
            - generic [ref=e1392]:
              - paragraph [ref=e1393]: Anusha
              - generic [ref=e1394]:
                - img [ref=e1395]
                - img [ref=e1397]
                - img [ref=e1399]
                - img [ref=e1401]
                - img [ref=e1403]
                - paragraph [ref=e1405]: 09/03/26
              - paragraph [ref=e1407]:
                - text: "\"My first order from Saurabh Enterprises. When I ordered, I was a tad skeptical, like everyone is on the first try, of what I would receive for such .."
                - paragraph [ref=e1408] [cursor=pointer]: know more
          - generic [ref=e1411]:
            - img [ref=e1413]
            - generic [ref=e1414]:
              - paragraph [ref=e1415]: Kanishka sharma
              - generic [ref=e1416]:
                - img [ref=e1417]
                - img [ref=e1419]
                - img [ref=e1421]
                - img [ref=e1423]
                - img [ref=e1425]
                - paragraph [ref=e1427]: 07/03/26
              - paragraph [ref=e1429]:
                - text: "\"Absolutely love this dress is on point and fitting is as expected. Couldn't have wished for anything better.. All the orders are exactly like adverti.."
                - paragraph [ref=e1430] [cursor=pointer]: know more
          - generic [ref=e1433]:
            - img [ref=e1435]
            - generic [ref=e1436]:
              - paragraph [ref=e1437]: Sapna
              - generic [ref=e1438]:
                - img [ref=e1439]
                - img [ref=e1441]
                - img [ref=e1443]
                - img [ref=e1445]
                - img [ref=e1447]
                - paragraph [ref=e1449]: 05/03/26
              - paragraph [ref=e1451]:
                - text: Fabric is soft suitable for summer , color and stitch is good . I like how the stitch is so perfect and fit .I just received my order, ( a day early!!..
                - paragraph [ref=e1452] [cursor=pointer]: know more
          - generic [ref=e1455]:
            - img [ref=e1457]
            - generic [ref=e1458]:
              - paragraph [ref=e1459]: Parul K.
              - generic [ref=e1460]:
                - img [ref=e1461]
                - img [ref=e1463]
                - img [ref=e1465]
                - img [ref=e1467]
                - img [ref=e1469]
                - paragraph [ref=e1471]: 03/03/26
              - paragraph [ref=e1473]:
                - text: This is my first purchase of this brand Saurabh Enterprises where I have been completely satisfied with the cloth quality, the color and the pattern. ..
                - paragraph [ref=e1474] [cursor=pointer]: know more
          - generic [ref=e1477]:
            - img [ref=e1479]
            - generic [ref=e1480]:
              - paragraph [ref=e1481]: Namita
              - generic [ref=e1482]:
                - img [ref=e1483]
                - img [ref=e1485]
                - img [ref=e1487]
                - img [ref=e1489]
                - img [ref=e1491]
                - paragraph [ref=e1493]: 26/02/26
              - paragraph [ref=e1495]:
                - text: I ordered several products...not only they were beautiful and exactly like the pictures, but they were also delivered extremely quickly to my home in ..
                - paragraph [ref=e1496] [cursor=pointer]: know more
          - generic [ref=e1499]:
            - img [ref=e1501]
            - generic [ref=e1502]:
              - paragraph [ref=e1503]: Rajalaxmi
              - generic [ref=e1504]:
                - img [ref=e1505]
                - img [ref=e1507]
                - img [ref=e1509]
                - img [ref=e1511]
                - img [ref=e1513]
                - paragraph [ref=e1515]: 25/02/26
              - paragraph [ref=e1517]:
                - text: I am always impressed with the support I have been getting. Quick responses from the staff and accommodating my needs at times when requested encourag..
                - paragraph [ref=e1518] [cursor=pointer]: know more
          - generic [ref=e1521]:
            - img [ref=e1523]
            - generic [ref=e1524]:
              - paragraph [ref=e1525]: Amrita
              - generic [ref=e1526]:
                - img [ref=e1527]
                - img [ref=e1529]
                - img [ref=e1531]
                - img [ref=e1533]
                - paragraph [ref=e1535]: 02/03/26
              - paragraph [ref=e1537]:
                - text: They treat the customer so generously also they hear our problems and try to solve them also they replied in WhatsApp quickly which I really liked. Th..
                - paragraph [ref=e1538] [cursor=pointer]: know more
          - generic [ref=e1541]:
            - img [ref=e1543]
            - generic [ref=e1544]:
              - paragraph [ref=e1545]: Rubi
              - generic [ref=e1546]:
                - img [ref=e1547]
                - img [ref=e1549]
                - img [ref=e1551]
                - img [ref=e1553]
                - img [ref=e1555]
                - paragraph [ref=e1557]: 28/02/26
              - paragraph [ref=e1559]:
                - text: I have ordered and received several items now, and I have to say, I am in love with this store!!!! Everything I have received fit perfectly, and is go..
                - paragraph [ref=e1560] [cursor=pointer]: know more
        - img [ref=e1562] [cursor=pointer]
        - list [ref=e1566]:
          - listitem [ref=e1567] [cursor=pointer]
          - listitem [ref=e1569] [cursor=pointer]
          - listitem [ref=e1571] [cursor=pointer]
          - listitem [ref=e1573] [cursor=pointer]
          - listitem [ref=e1575] [cursor=pointer]
          - listitem [ref=e1577] [cursor=pointer]
          - listitem [ref=e1579] [cursor=pointer]
          - listitem [ref=e1581] [cursor=pointer]
          - listitem [ref=e1583] [cursor=pointer]
          - listitem [ref=e1585] [cursor=pointer]
          - listitem [ref=e1587] [cursor=pointer]
          - listitem [ref=e1589] [cursor=pointer]
          - listitem [ref=e1591] [cursor=pointer]
          - listitem [ref=e1593] [cursor=pointer]
          - listitem [ref=e1595] [cursor=pointer]
          - listitem [ref=e1597] [cursor=pointer]
          - listitem [ref=e1599] [cursor=pointer]
          - listitem [ref=e1601] [cursor=pointer]
          - listitem [ref=e1603] [cursor=pointer]
          - listitem [ref=e1605] [cursor=pointer]
  - contentinfo [ref=e1607]:
    - generic [ref=e1609]:
      - link "logo__Mama World" [ref=e1610] [cursor=pointer]:
        - /url: /
        - img "logo__Mama World" [ref=e1611]
      - generic [ref=e1612]:
        - generic [ref=e1614]:
          - heading "Mama World" [level=3] [ref=e1615]
          - paragraph [ref=e1616]: Welcome to Mama World website, we are an MSE based in India. We aim to deliver high-quality products to our customers.
          - generic [ref=e1618]:
            - link "facebook__Mama World" [ref=e1619] [cursor=pointer]:
              - /url: https://www.facebook.com/mamaworld01
              - img "facebook__Mama World" [ref=e1620]
            - link "instagram__Mama World" [ref=e1621] [cursor=pointer]:
              - /url: https://www.instagram.com/mamaworld.in?igsh=YWhuNnBvYmQ1ZThw
              - img "instagram__Mama World" [ref=e1622]
        - generic [ref=e1625]:
          - generic [ref=e1626]:
            - generic [ref=e1627]: CONTACT US
            - img [ref=e1628]
          - generic [ref=e1630]:
            - 'link "Call: +91 - 9820584377" [ref=e1631] [cursor=pointer]':
              - /url: tel:+919820584377
              - paragraph [ref=e1632]: "Call: +91 - 9820584377"
            - 'link "WhatsApp: +91 - 9820584377" [ref=e1633] [cursor=pointer]':
              - /url: https://wa.me/919820584377
              - paragraph [ref=e1634]: "WhatsApp: +91 - 9820584377"
            - paragraph [ref=e1635]: "Customer Support Time: Mon-Sat, 10 AM to 7 PM"
            - 'link "Email: sdnenwani@gmail.com" [ref=e1636] [cursor=pointer]':
              - /url: mailto:sdnenwani@gmail.com
              - paragraph [ref=e1637]: "Email: sdnenwani@gmail.com"
            - paragraph [ref=e1638]: "Address: 191/2877, Tagore Nagar, Group No 8B, Opp Sandesh Collage, Vikhroli (E), Maharashtra, Mumbai, 400083"
    - generic [ref=e1641]:
      - generic [ref=e1643]:
        - link "About Us" [ref=e1645] [cursor=pointer]:
          - /url: /about-us
          - paragraph [ref=e1646]: About Us
        - link "Privacy Policy" [ref=e1648] [cursor=pointer]:
          - /url: /privacy-policy
          - paragraph [ref=e1649]: Privacy Policy
        - link "Return Policy" [ref=e1651] [cursor=pointer]:
          - /url: /return-policy
          - paragraph [ref=e1652]: Return Policy
        - link "Shipping Policy" [ref=e1654] [cursor=pointer]:
          - /url: /shipping-policy
          - paragraph [ref=e1655]: Shipping Policy
        - link "Terms and condition" [ref=e1657] [cursor=pointer]:
          - /url: /terms-and-conditions
          - paragraph [ref=e1658]: Terms and condition
      - generic [ref=e1660]:
        - paragraph [ref=e1661]: Most searched on store
        - generic [ref=e1662]:
          - link "FEEDING KURTA WITH PANT" [ref=e1663] [cursor=pointer]:
            - /url: /FEEDING-KURTA-WITH-PANT/collection/5XUJMA5R
            - paragraph [ref=e1664]: FEEDING KURTA WITH PANT
          - paragraph [ref=e1665]: "|"
        - generic [ref=e1666]:
          - link "MATERNITY & FEEDING KURTA" [ref=e1667] [cursor=pointer]:
            - /url: /MATERNITY---FEEDING-KURTA/collection/9au_ppji
            - paragraph [ref=e1668]: MATERNITY & FEEDING KURTA
          - paragraph [ref=e1669]: "|"
        - generic [ref=e1670]:
          - link "Feeding Night Wear" [ref=e1671] [cursor=pointer]:
            - /url: /Feeding-Night-Wear/collection/Aahm3Wot
            - paragraph [ref=e1672]: Feeding Night Wear
          - paragraph [ref=e1673]: "|"
        - generic [ref=e1674]:
          - link "FEEDING & MATERNITY KURTI" [ref=e1675] [cursor=pointer]:
            - /url: /FEEDING---MATERNITY-KURTI-/collection/FtYwITXx
            - paragraph [ref=e1676]: FEEDING & MATERNITY KURTI
          - paragraph [ref=e1677]: "|"
        - generic [ref=e1678]:
          - link "IN THE SPOTLIGHT" [ref=e1679] [cursor=pointer]:
            - /url: /IN-THE-SPOTLIGHT/collection/Vd_QRvSB
            - paragraph [ref=e1680]: IN THE SPOTLIGHT
          - paragraph [ref=e1681]: "|"
        - generic [ref=e1682]:
          - link "NEW ARRIVALS" [ref=e1683] [cursor=pointer]:
            - /url: /NEW-ARRIVALS/collection/cF1wR54K
            - paragraph [ref=e1684]: NEW ARRIVALS
          - paragraph [ref=e1685]: "|"
        - generic [ref=e1686]:
          - link "NIGHT WEAR" [ref=e1687] [cursor=pointer]:
            - /url: /NIGHT-WEAR/collection/gkqvHb7d
            - paragraph [ref=e1688]: NIGHT WEAR
          - paragraph [ref=e1689]: "|"
        - generic [ref=e1690]:
          - link "BEST SELLERS" [ref=e1691] [cursor=pointer]:
            - /url: /BEST-SELLERS/collection/kRr89Z5K
            - paragraph [ref=e1692]: BEST SELLERS
          - paragraph [ref=e1693]: "|"
        - generic [ref=e1694]:
          - link "MATERNITY CO-ORD SET" [ref=e1695] [cursor=pointer]:
            - /url: /MATERNITY-CO-ORD-SET/collection/keR5QsOH
            - paragraph [ref=e1696]: MATERNITY CO-ORD SET
          - paragraph [ref=e1697]: "|"
        - generic [ref=e1698]:
          - link "CO-ORD SET" [ref=e1699] [cursor=pointer]:
            - /url: /CO-ORD-SET/collection/mgYajzbX
            - paragraph [ref=e1700]: CO-ORD SET
          - paragraph [ref=e1701]: "|"
        - link "MATERNITY CO-ORD SET" [ref=e1703] [cursor=pointer]:
          - /url: /MATERNITY-CO-ORD-SET/collection/w80DraWu
          - paragraph [ref=e1704]: MATERNITY CO-ORD SET
    - generic [ref=e1707]:
      - generic [ref=e1709]:
        - img [ref=e1710]
        - img [ref=e1714]
        - img [ref=e1720]
        - img [ref=e1724]
        - img [ref=e1728]
        - img [ref=e1732]
        - img [ref=e1739]
      - button "Go to top" [ref=e1743] [cursor=pointer]:
        - generic [ref=e1744]:
          - img [ref=e1745]
          - text: Go to top
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const { BASE_URL, PRODUCT_URLS, TEST_DATA, TIMEOUTS } = require('./helpers');
  3   | 
  4   | test.describe('Regression Tests - Home Page', () => {
  5   |   test.beforeEach(async ({ page }) => {
  6   |     await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: TIMEOUTS.pageLoad });
  7   |   });
  8   | 
  9   |   test('01. Home page loads successfully', async ({ page }) => {
  10  |     await expect(page).toHaveTitle(/Mama World/i);
  11  |   });
  12  | 
  13  |   test('02. Logo is visible on home page', async ({ page }) => {
  14  |     const logo = page.locator('img[alt*="Mama"], a:has-text("Mama World")').first();
  15  |     await expect(logo).toBeVisible({ timeout: TIMEOUTS.elementWait });
  16  |   });
  17  | 
  18  |   test('03. Navigation menu is visible', async ({ page }) => {
  19  |     const nav = page.locator('nav, header');
  20  |     await expect(nav).toBeVisible({ timeout: TIMEOUTS.elementWait });
  21  |   });
  22  | 
  23  |   test('04. Home link is accessible', async ({ page }) => {
  24  |     await page.click('a:has-text("HOME")');
  25  |     await expect(page).toHaveURL(/mamaworld.in/);
  26  |   });
  27  | 
  28  |   test('05. Maternity Night Wear category loads', async ({ page }) => {
  29  |     await page.click('a:has-text("MATERNITY NIGHT WEAR")');
  30  |     await expect(page).toHaveURL(/night-wear/i);
  31  |   });
  32  | 
  33  |   test('06. Maternity Co-ord Set category loads', async ({ page }) => {
  34  |     await page.click('a:has-text("MATERNITY CO-ORD SET")');
  35  |     await expect(page).toHaveURL(/keR5QsOH|co-ord/i);
  36  |   });
  37  | 
  38  |   test('07. New Arrivals page loads', async ({ page }) => {
  39  |     await page.click('a:has-text("NEW ARRIVALS")');
  40  |     await expect(page).toHaveURL(/cF1wR54K|new-arrival/i);
  41  |   });
  42  | 
  43  |   test('08. Best Seller page loads', async ({ page }) => {
  44  |     await page.click('a:has-text("BESTSELLER")');
  45  |     await expect(page).toHaveURL(/kRr89Z5K|bestseller/i);
  46  |   });
  47  | 
  48  |   test('09. Search functionality works', async ({ page }) => {
> 49  |     await page.fill('input[type="search"], input[placeholder*="Search"]', 'Kurta');
      |                ^ TimeoutError: page.fill: Timeout 5000ms exceeded.
  50  |     await page.press('input[type="search"], input[placeholder*="Search"]', 'Enter');
  51  |     await expect(page).toHaveURL(/search/i);
  52  |   });
  53  | 
  54  |   test('10. Bag (Cart) page is accessible', async ({ page }) => {
  55  |     await page.click('a:has-text("Bag"), a[href*="/bag"]');
  56  |     await expect(page).toHaveURL(/bag/i);
  57  |   });
  58  | 
  59  |   test('11. Empty bag shows empty message', async ({ page }) => {
  60  |     await page.goto(`${BASE_URL}/bag`);
  61  |     const emptyMsg = page.locator('text=empty, text=No items');
  62  |     await expect(emptyMsg.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  63  |   });
  64  | 
  65  |   test('12. Footer is visible', async ({ page }) => {
  66  |     const footer = page.locator('footer');
  67  |     await expect(footer).toBeVisible({ timeout: TIMEOUTS.elementWait });
  68  |   });
  69  | 
  70  |   test('13. About Us page loads', async ({ page }) => {
  71  |     await page.goto(`${BASE_URL}/about-us`);
  72  |     await expect(page).toHaveURL(/about-us/);
  73  |   });
  74  | 
  75  |   test('14. Privacy Policy page loads', async ({ page }) => {
  76  |     await page.goto(`${BASE_URL}/privacy-policy`);
  77  |     await expect(page).toHaveURL(/privacy-policy/);
  78  |   });
  79  | 
  80  |   test('15. Return Policy page loads', async ({ page }) => {
  81  |     await page.goto(`${BASE_URL}/return-policy`);
  82  |     await expect(page).toHaveURL(/return-policy/);
  83  |   });
  84  | 
  85  |   test('16. Shipping Policy page loads', async ({ page }) => {
  86  |     await page.goto(`${BASE_URL}/shipping-policy`);
  87  |     await expect(page).toHaveURL(/shipping-policy/);
  88  |   });
  89  | 
  90  |   test('17. Terms and Conditions page loads', async ({ page }) => {
  91  |     await page.goto(`${BASE_URL}/terms-and-conditions`);
  92  |     await expect(page).toHaveURL(/terms/);
  93  |   });
  94  | 
  95  |   test('18. Contact phone number is visible', async ({ page }) => {
  96  |     const phone = page.locator('text=9820584377');
  97  |     await expect(phone.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  98  |   });
  99  | 
  100 |   test('19. WhatsApp contact is visible', async ({ page }) => {
  101 |     const whatsapp = page.locator('text=WhatsApp, a[href*="whatsapp"]');
  102 |     await expect(whatsapp.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  103 |   });
  104 | 
  105 |   test('20. Email contact is visible', async ({ page }) => {
  106 |     const email = page.locator('text=sdnenwani@gmail.com');
  107 |     await expect(email.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  108 |   });
  109 | 
  110 |   test('21. Address is visible', async ({ page }) => {
  111 |     const address = page.locator('text=Vikhroli');
  112 |     await expect(address.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  113 |   });
  114 | 
  115 |   test('22. Product collection loads correctly', async ({ page }) => {
  116 |     await page.goto(PRODUCT_URLS[0]);
  117 |     await expect(page).toHaveURL(/collection/);
  118 |   });
  119 | 
  120 |   test('23. Multiple categories are accessible', async ({ page }) => {
  121 |     const categories = ['Night Wear', 'Feeding Kurta', 'Co-ord Set'];
  122 |     for (const cat of categories.slice(0, 2)) {
  123 |       await page.goto(BASE_URL);
  124 |       try {
  125 |         await page.click(`a:has-text("${cat}")`);
  126 |       } catch (e) {
  127 |         console.log(`Category ${cat} not found`);
  128 |       }
  129 |     }
  130 |   });
  131 | 
  132 |   test('24. Best sellers section displays products', async ({ page }) => {
  133 |     await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
  134 |     const products = page.locator('.product, [class*="product"]');
  135 |     expect(await products.count()).toBeGreaterThan(0);
  136 |   });
  137 | 
  138 |   test('25. Page loads without JavaScript errors', async ({ page }) => {
  139 |     const errors = [];
  140 |     page.on('pageerror', error => errors.push(error.message));
  141 |     await page.goto(BASE_URL);
  142 |     await page.waitForTimeout(2000);
  143 |     expect(errors.filter(e => e.includes('Error'))).toHaveLength(0);
  144 |   });
  145 | 
  146 |   test('26. All images load (no broken images)', async ({ page }) => {
  147 |     await page.goto(BASE_URL);
  148 |     const images = page.locator('img');
  149 |     const count = await images.count();
```