package com.kata.tennis.gateway.interfaces.bus;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.cloud.stream.messaging.Sink;
import org.springframework.stereotype.Service;

@Service
@EnableBinding(Sink.class)
@Slf4j
public class KafkaEventListenerService {
	private EventListenerService eventListenerService;

	public KafkaEventListenerService(EventListenerService eventListenerService) {
		this.eventListenerService = eventListenerService;
	}

	@StreamListener(Sink.INPUT)
	public void handleEvent(String context) {
		log.info(context);
		eventListenerService.handleEvent(context);
	}
}
