import './CheckoutForm.css'
import React from "react";
import { useForm } from "react-hook-form";

const CheckoutForm = ({ onConfirm }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        onConfirm(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input {...register("name", { required: true })} />
                {errors.name && <span>Este campo es Obligatorio</span>}
            </div>

            <div>
                <label htmlFor="phone">Telefono:</label>
                <input {...register("phone", { required: true })} />
                {errors.phone && <span>This field is required</span>}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
            </div>

            <button type="submit">Confirmar Orden</button>
        </form>
    );
};

export default CheckoutForm;
