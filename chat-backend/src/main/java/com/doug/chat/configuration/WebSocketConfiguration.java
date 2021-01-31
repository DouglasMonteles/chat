package com.doug.chat.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import com.doug.chat.handler.ChatWebSocketHandler;

@Configuration
@EnableWebSocket
public class WebSocketConfiguration implements WebSocketConfigurer {
	
	private final String CHAT_ENDPOINT = "/chat";

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(getChatWebSocketHandle(), CHAT_ENDPOINT)
			.setAllowedOrigins("*");
	}
	
	@Bean
	protected WebSocketHandler getChatWebSocketHandle() {
		return new ChatWebSocketHandler();
	}
	
}
