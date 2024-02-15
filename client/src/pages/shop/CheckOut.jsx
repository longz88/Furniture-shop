/* eslint-disable no-unused-vars */
import { useState } from "react";
import BannerPage from "../../components/BannerPage";
import FormInput from "../../components/FormInput";
import bannerFooter from "../../assets/banner/bannerFooter.jpg";
import { useDispatch, useSelector } from "react-redux";

const CheckOut = () => {
  const [active, setActive] = useState("bank");
  const dispatch = useDispatch();
  const { cartTotalAmount, listProducts } = useSelector((state) => state.cart);

  return (
    <div className="">
      <BannerPage title={"Check Out"} />

      <div className=" mx-auto mt-14 grid max-w-screen-xl grid-cols-2 gap-7">
        <div className=" px-16 pt-9">
          <h1 className=" mb-9 text-4xl font-semibold">Bildivng details</h1>
          <div className="flex flex-col gap-9">
            <div className="flex items-center gap-8">
              <FormInput name="First Name" title="firstName" />
              <FormInput name="Last Name" title="lastName" />
            </div>
            <FormInput name="Company Name (Optional)" title="company" />
            <FormInput
              name="Country / Region"
              title="country"
              type="select"
              value={["HN", "HCM", "ĐN", "TB"]}
            />
            <FormInput name="Street address" title="street" />
            <FormInput name="Town / City" title="city" />
            <FormInput
              name="Province"
              title="province"
              type="select"
              value={["HN", "HCM", "ĐN", "TB"]}
            />
            <FormInput name="Phone" title="phone" />
            <FormInput name="Email address" title="email" type="email" />
            <FormInput
              name=""
              title="info"
              placeholder="Additional information"
            />
          </div>
        </div>

        <div className="px-10 py-20">
          <div className="mb-5 flex flex-col gap-4 border-b border-[var(--gray6)] pb-8">
            <div className="flex items-center justify-between text-2xl font-medium">
              <p>Product</p>
              <p>Subtotal</p>
            </div>
            <ul className="flex flex-col gap-3">
              {listProducts.length === 0 ? (
                <p className="text-base font-normal text-[--gray6]">
                  Chưa có sản phẩm nào
                </p>
              ) : (
                <>
                  {listProducts.map((product) => (
                    <li
                      key={product._id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-6">
                        <p className="text-base font-normal text-[--gray6]">
                          {product.name}
                        </p>{" "}
                        x <p className="font-medium">{product.cartQuantity}</p>
                      </div>
                      <p className=" font-light">
                        {(product.priceNew * product.cartQuantity)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        &#8363;
                      </p>
                    </li>
                  ))}
                </>
              )}
            </ul>

            <div className="flex items-center justify-between">
              <p className="text-base font-normal">Subtotal</p>
              <p className="font-light">
                {cartTotalAmount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                &#8363;
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-base font-normal">Total</p>
              <p className="text-2xl font-bold text-[var(--primary-color)]">
                {cartTotalAmount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                &#8363;
              </p>
            </div>
          </div>

          <ul className="">
            <div className="flex flex-col">
              <div onClick={() => setActive("bank")} className="mb-3">
                <input
                  className=" accent-black"
                  type="radio"
                  name="transfer"
                  id="bank"
                  defaultChecked
                />
                <label
                  className="ml-4 cursor-pointer text-base font-normal"
                  htmlFor="bank"
                >
                  Direct Bank Transfer
                </label>
              </div>
              {active === "bank" && (
                <p className="mb-6 text-base font-light text-[--gray6]">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              )}

              <div onClick={() => setActive("walk")} className="mb-3">
                <input
                  className=" accent-black"
                  type="radio"
                  name="transfer"
                  id="walk"
                />
                <label
                  className="ml-4 cursor-pointer text-base font-normal"
                  htmlFor="walk"
                >
                  Cash On Delivery
                </label>
              </div>
              {active === "walk" && (
                <p className="mb-6 text-base font-light text-[--gray6]">
                  Walk make your payment directly into our bank account. Please
                  use your Order ID as the payment reference. Your order will
                  not be shipped until the funds have cleared in our account.
                </p>
              )}

              <p className="mb-10 mt-5 font-light">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span className="font-semibold">privacy policy.</span>
              </p>

              <button
                className="mx-auto rounded-xl border border-black px-24 py-4 text-xl
                font-normal tracking-wider duration-300 hover:bg-black hover:text-white"
              >
                Đặt hàng
              </button>
            </div>
          </ul>
        </div>
      </div>
      <img
        className="mt-24 h-[250px] w-full object-cover"
        src={bannerFooter}
        alt=""
      />
    </div>
  );
};

export default CheckOut;
