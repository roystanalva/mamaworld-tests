# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 01-regression.spec.js >> Regression Tests - Home Page >> 28. Responsive design works
- Location: tests\playwright\01-regression.spec.js:159:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('nav, header, .menu')
Expected: visible
Timeout: 3000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 3000ms
  - waiting for locator('nav, header, .menu')

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
        - paragraph [ref=e23]: 00H:44M:19S
    - generic [ref=e24]:
      - link [ref=e26] [cursor=pointer]:
        - /url: /search
        - img [ref=e27]
      - link "logo__Mama World" [ref=e29] [cursor=pointer]:
        - /url: /
        - img "logo__Mama World" [ref=e30]
      - link [ref=e32] [cursor=pointer]:
        - /url: /bag
        - button [ref=e33]:
          - img [ref=e35]
    - generic [ref=e38]:
      - generic [ref=e40]:
        - img [ref=e41]
        - paragraph [ref=e45]: Home
      - generic [ref=e47]:
        - button [ref=e48] [cursor=pointer]:
          - img [ref=e50]
        - paragraph [ref=e52]: Orders
      - generic [ref=e54]:
        - img [ref=e55]
        - paragraph [ref=e57]: Browse
  - generic [ref=e58]:
    - generic [ref=e61]:
      - generic [ref=e63]:
        - link [ref=e66] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e69]
        - link "BANNERS_undefined__undefined" [ref=e72] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img "BANNERS_undefined__undefined" [ref=e75]
        - link [ref=e78] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/keR5QsOH
          - img [ref=e81]
        - link [ref=e84] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/kRr89Z5K
          - img [ref=e87]
        - link [ref=e90] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e93]
        - link [ref=e96] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e99]
        - link [ref=e102] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e105]
        - link [ref=e108] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/keR5QsOH
          - img [ref=e111]
        - link [ref=e114] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/kRr89Z5K
          - img [ref=e117]
        - link [ref=e120] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e123]
        - link [ref=e126] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/cF1wR54K
          - img [ref=e129]
      - list [ref=e130]:
        - listitem [ref=e131] [cursor=pointer]
        - listitem [ref=e133] [cursor=pointer]
        - listitem [ref=e135] [cursor=pointer]
        - listitem [ref=e137] [cursor=pointer]
        - listitem [ref=e139] [cursor=pointer]
    - generic [ref=e143]:
      - generic [ref=e144]: CATEGORY
      - generic [ref=e148]:
        - link "CATEGORY_MATERNITY_NIGHT_SUIT___Mama World MATERNITY NIGHT SUIT" [ref=e151] [cursor=pointer]:
          - /url: /NIGHT-WEAR/collection/gkqvHb7d
          - generic [ref=e152]:
            - img "CATEGORY_MATERNITY_NIGHT_SUIT___Mama World" [ref=e153]
            - paragraph [ref=e154]: MATERNITY NIGHT SUIT
        - link "CATEGORY_CORD_SET__Mama World CORD SET" [ref=e157] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/keR5QsOH
          - generic [ref=e158]:
            - img "CATEGORY_CORD_SET__Mama World" [ref=e159]
            - paragraph [ref=e160]: CORD SET
    - generic [ref=e162]:
      - generic [ref=e163]: SHOP BY CATEGORIES
      - generic [ref=e164]:
        - link "SHOP_BY_CATEGORIES_undefined__undefined EXPLORE FEEDING & MATERNITY DRESS" [ref=e166] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/gkqvHb7d
          - generic [ref=e167]:
            - img "SHOP_BY_CATEGORIES_undefined__undefined" [ref=e170]
            - link "EXPLORE FEEDING & MATERNITY DRESS" [ref=e172]:
              - /url: https://mamaworld.in/collection/gkqvHb7d
              - button "EXPLORE FEEDING & MATERNITY DRESS" [ref=e173]:
                - paragraph [ref=e175]: EXPLORE FEEDING & MATERNITY DRESS
        - link "SHOP_BY_CATEGORIES_undefined__undefined EXPLORE NIGHT WEAR" [ref=e177] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/gkqvHb7d
          - generic [ref=e178]:
            - img "SHOP_BY_CATEGORIES_undefined__undefined" [ref=e181]
            - link "EXPLORE NIGHT WEAR" [ref=e183]:
              - /url: https://mamaworld.in/collection/gkqvHb7d
              - button "EXPLORE NIGHT WEAR" [ref=e184]:
                - paragraph [ref=e186]: EXPLORE NIGHT WEAR
        - link "SHOP_BY_CATEGORIES_undefined__undefined EXPLORE BEST SELLER" [ref=e188] [cursor=pointer]:
          - /url: https://mamaworld.in/collection/kRr89Z5K
          - generic [ref=e189]:
            - img "SHOP_BY_CATEGORIES_undefined__undefined" [ref=e192]
            - link "EXPLORE BEST SELLER" [ref=e194]:
              - /url: https://mamaworld.in/collection/kRr89Z5K
              - button "EXPLORE BEST SELLER" [ref=e195]:
                - paragraph [ref=e197]: EXPLORE BEST SELLER
    - img "BANNNER_undefined__undefined" [ref=e204]
    - generic [ref=e206]:
      - generic [ref=e207]:
        - paragraph [ref=e209]: IN THE SPOTLIGHT
        - link "View All" [ref=e211] [cursor=pointer]:
          - /url: /IN-THE-SPOTLIGHT/collection/Vd_QRvSB
          - paragraph [ref=e212]: View All
      - generic [ref=e214]:
        - generic [ref=e216]:
          - paragraph [ref=e220]: Extra 50% OFF
          - link [ref=e221] [cursor=pointer]:
            - /url: /Navy-Blue---Gold-Ethnic-Floral-Print-Cotton-Maternity/catalogue/aSuykBLz/q1_5ccJy
            - generic [ref=e222]:
              - generic [ref=e224]:
                - generic [ref=e225]:
                  - generic [ref=e227]:
                    - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined" [ref=e228]
                    - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined" [ref=e229]
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
                - article [ref=e230]:
                  - img [ref=e231]
                  - img [ref=e235]
              - paragraph [ref=e239]: Navy Blue & Gold Ethnic Floral Print Cotton Maternity Suit Set – 3-Piece Ensemble with Striped Trousers and Matching Dupatta
              - generic [ref=e240]:
                - text: ₹1,499₹3,999
                - generic [ref=e241]: 62% OFF
            - button "Add to bag" [ref=e244]:
              - generic [ref=e245]: Add to bag
        - generic [ref=e247]:
          - paragraph [ref=e251]: Extra 50% OFF
          - link "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton Royal blue Floral Print Maternity & Feeding Kurta Set ₹1,299₹3,49962% OFF Add to bag" [ref=e252] [cursor=pointer]:
            - /url: /Cotton-Royal-blue-Floral-Print-Maternity---Feeding-Kurta/catalogue/TBHUdBbL/PogSA9ws
            - generic [ref=e253]:
              - generic [ref=e255]:
                - generic [ref=e256]:
                  - generic [ref=e258]:
                    - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined" [ref=e259]
                    - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined" [ref=e260]
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
                - article [ref=e261]:
                  - img [ref=e262]
                  - img [ref=e266]
              - paragraph [ref=e270]: Cotton Royal blue Floral Print Maternity & Feeding Kurta Set
              - generic [ref=e271]:
                - text: ₹1,299₹3,499
                - generic [ref=e272]: 62% OFF
            - button "Add to bag" [ref=e275]:
              - generic [ref=e276]: Add to bag
        - generic [ref=e278]:
          - paragraph [ref=e282]: Extra 50% OFF
          - link "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton Purple Floral Print Maternity Kurta Set ₹1,299₹3,49962% OFF Add to bag" [ref=e283] [cursor=pointer]:
            - /url: /Cotton-Purple-Floral-Print-Maternity-Kurta-Set/catalogue/OQY_jFcF/Ssn9tRSy
            - generic [ref=e284]:
              - generic [ref=e286]:
                - generic [ref=e287]:
                  - generic [ref=e289]:
                    - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined" [ref=e290]
                    - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined" [ref=e291]
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
                - article [ref=e292]:
                  - img [ref=e293]
                  - img [ref=e297]
              - paragraph [ref=e301]: Cotton Purple Floral Print Maternity Kurta Set
              - generic [ref=e302]:
                - text: ₹1,299₹3,499
                - generic [ref=e303]: 62% OFF
            - button "Add to bag" [ref=e306]:
              - generic [ref=e307]: Add to bag
        - generic [ref=e309]:
          - paragraph [ref=e313]: Extra 50% OFF
          - link "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton Wine Floral Print Maternity Kurta Set (Top & Bottom) ₹1,299₹3,49962% OFF Add to bag" [ref=e314] [cursor=pointer]:
            - /url: /Cotton-Wine-Floral-Print-Maternity-Kurta-Set---Top/catalogue/aUYjoIzo/TioeAis0
            - generic [ref=e315]:
              - generic [ref=e317]:
                - generic [ref=e318]:
                  - generic [ref=e320]:
                    - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined" [ref=e321]
                    - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined" [ref=e322]
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
                - article [ref=e323]:
                  - img [ref=e324]
                  - img [ref=e328]
              - paragraph [ref=e332]: Cotton Wine Floral Print Maternity Kurta Set (Top & Bottom)
              - generic [ref=e333]:
                - text: ₹1,299₹3,499
                - generic [ref=e334]: 62% OFF
            - button "Add to bag" [ref=e337]:
              - generic [ref=e338]: Add to bag
    - generic [ref=e348]: Your browser does not support HTML video.
    - generic [ref=e350]:
      - generic [ref=e351]:
        - paragraph [ref=e353]: ALL PRODUCTS
        - link "View All" [ref=e355] [cursor=pointer]:
          - /url: /collection/all-products
          - paragraph [ref=e356]: View All
      - generic [ref=e358]:
        - generic [ref=e360]:
          - paragraph [ref=e364]: Extra 50% OFF
          - link [ref=e365] [cursor=pointer]:
            - /url: /Navy-Blue---Gold-Ethnic-Floral-Print-Cotton-Maternity/catalogue/aSuykBLz/q1_5ccJy
            - generic [ref=e366]:
              - generic [ref=e368]:
                - generic [ref=e369]:
                  - generic [ref=e371]:
                    - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined" [ref=e372]
                    - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined" [ref=e373]
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
                - article [ref=e374]:
                  - img [ref=e375]
                  - img [ref=e379]
              - paragraph [ref=e383]: Navy Blue & Gold Ethnic Floral Print Cotton Maternity Suit Set – 3-Piece Ensemble with Striped Trousers and Matching Dupatta
              - generic [ref=e384]:
                - text: ₹1,499₹3,999
                - generic [ref=e385]: 62% OFF
            - button "Add to bag" [ref=e388]:
              - generic [ref=e389]: Add to bag
        - generic [ref=e391]:
          - paragraph [ref=e395]: Extra 50% OFF
          - link "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton Royal blue Floral Print Maternity & Feeding Kurta Set ₹1,299₹3,49962% OFF Add to bag" [ref=e396] [cursor=pointer]:
            - /url: /Cotton-Royal-blue-Floral-Print-Maternity---Feeding-Kurta/catalogue/TBHUdBbL/PogSA9ws
            - generic [ref=e397]:
              - generic [ref=e399]:
                - generic [ref=e400]:
                  - generic [ref=e402]:
                    - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined" [ref=e403]
                    - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined" [ref=e404]
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
                - article [ref=e405]:
                  - img [ref=e406]
                  - img [ref=e410]
              - paragraph [ref=e414]: Cotton Royal blue Floral Print Maternity & Feeding Kurta Set
              - generic [ref=e415]:
                - text: ₹1,299₹3,499
                - generic [ref=e416]: 62% OFF
            - button "Add to bag" [ref=e419]:
              - generic [ref=e420]: Add to bag
        - generic [ref=e422]:
          - paragraph [ref=e426]: Extra 50% OFF
          - link "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton Purple Floral Print Maternity Kurta Set ₹1,299₹3,49962% OFF Add to bag" [ref=e427] [cursor=pointer]:
            - /url: /Cotton-Purple-Floral-Print-Maternity-Kurta-Set/catalogue/OQY_jFcF/Ssn9tRSy
            - generic [ref=e428]:
              - generic [ref=e430]:
                - generic [ref=e431]:
                  - generic [ref=e433]:
                    - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined" [ref=e434]
                    - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined" [ref=e435]
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
                - article [ref=e436]:
                  - img [ref=e437]
                  - img [ref=e441]
              - paragraph [ref=e445]: Cotton Purple Floral Print Maternity Kurta Set
              - generic [ref=e446]:
                - text: ₹1,299₹3,499
                - generic [ref=e447]: 62% OFF
            - button "Add to bag" [ref=e450]:
              - generic [ref=e451]: Add to bag
        - generic [ref=e453]:
          - paragraph [ref=e457]: Extra 50% OFF
          - link "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton Wine Floral Print Maternity Kurta Set (Top & Bottom) ₹1,299₹3,49962% OFF Add to bag" [ref=e458] [cursor=pointer]:
            - /url: /Cotton-Wine-Floral-Print-Maternity-Kurta-Set---Top/catalogue/aUYjoIzo/TioeAis0
            - generic [ref=e459]:
              - generic [ref=e461]:
                - generic [ref=e462]:
                  - generic [ref=e464]:
                    - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined" [ref=e465]
                    - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined" [ref=e466]
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
                - article [ref=e467]:
                  - img [ref=e468]
                  - img [ref=e472]
              - paragraph [ref=e476]: Cotton Wine Floral Print Maternity Kurta Set (Top & Bottom)
              - generic [ref=e477]:
                - text: ₹1,299₹3,499
                - generic [ref=e478]: 62% OFF
            - button "Add to bag" [ref=e481]:
              - generic [ref=e482]: Add to bag
    - generic [ref=e484]:
      - generic [ref=e485]:
        - paragraph [ref=e487]: BEST SELLER
        - link "View All" [ref=e489] [cursor=pointer]:
          - /url: /collection/best-sellers
          - paragraph [ref=e490]: View All
      - generic [ref=e492]:
        - generic [ref=e494]:
          - paragraph [ref=e498]: Extra 50% OFF
          - link "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral Pink Feeding & Maternity Dress With Zippers (Top & Bottom) ₹1,149₹2,29950% OFF Add to bag" [ref=e499] [cursor=pointer]:
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
            - button "Add to bag" [ref=e522]:
              - generic [ref=e523]: Add to bag
        - generic [ref=e525]:
          - paragraph [ref=e529]: Extra 50% OFF
          - link "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion Blue Feeding Night Suits With Zippers (Top & Bottom) ₹1,099₹2,19950% OFF Add to bag" [ref=e530] [cursor=pointer]:
            - /url: /Persion-Blue-Feeding-Night-Suits-With-Zippers--Top-/catalogue/q7JszNcg/TlH0gTuH
            - generic [ref=e531]:
              - generic [ref=e533]:
                - generic [ref=e534]:
                  - generic [ref=e536]:
                    - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e537]
                    - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e538]
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
                - article [ref=e539]:
                  - img [ref=e540]
                  - img [ref=e544]
              - paragraph [ref=e548]: Persion Blue Feeding Night Suits With Zippers (Top & Bottom)
              - generic [ref=e549]:
                - text: ₹1,099₹2,199
                - generic [ref=e550]: 50% OFF
            - button "Add to bag" [ref=e553]:
              - generic [ref=e554]: Add to bag
        - generic [ref=e556]:
          - paragraph [ref=e560]: Extra 50% OFF
          - link "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine Feeding & Maternity Dress With Zippers (Top & Bottom) ₹1,149₹2,29950% OFF Add to bag" [ref=e561] [cursor=pointer]:
            - /url: /Wine-Feeding---Maternity-Dress-With-Zippers--Top/catalogue/pUUijh83/EskUMYiU
            - generic [ref=e562]:
              - generic [ref=e564]:
                - generic [ref=e565]:
                  - generic [ref=e567]:
                    - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e568]
                    - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e569]
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
                - article [ref=e570]:
                  - img [ref=e571]
                  - img [ref=e575]
              - paragraph [ref=e579]: Wine Feeding & Maternity Dress With Zippers (Top & Bottom)
              - generic [ref=e580]:
                - text: ₹1,149₹2,299
                - generic [ref=e581]: 50% OFF
            - button "Add to bag" [ref=e584]:
              - generic [ref=e585]: Add to bag
        - generic [ref=e587]:
          - paragraph [ref=e591]: Extra 50% OFF
          - link "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee Feeding Night Suits With Zippers (Top & Bottom) ₹1,099₹2,19950% OFF Add to bag" [ref=e592] [cursor=pointer]:
            - /url: /Coffee-Feeding-Night-Suits-With-Zippers--Top--/catalogue/eTLQ-BPV/wWF5mP3k
            - generic [ref=e593]:
              - generic [ref=e595]:
                - generic [ref=e596]:
                  - generic [ref=e598]:
                    - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e599]
                    - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e600]
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
                - article [ref=e601]:
                  - img [ref=e602]
                  - img [ref=e606]
              - paragraph [ref=e610]: Coffee Feeding Night Suits With Zippers (Top & Bottom)
              - generic [ref=e611]:
                - text: ₹1,099₹2,199
                - generic [ref=e612]: 50% OFF
            - button "Add to bag" [ref=e615]:
              - generic [ref=e616]: Add to bag
    - generic [ref=e618]:
      - generic [ref=e619]:
        - generic [ref=e620]: CUSTOMERS FEEDBACK
        - link "View All" [ref=e622] [cursor=pointer]:
          - /url: /testimonials?type=product_testimonial
          - paragraph [ref=e623]: View All
      - generic [ref=e625]:
        - generic [ref=e627]:
          - generic [ref=e630]:
            - img [ref=e632]
            - generic [ref=e633]:
              - paragraph [ref=e634]: Rubi
              - generic [ref=e635]:
                - img [ref=e636]
                - img [ref=e638]
                - img [ref=e640]
                - img [ref=e642]
                - img [ref=e644]
                - paragraph [ref=e646]: 28/02/26
              - paragraph [ref=e648]:
                - text: I have ordered and received several items now, and I have to say, I am in love with this store!!!! Everything I have received fit perfectly, and is go..
                - paragraph [ref=e649] [cursor=pointer]: know more
          - generic [ref=e652]:
            - img "CUSTOMERS_FEEDBACK_Prachi__undefined" [ref=e654]
            - generic [ref=e655]:
              - paragraph [ref=e656]: Prachi
              - generic [ref=e657]:
                - img [ref=e658]
                - img [ref=e660]
                - img [ref=e662]
                - img [ref=e664]
                - img [ref=e666]
                - paragraph [ref=e668]: 30/03/26
              - paragraph [ref=e670]:
                - text: They treat the customer so generously also they hear our problems and try to solve them also they replied in WhatsApp quickly which I really liked. Hi..
                - paragraph [ref=e671] [cursor=pointer]: know more
          - generic [ref=e674]:
            - img [ref=e676]
            - generic [ref=e677]:
              - paragraph [ref=e678]: Neha
              - generic [ref=e679]:
                - img [ref=e680]
                - img [ref=e682]
                - img [ref=e684]
                - img [ref=e686]
                - img [ref=e688]
                - paragraph [ref=e690]: 27/03/26
              - paragraph [ref=e692]:
                - text: I liked the color of the dress. The fitting is just perfect. Very comfortable to wear. Even the fabric is very soft. The package came before time, gre..
                - paragraph [ref=e693] [cursor=pointer]: know more
          - generic [ref=e696]:
            - img [ref=e698]
            - generic [ref=e699]:
              - paragraph [ref=e700]: Anjali
              - generic [ref=e701]:
                - img [ref=e702]
                - img [ref=e704]
                - img [ref=e706]
                - img [ref=e708]
                - img [ref=e710]
                - paragraph [ref=e712]: 25/03/26
              - paragraph [ref=e714]:
                - text: The quality and color is as shown in the picture. I just hope the color remains the same even after washing :) I just received my order, ( a day early..
                - paragraph [ref=e715] [cursor=pointer]: know more
          - generic [ref=e718]:
            - img [ref=e720]
            - generic [ref=e721]:
              - paragraph [ref=e722]: Nisha
              - generic [ref=e723]:
                - img [ref=e724]
                - img [ref=e726]
                - img [ref=e728]
                - img [ref=e730]
                - img [ref=e732]
                - paragraph [ref=e734]: 23/03/26
              - paragraph [ref=e736]:
                - text: Firstly, the fabric is incredibly soft and stretchy, which is perfect for accommodating my growing bump. I never feel restricted or uncomfortable, eve..
                - paragraph [ref=e737] [cursor=pointer]: know more
          - generic [ref=e740]:
            - img [ref=e742]
            - generic [ref=e743]:
              - paragraph [ref=e744]: Nidhi
              - generic [ref=e745]:
                - img [ref=e746]
                - img [ref=e748]
                - img [ref=e750]
                - img [ref=e752]
                - img [ref=e754]
                - paragraph [ref=e756]: 22/03/26
              - paragraph [ref=e757]: love these feeding suits They're comfortable, convenient for feeding. Highly recommended for any mom looking for both fashion and functionality
          - generic [ref=e760]:
            - img [ref=e762]
            - generic [ref=e763]:
              - paragraph [ref=e764]: Disha
              - generic [ref=e765]:
                - img [ref=e766]
                - img [ref=e768]
                - img [ref=e770]
                - img [ref=e772]
                - img [ref=e774]
                - paragraph [ref=e776]: 20/03/26
              - paragraph [ref=e778]:
                - text: I absolutely love these feeding suits! They're comfortable, stylish, and super convenient for nursing. Finally, a chic solution for breastfeeding on t..
                - paragraph [ref=e779] [cursor=pointer]: know more
          - generic [ref=e782]:
            - img [ref=e784]
            - generic [ref=e785]:
              - paragraph [ref=e786]: Aayushi
              - generic [ref=e787]:
                - img [ref=e788]
                - img [ref=e790]
                - img [ref=e792]
                - img [ref=e794]
                - img [ref=e796]
                - paragraph [ref=e798]: 18/03/26
              - paragraph [ref=e800]:
                - text: These feeding suits are a game-changer for nursing moms like me! They're incredibly comfortable, stylish, and make breastfeeding so much easier. I fee..
                - paragraph [ref=e801] [cursor=pointer]: know more
          - generic [ref=e804]:
            - img [ref=e806]
            - generic [ref=e807]:
              - paragraph [ref=e808]: Niharika
              - generic [ref=e809]:
                - img [ref=e810]
                - img [ref=e812]
                - img [ref=e814]
                - img [ref=e816]
                - img [ref=e818]
                - paragraph [ref=e820]: 17/03/26
              - paragraph [ref=e822]:
                - text: These feeding suits are a lifesaver! They make nursing so much easier and discreet. Comfortable, stylish, and practical—all in one. Highly recommend f..
                - paragraph [ref=e823] [cursor=pointer]: know more
          - generic [ref=e826]:
            - img [ref=e828]
            - generic [ref=e829]:
              - paragraph [ref=e830]: Shweta
              - generic [ref=e831]:
                - img [ref=e832]
                - img [ref=e834]
                - img [ref=e836]
                - img [ref=e838]
                - img [ref=e840]
                - paragraph [ref=e842]: 15/03/26
              - paragraph [ref=e844]:
                - text: love this feeding suits! Comfortable, stylish, and practical. The perfect blend of fashion and function for moms. this suits are a must-have for nurs..
                - paragraph [ref=e845] [cursor=pointer]: know more
          - generic [ref=e848]:
            - img [ref=e850]
            - generic [ref=e851]:
              - paragraph [ref=e852]: Surabhi
              - generic [ref=e853]:
                - img [ref=e854]
                - img [ref=e856]
                - img [ref=e858]
                - img [ref=e860]
                - img [ref=e862]
                - paragraph [ref=e864]: 13/03/26
              - paragraph [ref=e866]:
                - text: "\" Full-figured and Fabulous indeed! I just got my order and I LOVE everything! Well-made, flattering and reasonably priced Thank you for remembering t.."
                - paragraph [ref=e867] [cursor=pointer]: know more
          - generic [ref=e870]:
            - img [ref=e872]
            - generic [ref=e873]:
              - paragraph [ref=e874]: Tulsi roy
              - generic [ref=e875]:
                - img [ref=e876]
                - img [ref=e878]
                - img [ref=e880]
                - img [ref=e882]
                - img [ref=e884]
                - paragraph [ref=e886]: 11/03/26
              - paragraph [ref=e888]:
                - text: It's a beautiful dress, everyone appreciated me for this. But, It's written that it can be washed in machine. Great service, fast shipping, and very r..
                - paragraph [ref=e889] [cursor=pointer]: know more
          - generic [ref=e892]:
            - img [ref=e894]
            - generic [ref=e895]:
              - paragraph [ref=e896]: Akanksha
              - generic [ref=e897]:
                - img [ref=e898]
                - img [ref=e900]
                - img [ref=e902]
                - img [ref=e904]
                - img [ref=e906]
                - paragraph [ref=e908]: 10/03/26
              - paragraph [ref=e910]:
                - text: "\"Good fabric quality. Very elegant and classy dress. A bit long dress for short heighted people. Without any doubt you can go for it. Quick responses .."
                - paragraph [ref=e911] [cursor=pointer]: know more
          - generic [ref=e914]:
            - img [ref=e916]
            - generic [ref=e917]:
              - paragraph [ref=e918]: Anusha
              - generic [ref=e919]:
                - img [ref=e920]
                - img [ref=e922]
                - img [ref=e924]
                - img [ref=e926]
                - img [ref=e928]
                - paragraph [ref=e930]: 09/03/26
              - paragraph [ref=e932]:
                - text: "\"My first order from Saurabh Enterprises. When I ordered, I was a tad skeptical, like everyone is on the first try, of what I would receive for such .."
                - paragraph [ref=e933] [cursor=pointer]: know more
          - generic [ref=e936]:
            - img [ref=e938]
            - generic [ref=e939]:
              - paragraph [ref=e940]: Kanishka sharma
              - generic [ref=e941]:
                - img [ref=e942]
                - img [ref=e944]
                - img [ref=e946]
                - img [ref=e948]
                - img [ref=e950]
                - paragraph [ref=e952]: 07/03/26
              - paragraph [ref=e954]:
                - text: "\"Absolutely love this dress is on point and fitting is as expected. Couldn't have wished for anything better.. All the orders are exactly like adverti.."
                - paragraph [ref=e955] [cursor=pointer]: know more
          - generic [ref=e958]:
            - img [ref=e960]
            - generic [ref=e961]:
              - paragraph [ref=e962]: Sapna
              - generic [ref=e963]:
                - img [ref=e964]
                - img [ref=e966]
                - img [ref=e968]
                - img [ref=e970]
                - img [ref=e972]
                - paragraph [ref=e974]: 05/03/26
              - paragraph [ref=e976]:
                - text: Fabric is soft suitable for summer , color and stitch is good . I like how the stitch is so perfect and fit .I just received my order, ( a day early!!..
                - paragraph [ref=e977] [cursor=pointer]: know more
          - generic [ref=e980]:
            - img [ref=e982]
            - generic [ref=e983]:
              - paragraph [ref=e984]: Parul K.
              - generic [ref=e985]:
                - img [ref=e986]
                - img [ref=e988]
                - img [ref=e990]
                - img [ref=e992]
                - img [ref=e994]
                - paragraph [ref=e996]: 03/03/26
              - paragraph [ref=e998]:
                - text: This is my first purchase of this brand Saurabh Enterprises where I have been completely satisfied with the cloth quality, the color and the pattern. ..
                - paragraph [ref=e999] [cursor=pointer]: know more
          - generic [ref=e1002]:
            - img [ref=e1004]
            - generic [ref=e1005]:
              - paragraph [ref=e1006]: Namita
              - generic [ref=e1007]:
                - img [ref=e1008]
                - img [ref=e1010]
                - img [ref=e1012]
                - img [ref=e1014]
                - img [ref=e1016]
                - paragraph [ref=e1018]: 26/02/26
              - paragraph [ref=e1020]:
                - text: I ordered several products...not only they were beautiful and exactly like the pictures, but they were also delivered extremely quickly to my home in ..
                - paragraph [ref=e1021] [cursor=pointer]: know more
          - generic [ref=e1024]:
            - img [ref=e1026]
            - generic [ref=e1027]:
              - paragraph [ref=e1028]: Rajalaxmi
              - generic [ref=e1029]:
                - img [ref=e1030]
                - img [ref=e1032]
                - img [ref=e1034]
                - img [ref=e1036]
                - img [ref=e1038]
                - paragraph [ref=e1040]: 25/02/26
              - paragraph [ref=e1042]:
                - text: I am always impressed with the support I have been getting. Quick responses from the staff and accommodating my needs at times when requested encourag..
                - paragraph [ref=e1043] [cursor=pointer]: know more
          - generic [ref=e1046]:
            - img [ref=e1048]
            - generic [ref=e1049]:
              - paragraph [ref=e1050]: Amrita
              - generic [ref=e1051]:
                - img [ref=e1052]
                - img [ref=e1054]
                - img [ref=e1056]
                - img [ref=e1058]
                - paragraph [ref=e1060]: 02/03/26
              - paragraph [ref=e1062]:
                - text: They treat the customer so generously also they hear our problems and try to solve them also they replied in WhatsApp quickly which I really liked. Th..
                - paragraph [ref=e1063] [cursor=pointer]: know more
          - generic [ref=e1066]:
            - img [ref=e1068]
            - generic [ref=e1069]:
              - paragraph [ref=e1070]: Rubi
              - generic [ref=e1071]:
                - img [ref=e1072]
                - img [ref=e1074]
                - img [ref=e1076]
                - img [ref=e1078]
                - img [ref=e1080]
                - paragraph [ref=e1082]: 28/02/26
              - paragraph [ref=e1084]:
                - text: I have ordered and received several items now, and I have to say, I am in love with this store!!!! Everything I have received fit perfectly, and is go..
                - paragraph [ref=e1085] [cursor=pointer]: know more
          - generic [ref=e1088]:
            - img [ref=e1090]
            - generic [ref=e1091]:
              - paragraph [ref=e1092]: Prachi
              - generic [ref=e1093]:
                - img [ref=e1094]
                - img [ref=e1096]
                - img [ref=e1098]
                - img [ref=e1100]
                - img [ref=e1102]
                - paragraph [ref=e1104]: 30/03/26
              - paragraph [ref=e1106]:
                - text: They treat the customer so generously also they hear our problems and try to solve them also they replied in WhatsApp quickly which I really liked. Hi..
                - paragraph [ref=e1107] [cursor=pointer]: know more
          - generic [ref=e1110]:
            - img [ref=e1112]
            - generic [ref=e1113]:
              - paragraph [ref=e1114]: Neha
              - generic [ref=e1115]:
                - img [ref=e1116]
                - img [ref=e1118]
                - img [ref=e1120]
                - img [ref=e1122]
                - img [ref=e1124]
                - paragraph [ref=e1126]: 27/03/26
              - paragraph [ref=e1128]:
                - text: I liked the color of the dress. The fitting is just perfect. Very comfortable to wear. Even the fabric is very soft. The package came before time, gre..
                - paragraph [ref=e1129] [cursor=pointer]: know more
          - generic [ref=e1132]:
            - img [ref=e1134]
            - generic [ref=e1135]:
              - paragraph [ref=e1136]: Anjali
              - generic [ref=e1137]:
                - img [ref=e1138]
                - img [ref=e1140]
                - img [ref=e1142]
                - img [ref=e1144]
                - img [ref=e1146]
                - paragraph [ref=e1148]: 25/03/26
              - paragraph [ref=e1150]:
                - text: The quality and color is as shown in the picture. I just hope the color remains the same even after washing :) I just received my order, ( a day early..
                - paragraph [ref=e1151] [cursor=pointer]: know more
          - generic [ref=e1154]:
            - img [ref=e1156]
            - generic [ref=e1157]:
              - paragraph [ref=e1158]: Nisha
              - generic [ref=e1159]:
                - img [ref=e1160]
                - img [ref=e1162]
                - img [ref=e1164]
                - img [ref=e1166]
                - img [ref=e1168]
                - paragraph [ref=e1170]: 23/03/26
              - paragraph [ref=e1172]:
                - text: Firstly, the fabric is incredibly soft and stretchy, which is perfect for accommodating my growing bump. I never feel restricted or uncomfortable, eve..
                - paragraph [ref=e1173] [cursor=pointer]: know more
          - generic [ref=e1176]:
            - img [ref=e1178]
            - generic [ref=e1179]:
              - paragraph [ref=e1180]: Nidhi
              - generic [ref=e1181]:
                - img [ref=e1182]
                - img [ref=e1184]
                - img [ref=e1186]
                - img [ref=e1188]
                - img [ref=e1190]
                - paragraph [ref=e1192]: 22/03/26
              - paragraph [ref=e1193]: love these feeding suits They're comfortable, convenient for feeding. Highly recommended for any mom looking for both fashion and functionality
          - generic [ref=e1196]:
            - img [ref=e1198]
            - generic [ref=e1199]:
              - paragraph [ref=e1200]: Disha
              - generic [ref=e1201]:
                - img [ref=e1202]
                - img [ref=e1204]
                - img [ref=e1206]
                - img [ref=e1208]
                - img [ref=e1210]
                - paragraph [ref=e1212]: 20/03/26
              - paragraph [ref=e1214]:
                - text: I absolutely love these feeding suits! They're comfortable, stylish, and super convenient for nursing. Finally, a chic solution for breastfeeding on t..
                - paragraph [ref=e1215] [cursor=pointer]: know more
          - generic [ref=e1218]:
            - img [ref=e1220]
            - generic [ref=e1221]:
              - paragraph [ref=e1222]: Aayushi
              - generic [ref=e1223]:
                - img [ref=e1224]
                - img [ref=e1226]
                - img [ref=e1228]
                - img [ref=e1230]
                - img [ref=e1232]
                - paragraph [ref=e1234]: 18/03/26
              - paragraph [ref=e1236]:
                - text: These feeding suits are a game-changer for nursing moms like me! They're incredibly comfortable, stylish, and make breastfeeding so much easier. I fee..
                - paragraph [ref=e1237] [cursor=pointer]: know more
          - generic [ref=e1240]:
            - img [ref=e1242]
            - generic [ref=e1243]:
              - paragraph [ref=e1244]: Niharika
              - generic [ref=e1245]:
                - img [ref=e1246]
                - img [ref=e1248]
                - img [ref=e1250]
                - img [ref=e1252]
                - img [ref=e1254]
                - paragraph [ref=e1256]: 17/03/26
              - paragraph [ref=e1258]:
                - text: These feeding suits are a lifesaver! They make nursing so much easier and discreet. Comfortable, stylish, and practical—all in one. Highly recommend f..
                - paragraph [ref=e1259] [cursor=pointer]: know more
          - generic [ref=e1262]:
            - img [ref=e1264]
            - generic [ref=e1265]:
              - paragraph [ref=e1266]: Shweta
              - generic [ref=e1267]:
                - img [ref=e1268]
                - img [ref=e1270]
                - img [ref=e1272]
                - img [ref=e1274]
                - img [ref=e1276]
                - paragraph [ref=e1278]: 15/03/26
              - paragraph [ref=e1280]:
                - text: love this feeding suits! Comfortable, stylish, and practical. The perfect blend of fashion and function for moms. this suits are a must-have for nurs..
                - paragraph [ref=e1281] [cursor=pointer]: know more
          - generic [ref=e1284]:
            - img [ref=e1286]
            - generic [ref=e1287]:
              - paragraph [ref=e1288]: Surabhi
              - generic [ref=e1289]:
                - img [ref=e1290]
                - img [ref=e1292]
                - img [ref=e1294]
                - img [ref=e1296]
                - img [ref=e1298]
                - paragraph [ref=e1300]: 13/03/26
              - paragraph [ref=e1302]:
                - text: "\" Full-figured and Fabulous indeed! I just got my order and I LOVE everything! Well-made, flattering and reasonably priced Thank you for remembering t.."
                - paragraph [ref=e1303] [cursor=pointer]: know more
          - generic [ref=e1306]:
            - img [ref=e1308]
            - generic [ref=e1309]:
              - paragraph [ref=e1310]: Tulsi roy
              - generic [ref=e1311]:
                - img [ref=e1312]
                - img [ref=e1314]
                - img [ref=e1316]
                - img [ref=e1318]
                - img [ref=e1320]
                - paragraph [ref=e1322]: 11/03/26
              - paragraph [ref=e1324]:
                - text: It's a beautiful dress, everyone appreciated me for this. But, It's written that it can be washed in machine. Great service, fast shipping, and very r..
                - paragraph [ref=e1325] [cursor=pointer]: know more
          - generic [ref=e1328]:
            - img [ref=e1330]
            - generic [ref=e1331]:
              - paragraph [ref=e1332]: Akanksha
              - generic [ref=e1333]:
                - img [ref=e1334]
                - img [ref=e1336]
                - img [ref=e1338]
                - img [ref=e1340]
                - img [ref=e1342]
                - paragraph [ref=e1344]: 10/03/26
              - paragraph [ref=e1346]:
                - text: "\"Good fabric quality. Very elegant and classy dress. A bit long dress for short heighted people. Without any doubt you can go for it. Quick responses .."
                - paragraph [ref=e1347] [cursor=pointer]: know more
          - generic [ref=e1350]:
            - img [ref=e1352]
            - generic [ref=e1353]:
              - paragraph [ref=e1354]: Anusha
              - generic [ref=e1355]:
                - img [ref=e1356]
                - img [ref=e1358]
                - img [ref=e1360]
                - img [ref=e1362]
                - img [ref=e1364]
                - paragraph [ref=e1366]: 09/03/26
              - paragraph [ref=e1368]:
                - text: "\"My first order from Saurabh Enterprises. When I ordered, I was a tad skeptical, like everyone is on the first try, of what I would receive for such .."
                - paragraph [ref=e1369] [cursor=pointer]: know more
          - generic [ref=e1372]:
            - img [ref=e1374]
            - generic [ref=e1375]:
              - paragraph [ref=e1376]: Kanishka sharma
              - generic [ref=e1377]:
                - img [ref=e1378]
                - img [ref=e1380]
                - img [ref=e1382]
                - img [ref=e1384]
                - img [ref=e1386]
                - paragraph [ref=e1388]: 07/03/26
              - paragraph [ref=e1390]:
                - text: "\"Absolutely love this dress is on point and fitting is as expected. Couldn't have wished for anything better.. All the orders are exactly like adverti.."
                - paragraph [ref=e1391] [cursor=pointer]: know more
          - generic [ref=e1394]:
            - img [ref=e1396]
            - generic [ref=e1397]:
              - paragraph [ref=e1398]: Sapna
              - generic [ref=e1399]:
                - img [ref=e1400]
                - img [ref=e1402]
                - img [ref=e1404]
                - img [ref=e1406]
                - img [ref=e1408]
                - paragraph [ref=e1410]: 05/03/26
              - paragraph [ref=e1412]:
                - text: Fabric is soft suitable for summer , color and stitch is good . I like how the stitch is so perfect and fit .I just received my order, ( a day early!!..
                - paragraph [ref=e1413] [cursor=pointer]: know more
          - generic [ref=e1416]:
            - img [ref=e1418]
            - generic [ref=e1419]:
              - paragraph [ref=e1420]: Parul K.
              - generic [ref=e1421]:
                - img [ref=e1422]
                - img [ref=e1424]
                - img [ref=e1426]
                - img [ref=e1428]
                - img [ref=e1430]
                - paragraph [ref=e1432]: 03/03/26
              - paragraph [ref=e1434]:
                - text: This is my first purchase of this brand Saurabh Enterprises where I have been completely satisfied with the cloth quality, the color and the pattern. ..
                - paragraph [ref=e1435] [cursor=pointer]: know more
          - generic [ref=e1438]:
            - img [ref=e1440]
            - generic [ref=e1441]:
              - paragraph [ref=e1442]: Namita
              - generic [ref=e1443]:
                - img [ref=e1444]
                - img [ref=e1446]
                - img [ref=e1448]
                - img [ref=e1450]
                - img [ref=e1452]
                - paragraph [ref=e1454]: 26/02/26
              - paragraph [ref=e1456]:
                - text: I ordered several products...not only they were beautiful and exactly like the pictures, but they were also delivered extremely quickly to my home in ..
                - paragraph [ref=e1457] [cursor=pointer]: know more
          - generic [ref=e1460]:
            - img [ref=e1462]
            - generic [ref=e1463]:
              - paragraph [ref=e1464]: Rajalaxmi
              - generic [ref=e1465]:
                - img [ref=e1466]
                - img [ref=e1468]
                - img [ref=e1470]
                - img [ref=e1472]
                - img [ref=e1474]
                - paragraph [ref=e1476]: 25/02/26
              - paragraph [ref=e1478]:
                - text: I am always impressed with the support I have been getting. Quick responses from the staff and accommodating my needs at times when requested encourag..
                - paragraph [ref=e1479] [cursor=pointer]: know more
          - generic [ref=e1482]:
            - img [ref=e1484]
            - generic [ref=e1485]:
              - paragraph [ref=e1486]: Amrita
              - generic [ref=e1487]:
                - img [ref=e1488]
                - img [ref=e1490]
                - img [ref=e1492]
                - img [ref=e1494]
                - paragraph [ref=e1496]: 02/03/26
              - paragraph [ref=e1498]:
                - text: They treat the customer so generously also they hear our problems and try to solve them also they replied in WhatsApp quickly which I really liked. Th..
                - paragraph [ref=e1499] [cursor=pointer]: know more
          - generic [ref=e1502]:
            - img [ref=e1504]
            - generic [ref=e1505]:
              - paragraph [ref=e1506]: Rubi
              - generic [ref=e1507]:
                - img [ref=e1508]
                - img [ref=e1510]
                - img [ref=e1512]
                - img [ref=e1514]
                - img [ref=e1516]
                - paragraph [ref=e1518]: 28/02/26
              - paragraph [ref=e1520]:
                - text: I have ordered and received several items now, and I have to say, I am in love with this store!!!! Everything I have received fit perfectly, and is go..
                - paragraph [ref=e1521] [cursor=pointer]: know more
        - list [ref=e1522]:
          - listitem [ref=e1523] [cursor=pointer]
          - listitem [ref=e1525] [cursor=pointer]
          - listitem [ref=e1527] [cursor=pointer]
          - listitem [ref=e1529] [cursor=pointer]
          - listitem [ref=e1531] [cursor=pointer]
          - listitem [ref=e1533] [cursor=pointer]
          - listitem [ref=e1535] [cursor=pointer]
          - listitem [ref=e1537] [cursor=pointer]
          - listitem [ref=e1539] [cursor=pointer]
          - listitem [ref=e1541] [cursor=pointer]
          - listitem [ref=e1543] [cursor=pointer]
          - listitem [ref=e1545] [cursor=pointer]
          - listitem [ref=e1547] [cursor=pointer]
          - listitem [ref=e1549] [cursor=pointer]
          - listitem [ref=e1551] [cursor=pointer]
          - listitem [ref=e1553] [cursor=pointer]
          - listitem [ref=e1555] [cursor=pointer]
          - listitem [ref=e1557] [cursor=pointer]
          - listitem [ref=e1559] [cursor=pointer]
          - listitem [ref=e1561] [cursor=pointer]
  - contentinfo [ref=e1563]:
    - generic [ref=e1565]:
      - link "logo__Mama World" [ref=e1566] [cursor=pointer]:
        - /url: /
        - img "logo__Mama World" [ref=e1567]
      - generic [ref=e1568]:
        - generic [ref=e1570]:
          - heading "Mama World" [level=3] [ref=e1571]
          - paragraph [ref=e1572]: Welcome to Mama World website, we are an MSE based in India. We aim to deliver high-quality products to our customers.
          - generic [ref=e1574]:
            - link "facebook__Mama World" [ref=e1575] [cursor=pointer]:
              - /url: https://www.facebook.com/mamaworld01
              - img "facebook__Mama World" [ref=e1576]
            - link "instagram__Mama World" [ref=e1577] [cursor=pointer]:
              - /url: https://www.instagram.com/mamaworld.in?igsh=YWhuNnBvYmQ1ZThw
              - img "instagram__Mama World" [ref=e1578]
        - generic [ref=e1581]:
          - generic [ref=e1582]:
            - generic [ref=e1583]: CONTACT US
            - img [ref=e1584]
          - generic [ref=e1586]:
            - 'link "Call: +91 - 9820584377" [ref=e1587] [cursor=pointer]':
              - /url: tel:+919820584377
              - paragraph [ref=e1588]: "Call: +91 - 9820584377"
            - 'link "WhatsApp: +91 - 9820584377" [ref=e1589] [cursor=pointer]':
              - /url: https://wa.me/919820584377
              - paragraph [ref=e1590]: "WhatsApp: +91 - 9820584377"
            - paragraph [ref=e1591]: "Customer Support Time: Mon-Sat, 10 AM to 7 PM"
            - 'link "Email: sdnenwani@gmail.com" [ref=e1592] [cursor=pointer]':
              - /url: mailto:sdnenwani@gmail.com
              - paragraph [ref=e1593]: "Email: sdnenwani@gmail.com"
            - paragraph [ref=e1594]: "Address: 191/2877, Tagore Nagar, Group No 8B, Opp Sandesh Collage, Vikhroli (E), Maharashtra, Mumbai, 400083"
    - generic [ref=e1597]:
      - generic [ref=e1599]:
        - link "About Us" [ref=e1601] [cursor=pointer]:
          - /url: /about-us
          - paragraph [ref=e1602]: About Us
        - link "Privacy Policy" [ref=e1604] [cursor=pointer]:
          - /url: /privacy-policy
          - paragraph [ref=e1605]: Privacy Policy
        - link "Return Policy" [ref=e1607] [cursor=pointer]:
          - /url: /return-policy
          - paragraph [ref=e1608]: Return Policy
        - link "Shipping Policy" [ref=e1610] [cursor=pointer]:
          - /url: /shipping-policy
          - paragraph [ref=e1611]: Shipping Policy
        - link "Terms and condition" [ref=e1613] [cursor=pointer]:
          - /url: /terms-and-conditions
          - paragraph [ref=e1614]: Terms and condition
      - generic [ref=e1616]:
        - paragraph [ref=e1617]: Most searched on store
        - generic [ref=e1618]:
          - link "FEEDING KURTA WITH PANT" [ref=e1619] [cursor=pointer]:
            - /url: /FEEDING-KURTA-WITH-PANT/collection/5XUJMA5R
            - paragraph [ref=e1620]: FEEDING KURTA WITH PANT
          - paragraph [ref=e1621]: "|"
        - generic [ref=e1622]:
          - link "MATERNITY & FEEDING KURTA" [ref=e1623] [cursor=pointer]:
            - /url: /MATERNITY---FEEDING-KURTA/collection/9au_ppji
            - paragraph [ref=e1624]: MATERNITY & FEEDING KURTA
          - paragraph [ref=e1625]: "|"
        - generic [ref=e1626]:
          - link "Feeding Night Wear" [ref=e1627] [cursor=pointer]:
            - /url: /Feeding-Night-Wear/collection/Aahm3Wot
            - paragraph [ref=e1628]: Feeding Night Wear
          - paragraph [ref=e1629]: "|"
        - generic [ref=e1630]:
          - link "FEEDING & MATERNITY KURTI" [ref=e1631] [cursor=pointer]:
            - /url: /FEEDING---MATERNITY-KURTI-/collection/FtYwITXx
            - paragraph [ref=e1632]: FEEDING & MATERNITY KURTI
          - paragraph [ref=e1633]: "|"
        - generic [ref=e1634]:
          - link "IN THE SPOTLIGHT" [ref=e1635] [cursor=pointer]:
            - /url: /IN-THE-SPOTLIGHT/collection/Vd_QRvSB
            - paragraph [ref=e1636]: IN THE SPOTLIGHT
          - paragraph [ref=e1637]: "|"
        - generic [ref=e1638]:
          - link "NEW ARRIVALS" [ref=e1639] [cursor=pointer]:
            - /url: /NEW-ARRIVALS/collection/cF1wR54K
            - paragraph [ref=e1640]: NEW ARRIVALS
          - paragraph [ref=e1641]: "|"
        - generic [ref=e1642]:
          - link "NIGHT WEAR" [ref=e1643] [cursor=pointer]:
            - /url: /NIGHT-WEAR/collection/gkqvHb7d
            - paragraph [ref=e1644]: NIGHT WEAR
          - paragraph [ref=e1645]: "|"
        - generic [ref=e1646]:
          - link "BEST SELLERS" [ref=e1647] [cursor=pointer]:
            - /url: /BEST-SELLERS/collection/kRr89Z5K
            - paragraph [ref=e1648]: BEST SELLERS
          - paragraph [ref=e1649]: "|"
        - generic [ref=e1650]:
          - link "MATERNITY CO-ORD SET" [ref=e1651] [cursor=pointer]:
            - /url: /MATERNITY-CO-ORD-SET/collection/keR5QsOH
            - paragraph [ref=e1652]: MATERNITY CO-ORD SET
          - paragraph [ref=e1653]: "|"
        - generic [ref=e1654]:
          - link "CO-ORD SET" [ref=e1655] [cursor=pointer]:
            - /url: /CO-ORD-SET/collection/mgYajzbX
            - paragraph [ref=e1656]: CO-ORD SET
          - paragraph [ref=e1657]: "|"
        - link "MATERNITY CO-ORD SET" [ref=e1659] [cursor=pointer]:
          - /url: /MATERNITY-CO-ORD-SET/collection/w80DraWu
          - paragraph [ref=e1660]: MATERNITY CO-ORD SET
    - generic [ref=e1663]:
      - generic [ref=e1665]:
        - img [ref=e1666]
        - img [ref=e1670]
        - img [ref=e1676]
        - img [ref=e1680]
        - img [ref=e1684]
        - img [ref=e1688]
        - img [ref=e1695]
      - button "Go to top" [ref=e1699] [cursor=pointer]:
        - generic [ref=e1700]:
          - img [ref=e1701]
          - text: Go to top
```

# Test source

```ts
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
  150 |     expect(count).toBeGreaterThan(0);
  151 |   });
  152 | 
  153 |   test('27. Social media links present', async ({ page }) => {
  154 |     await page.goto(BASE_URL);
  155 |     const socialLinks = page.locator('a[href*="facebook"], a[href*="instagram"]');
  156 |     expect(await socialLinks.count()).toBeGreaterThan(0);
  157 |   });
  158 | 
  159 |   test('28. Responsive design works', async ({ page }) => {
  160 |     await page.setViewportSize({ width: 375, height: 667 });
  161 |     await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  162 |     const menu = page.locator('nav, header, .menu');
> 163 |     await expect(menu).toBeVisible();
      |                        ^ Error: expect(locator).toBeVisible() failed
  164 |   });
  165 | 
  166 |   test('29. Page scrolls correctly', async ({ page }) => {
  167 |     await page.goto(BASE_URL);
  168 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  169 |     await page.waitForTimeout(500);
  170 |     const footer = page.locator('footer');
  171 |     await expect(footer).toBeInViewport();
  172 |   });
  173 | 
  174 |   test('30. Back to top button works', async ({ page }) => {
  175 |     await page.goto(BASE_URL);
  176 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  177 |     await page.waitForTimeout(500);
  178 |     const topButton = page.locator('a:has-text("Go to top"), button:has-text("top")');
  179 |     try {
  180 |       await topButton.first().click();
  181 |       await page.waitForTimeout(300);
  182 |     } catch (e) {
  183 |       console.log('Back to top button not found');
  184 |     }
  185 |   });
  186 | });
```