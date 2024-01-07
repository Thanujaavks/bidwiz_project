import React from 'react';
import { Link } from 'react-router-dom'

function Table(props) {
    const recentOrderData = [
        {
            id: '1',
            product_id: '4324',
            customer_id: '23143',
            customer_name: 'Shirley A. Lape',
            order_date: '2022-05-17T03:24:00',
            order_total: '$435.50',
            current_order_status: 'PLACED',
            shipment_address: 'Cottage Grove, OR 97424'
        },
        {
            id: '7',
            product_id: '7453',
            customer_id: '96453',
            customer_name: 'Ryan Carroll',
            order_date: '2022-05-14T05:24:00',
            order_total: '$96.35',
            current_order_status: 'CONFIRMED',
            shipment_address: 'Los Angeles, CA 90017'
        },
        {
            id: '2',
            product_id: '5434',
            customer_id: '65345',
            customer_name: 'Mason Nash',
            order_date: '2022-05-17T07:14:00',
            order_total: '$836.44',
            current_order_status: 'SHIPPED',
            shipment_address: 'Westminster, CA 92683'
        },
        {
            id: '3',
            product_id: '9854',
            customer_id: '87832',
            customer_name: 'Luke Parkin',
            order_date: '2022-05-16T12:40:00',
            order_total: '$334.50',
            current_order_status: 'SHIPPED',
            shipment_address: 'San Mateo, CA 94403'
        },
        {
            id: '4',
            product_id: '8763',
            customer_id: '09832',
            customer_name: 'Anthony Fry',
            order_date: '2022-05-14T03:24:00',
            order_total: '$876.00',
            current_order_status: 'OUT_FOR_DELIVERY',
            shipment_address: 'San Mateo, CA 94403'
        },
        {
            id: '5',
            product_id: '5627',
            customer_id: '97632',
            customer_name: 'Ryan Carroll',
            order_date: '2022-05-14T05:24:00',
            order_total: '$96.35',
            current_order_status: 'DELIVERED',
            shipment_address: 'Los Angeles, CA 90017'
        }
    ]
    return (
        <div>
            <div>
                <div >
                    {/*<strong className="text-gray-700 font-medium">Recent Orders</strong>*/}
                    <div >
                        {/*<table className="table-auto">*/}
                        {/*    <thead className={""}>*/}
                        {/*    <tr className={""}>*/}
                        {/*        <th>ID</th>*/}
                        {/*        <th>Product ID</th>*/}
                        {/*        <th>Customer Name</th>*/}
                        {/*        <th>Order Date</th>*/}
                        {/*        <th>Order Total</th>*/}
                        {/*        <th>Shipping Address</th>*/}
                        {/*        <th>Order Status</th>*/}
                        {/*    </tr>*/}
                        {/*    </thead>*/}
                        {/*    <tbody>*/}
                        {/*    {recentOrderData.map((order) => (*/}
                        {/*        <tr key={order.id}>*/}
                        {/*            <td>*/}
                        {/*                <Link to={`/order/${order.id}`} className={"no-underline text-[#000000]"}>{order.id}</Link>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <Link to={`/product/${order.product_id}`} className={"no-underline text-[#000000]"}>{order.product_id}</Link>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <Link to={`/customer/${order.customer_id}`} className={"no-underline text-[#000000]"}>{order.customer_name}</Link>*/}
                        {/*            </td>*/}
                        {/*            /!*<td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>*!/*/}
                        {/*            <td className={"text-[#000000]"}>{order.order_total}</td>*/}
                        {/*            <td className={"text-[#000000]"}>{order.shipment_address}</td>*/}
                        {/*            /!*<td>{getOrderStatus(order.current_order_status)}</td>*!/*/}
                        {/*        </tr>*/}
                        {/*    ))}*/}
                        {/*    </tbody>*/}
                        {/*</table>*/}


                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-900 uppercase bg-gray-50 dark:text-gray-900">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium whitespace-nowrap">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#"
                                           className="no-underline font-medium text-blue-600 dark:text-blue-500 hover:underline">Add</a><span>    </span>
                                        <a href="#"
                                           className="no-underline font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium whitespace-nowrap">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#"
                                           className="no-underline font-medium text-blue-600 dark:text-blue-500 hover:underline">Add</a><span>   </span>
                                        <a href="#"
                                           className="no-underline font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium whitespace-nowrap">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#"
                                           className="no-underline font-medium text-blue-600 dark:text-blue-500 hover:underline">Add</a><span>    </span>
                                        <a href="#"
                                           className="no-underline font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;


