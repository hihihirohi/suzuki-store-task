<?php
Route::group(['middleware' => ['api']], function(){
  Route::resource('products', 'ProductsController');
});
