import React, { useState, useEffect } from 'react'
import { Button, Modal } from "react-bootstrap";
import FormHandler from '../utils/FormHandler';
import { validateProduct } from "../utils/validation";
import { Typeahead } from "react-bootstrap-typeahead";
import { find, pluck } from "underscore";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { isEmpty } from 'underscore';


function ModalForm(props) {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [singleSelections, setSingleSelections] = useState([]);
    const [productList, setProductList] = useState([]);
    const dispatch = useDispatch();
    const [isSubmit, setIsSubmit] = useState(false);

    function isproduct() {
        setIsSubmit(true)
    }

    const {
        handleChange,
        handleSubmit,
        setValue,
        initForm,
        values,
        errors,
    } = FormHandler(isproduct, validateProduct);




    const toggleLoader = (view) => {
        return {
            type: "TOGGLE_LOADER",
            payload: view
        };
    };
    function resetForm() {
        initForm({})
    }

    useEffect(() => {
        if (["View", "Edit"].includes(props.type)) {

            initForm(props.product)
        }
    }, [props.type, props.product])

    console.log(values);
    console.log(props.type);
    console.log(props.product);

    useEffect(() => {
        if (!isSubmit || props.type !== "Add") {
            console.log("öiuhg")
            return
        }
        console.log("özcdgfiuhg")
        dispatch(toggleLoader(true))
        axios.post(`http://127.0.0.1:8000/product`, values)
            .then((res) => {
                console.log(res)
                props.update()
                props.onHide();
                toast.success(`Successfully Product Created`)
            }).catch((err) => {
                console.log(err)

                toast.error("Something went wrong")
            }).finally(() => {
                dispatch(toggleLoader(false))
                setIsSubmit(false);
                resetForm()

            })
    }, [isSubmit]);



    useEffect(()=>{
        if(!isSubmit || props.type !== "Edit"){
            return
        }
        dispatch(toggleLoader(true))
        axios.put(`http://127.0.0.1:8000/product/${values.id}`, values)
            .then((res) => {
                console.log(res.data)
                toast.success(`Successfully Updated`)
                props.update()
            }).catch((err) => {
            toast.error("Something went wrong")
        }).finally(() => {
            dispatch(toggleLoader(false))
            setIsSubmit(false);
          setIsSubmit(false)
            resetForm()
            props.onHide()
        })

    },[isSubmit])
    console.log(props.type)




   
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"

            >
                <Modal.Header closeButton onHide={() => {
                    if (!formSubmitted) {
                        initForm({});

                    }
                }}>
                    {<Modal.Title id="contained-modal-title-vcenter">
                        {props.type === "Add" && <div> Add New Product</div>}
                        {props.type === "Edit" && <div> Edit Product Details</div>}
                        {props.type === "View" && <div> View Product</div>}

                    </Modal.Title>}
                </Modal.Header>
                <Modal.Body scrollable>
                    <form>
                        <div>
                            <div className={"pop-up-form-container"}>
                                <div className={"row"}>
                                    <div className={"col-md-6"}>
                                        <div className={"mb-3"}>
                                            <h6><label htmlFor="exampleInputEmail1"
                                                className="settings-form-text">Product Name</label></h6>
                                            <input type="text" name={"name"} id="exampleInputAddress"
                                                placeholder={"Enter Product Name"}
                                                className={"form-control"}
                                                disabled={props.type === "View"}
                                                onChange={handleChange}
                                                value={values?.name || ""}
                                            />
                                            {errors.name && <p className={"text-danger"}>{errors.name}</p>}
                                        </div>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <div className={"mb-3"}>
                                            <h6><label htmlFor="exampleInputEmail1"
                                                className="settings-form-text">Category</label></h6>
                                            <input type="text" name={"category"} id="exampleInputAddress"
                                                placeholder={"Enter Category"}
                                                disabled={props.type === "View"}
                                                className={"form-control"}
                                                onChange={handleChange}
                                                value={values?.category || ""}
                                            />
                                            {errors.category && <p className={"text-danger"}>{errors.category}</p>}
                                        </div>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <div className={"mb-3"}>
                                            <h6><label htmlFor="exampleInputEmail1"
                                                className="settings-form-text">Start Price</label></h6>
                                            <input type="text" name={"startprice"} id="exampleInputAddress"
                                                placeholder={"Enter Start Price"}
                                                disabled={props.type === "View"}
                                                className={"form-control"}
                                                onChange={handleChange}
                                                value={values?.startprice || ""}
                                            />
                                            {errors.startprice && <p className={"text-danger"}>{errors.startprice}</p>}
                                        </div>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <div className={"mb-3"}>
                                            <h6><label htmlFor="exampleInputEmail1"
                                                className="settings-form-text">Current Price</label></h6>
                                            <input type="text" name={"currentprice"} id="exampleInputAddress"
                                                placeholder={"Enter Current Price"}
                                                disabled={props.type === "View"}
                                                className={"form-control"}
                                                onChange={handleChange}
                                                value={values?.currentprice || ""}

                                            />
                                            {errors.currentprice && <p className={"text-danger"}>{errors.currentprice}</p>}
                                        </div>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <div className={"mb-3"}>
                                            <h6><label htmlFor="exampleInputEmail1"
                                                className="settings-form-text">End Date</label></h6>
                                            <input type="date" name={"end_date"} id="exampleInputAddress"
                                                placeholder={"Enter Category"}
                                                disabled={props.type === "View"}
                                                className={"form-control"}
                                                onChange={handleChange}
                                                value={values?.end_date || ""}

                                            />
                                            {errors.end_date && <p className={"text-danger"}>{errors.end_date}</p>}
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" className={"form-label"}>Description</label>
                                        <textarea className={"form-control label1"} id="exampleFormControlTextarea1"
                                            placeholder="Message" rows="5" name="description"
                                            onChange={handleChange}
                                            disabled={props.type === "View"}
                                            value={values?.description || ""}
                                            >
                                            {errors.description && <p className={"text-danger"}>{errors.description}</p>}

                                            </textarea>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type="button"
                        className={"btn btn-secondary"}
                        onClick={() => {
                            if (!formSubmitted) { // Prevent hiding the modal if the form is submitted
                                props.onHide();
                                initForm({});
                            }
                        }}
                    >
                        Cancel
                    </button>

                    {props.type === "Add" && <button
                        type="button"
                        className={"btn btn-secondary students-dropdown-btn bg-[#50d71e]"}
                        onClick={handleSubmit}
                    >
                        Add
                    </button>}
                    {props.type === "Edit" && <button
                        type="button"
                        className={"btn btn-secondary students-dropdown-btn"}
                        onClick={handleSubmit}
                    >
                        Update
                    </button>}
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ModalForm;