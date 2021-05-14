import React, { useReducer } from "react";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../../controls/buttons/ButtonSubmit";
import Form from "../../controls/reacthookforms/Forms";
import InputEmail from "../../controls/reacthookforms/input/InputEmail";
import InputText from "../../controls/reacthookforms/input/InputText";
import { HomeReducer, HomeReducerInitialValue } from "./code/HomeReducer";
import HomeShowResult from "./partial/HomeShowResult";

const Home = () => {
    const form = useForm();

    const [state, dispatch] = useReducer(HomeReducer, HomeReducerInitialValue);

    const submit = () => {
        dispatch({ type: "loading" });
        setTimeout(() => {
            const result = form.getValues();
            dispatch({ type: "saved", payload: result });
        }, 3000);
    };
    return (
        <div>
            <h2>Formulario</h2>
            <div className="card">
                <div className="card-body">
                    <Form
                        className="row"
                        form={form}
                        onSubmit={submit}
                        saving={state.loading}
                    >
                        <InputText
                            contClassName="col-6"
                            name="nombre"
                            label="Nombre de usuario"
                            rule={{ required: "Este campo es requerido" }}
                        />
                        <InputText
                            contClassName="col-6"
                            name="apellido"
                            label="Apellido"
                            rule={{ required: "Este campo es requerido" }}
                        />
                    </Form>
                </div>
            </div>
            <hr />
            <div className="card">
                <div className="card-body">
                    <Form
                        className="row"
                        form={form}
                        onSubmit={submit}
                        saving={state.loading}
                    >
                        <InputText
                            contClassName="col-6"
                            name="nombre2"
                            label="Nombre de usuario"
                            rule={{ required: "Este campo es requerido" }}
                        />
                        <InputText
                            contClassName="col-6"
                            name="apellido2"
                            label="Apellido"
                            rule={{ required: "Este campo es requerido" }}
                        />
                    </Form>
                </div>
            </div>
            <hr />
            <div className="card">
                <div className="card-body">
                    <Form
                        className="row"
                        form={form}
                        onSubmit={submit}
                        saving={state.loading}
                    >
                        <InputEmail
                            contClassName="col-6"
                            name="email"
                            label="Correo"
                            rule={{ required: "Este campo es requerido" }}
                        />
                        <InputText
                            contClassName="col-6"
                            name="apellido3"
                            label="Apellido"
                            rule={{ required: "Este campo es requerido" }}
                        />
                        <InputText
                            contClassName="col-6"
                            name="apellido4"
                            label="Es otro apellido"
                            rule={{ required: "Este campo es requerido" }}
                        />
                        <div className="col-12">
                            <ButtonSubmit loading={state.loading} />
                        </div>
                    </Form>
                </div>
            </div>
            <HomeShowResult text={state.stringResponse} />
        </div>
    );
};

export default Home;
