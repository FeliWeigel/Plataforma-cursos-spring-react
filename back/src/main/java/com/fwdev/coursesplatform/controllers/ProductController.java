package com.fwdev.coursesplatform.controllers;

import com.fwdev.coursesplatform.entities.Product;
import com.fwdev.coursesplatform.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getAllProducts(){
        return new ResponseEntity<>(productService.listAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Object> getProductById(@PathVariable Long id){
        return productService.getProductById(id);
    }

    @GetMapping("/find/{brand}")
    public ResponseEntity<List<Product>> getProductsByBrand(@PathVariable String brand){
        return new ResponseEntity<>(productService.getProductsByBrand(brand), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        return new ResponseEntity<>(productService.addProduct(product), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteProductById(@PathVariable Long id){
        return productService.deleteProductById(id);
    }

    @DeleteMapping("/delete/all")
    public void deleteAllProductsInList(){
        productService.deleteAllProducts();
    }

    @PutMapping("/update")
    public ResponseEntity<Object> updateProduct(@RequestBody Product product){
        return productService.updateProduct(product);
    }
}
