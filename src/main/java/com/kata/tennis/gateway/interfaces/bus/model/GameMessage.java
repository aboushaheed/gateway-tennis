package com.kata.tennis.gateway.interfaces.bus.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Map;
import java.util.SortedSet;

@Getter
@Setter
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class GameMessage extends GameEvent {

	private GameData game;

	@Data
	public static class GameData {
		private String matchName;
		private boolean douceMode;
		private Map<String, List<Score>> scoreBoard;
		private Player winner;
		//ws
		private Player playerOne;
		private Player playerTwo;
	}
}
