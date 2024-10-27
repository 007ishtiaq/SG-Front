import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  brands,
  colors,
  handleCategoryChange,
  handleSubChange,
  handleSub2Change,
  categories,
  subOptions,
  sub2Options,
  arrayOfSubs2,
  setArrayOfSubs2,
  selectedCategory,
  attributes,
  addAttribute,
}) => {
  // destructure
  const {
    art,
    title,
    description,
    price,
    disprice,
    category,
    shipping,
    quantity,
    weight,
    images,
    color,
    brand,
    onSale,
    saleTime,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Article Number</label>
        <input
          type="number"
          className="form-control"
          name="art"
          value={art}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Discount Price (optional)</label>
        <input
          type="number"
          name="disprice"
          className="form-control"
          value={disprice}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Shipping</label>
        <select
          value={shipping === "Yes" ? "Yes" : "No"}
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label>Weight</label>
        <input
          type="number"
          name="weight"
          className="form-control"
          value={weight}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Color</label>
        <select
          value={color}
          name="color"
          className="form-control"
          onChange={handleChange}
        >
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Brand</label>
        <select
          value={brand}
          name="brand"
          className="form-control"
          onChange={handleChange}
        >
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        {attributes.map((attr, index) => (
          <div key={index}>
            <div className="form-group">
              <label>Sub Level 1</label>
              <select
                name="sub"
                className="form-control"
                onChange={(e) => handleSubChange(index, e)}
                value={attr.subs._id || attr.subs}
                style={{ width: "100%" }}
              >
                <option value="">Please select</option>
                {subOptions.length > 0 &&
                  subOptions.map((s) => (
                    <option key={s._id} value={s._id}>
                      {s.name}
                    </option>
                  ))}
              </select>
            </div>

            {attr.subs && (
              <div className="form-group">
                <label>Sub Level 2</label>
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  value={attr.subs2.map((s2) => s2._id)}
                  onChange={(value) => handleSub2Change(index, value)}
                >
                  {attr.sub2Options &&
                    attr.sub2Options.length > 0 &&
                    attr.sub2Options.map((s2) => (
                      <Option key={s2._id} value={s2._id}>
                        {s2.name}
                      </Option>
                    ))}
                </Select>
              </div>
            )}
          </div>
        ))}

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={addAttribute}
        >
          Add Attribute
        </button>
      </div>

      <div className="form-group">
        <label>On Sale ?</label>
        <select
          value={onSale === "Yes" ? "Yes" : "No"}
          name="onSale"
          className="form-control"
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      {onSale === "Yes" && (
        <div className="form-group">
          <label>Sale Time & Date</label>
          <input
            type="text"
            name="saleTime"
            className="form-control"
            value={saleTime}
            onChange={handleChange}
          />
        </div>
      )}

      <br />
      <button
        disabled={(onSale === "Yes" && !saleTime) || !images.length}
        className="btn btn-outline-info"
      >
        Save
      </button>
    </form>
  );
};

export default ProductUpdateForm;
