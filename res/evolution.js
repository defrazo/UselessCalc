jQuery('document').ready(function() {
		jQuery('#bresult').on('click',function() {
			var value1, value3;
			value1 = jQuery('#val1').val();

			
			value1 = parseInt(value1);

			value3 = Math.sqrt(value1);
			value3 = value3.toFixed(2);
			
			jQuery('#result').val(value3);
			});
	});