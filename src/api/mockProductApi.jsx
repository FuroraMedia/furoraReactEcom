import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [
  {
    id: 'react-flux-building-applications',
    title: 'Building Applications in React and Flux',
    watchHref: 'http://www.pluralsight.com/products/react-flux-building-applications',
    authorId: 'cory-house',
    length: '5:08',
    category: 'JavaScript',
  },
  {
    id: 'clean-code',
    title: 'Clean Code: Writing Code for Humans',
    watchHref: 'http://www.pluralsight.com/products/writing-clean-code-humans',
    authorId: 'cory-house',
    length: '3:10',
    category: 'Software Practices',
  },
  {
    id: 'architecture',
    title: 'Architecting Applications for the Real World',
    watchHref: 'http://www.pluralsight.com/products/architecting-applications-dotnet',
    authorId: 'cory-house',
    length: '2:52',
    category: 'Software Architecture',
  },
  {
    id: 'career-reboot-for-developer-mind',
    title: 'Becoming an Outlier: Reprogramming the Developer Mind',
    watchHref: 'http://www.pluralsight.com/products/career-reboot-for-developer-mind',
    authorId: 'cory-house',
    length: '2:30',
    category: 'Career',
  },
  {
    id: 'web-components-shadow-dom',
    title: 'Web Component Fundamentals',
    watchHref: 'http://www.pluralsight.com/products/web-components-shadow-dom',
    authorId: 'cory-house',
    length: '5:10',
    category: 'HTML5',
  },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (product) => {
  return replaceAll(product.title, ' ', '-');
};

class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }

  static saveProduct(product) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minproductTitleLength = 1;
        if (product.title.length < minproductTitleLength) {
          reject(`Title must be at least ${minproductTitleLength} characters.`);
        }

        if (product.id) {
          const existingproductIndex = products.findIndex(a => a.id == product.id);
          products.splice(existingproductIndex, 1, product);
        } else {
          // Just simulating creation here.
          // The server would generate ids and watchHref's for new products in a real app.
          // Cloning so copy returned is passed by value rather than by reference.
          product.id = generateId(product);
          product.watchHref = `http://www.pluralsight.com/products/${product.id}`;
          products.push(product);
        }

        resolve(Object.assign({}, product));
      }, delay);
    });
  }

  static deleteProduct(productId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfproductToDelete = products.findIndex(product => {
          product.productId == productId;
        });
        products.splice(indexOfproductToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProductApi;
