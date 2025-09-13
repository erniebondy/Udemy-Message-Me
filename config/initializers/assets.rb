# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = "1.0"
Rails.application.config.assets.paths << Rails.root.join("app/assets/")

# Rails.application.config.assets.paths << Rails.root.join("node_modules")

### Imagine the paths are 'prepended' to the importmap pins
Rails.application.config.assets.paths << Rails.root.join("node_modules/jquery")
Rails.application.config.assets.paths << Rails.root.join("node_modules/fomantic-ui-css")
# Rails.application.config.assets.paths << Rails.root.join("javascript")

Rails.application.config.assets.paths << "app/assets/stylesheets"
Rails.application.config.assets.paths << "app/assets/images"


# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
