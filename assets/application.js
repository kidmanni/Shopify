// Loads the recomendations asynchronously (another option to add the recomendations)
// sections.register('hero', theme.HeroSection);
// sections.register('product-recommendations', theme.ProductRecommendations);
// theme.ProductRecommendations = (function() {
//   function ProductRecommendations(container) {
//     var $container = (this.$container = $(container));
//     var baseUrl = $container.data('baseUrl');
//     var productId = $container.data('productId');
//     var limit = $container.data('limit');
//     var productRecommendationsUrlAndContainerClass = baseUrl + '?section_id=product-recommendations&limit=' + limit +
//       '&product_id=' +productId +
//       ' .product-recommendations';
//     $container.parent().load(productRecommendationsUrlAndContainerClass);
//   }
//   return ProductRecommendations;
// })();