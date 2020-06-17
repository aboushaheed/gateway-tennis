package com.kata.tennis.gateway.clients.match.interfaces;

import com.kata.tennis.gateway.clients.match.model.CreateMatchRequest;
import com.kata.tennis.gateway.clients.match.model.CreateMatchResponse;

public interface MatchApiClient {

	CreateMatchResponse createMatch(CreateMatchRequest createMatchRequest);
}
