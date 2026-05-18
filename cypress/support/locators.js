export const locators = {
  signup: {
    nameInput: '[data-qa="signup-name"]',
    emailInput: '[data-qa="signup-email"]',
    button: '[data-qa="signup-button"]',
  },

  accountInformation: {
    pageTitle: 'Enter Account Information',
    titleRadioButton: '#id_gender1',
    titleFemaleRadioButton: '#id_gender2',
    passwordInput: '[data-qa="password"]',
    daysSelect: '[data-qa="days"]',
    monthsSelect: '[data-qa="months"]',
    yearsSelect: '[data-qa="years"]',
    firstNameInput: '[data-qa="first_name"]',
    lastNameInput: '[data-qa="last_name"]',
    companyInput: '[data-qa="company"]',
    addressInput: '[data-qa="address"]',
    countrySelect: '[data-qa="country"]',
    stateInput: '[data-qa="state"]',
    cityInput: '[data-qa="city"]',
    zipcodeInput: '[data-qa="zipcode"]',
    mobileNumberInput: '[data-qa="mobile_number"]',
    createAccountButton: '[data-qa="create-account"]',
    accountCreatedLabel: '[data-qa="account-created"]',
    accountCreationSuccess: 'Account Created!',
  },

  cart: {
    cartTable: '#cart_info_table',
    cartDescription: '.cart_description',
    cartQuantity: '.cart_quantity',
    cartPrice: '.cart_price',
    cartTotalPrice: '.cart_total_price',
  },

  home: {
    signupLoginLink: 'a[href="/login"]',
    logo: '.logo',
  },

  products: {
    productsContainer: '.features_items',
    productDetailsLink: '.features_items a[href*="/product_details/"]',
    quantityInput: '#quantity',
    addToCartButton: '.product-information button.btn.btn-default.cart',
    addToCartModal: '.modal-content',
    viewCartLink: '.modal-content a[href="/view_cart"]',
    productsLink: 'a[href="/products"]',
    productInformation: '.product-information',
    modalCloseButton: '.modal-body .btn-default',
  },
}
