# Mensa API

Mit der Mensa API kannst du den aktuellen Speiseplan aller Mensen und Kafeterien des Studentenwerk OstNiedersachsens abrufen.

<aside class="warning">
  Die XML-API ist veraltet und wird bald entfernt.
</aside>

## Liste aller Mensen

> Beispiel:

```shell
curl "https://sls.api.stw-on.de/v1/location"
```

```json-doc
[
  {
    "id": 101,
    "name": "Mensa BS TU 1",
    "address": {
      "line1": "Mensa 1 TU Braunschweig",
      "line2": null,
      "street": "Katharinenstraße 1",
      "zip": "38106",
      "city": "Braunschweig"
    },
    "opening_hours": [
      {
        "time": "noon", // 'morning', 'noon' oder 'evening' für jeweils Morgen-, Mittags- und Abendmensa
        "start_day": 1, // 1 = Montag, 7 = Sonntag
        "end_day": 5,
        "start_time": "11:30:00",
        "end_time": "14:00:00"
      },
      {
        "time": "noon",
        "start_day": 6,
        "end_day": 6,
        "start_time": "11:30:00",
        "end_time": "14:00:00"
      },
      {
        "time": "evening",
        "start_day": 1,
        "end_day": 4,
        "start_time": "16:30:00",
        "end_time": "19:45:00"
      }
    ]
  },
  {
    "id": 102,
    "name": "Tageslager Mensa BS TU 1",
    "address": {
      "line1": "Mensa 1 TU Braunschweig",
      "line2": null,
      "street": "Katharinenstraße 1",
      "zip": "38106",
      "city": "Braunschweig"
    },
    "opening_hours": [...]
  },
  // ...
]
```

### HTTP

`GET https://sls.api.stw-on.de/v1/location`


## Eine Mensa

> Beispiel:

```shell
curl "https://sls.api.stw-on.de/v1/location/101"
```

```json-doc
{
  "id": 101,
  "name": "Mensa BS TU 1",
  "address": {
    "line1": "Mensa 1 TU Braunschweig",
    "line2": null,
    "street": "Katharinenstraße 1",
    "zip": "38106",
    "city": "Braunschweig"
  },
  "opening_hours": [
      {
        "time": "noon", // 'morning', 'noon' oder 'evening' für jeweils Morgen-, Mittags- und Abendmensa
        "start_day": 1, // 1 = Montag, 7 = Sonntag
        "end_day": 5,
        "start_time": "11:30:00",
        "end_time": "14:00:00"
      },
      {
        "time": "noon",
        "start_day": 6,
        "end_day": 6,
        "start_time": "11:30:00",
        "end_time": "14:00:00"
      },
      {
        "time": "evening",
        "start_day": 1,
        "end_day": 4,
        "start_time": "16:30:00",
        "end_time": "19:45:00"
      }
    ]
}
```

### HTTP

`GET https://sls.api.stw-on.de/v1/location/<id>`

### URL Parameter

