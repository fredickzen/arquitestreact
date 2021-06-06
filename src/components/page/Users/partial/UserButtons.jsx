import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useSound from 'use-sound';
import { Test } from '../../../../js/api/test/test';
import boopSfx from '../../../../sound/tan.mp3';
import ButtonAction from '../../../controls/buttons/ButtonAction';

const UserButtons = ({titulo}) => {
    const [loading, setLoading] = useState(false);

    const [play , { stop, isPlaying }] = useSound(boopSfx, {volume: 0.1});

    const history = useHistory();

    const callApi = async () => {
        setLoading(true);
        Test.llamadoApi()
            .then((x) => {
                console.log(x);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    useEffect(() => {
        play();
        return () => {
            stop();
        }
    }, [play, stop]);
    return (
        <div>
            
            <h1>{titulo} </h1>
            <ButtonAction
                onClick={callApi}
                loading={loading}
                text="Llamar API sin respuesta"
            />
            <ButtonAction
                onClick={isPlaying ? () => stop() : () => play() }
                text={isPlaying ? "Detener música": "Susageo"}
            />
            <ButtonAction
                onClick={() => history.push("/")}
                text="Cambiar de ruta"
            />
        </div>
    );
}

export default UserButtons;
