FROM ruby:2.6-slim

WORKDIR /srv/slate

VOLUME /srv/slate/source
EXPOSE 4567

COPY . /srv/slate

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        nodejs \
    && gem install bundler \
    && bundle install \
    && apt-get remove -y build-essential \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/* \
    && bundle exec middleman build --clean


FROM nginx:alpine

COPY --from=build /srv/slate/build /usr/share/nginx/html
