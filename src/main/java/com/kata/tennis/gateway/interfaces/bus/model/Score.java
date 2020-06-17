package com.kata.tennis.gateway.interfaces.bus.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Score {
	ZERO("0"),
	FIFTEEN("15"),
	THIRTY("30"),
	FORTY("40"),
	ADVANTAGE("ADVANTAGE"),
	DEUCE("DEUCE");

	Score(String value) {
	}
}