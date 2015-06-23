
function calculateTax(agiIncome, numChildren) {
  var totalTax = 0;

  return totalTax;
}

function computeResult() {
  var income = $("#agi").val();
  var numberOfChildren = $("#numChildren").val();
  var taxLiability = calculateTax(income, numberOfChildren);

  var result = "<div class='col-md-5'> " +
               "<div class='alert alert-success'> " +
               "<button type='button' class='close' data-dismiss='alert'>&times;</button> " +
               "<h4>Tax Liability Estimate</h4>" +
               "Your Tax Liability is $" + taxLiability.toFixed(2) +
               "</div></div>";
  $("#resultsDiv").empty().append(result).hide().fadeIn("slow");
}
