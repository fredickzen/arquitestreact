import React from "react";

const HomeShowResult = ({ text = "Sin nada que mostrar" }) => {
    if (!!!text)
        text = "Sin nada que mostrar"
    return (
        <>
            <hr />
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <code className="col-12">{text}</code>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeShowResult;
