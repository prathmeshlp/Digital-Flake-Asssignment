import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  createCategory,
  deleteCategory,
} from "../features/categorySlice";

const Category = () => {
  const apiurl = "http://localhost:3001";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
    console.log("useeffect Called");
  }, []);

  const { categories } = useSelector((state) => state.app);
  console.log(categories, "categories");

  // useEffect(() => {
  //   fetch(`${apiurl}/category/getcategories`)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       setData(result);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // const AddCategory = () => {
  //   navigate("/addcategory");
  // };

  const handleAddCategory = () => {
    navigate("/addcategory");
  };

  const handleDeletedata = (id) => {
    console.log(id);
    if (window.confirm("Do you want to delete the category?")) {
      dispatch(deleteCategory(id));
      navigate("/category");
    }
  };

  return (
    <>
      <div className="category-bar w-[80%] mx-auto h-[70px] border border-grey flex justify-between items-center px-4">
        <div className="heading">
          <span className="font-bold">Category</span>
        </div>
        <div className="search-input ml-20">
          <input
            className="border border-black rounded-md w-[250px] p-2 "
            type="text"
            placeholder="Enter Text"
          />
        </div>
        <div className="add-button bg-[#662671] p-[10px] rounded-md text-white">
          <button onClick={handleAddCategory}>Add Category</button>
        </div>
      </div>
      <div className="table-container w-[80%] mx-auto mt-2">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "50px" }} align="center">
                  ID
                </TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories &&
                categories.map((categorie) => (
                  <TableRow key={categorie._id}>
                    <TableCell align="center">{categorie._id}</TableCell>
                    <TableCell align="center">{categorie.name}</TableCell>
                    <TableCell align="center">
                      {categorie.description}
                    </TableCell>
                    <TableCell align="center">
                      {categorie.status == true ? "Active" : "Not Active"}
                    </TableCell>
                    <TableCell align="center">
                      <Link
                        className="mr-3"
                        to={`/addcategory/${categorie._id}`}
                      >
                        Edit data
                      </Link>
                      <Link onClick={() => handleDeletedata(categorie._id)}>
                        Delete
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Category;
