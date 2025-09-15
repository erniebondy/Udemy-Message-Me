class MessagesController < ApplicationController
    before_action :require_user

    def create
      message = current_user.messages.build(message_params)

      if message.save
        ActionCable.server.broadcast("chatroom_channel", { value: message_render(message) })
        redirect_to root_path and return
      end
    end


    private

    def message_render(message)
      # render partial partial_name, locals { local_name: value }
      # this will inturn append the whole partial via the
      # chatroom_channel.js received method
      # render(partial: "message", locals: { message: message })
      # render_to_string(partial: "message", formats: [ :html ], locals: { message: message })
      render_to_string(partial: "message", locals: { message: message })
    end

    def message_params
      params.require(:message).permit(:body)
    end
end
