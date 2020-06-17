package com.kata.tennis.gateway.interfaces.http.match;

import com.kata.tennis.gateway.clients.match.model.CreateMatchRequest;
import com.kata.tennis.gateway.clients.match.model.CreateMatchResponse;
import com.kata.tennis.gateway.interfaces.http.match.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MatchController {
	private MatchService matchService;

	@Autowired
	public MatchController(MatchService matchService) {
		this.matchService = matchService;
	}

	@PostMapping("/api/matchs")
	public CreateMatchResponse createMatch(@RequestBody CreateMatchRequest createMatchRequest)  {
		return matchService.createMatch(createMatchRequest);
	}


}
