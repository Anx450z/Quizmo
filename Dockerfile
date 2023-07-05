FROM ruby:3.1.1

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1
# Configure the main working directory. This is the base
# directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
RUN mkdir -p /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install

# Install yarn
RUN curl https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN yarn

COPY . .
# Expose port 3000 to the Docker host, so we can access it
# from the outside.
EXPOSE 3000
# The main command to run when the container starts. Also
# tell the Rails dev server to bind to all interfaces by
# default.
CMD ["rails", "s", "-b", "0.0.0.0"]
