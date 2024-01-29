import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FeatherIcon from 'feather-icons-react';
import ModalForm from './modalForm';
import FormHandler from '../utils/FormHandler';
import { useDispatch, useSelector } from "react-redux";
import { toggleConfirmationDialog, toggleLoader } from "../redux/actions";
import { toast } from "react-toastify";

function Table(props) {

    const [modalType, setModalType] = useState("view")
    const [modalShow, setModalShow] = useState(false);
    const [product, setProduct] = useState([]);
    const [update, setUpdate] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [id, setId] = useState('');
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [startprice, setStartPrice] = useState("");
    const [currentprice, setCurrentPrice] = useState([]);
    const dispatch = useDispatch();
    const [deletedId, setDeletedId] = useState(null);
    const [selectedData, setSelectedData] = useState([]);
    



    useEffect(() => {
        (async () => await fetchData())();
    }, [update]);

    async function fetchData() {
        const result = await axios.get("http://127.0.0.1:8000/product");
        setProduct(result.data);
        
    }
    useEffect(() => {
        // dispatch(toggleLoader(true))

        axios.get(`http://127.0.0.1:8000/product`)
            .then((res) => {
                //   let data = rankMarks(res.data,"rank")
                //     setMarksList(data)
                //     setMarksListAll(data)
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                // dispatch(toggleLoader(false))
            })
    }, [update])

    const confirmationDialog = useSelector(state => {
        return state.setting.confirmationDialog
    });

    useEffect(() => {
        if (!confirmationDialog || !confirmationDialog.onSuccess || !deletedId) {
            console.log("asdf")
            return;
        }
        console.log("asdasd")
        dispatch(toggleLoader(true))

        axios.delete(`http://127.0.0.1:8000/product/${deletedId}`)
            .then((res) => {
                setUpdate(!update)
                toast.success(`Successfully Deleted`)

            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                dispatch(toggleLoader(false))
                setDeletedId(null)
            })
    }, [confirmationDialog])

    function handleDelete(id) {
        console.log(id);
        dispatch(toggleConfirmationDialog({
            isVisible: true,
            confirmationHeading: ('ARE YOU SURE YOU WANT TO DELETE THIS PRODUCT DATA'),
            confirmationDescription: ('THE DELETE ACTION WILL REMOVE THE THIS PRODUCT DATA')
        }));
        setDeletedId(id)
        console.log("ads")
    }

    // async function editProduct(product) {
    //     setName(product.name);
    //     setCategory(product.category);
    //     setStartPrice(product.startprice);
    //     setCurrentPrice(product.currentprice);

    // }

    return (
        <div>

            <div >
                {/*<strong className="text-gray-700 font-medium">Recent Orders</strong>*/}
                <div >
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <button type="button" className={"btn btn-secondary product-dropdown-btn float-right mb-3"}
                            onClick={() => {
                                setModalType("Add");
                                setModalShow(true)
                            }}>
                            <FeatherIcon className={"action-icons text-white"} icon={"plus"} />

                        </button>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-900 uppercase bg-gray-50 dark:text-gray-900">
                                <tr>
                                    <th className='ps-3'>No</th>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Start Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Current Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((data, index) => (
                                    <>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                        <th className='ps-3' scope="row">{index + 1}</th>
                                        <th
                                            className="px-6 py-4 font-medium whitespace-nowrap">
                                            {data.name}
                                        </th>

                                        <td className="px-6 py-4">
                                            {data.category}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.startprice}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.currentprice}
                                        </td>
                                        <td className="px-6 py-4 flex gap-1">
                                            <FeatherIcon className={"action-icons w-5"} icon={"eye"} onClick={() => {
                                                setSelectedProduct(data)
                                                setModalType("View");
                                                setModalShow(true)
                                                
                                            }} />
                                            <FeatherIcon className={"action-icons w-5"} icon={"edit"}
                                                onClick={() => {
                                                    setSelectedProduct(data)
                                                    setModalType("Edit");
                                                    setModalShow(true)
                                                    
                                                }} />
                                            <FeatherIcon className={"action-icons text-red w-5"} icon={"trash-2"} onClick={() => handleDelete(data.id)} />
                                        </td>
                                    </tr>
                                                  <ModalForm
                                                  show={modalShow}
                                                  type={modalType}
                                                  product={selectedProduct}
                                                  update={() => setUpdate(!update)}
                                                  onHide={() => {
                                                      setModalShow(false)
                                                      setSelectedProduct(null)
                                                  }}
                                                  item={data}
                                              />
                                              </>
                                ))}

                            </tbody>
                        </table>
                    </div>


                </div>
  
            </div>

        </div>
    );
}

export default Table;


