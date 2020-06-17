package com.kata.tennis.gateway.interfaces.websockets;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class WebSocketService {

	private SimpMessageSendingOperations simpMessageSendingOperations;

	@Autowired
	public WebSocketService(SimpMessageSendingOperations simpMessageSendingOperations) {
		this.simpMessageSendingOperations = simpMessageSendingOperations;
	}

	public void notifyGames(String gameMessage) {
		log.info("notification ws : {}", gameMessage);
		simpMessageSendingOperations.convertAndSend("/topic/games", gameMessage);
	}

}
