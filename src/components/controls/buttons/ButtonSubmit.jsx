import React from "react";
import { Spinner } from "react-bootstrap";

const ButtonSubmit = ({ text = "Guardar", loading = false, color = "primary" }) => {
    return (
        <button type="submit" className={"btn btn-" + color} disabled={loading} style={{ marginTop: "30px" }}>
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

export default ButtonSubmit;
