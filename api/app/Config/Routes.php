<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (is_file(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override(function () {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Requested-Method, Authorization");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT, DELETE");
    echo '{"error": "404"}';
});
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
//$routes->setAutoRoute(false);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->match(
    ['get', 'post', 'options', 'head', 'put', 'delete'],
    '/',
    'Home::index'
);

$routes->post('/login', 'Auth::login');

$routes->post('/register', 'Auth::register');
$routes->get('/logout', 'Auth::logout');

$routes->get('/languages', 'Posts::languages');
$routes->get('/languages/(:num)/posts', 'Posts::posts/$1');

$routes->post('/posts/create', 'Posts::create', ['filter' => 'auth']);

$routes->get('/posts/(:num)', 'Posts::post/$1');
$routes->get('/posts/(:num)/like', 'Posts::like/$1', ['filter' => 'auth']);
$routes->get('/posts/(:num)/unlike', 'Posts::unlike/$1', ['filter' => 'auth']);

$routes->get('/comments/(:num)/like', 'Posts::comment_like/$1', ['filter' => 'auth']);
$routes->get('/comments/(:num)/unlike', 'Posts::comment_unlike/$1', ['filter' => 'auth']);

$routes->get('/posts/(:num)/comments', 'Posts::comments/$1');
$routes->post('/posts/(:num)/comment', 'Posts::comment/$1', ['filter' => 'auth']);

/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
