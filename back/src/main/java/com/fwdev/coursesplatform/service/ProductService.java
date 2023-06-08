package com.fwdev.coursesplatform.service;

import com.fwdev.coursesplatform.entities.Product;
import com.fwdev.coursesplatform.exceptions.ProductNotFoundException;
import com.fwdev.coursesplatform.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public Product addProduct(Product product){
        return productRepository.save(product);
    }

    public ResponseEntity<Object> deleteProductById(Long productId){
        Optional<Product> productDelete = productRepository.findById(productId);
        if(productDelete.isPresent()){
            productRepository.deleteById(productId);
            return new ResponseEntity<>(productDelete, HttpStatus.OK);
        }

        return new ResponseEntity<>(new ProductNotFoundException("Product with id: " + productId + " not found!"), HttpStatus.NOT_FOUND);
    }

    public void deleteAllProducts(){
        productRepository.deleteAll();
    }

    public ResponseEntity<Object> updateProduct(Product product){
        if(product.getId() == null){
            return new ResponseEntity<>(new ProductNotFoundException("Product not found! Request body Id is null."), HttpStatus.BAD_REQUEST);
        }

        if(productRepository.findById(product.getId()).isEmpty()){
            return new ResponseEntity<>(new ProductNotFoundException("Product with id: " + product.getId() + " not found!"), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(productRepository.save(product), HttpStatus.OK);
    }

    public List<Product> listAllProducts(){
        return productRepository.findAll();
    }

    public ResponseEntity<Object> getProductById(Long productId){
        Optional<Product> product = productRepository.findById(productId);
        if(product.isPresent()){
            return new ResponseEntity<>(productRepository.findById(productId), HttpStatus.OK);
        }
        return new ResponseEntity<>(new ProductNotFoundException("Product with id: " + productId + " not found!"), HttpStatus.NOT_FOUND);
    }

    public List<Product> getProductsByBrand(String brand){
        List<Product> allProducts = productRepository.findAll();
        List<Product> searchedProducts = new ArrayList<>();

        if(!allProducts.isEmpty()){
            for(Product product :allProducts){
                if(product.getBrand().equals(brand)){
                    searchedProducts.add(product);
                }
            }
        }

        return searchedProducts;
    }

    public List<Product> getProductsByModel(String model){
        List<Product> allProducts = productRepository.findAll();
        List<Product> searchedProducts = new ArrayList<>();

        if(!allProducts.isEmpty()){
            for(Product product :allProducts){
                if(product.getModel().equals(model)){
                    searchedProducts.add(product);
                }
            }
        }
        return searchedProducts;
    }

    public List<Product> getProductsByType(String type){
        List<Product> allProducts = productRepository.findAll();
        List<Product> searchedProducts = new ArrayList<>();

        if(!allProducts.isEmpty()){
            for(Product product :allProducts){
                if(product.getType().equals(type)){
                    searchedProducts.add(product);
                }
            }
        }
        return searchedProducts;
    }

    public List<Product> getProductsByColor(String color){
        List<Product> allProducts = productRepository.findAll();
        List<Product> searchedProducts = new ArrayList<>();

        if(!allProducts.isEmpty()){
            for(Product product :allProducts){
                if(product.getColor().equals(color)){
                    searchedProducts.add(product);
                }
            }
        }
        return searchedProducts;
    }

    public List<Product> getProductsByStorage(Integer storage){
        List<Product> allProducts = productRepository.findAll();
        List<Product> searchedProducts = new ArrayList<>();

        if(!allProducts.isEmpty()){
            for(Product product :allProducts){
                if(product.getStorage() == storage){
                    searchedProducts.add(product);
                }
            }
        }
        return searchedProducts;
    }
}
