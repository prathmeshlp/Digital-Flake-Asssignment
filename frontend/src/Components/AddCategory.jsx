import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCategory, getCategories } from "../features/categorySlice";

const Create = () => {
  const [category, setcategory] = useState({
    name: "",
    description: "",
    status: "",
    // Assuming a default value for status
  });

  console.log(category,"category")
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getCategoryData = (e) => {
    setcategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategory(category));
    dispatch(getCategories());
    navigate("/category");
  };

  const onCancel = () => {
    setcategory({
      name: "",
      description: "",
      status: "",
    })
    navigate("/category");  
  }
  ;

  return (
    <div className="w-[70%] h-[500px] mx-auto mt-10 ">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <div>
            <label className="form-label">Category Name</label>
            <input
              type="text"
              name="name"
              className="form-control w-[350px]"
              onChange={getCategoryData}
             
            />
          </div>
          <div>
            <label className="form-label">Description</label>
            <input
              type="text"
              name="description"
              className="form-control w-[350px]"
              onChange={getCategoryData}
          
            />
          </div>
          <div className="">
            <label>Choose Status</label>
            <br />
            <select name="status" id="status" onChange={getCategoryData}>
              <option className="w-[350px]" value="Active" >
                Active
              </option>
              <option className="w-[350px]" value="Not Active">
                Not Active
              </option>
            </select>
          </div>
        </div>

        <div className="handle-buttons relative top-[200px] left-[800px]">
          <button type="submit" className="bg-[#662671] text-white p-2 mr-5 rounded-md w-20">
            Submit
          </button>

          <button className="p-2 rounded-md w-20 bg-black text-white" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
