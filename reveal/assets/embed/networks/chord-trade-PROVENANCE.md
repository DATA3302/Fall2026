# Chord diagram: bilateral merchandise exports, 2019

## Source and license

Source: **UN Comtrade via CEPII Gravity, version 202211 (November 2022)**.
Field: `tradeflow_comtrade_o`, exporter-reported merchandise exports, FOB,
in **thousands of current US dollars**. These are reported trade observations,
not illustrative values, reconciled BACI estimates, or inflation-adjusted dollars.

- [CEPII Gravity dataset and license declaration](https://www.cepii.fr/CEPII/en/bdd_modele/bdd_modele_item.asp?id=8)
- [Exact release download](https://www.cepii.fr/DATA_DOWNLOAD/gravity/data/Gravity_csv_V202211.zip), member `Gravity_V202211.csv`
- [Documentation](https://www.cepii.fr/DATA_DOWNLOAD/gravity/doc/Gravity_documentation.pdf), sections 8.1–8.3, printed pp.31–32.
- Citation: Conte, M., P. Cotterlaz and T. Mayer (2022), *The CEPII Gravity database*, CEPII Working Paper 2022-05.
- CEPII distributes Gravity under **Etalab Open Licence 2.0**. The license text is retained in `chord-trade-LICENSE.txt`. This attribution identifies the original provider and release; the subset/visualization is not endorsed by CEPII or the UN. The data is not covered by the implementation's MIT notice.

Original archive SHA-256:
`7ffea0510a536587f2f9295bbafef4a312a36b366acc256eb6d9770fe35e44b1`.
The 207 MB source archive is a research artifact, not a deployed runtime asset.

## Subset and transformation

`data/chord-trade-2019.csv` retains all 90 original directed country-pair rows,
including the original decimal strings and separately named alternative trade
fields. Only `tradeflow_comtrade_o` is used in `data/chord.json`.

The country order is France, United Kingdom, Greece, Italy, Portugal,
United States, Germany, Ireland, Japan, Spain. The original figure's “Britain”
label maps to the **United Kingdom, including Northern Ireland**, not Great
Britain alone. Germany is unified Germany (`DEU.2` in CEPII).

Select year 2019 and those ten ISO3 codes for both origin and destination;
retain only territorial configurations with `country_exists_o == 1` and
`country_exists_d == 1`. Assert one row for each international pair.
Set `matrix[exporter][destination]` to `tradeflow_comtrade_o` without
normalization, reciprocal copying, averaging, or imputation. Only diagonal
cells are structural zeros, excluding domestic trade. All 90 off-diagonal
observations are present and positive; all 45 reciprocal pairs differ.

2019 was chosen as a complete pre-pandemic baseline, not the newest trade year.
The release includes years through 2020. These are historical nominal values,
not present-day trade or worldwide country totals.

## Encoding and tooltips

D3's ordinary asymmetric chord layout draws **45 ribbons pairing 90 directed
export flows**. Each ribbon end has its own width: one for exports in each
direction. It is not a symmetric bilateral-total matrix, and the two values
must not be replaced by one another. Country arcs total exports **to the other
nine countries only**. The two direction/value pairs appear in the ribbon
tooltip; country tooltips show that country's export sum within this subset.

Display values divide source thousands of USD by 1,000,000 and round to three
decimal places in billions, e.g. `US$78.080B`. The unrounded source values remain
in JSON/CSV and DOM data attributes. Arc ticks are spaced at US$50 billion.
Tooltips contain only country, direction, year, and monetary values; there are
no instructional or synthetic-data messages. Source attribution stays in these
asset documents rather than adding a subtitle, info box, or footer to the slide.

Checks: France → Germany is 78,080,226.745 thousand USD; Germany → France is
118,828,072.429 thousand USD. The sum of all 90 flows is 2,056,570,423.453
thousand USD. Do not divide this directed matrix sum by two.

## Public chord examples searched

No complete, sufficiently sourced merchandise-trade matrix for all ten
countries was established among the checked public examples:

- [micahlanier/world-trade-viz](https://github.com/micahlanier/world-trade-viz), commit `2436b11a765ff6d78904bdc1a104e6173e2baf5a`: top-ten export destinations, Ireland absent and many pairwise omissions. Missing pairs were not treated as zeros.
- [Ksdheeraj9/React-app](https://github.com/Ksdheeraj9/React-app), commit `f258103dd048267c74008166349ea1eedc04e909`: Portugal absent and “Other Trade” aggregates prevent recovery.
- [henryjameslau/Wheat-trade-chord-diagram](https://github.com/henryjameslau/Wheat-trade-chord-diagram), commit `7e11e240b9713bfc29c3e559d65f8a049bd2be59`: commodity-specific wheat data, not all merchandise.

The authoritative CEPII distribution was therefore used rather than filling
repository gaps with made-up values. The original PDF p.29's country labels
are retained, but this is a new trade example, not a claim to recover its data.
A BBC Eurozone graphic uses these same ten countries for **bank debt**, not
merchandise trade; matching labels alone does not establish original provenance.

Research downloads and extraction scripts are under the project root's
`tmp/networks-interactive-review/trade/`. Browser tests and screenshots are
under `Fall2026/tmp/networks-interactive-review/` and are not runtime assets.
