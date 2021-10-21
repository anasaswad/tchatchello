'use strict';

try {
  angular.module('cartAppTranslations');
} catch (e) {
  angular.module('cartAppTranslations', ['pascalprecht.translate']);
}

angular.module('cartAppTranslations').config(['$translateProvider',
  function ($translateProvider) {
    var translations = {
      'cartWidget': {
        'sr': {
          'PRODUCT_PRICE_BEFORE_DISCOUNT': 'Standardpreis',
          'PRODUCT_WAS_REMOVED': '{{ productName }} wurde aus dem Warenkorb entfernt',
          'PRODUCT_PRICE_WHEN_THERE_IS_NO_DISCOUNT': 'Preis',
          'PRODUCT_PRICE_AFTER_DISCOUNT': 'Sonderpreis'
        }
      },
      'CART_WIDGET_EMPTY_CART_MESSAGE': 'Warenkorb ist leer',
      'CART_WIDGET_CURRENCY_CONVERTER_DISCLAIMER': 'Abgewickelt in {{mainCurrency}}',
      'CART_WIDGET_VIEW_CART_BUTTON': 'Warenkorb ansehen',
      'CART_WIDGET_CLOSE_CTA': 'Schließen',
      'OUT_OF_STOCK_TITLE': 'Nicht verfügbar',
      'CART_TABLE_TOTAL_TITLE': 'GESAMT',
      'CART_WIDGET_CLOSE_BUTTON_TITLE': 'Warenkorbübersicht schließen',
      'SUBTOTAL_TITLE': 'Zwischensumme',
      'CART_WIDGET_QUANTITY_TITLE': 'Anzahl: ',
      'REMOVE_PRODUCT_BUTTON_TITLE': 'Artikel entfernen',
      'SKU_TITLE': 'Artikelnummer: {{ sku }}',
      'CART_WIDGET_CART_TITLE': 'Warenkorb'
    };
    $translateProvider.translations('de', translations);
    $translateProvider.translations(translations);
    $translateProvider.preferredLanguage('de');
  }
]);