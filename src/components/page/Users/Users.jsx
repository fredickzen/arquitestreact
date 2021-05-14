import React, { useState } from "react";
import { Test } from "../../../js/api/test/test";
import ButtonAction from "../../controls/buttons/ButtonAction";

const Users = () => {
    const [loading, setLoading] = useState(false);
    const callApi = async () => {
        setLoading(true);
        Test.llamadoApi()
            .then((x) => {
                console.log(x);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };
    return (
        <div>
            <ButtonAction
                onClick={callApi}
                loading={loading}
                text="Llamar API sin respuesta"
            />
        </div>
    );
};

export default Users;
