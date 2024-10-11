export default function Cart() {
    return (
        <>
            <section className="page-header relative" style={{ height: '320px' }}>
                <div className="page-header__bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')" }}></div>

                <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="page-header__title text-[55px] font-bold text-white text-center">Cart</h2>
                    <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
                        <li>
                            <a href="index.html" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <span>Cart</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="cart-page section-space bg-[#ffffff]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="col-xl-8 w-full xl:w-2/3 px-4"> {/* dài 800px  */}
                            <div className="overflow-x-auto">
                                <table className="table-auto cart-page__table w-full">
                                    <thead >
                                        <tr className="text-left">
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Sub Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="cart-page__table__meta flex items-center">
                                                    <div className="cart-page__table__meta__img mr-4">
                                                        <img src="../../assets/images/products/cart-1-1.png" alt="Organ Meats" className="w-16 h-16 object-cover" />
                                                    </div>
                                                    <h3 className="cart-page__table__meta__title">
                                                        <a href="shop-details.html" className="text-blue-500 hover:underline">Organ Meats</a>
                                                    </h3>
                                                </div>
                                            </td>
                                            <td className="cart-page__table__price px-4 py-2">$15.00</td>
                                            <td>
                                                <div className="product-details__quantity">
                                                    <div className="flex items-center quantity-box">
                                                        <button type="button" className="sub bg-gray-300 p-2">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M20 12H4" />
                                                            </svg>
                                                        </button>
                                                        <input type="text" value="1" className="border border-gray-300 px-2 w-12 text-center" />
                                                        <button type="button" className="add bg-gray-300 p-2">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M12 4v16m8-8H4" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cart-page__table__total px-4 py-2">$30.00</td>
                                            <td>
                                                <a href="cart.html" className="cart-page__table__remove text-red-500 hover:no-underline">
                                                    <svg className="w-4 h-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    remove
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-page__coupone">{/*dài 770 */}
                                <h5 className="cart-page__coupone__title">coupon:</h5>
                                <div className="cart-page__coupone__box flex items-center"> {/*dài 770 */}
                                    <form action="#" className="cart-page__coupone__form flex-grow"> {/* giữ nguyên kích thước không dãn cách nó ra */}
                                        <input type="text" placeholder="Enter Cupon Code" className="cart-cupon__coupone__input border border-gray-300 py-2 px-3 w-full" />
                                        <button type="submit" className="cart-page__coupone__btn cart-page__bottom-btn boskery-btn ">
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__text">Apply Code</span>
                                        </button>
                                    </form>
                                    <a href="cart.html" className="cart-page__update-btn cart-page__bottom-btn boskery-btn ">
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__text">Update Cart</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 w-full xl:w-1/3 px-4"> {/* dài 400px, không bo góc */}
                            <div className="cart-page__cart-checkout bg-white p-4"> {/* dài 370px */}
                                <ul className="cart-page__cart-total list-none">
                                    <li><span>Subtotal</span><span className="cart-page__cart-total__amount cart-page__cart-total__amount--top">$999.00</span></li>
                                    <li>
                                        <h4 className="cart-page__cart-total__address">Shipping Address</h4>
                                        <address className="cart-page__cart-total__address__text">2801 Lafayette Blvd, Norfolk, Vermont 23509, united state</address>
                                    </li>
                                    <li><span>Total</span><span className="cart-page__cart-total__amount">$999.00</span></li>
                                </ul>
                                <a href="checkout.html" className="boskery-btn cart-page__checkout-btn w-full flex justify-center items-center mt-4">
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__text">checkout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}