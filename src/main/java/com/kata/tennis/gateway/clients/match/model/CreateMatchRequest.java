package com.kata.tennis.gateway.clients.match.model;

import lombok.Data;

@Data
public class CreateMatchRequest {

private String playerOneName;
private String playerTwoName;
private String matchName;
private boolean douceMode;
}
