package com.kata.tennis.gateway.clients.match.infra;

import com.kata.tennis.gateway.clients.match.interfaces.MatchApiClient;
import com.kata.tennis.gateway.clients.match.model.CreateMatchRequest;
import com.kata.tennis.gateway.clients.match.model.CreateMatchResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(value = "matchClient")
public interface FeignMatchApiClient extends MatchApiClient {

	@Override
	default CreateMatchResponse createMatch(CreateMatchRequest createMatchRequest) {
		return createMatchApi(createMatchRequest);
	}


	@PostMapping("/matchs")
	CreateMatchResponse createMatchApi(@RequestBody CreateMatchRequest createMatchRequest);

}
