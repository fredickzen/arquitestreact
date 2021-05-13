import React from "react";
import { Spinner } from "react-bootstrap";

const ButtonAction = ({ text = "Guardar", onClick, loading = false }) => {
    return (
        <button type="button" className="btn btn-primary" onClick={onClick} disabled={loading} style={{ marginTop: "30px" }}>
            <Spinner
                size="sm"
                animation="border"
                role="status"
                hidden={!loading}
                style={{ marginRight: "5px" }}
            >
            </Spinner>
            {text}
        </button>
    );
};

export default ButtonAction;
