import React from 'react';
import { Client } from '@stomp/stompjs';
import axios from 'axios';

export default function useWebSocket(){

    const [data,setData] = React.useState();
    const [players, setPlayers]  = React.useState([]);
    const [matchResult, setMatchResult]  = React.useState();

    React.useEffect(()=> {

        const client = new Client();

        client.configure({
            brokerURL: 'ws://localhost:8080/ws',
            onConnect: () => {
                client.subscribe('/topic/games', message => {
                    let parse = JSON.parse(message.body);
                    if ((parse) && parse.type === "com.tennis.kata.match.hasWinner") {
                        setMatchResult(parse);
                    }else {
                        if ((parse) && parse.type === "com.tennis.kata.match.config") {
                            setPlayers([parse.game.playerOne.name, parse.game.playerTwo.name]);
                        } else {
                            setData(parse);
                        }
                    }

                });
            },
            debug: (str) => {
                console.log(new Date(), str);
            }
        });

        client.activate();

   },[data]);
    return {
        data, players, matchResult
    }

}