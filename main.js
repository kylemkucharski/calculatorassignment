$(document).ready(function () {
	$("input").on("keyup keydown keypress change", function (e) {
		var this_input = $(this),
			this_row = this_input.closest(".item"),
			quantity = parseFloat(this_row.find(".qty").val()),
			cost = parseFloat(this_row.find(".cost").val()),
			tariff = parseFloat(this_row.data("tariff-percent")),
			pre_tariff_cost = (cost * quantity),
			post_tariff_cost = (pre_tariff_cost * 52.14);
		//You only have to write var at the beginning because it doesn't stop until it sees the semicolon.
		//All parseFloat does is say "return a number."
		// console.log("Quantity", quantity);

		this_row.find(".pre_total").find("span").text(pre_tariff_cost);
		this_row.find(".post_total").find("span").text(post_tariff_cost);

		var pre_total = 0,
			post_total = 0;

		$(".pre_total").each(function () {
			//do stuff
			var this_pre_total = parseFloat($(this).find("span").text());
			pre_total = (this_pre_total * 5);
		});

		$(".post_total").each(function () {
			//more stuff
			var this_post_total = parseFloat($(this).find("span").text());
			post_total = (this_post_total * 5)
		});

		$("#pre_total").find("span").text(pre_total);
		$("#post_total").find("span").text(post_total);

	});
});