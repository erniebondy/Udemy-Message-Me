class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user
  end

  ## We need to prevent a user navigating to unauthorized links via the URL
  def require_user
    if !logged_in?
      flash[:warning] = "You must be logged in to perfom that action!"
      redirect_to login_path
    end
  end
end
