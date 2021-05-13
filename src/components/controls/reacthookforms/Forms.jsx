import React from "react";

export default function Form({ children, className, form, onSubmit, saving }) {

    const { handleSubmit, formState } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className + " text-start"}>
            {React.Children.map(children, (child) => {
                return child.props.name ? (
                    <>
                        {React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register: form.register,
                                key: child.props.name,
                                saving: saving,
                                message: child.props?.rule && formState.errors[child.props.name] && (
                                    <div className="text-danger">
                                        *
                                        {formState.errors[child.props.name].message
                                            ? formState.errors[child.props.name].message
                                            : `${child.props.name} is required`}
                                    </div>
                                )
                            },
                        })}
                    </>
                ) : (
                    child
                );
            })}
        </form>
    );
}