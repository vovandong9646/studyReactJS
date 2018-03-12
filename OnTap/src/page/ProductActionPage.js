import React, { Component } from 'react';

class ProductActionPage extends Component {

  render() {
    return (
        
        
          <div>

             <legend>Thêm Sản Phẩm</legend>
        
            <div class="form-group">
                <label>Tên sản phẩm</label>
                <input type="text" class="form-control" name="name" placeholder="Input field"/>
            </div>

            <div class="form-group">
                <label for="">Giá</label>
                <input type="number" class="form-control" name="price" placeholder="Input field"/>
            </div>

            <div class="form-group">
                <label for="">Trạng Thái</label>
                <input type="checkbox" class="form-control" name="status" placeholder="Input field"/>
            </div>
        
            <button type="submit" class="btn btn-primary">Lưu</button>

          </div>
        
        
    );
  }
}

export default ProductActionPage;
