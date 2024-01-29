import React, { useState, useEffect } from 'react'
import { Button, Modal } from "react-bootstrap";
import formHandler from "../../utils/FormHandler";
import { Typeahead } from "react-bootstrap-typeahead";
import { find, pluck } from "underscore";
import FormHandler from '../../utils/FormHandler';
import { validateUser } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

function ModalForm(props) {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [singleSelections, setSingleSelections] = useState([]);
    const [userList, setUserList] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useDispatch();

console.log(props)

    function isuser() {
        setIsSubmit(true)
    }

    const {
        handleChange,
        handleSubmit,
        setValue,
        initForm,
        values,
        errors,
    } = FormHandler(isuser, validateUser);

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

            initForm(props.user)
        }
    }, [props.type, props.user])

    console.log(values);
    console.log(props.type);
    console.log(props.user);
    console.log(props.item);

    useEffect(() => {
        if (!isSubmit || props.type !== "Add") {
            console.log("öiuhg")
            return
        }
        console.log("özcdgfiuhg")
        dispatch(toggleLoader(true))
        axios.post(`http://127.0.0.1:8000/user`, values)
            .then((res) => {
                console.log(res)
                props.update()
                props.onHide();
                toast.success(`Successfully User Created`)
            }).catch((err) => {
                console.log(err)

                toast.error("Something went wrong")
            }).finally(() => {
                dispatch(toggleLoader(false))
                setIsSubmit(false);
                resetForm()

            })
    }, [isSubmit]);

    useEffect(() => {
        if (!isSubmit || props.type !== "Edit") {
            return
        }
        dispatch(toggleLoader(true))
        axios.put(`http://127.0.0.1:8000/user/${values.id}`, values)
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

    }, [isSubmit])
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
                        {props.type === "Add" && <div> Add New User</div>}
                        {props.type === "Edit" && <div> Edit User Details</div>}
                        {props.type === "View" && <div> View User Details</div>}

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
                                                className="settings-form-text">Name</label></h6>
                                            <input type="text" name={"name"} id="exampleInputAddress"
                                                placeholder={"Enter Name"}
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
                                                className="settings-form-text">Birth Date</label></h6>
                                            <input type="date" name={"birth_date"} id="exampleInputAddress"
                                                placeholder={"Enter Category"}
                                                disabled={props.type === "View"}
                                                className={"form-control"}
                                                onChange={handleChange}
                                                value={values?.birth_date || ""}
                                            />
                                            {errors.birth_date && <p className={"text-danger"}>{errors.birth_date}</p>}
                                        </div>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <div className={"mb-3"}>
                                            <h6><label htmlFor="exampleInputEmail1"
                                                className="settings-form-text">User Name</label></h6>
                                            <input type="text" name={"username"} id="exampleInputAddress"
                                                placeholder={"Enter username"}
                                                disabled={props.type === "View"}
                                                className={"form-control"}
                                                onChange={handleChange}
                                                value={values?.username || ""}
                                            />
                                            {errors.username && <p className={"text-danger"}>{errors.username}</p>}
                                        </div>
                                    </div>
                                    <div className={"col-md-6"}>
                                        <div className={"mb-3"}>
                                            <h6><label htmlFor="exampleInputEmail1"
                                                className="settings-form-text">email</label></h6>
                                            <input type="email" name={"email"} id="exampleInputAddress"
                                                placeholder={"Enter Email"}
                                                disabled={props.type === "View"}
                                                className={"form-control"}
                                                onChange={handleChange}
                                                value={values?.email || ""}
                                            />
                                            {errors.email && <p className={"text-danger"}>{errors.email}</p>}
                                        </div>
                                    </div>
                                    {/* <div className={"col-md-6"}>
                                        <div className={"mb-3"}>
                                            <h6><label htmlFor="exampleInputEmail1"
                                                className="settings-form-text">Current Price</label></h6>
                                            <input type="password" name={"name"} id="exampleInputAddress"
                                                placeholder={"Enter Current Price"}
                                                className={"form-control"}
                                                onChange={handleChange}
                                                value={values?.name || ""}
                                            />
                                            {errors.name && <p className={"text-danger"}>{errors.name}</p>}
                                        </div>
                                    </div> */}
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