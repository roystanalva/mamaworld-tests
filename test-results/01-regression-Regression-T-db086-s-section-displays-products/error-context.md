# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 01-regression.spec.js >> Regression Tests - Home Page >> 24. Best sellers section displays products
- Location: tests\playwright\01-regression.spec.js:132:3

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
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
        - paragraph [ref=e23]: 00H:45M:46S
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
    - heading "BEST SELLERS" [level=1] [ref=e66]
    - generic [ref=e68]:
      - generic [ref=e71]:
        - text: Product Type
        - img [ref=e72]
      - generic [ref=e76]:
        - text: Size
        - img [ref=e77]
      - generic [ref=e81]:
        - text: Colour/Variant
        - img [ref=e82]
      - generic [ref=e86]:
        - text: Price Range
        - img [ref=e87]
      - 'button "Sort: Popularity" [ref=e91] [cursor=pointer]':
        - paragraph [ref=e93]:
          - img [ref=e94]
          - text: "Sort: Popularity"
    - generic [ref=e96]:
      - generic [ref=e98]:
        - paragraph [ref=e102]: Extra 50% OFF
        - link "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Coral Pink Feeding & Maternity Dress With Zippers (Top & Bottom) ₹1,149₹2,29950% OFF" [ref=e103] [cursor=pointer]:
          - /url: /Coral-Pink-Feeding---Maternity-Dress-With-Zippers-/catalogue/uDgmyyF_/K2Rw6mJe
          - generic [ref=e104]:
            - generic [ref=e106]:
              - generic [ref=e107]:
                - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e110]
                - generic:
                  - generic:
                    - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Coral_Pink_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
              - article [ref=e111]:
                - img [ref=e112]
                - img [ref=e116]
            - paragraph [ref=e120]: Coral Pink Feeding & Maternity Dress With Zippers (Top & Bottom)
            - generic [ref=e121]:
              - text: ₹1,149₹2,299
              - generic [ref=e122]: 50% OFF
      - generic [ref=e126]:
        - paragraph [ref=e130]: Extra 50% OFF
        - link "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Persion Blue Feeding Night Suits With Zippers (Top & Bottom) ₹1,099₹2,19950% OFF" [ref=e131] [cursor=pointer]:
          - /url: /Persion-Blue-Feeding-Night-Suits-With-Zippers--Top-/catalogue/q7JszNcg/TlH0gTuH
          - generic [ref=e132]:
            - generic [ref=e134]:
              - generic [ref=e135]:
                - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e138]
                - generic:
                  - generic:
                    - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Persion_Blue_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
              - article [ref=e139]:
                - img [ref=e140]
                - img [ref=e144]
            - paragraph [ref=e148]: Persion Blue Feeding Night Suits With Zippers (Top & Bottom)
            - generic [ref=e149]:
              - text: ₹1,099₹2,199
              - generic [ref=e150]: 50% OFF
      - generic [ref=e154]:
        - paragraph [ref=e158]: Extra 50% OFF
        - link "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Wine Feeding & Maternity Dress With Zippers (Top & Bottom) ₹1,149₹2,29950% OFF" [ref=e159] [cursor=pointer]:
          - /url: /Wine-Feeding---Maternity-Dress-With-Zippers--Top/catalogue/pUUijh83/EskUMYiU
          - generic [ref=e160]:
            - generic [ref=e162]:
              - generic [ref=e163]:
                - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e166]
                - generic:
                  - generic:
                    - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Wine_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
              - article [ref=e167]:
                - img [ref=e168]
                - img [ref=e172]
            - paragraph [ref=e176]: Wine Feeding & Maternity Dress With Zippers (Top & Bottom)
            - generic [ref=e177]:
              - text: ₹1,149₹2,299
              - generic [ref=e178]: 50% OFF
      - generic [ref=e182]:
        - paragraph [ref=e186]: Extra 50% OFF
        - link "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Coffee Feeding Night Suits With Zippers (Top & Bottom) ₹1,099₹2,19950% OFF" [ref=e187] [cursor=pointer]:
          - /url: /Coffee-Feeding-Night-Suits-With-Zippers--Top--/catalogue/eTLQ-BPV/wWF5mP3k
          - generic [ref=e188]:
            - generic [ref=e190]:
              - generic [ref=e191]:
                - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e194]
                - generic:
                  - generic:
                    - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Coffee_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
              - article [ref=e195]:
                - img [ref=e196]
                - img [ref=e200]
            - paragraph [ref=e204]: Coffee Feeding Night Suits With Zippers (Top & Bottom)
            - generic [ref=e205]:
              - text: ₹1,099₹2,199
              - generic [ref=e206]: 50% OFF
      - generic [ref=e210]:
        - paragraph [ref=e214]: Extra 50% OFF
        - link "Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Black Feeding & Maternity Dress With Zippers (Top & Bottom) ₹1,149₹2,29950% OFF" [ref=e215] [cursor=pointer]:
          - /url: /Black-Feeding---Maternity-Dress-With-Zippers--Top/catalogue/PltDcnJN/k8LRLd88
          - generic [ref=e216]:
            - generic [ref=e218]:
              - generic [ref=e219]:
                - generic [ref=e221]:
                  - img "Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e222]
                  - img "Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e223]
                - generic:
                  - generic:
                    - img "Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Black_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
              - article [ref=e224]:
                - img [ref=e225]
                - img [ref=e229]
            - paragraph [ref=e233]: Black Feeding & Maternity Dress With Zippers (Top & Bottom)
            - generic [ref=e234]:
              - text: ₹1,149₹2,299
              - generic [ref=e235]: 50% OFF
      - generic [ref=e239]:
        - paragraph [ref=e243]: Extra 50% OFF
        - link "Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Pista Feeding & Maternity Dress With Zippers (Top & Bottom) ₹1,149₹2,29950% OFF" [ref=e244] [cursor=pointer]:
          - /url: /Pista-Feeding---Maternity-Dress-With-Zippers--Top/catalogue/aKe1QOM7/t0zXCf68
          - generic [ref=e245]:
            - generic [ref=e247]:
              - generic [ref=e248]:
                - generic [ref=e250]:
                  - img "Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e251]
                  - img "Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e252]
                - generic:
                  - generic:
                    - img "Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Pista_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
              - article [ref=e253]:
                - img [ref=e254]
                - img [ref=e258]
            - paragraph [ref=e262]: Pista Feeding & Maternity Dress With Zippers (Top & Bottom)
            - generic [ref=e263]:
              - text: ₹1,149₹2,299
              - generic [ref=e264]: 50% OFF
      - generic [ref=e268]:
        - paragraph [ref=e272]: Extra 50% OFF
        - link "Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Sea Blue Feeding & Maternity Dress With Zippers (Top & Bottom) ₹1,149₹2,29950% OFF" [ref=e273] [cursor=pointer]:
          - /url: /Sea-Blue-Feeding---Maternity-Dress-With-Zippers-/catalogue/AQKx5Ewu/gexBfucs
          - generic [ref=e274]:
            - generic [ref=e276]:
              - generic [ref=e277]:
                - generic [ref=e279]:
                  - img "Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e280]
                  - img "Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e281]
                - generic:
                  - generic:
                    - img "Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Sea_Blue_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
              - article [ref=e282]:
                - img [ref=e283]
                - img [ref=e287]
            - paragraph [ref=e291]: Sea Blue Feeding & Maternity Dress With Zippers (Top & Bottom)
            - generic [ref=e292]:
              - text: ₹1,149₹2,299
              - generic [ref=e293]: 50% OFF
      - generic [ref=e297]:
        - paragraph [ref=e301]: Extra 50% OFF
        - link [ref=e302] [cursor=pointer]:
          - /url: /Navy-Blue---Gold-Ethnic-Floral-Print-Cotton-Maternity/catalogue/aSuykBLz/q1_5ccJy
          - generic [ref=e303]:
            - generic [ref=e305]:
              - generic [ref=e306]:
                - generic [ref=e308]:
                  - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined" [ref=e309]
                  - img "Navy_Blue_&_Gold_Ethnic_Floral_Print_Cotton_Maternity_Suit_Set_–_3-Piece_Ensemble_with_Striped_Trousers_and_Matching_Dupatta__undefined" [ref=e310]
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
              - article [ref=e311]:
                - img [ref=e312]
                - img [ref=e316]
            - paragraph [ref=e320]: Navy Blue & Gold Ethnic Floral Print Cotton Maternity Suit Set – 3-Piece Ensemble with Striped Trousers and Matching Dupatta
            - generic [ref=e321]:
              - text: ₹1,499₹3,999
              - generic [ref=e322]: 62% OFF
      - generic [ref=e326]:
        - paragraph [ref=e330]: Extra 50% OFF
        - link "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined Cotton Wine Floral Print Maternity Kurta Set (Top & Bottom) ₹1,299₹3,49962% OFF" [ref=e331] [cursor=pointer]:
          - /url: /Cotton-Wine-Floral-Print-Maternity-Kurta-Set---Top/catalogue/aUYjoIzo/TioeAis0
          - generic [ref=e332]:
            - generic [ref=e334]:
              - generic [ref=e335]:
                - generic [ref=e337]:
                  - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined" [ref=e338]
                  - img "Cotton_Wine_Floral_Print_Maternity_Kurta_Set__(Top_&_Bottom)__undefined" [ref=e339]
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
              - article [ref=e340]:
                - img [ref=e341]
                - img [ref=e345]
            - paragraph [ref=e349]: Cotton Wine Floral Print Maternity Kurta Set (Top & Bottom)
            - generic [ref=e350]:
              - text: ₹1,299₹3,499
              - generic [ref=e351]: 62% OFF
      - generic [ref=e355]:
        - paragraph [ref=e359]: Extra 50% OFF
        - link "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined Cotton Royal blue Floral Print Maternity & Feeding Kurta Set ₹1,299₹3,49962% OFF" [ref=e360] [cursor=pointer]:
          - /url: /Cotton-Royal-blue-Floral-Print-Maternity---Feeding-Kurta/catalogue/TBHUdBbL/PogSA9ws
          - generic [ref=e361]:
            - generic [ref=e363]:
              - generic [ref=e364]:
                - generic [ref=e366]:
                  - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined" [ref=e367]
                  - img "Cotton_Royal_blue_Floral_Print_Maternity_&_Feeding_Kurta_Set__undefined" [ref=e368]
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
              - article [ref=e369]:
                - img [ref=e370]
                - img [ref=e374]
            - paragraph [ref=e378]: Cotton Royal blue Floral Print Maternity & Feeding Kurta Set
            - generic [ref=e379]:
              - text: ₹1,299₹3,499
              - generic [ref=e380]: 62% OFF
      - generic [ref=e384]:
        - paragraph [ref=e388]: Extra 50% OFF
        - link "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined Cotton Purple Floral Print Maternity Kurta Set ₹1,299₹3,49962% OFF" [ref=e389] [cursor=pointer]:
          - /url: /Cotton-Purple-Floral-Print-Maternity-Kurta-Set/catalogue/OQY_jFcF/Ssn9tRSy
          - generic [ref=e390]:
            - generic [ref=e392]:
              - generic [ref=e393]:
                - generic [ref=e395]:
                  - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined" [ref=e396]
                  - img "Cotton_Purple_Floral_Print_Maternity_Kurta_Set__undefined" [ref=e397]
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
              - article [ref=e398]:
                - img [ref=e399]
                - img [ref=e403]
            - paragraph [ref=e407]: Cotton Purple Floral Print Maternity Kurta Set
            - generic [ref=e408]:
              - text: ₹1,299₹3,499
              - generic [ref=e409]: 62% OFF
      - generic [ref=e413]:
        - paragraph [ref=e417]: Extra 50% OFF
        - link "Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined Black Feeding Night Suits With Zippers (Top & Bottom) ₹1,099₹2,19950% OFF" [ref=e418] [cursor=pointer]:
          - /url: /Black-Feeding-Night-Suits-With-Zippers--Top--/catalogue/6d7zl_S6/_PKK_cIB
          - generic [ref=e419]:
            - generic [ref=e421]:
              - generic [ref=e422]:
                - generic [ref=e424]:
                  - img "Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e425]
                  - img "Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined" [ref=e426]
                - generic:
                  - generic:
                    - img "Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Black_Feeding_Night_Suits_With_Zippers_(Top_&_Bottom)__undefined"
              - article [ref=e427]:
                - img [ref=e428]
                - img [ref=e432]
            - paragraph [ref=e436]: Black Feeding Night Suits With Zippers (Top & Bottom)
            - generic [ref=e437]:
              - text: ₹1,099₹2,199
              - generic [ref=e438]: 50% OFF
      - generic [ref=e442]:
        - paragraph [ref=e446]: Extra 50% OFF
        - link "Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined Yellow Feeding & Maternity Dress With Zippers (Top & Bottom) ₹1,149₹2,29950% OFF" [ref=e447] [cursor=pointer]:
          - /url: /Yellow-Feeding---Maternity-Dress-With-Zippers--Top/catalogue/_sTd4fhq/Bklt1W-1
          - generic [ref=e448]:
            - generic [ref=e450]:
              - generic [ref=e451]:
                - generic [ref=e453]:
                  - img "Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e454]
                  - img "Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined" [ref=e455]
                - generic:
                  - generic:
                    - img "Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                - generic:
                  - generic:
                    - img "Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
                    - img "Yellow_Feeding_&_Maternity_Dress_With_Zippers_(Top_&_Bottom)__undefined"
              - article [ref=e456]:
                - img [ref=e457]
                - img [ref=e461]
            - paragraph [ref=e465]: Yellow Feeding & Maternity Dress With Zippers (Top & Bottom)
            - generic [ref=e466]:
              - text: ₹1,149₹2,299
              - generic [ref=e467]: 50% OFF
      - generic [ref=e471]:
        - paragraph [ref=e475]: Extra 50% OFF
        - link [ref=e476] [cursor=pointer]:
          - /url: /Purple-Floral-Cotton-Maternity-Kurti-with-Pant---Dupatta/catalogue/JjOiNRtD/EjXcUFn4
          - generic [ref=e477]:
            - generic [ref=e479]:
              - generic [ref=e480]:
                - generic [ref=e482]:
                  - img "Purple_Floral_Cotton_Maternity_Kurti_with_Pant_&_Dupatta_Set_–_Feeding_Friendly_with_Dual_Invisible_Zips__undefined" [ref=e483]
                  - img "Purple_Floral_Cotton_Maternity_Kurti_with_Pant_&_Dupatta_Set_–_Feeding_Friendly_with_Dual_Invisible_Zips__undefined" [ref=e484]
                - generic:
                  - generic:
                    - img "Purple_Floral_Cotton_Maternity_Kurti_with_Pant_&_Dupatta_Set_–_Feeding_Friendly_with_Dual_Invisible_Zips__undefined"
                    - img "Purple_Floral_Cotton_Maternity_Kurti_with_Pant_&_Dupatta_Set_–_Feeding_Friendly_with_Dual_Invisible_Zips__undefined"
                - generic:
                  - generic:
                    - img "Purple_Floral_Cotton_Maternity_Kurti_with_Pant_&_Dupatta_Set_–_Feeding_Friendly_with_Dual_Invisible_Zips__undefined"
                    - img "Purple_Floral_Cotton_Maternity_Kurti_with_Pant_&_Dupatta_Set_–_Feeding_Friendly_with_Dual_Invisible_Zips__undefined"
                - generic:
                  - generic:
                    - img "Purple_Floral_Cotton_Maternity_Kurti_with_Pant_&_Dupatta_Set_–_Feeding_Friendly_with_Dual_Invisible_Zips__undefined"
                    - img "Purple_Floral_Cotton_Maternity_Kurti_with_Pant_&_Dupatta_Set_–_Feeding_Friendly_with_Dual_Invisible_Zips__undefined"
              - article [ref=e485]:
                - img [ref=e486]
                - img [ref=e490]
            - paragraph [ref=e494]: Purple Floral Cotton Maternity Kurti with Pant & Dupatta Set – Feeding Friendly with Dual Invisible Zips
            - generic [ref=e495]:
              - text: ₹1,499₹3,999
              - generic [ref=e496]: 62% OFF
      - generic [ref=e500]:
        - paragraph [ref=e504]: Extra 50% OFF
        - link "Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined Rust-Red Printed Cotton Maternity Top, Bottom and Dupatta Set ₹1,499₹3,99962% OFF" [ref=e505] [cursor=pointer]:
          - /url: /Rust-Red-Printed-Cotton-Maternity-Top--Bottom-and-Dupatta/catalogue/UhWQehgO/il7kYsg-
          - generic [ref=e506]:
            - generic [ref=e508]:
              - generic [ref=e509]:
                - generic [ref=e511]:
                  - img "Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined" [ref=e512]
                  - img "Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined" [ref=e513]
                - generic:
                  - generic:
                    - img "Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined"
                    - img "Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined"
                - generic:
                  - generic:
                    - img "Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined"
                    - img "Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined"
                - generic:
                  - generic:
                    - img "Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined"
                    - img "Rust-Red_Printed_Cotton_Maternity_Top,_Bottom_and_Dupatta_Set__undefined"
              - article [ref=e514]:
                - img [ref=e515]
                - img [ref=e519]
            - paragraph [ref=e523]: Rust-Red Printed Cotton Maternity Top, Bottom and Dupatta Set
            - generic [ref=e524]:
              - text: ₹1,499₹3,999
              - generic [ref=e525]: 62% OFF
      - generic [ref=e529]:
        - paragraph [ref=e533]: Extra 50% OFF
        - link [ref=e534] [cursor=pointer]:
          - /url: /Black---White-Floral-Maternity-Kurta-Set-with-Dupatta/catalogue/RXYi-PBY/7oGCgev6
          - generic [ref=e535]:
            - generic [ref=e537]:
              - generic [ref=e538]:
                - generic [ref=e540]:
                  - img "Black_&_White_Floral_Maternity_Kurta_Set_with_Dupatta_–_3-Piece_Feeding-Friendly_Ethnic_Suit__undefined" [ref=e541]
                  - img "Black_&_White_Floral_Maternity_Kurta_Set_with_Dupatta_–_3-Piece_Feeding-Friendly_Ethnic_Suit__undefined" [ref=e542]
                - generic:
                  - generic:
                    - img "Black_&_White_Floral_Maternity_Kurta_Set_with_Dupatta_–_3-Piece_Feeding-Friendly_Ethnic_Suit__undefined"
                    - img "Black_&_White_Floral_Maternity_Kurta_Set_with_Dupatta_–_3-Piece_Feeding-Friendly_Ethnic_Suit__undefined"
                - generic:
                  - generic:
                    - img "Black_&_White_Floral_Maternity_Kurta_Set_with_Dupatta_–_3-Piece_Feeding-Friendly_Ethnic_Suit__undefined"
                    - img "Black_&_White_Floral_Maternity_Kurta_Set_with_Dupatta_–_3-Piece_Feeding-Friendly_Ethnic_Suit__undefined"
                - generic:
                  - generic:
                    - img "Black_&_White_Floral_Maternity_Kurta_Set_with_Dupatta_–_3-Piece_Feeding-Friendly_Ethnic_Suit__undefined"
                    - img "Black_&_White_Floral_Maternity_Kurta_Set_with_Dupatta_–_3-Piece_Feeding-Friendly_Ethnic_Suit__undefined"
              - article [ref=e543]:
                - img [ref=e544]
                - img [ref=e548]
            - paragraph [ref=e552]: Black & White Floral Maternity Kurta Set with Dupatta – 3-Piece Feeding-Friendly Ethnic Suit
            - generic [ref=e553]:
              - text: ₹1,499₹3,999
              - generic [ref=e554]: 62% OFF
  - contentinfo [ref=e557]:
    - generic [ref=e559]:
      - link "logo__Mama World" [ref=e560] [cursor=pointer]:
        - /url: /
        - img "logo__Mama World" [ref=e561]
      - generic [ref=e562]:
        - generic [ref=e564]:
          - heading "Mama World" [level=3] [ref=e565]
          - paragraph [ref=e566]: Welcome to Mama World website, we are an MSE based in India. We aim to deliver high-quality products to our customers.
          - generic [ref=e568]:
            - link "facebook__Mama World" [ref=e569] [cursor=pointer]:
              - /url: https://www.facebook.com/mamaworld01
              - img "facebook__Mama World" [ref=e570]
            - link "instagram__Mama World" [ref=e571] [cursor=pointer]:
              - /url: https://www.instagram.com/mamaworld.in?igsh=YWhuNnBvYmQ1ZThw
              - img "instagram__Mama World" [ref=e572]
        - generic [ref=e575]:
          - generic [ref=e576]:
            - generic [ref=e577]: CONTACT US
            - img [ref=e578]
          - generic [ref=e580]:
            - 'link "Call: +91 - 9820584377" [ref=e581] [cursor=pointer]':
              - /url: tel:+919820584377
              - paragraph [ref=e582]: "Call: +91 - 9820584377"
            - 'link "WhatsApp: +91 - 9820584377" [ref=e583] [cursor=pointer]':
              - /url: https://wa.me/919820584377
              - paragraph [ref=e584]: "WhatsApp: +91 - 9820584377"
            - paragraph [ref=e585]: "Customer Support Time: Mon-Sat, 10 AM to 7 PM"
            - 'link "Email: sdnenwani@gmail.com" [ref=e586] [cursor=pointer]':
              - /url: mailto:sdnenwani@gmail.com
              - paragraph [ref=e587]: "Email: sdnenwani@gmail.com"
            - paragraph [ref=e588]: "Address: 191/2877, Tagore Nagar, Group No 8B, Opp Sandesh Collage, Vikhroli (E), Maharashtra, Mumbai, 400083"
    - generic [ref=e591]:
      - generic [ref=e593]:
        - link "About Us" [ref=e595] [cursor=pointer]:
          - /url: /about-us
          - paragraph [ref=e596]: About Us
        - link "Privacy Policy" [ref=e598] [cursor=pointer]:
          - /url: /privacy-policy
          - paragraph [ref=e599]: Privacy Policy
        - link "Return Policy" [ref=e601] [cursor=pointer]:
          - /url: /return-policy
          - paragraph [ref=e602]: Return Policy
        - link "Shipping Policy" [ref=e604] [cursor=pointer]:
          - /url: /shipping-policy
          - paragraph [ref=e605]: Shipping Policy
        - link "Terms and condition" [ref=e607] [cursor=pointer]:
          - /url: /terms-and-conditions
          - paragraph [ref=e608]: Terms and condition
      - generic [ref=e610]:
        - paragraph [ref=e611]: Most searched on store
        - generic [ref=e612]:
          - link "FEEDING KURTA WITH PANT" [ref=e613] [cursor=pointer]:
            - /url: /FEEDING-KURTA-WITH-PANT/collection/5XUJMA5R
            - paragraph [ref=e614]: FEEDING KURTA WITH PANT
          - paragraph [ref=e615]: "|"
        - generic [ref=e616]:
          - link "MATERNITY & FEEDING KURTA" [ref=e617] [cursor=pointer]:
            - /url: /MATERNITY---FEEDING-KURTA/collection/9au_ppji
            - paragraph [ref=e618]: MATERNITY & FEEDING KURTA
          - paragraph [ref=e619]: "|"
        - generic [ref=e620]:
          - link "Feeding Night Wear" [ref=e621] [cursor=pointer]:
            - /url: /Feeding-Night-Wear/collection/Aahm3Wot
            - paragraph [ref=e622]: Feeding Night Wear
          - paragraph [ref=e623]: "|"
        - generic [ref=e624]:
          - link "FEEDING & MATERNITY KURTI" [ref=e625] [cursor=pointer]:
            - /url: /FEEDING---MATERNITY-KURTI-/collection/FtYwITXx
            - paragraph [ref=e626]: FEEDING & MATERNITY KURTI
          - paragraph [ref=e627]: "|"
        - generic [ref=e628]:
          - link "IN THE SPOTLIGHT" [ref=e629] [cursor=pointer]:
            - /url: /IN-THE-SPOTLIGHT/collection/Vd_QRvSB
            - paragraph [ref=e630]: IN THE SPOTLIGHT
          - paragraph [ref=e631]: "|"
        - generic [ref=e632]:
          - link "NEW ARRIVALS" [ref=e633] [cursor=pointer]:
            - /url: /NEW-ARRIVALS/collection/cF1wR54K
            - paragraph [ref=e634]: NEW ARRIVALS
          - paragraph [ref=e635]: "|"
        - generic [ref=e636]:
          - link "NIGHT WEAR" [ref=e637] [cursor=pointer]:
            - /url: /NIGHT-WEAR/collection/gkqvHb7d
            - paragraph [ref=e638]: NIGHT WEAR
          - paragraph [ref=e639]: "|"
        - generic [ref=e640]:
          - link "BEST SELLERS" [ref=e641] [cursor=pointer]:
            - /url: /BEST-SELLERS/collection/kRr89Z5K
            - paragraph [ref=e642]: BEST SELLERS
          - paragraph [ref=e643]: "|"
        - generic [ref=e644]:
          - link "MATERNITY CO-ORD SET" [ref=e645] [cursor=pointer]:
            - /url: /MATERNITY-CO-ORD-SET/collection/keR5QsOH
            - paragraph [ref=e646]: MATERNITY CO-ORD SET
          - paragraph [ref=e647]: "|"
        - generic [ref=e648]:
          - link "CO-ORD SET" [ref=e649] [cursor=pointer]:
            - /url: /CO-ORD-SET/collection/mgYajzbX
            - paragraph [ref=e650]: CO-ORD SET
          - paragraph [ref=e651]: "|"
        - link "MATERNITY CO-ORD SET" [ref=e653] [cursor=pointer]:
          - /url: /MATERNITY-CO-ORD-SET/collection/w80DraWu
          - paragraph [ref=e654]: MATERNITY CO-ORD SET
    - generic [ref=e657]:
      - generic [ref=e659]:
        - img [ref=e660]
        - img [ref=e664]
        - img [ref=e670]
        - img [ref=e674]
        - img [ref=e678]
        - img [ref=e682]
        - img [ref=e689]
      - button "Go to top" [ref=e693] [cursor=pointer]:
        - generic [ref=e694]:
          - img [ref=e695]
          - text: Go to top
```

# Test source

```ts
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
  49  |     await page.fill('input[type="search"], input[placeholder*="Search"]', 'Kurta');
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
> 135 |     expect(await products.count()).toBeGreaterThan(0);
      |                                    ^ Error: expect(received).toBeGreaterThan(expected)
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
  163 |     await expect(menu).toBeVisible();
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