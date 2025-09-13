# Pin npm packages by running ./bin/importmap

### This is so the objects are available via imports?
pin "application"
pin "jquery", to: "dist/jquery.min.js"
pin "fomantic-ui", to: "semantic.min.js"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@rails/actioncable", to: "actioncable.esm.js"
pin_all_from "app/javascript/channels", under: "channels"

# pin "jquery", to: "jquery/dist/jquery.min.js"
# pin "fomantic-ui", to: "fomantic-ui-css/semantic.min.js"
