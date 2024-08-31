"use strict";
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

function calcDiscountPrice(price, discount) {
  if (!discount) return price;
  const discountAmount = (price * discount) / 100;
  const result = price - discountAmount;
  return result.toFixed(2);
}

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async paymentOrder(ctx) {
    try {
      //Body validation
      if (!ctx.request.body) {
        ctx.throw(400, "No body found in the request.");
      }

      // Body destructuring
      const { token, products, idUser, addressShipping } = ctx.request.body;
      if (!token || !products || !idUser || !addressShipping) {
        ctx.throw(400, "Missing required fields.");
      }

      // Total payment calculation
      let totalPayment = 0;
      products.forEach((product) => {
        const priceTemp = calcDiscountPrice(
          product.attributes.price,
          product.attributes.discount
        );
        totalPayment += Number(priceTemp) * product.quantity;
      });

      //Charge payment with Stripe
      const charge = await stripe.charges.create({
        amount: Math.round(totalPayment * 100),
        currency: "eur",
        source: token.id,
        description: `User ID: ${idUser}`,
      });

      // Creación de los datos de la orden
      const data = {
        products,
        user: idUser,
        idPayment: charge.id,
        totalPayment,
        addressShipping,
      };

      // Validación y creación de la orden en la base de datos
      const model = strapi.contentType("api::order.order");
      const validData = await strapi.entityValidator.validateEntityCreation(
        model,
        data
      );
      const entry = await strapi.db
        .query("api::order.order")
        .create({ data: validData });

      // Retornar la entrada creada
      return entry;
    } catch (error) {
      // Manejo de errores
      ctx.throw(500, error.message || "An error occurred during payment.");
    }
  },
}));
