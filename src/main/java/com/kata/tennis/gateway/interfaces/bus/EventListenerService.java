package com.kata.tennis.gateway.interfaces.bus;

import com.kata.tennis.gateway.interfaces.websockets.WebSocketService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class EventListenerService {

	private WebSocketService webSocketService;

	@Autowired
	public EventListenerService(WebSocketService webSocketService) {
		this.webSocketService = webSocketService;
	}

	public void handleEvent(String context) {
		try {
			processEvent(context);
		} catch (Exception e) {
			log.error("Can not process this event", e);
		}
	}

	private void processEvent(String context) {
		webSocketService.notifyGames(context);
	}

}
