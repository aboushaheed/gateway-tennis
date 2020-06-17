package com.kata.tennis.gateway.interfaces.http.match;

import com.kata.tennis.gateway.clients.match.interfaces.MatchApiClient;
import com.kata.tennis.gateway.clients.match.model.CreateMatchRequest;
import com.kata.tennis.gateway.clients.match.model.CreateMatchResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class MatchService {

	private MatchApiClient matchApiClient;

	@Autowired
	public MatchService(MatchApiClient matchApiClient) {
		this.matchApiClient = matchApiClient;
	}

	public CreateMatchResponse createMatch(CreateMatchRequest createMatchRequest) {
		log.info("creating a new match {}", createMatchRequest);
		return matchApiClient.createMatch(createMatchRequest);
	}
}
