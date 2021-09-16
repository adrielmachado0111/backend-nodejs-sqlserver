/* aqui tenemos todas las consultas a la base de datos */
export const query = {
    getAllProducts: "select * from Products",
    addNewProduct: "insert into Products (name, description, quantity) values (@name, @description, @quantity)",
    getProductById: "select * from Products where Id = @Id",
    deleteProduct: 'delete from Products where Id = @Id',
    getTotalProducts: "select count(*) from Products",
    updateProductById: "update Products set Name = @name, description = @description, quantity = @quantity where Id = @Id"
}