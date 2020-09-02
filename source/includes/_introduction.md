# Einführung

<aside class="warning">
  Die hier gelisteten APIs sind noch nicht in Betrieb.
  Wir werden diesen Hinweis bei Inbetriebnahme entfernen.
</aside>

Auf dieser Seite findest du die aktuellste Dokumentationen zu allen HTTP-APIs, die das Studentenwerk OstNiedersachsen anbietet.

## Rate-Limiting

Alle APIs sind in der Regel auf ein bestimmtes Anfragenvolumen pro Zeitraum limitiert. Der HTTP-Statuscode `429 Too Many Requests`
signalisiert, dass deine Anwendung das Anfragenvolumen pro Zeitraum überschritten hat.
Der [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After)-Header gibt in diesem Fall an, wann
eine nächste Anfrage frühestens erfolgen darf.