Parameter | Beschreibung
----------| -----------------------------------------------------------------
`id`      | Die ID der Mensa. Siehe [Liste aller Mensen](#liste-aller-mensen)


## Tagesmenü

> Beispiel:

```shell
curl "https://sls.api.stw-on.de/v1/location/101/menu/2018-02-26?time=evening"
```

```json-doc
{
  "announcements": [
    {
      "id": 775,
      "start_date": "2018-01-22",
      "end_date": "2018-03-10",
      "text": "Beginn 2. Bauphase – Mensa 1 ab 22. Januar geschlossen",
      "closed": true, // Gibt an, ob die Mensa in der Zeit geschlossen hat
      "time": "all"
    }
  ],
  "meals": [
    {
      "id": 3028,
      "date": "2018-02-26",
      "name": "Kartoffeln",
      "price": { // Preise in EUR
        "student": "0.50",
        "employee": "0.70",
        "guest": "0.70"
      },
      "location": {
        "id": 101,
        "name": "Mensa BS TU 1",
        "address": {
          "line1": "Mensa 1 TU Braunschweig",
          "line2": null,
          "street": "Katharinenstraße 1",
          "zip": "38106",
          "city": "Braunschweig"
        },
        "opening_hours": [...]
      },
      "time": "evening",
      "lane": {
        "id": 310,
        "name": "Beilage"
      },
      "tags": {
        "categories": [ // Allgemeine Kategorien
          {
            "id": "VEGA",
            "name": "Vegan"
          }
        ],
        "allergens": [ // Enthaltene Allergene
          
        ],
        "additives": [ // Enthaltene Zusatzstoffe
          
        ]
      },
      "special_tags": [ // Spezialangebote
        
      ]
    },
    {
      "id": 3029,
      "date": "2018-02-26",
      "name": "Spaghetti",
      "price": {
        "student": "0.50",
        "employee": "0.70",
        "guest": "0.70"
      },
      "location": {
        "id": 101,
        "name": "Mensa BS TU 1",
        "address": {
          "line1": "Mensa 1 TU Braunschweig",
          "line2": null,
          "street": "Katharinenstraße 1",
          "zip": "38106",
          "city": "Braunschweig"
        },
        "opening_hours": [...]
      },
      "time": "evening",
      "lane": {
        "id": 310,
        "name": "Beilage"
      },
      "tags": {
        "categories": [
          {
            "id": "VEGA",
            "name": "Vegan"
          }
        ],
        "allergens": [
          {
            "id": "GL1",
            "name": "GL namentlich Weizen"
          }
        ],
        "additives": [
          
        ]
      },
      "special_tags": [
        
      ]
    }
  ]
}
```

### HTTP

`GET https://sls.api.stw-on.de/v1/location/<id>/menu/<isoDate>`

### URL Parameter

Parameter | Beschreibung
--------- | -----------------------------------------------------------------
`id`      | Die ID der Mensa. Siehe [Liste aller Mensen](#liste-aller-mensen)
`isoDate` | Datum nach ISO 8601 (z.B. `2020-06-18`)

### Query Parameter

Parameter         | Beschreibung                                       | Standard
----------------- | -------------------------------------------------- | ---------
`time` (optional) | Tageszeit (`morning`, `noon`, `evening` oder `all` | `all`


## Mehrere Tagesmenüs

> Beispiel:

```shell
curl "https://sls.api.stw-on.de/v1/location/101/menu/2018-02-26/2018-02-28?time=evening"
```

```json-doc
{
  "announcements": [
    {
      "id": 775,
      "start_date": "2018-01-22",
      "end_date": "2018-03-10",
      "text": "Beginn 2. Bauphase – Mensa 1 ab 22. Januar geschlossen",
      "closed": true, // Gibt an, ob die Mensa in der Zeit geschlossen hat
      "time": "all"
    }
  ],
  "meals": [
    {
      "id": 3028,
      "date": "2018-02-26",
      "name": "Kartoffeln",
      "price": { // Preise in EUR
        "student": "0.50",
        "employee": "0.70",
        "guest": "0.70"
      },
      "location": {
        "id": 101,
        "name": "Mensa BS TU 1",
        "address": {
          "line1": "Mensa 1 TU Braunschweig",
          "line2": null,
          "street": "Katharinenstraße 1",
          "zip": "38106",
          "city": "Braunschweig"
        },
        "opening_hours": [...]
      },
      "time": "evening",
      "lane": {
        "id": 310,
        "name": "Beilage"
      },
      "tags": {
        "categories": [ // Allgemeine Kategorien
          {
            "id": "VEGA",
            "name": "Vegan"
          }
        ],
        "allergens": [ // Enthaltene Allergene
          
        ],
        "additives": [ // Enthaltene Zusatzstoffe
          
        ]
      },
      "special_tags": [ // Spezialangebote
        
      ]
    },
    {
      "id": 3029,
      "date": "2018-02-27",
      "name": "Spaghetti",
      "price": {
        "student": "0.50",
        "employee": "0.70",
        "guest": "0.70"
      },
      "location": {
        "id": 101,
        "name": "Mensa BS TU 1",
        "address": {
          "line1": "Mensa 1 TU Braunschweig",
          "line2": null,
          "street": "Katharinenstraße 1",
          "zip": "38106",
          "city": "Braunschweig"
        },
        "opening_hours": [...]
      },
      "time": "evening",
      "lane": {
        "id": 310,
        "name": "Beilage"
      },
      "tags": {
        "categories": [
          {
            "id": "VEGA",
            "name": "Vegan"
          }
        ],
        "allergens": [
          {
            "id": "GL1",
            "name": "GL namentlich Weizen"
          }
        ],
        "additives": [
          
        ]
      },
      "special_tags": [
        
      ]
    }
  ]
}
```

### HTTP

`GET https://sls.api.stw-on.de/v1/location/<id>/menu/<startIsoDate>/<endIsoDate>`

### URL Parameter

Parameter      | Beschreibung
-------------- | -----------------------------------------------------------------
`id`           | Die ID der Mensa. Siehe [Liste aller Mensen](#liste-aller-mensen)
`startIsoDate` | Startdatum (von) nach ISO 8601 (z.B. `2020-06-18`)
`endIsoDate`   | Enddatum (bis) nach ISO 8601 (z.B. `2020-06-18`)

<aside class="info">
  <b>Hinweis</b>: Start- Enddatum dürfen maximal 21 Tage auseinander liegen.
</aside>

### Query Parameter

Parameter         | Beschreibung                                       | Standard
----------------- | -------------------------------------------------- | ---------
`time` (optional) | Tageszeit (`morning`, `noon`, `evening` oder `all` | `all`
