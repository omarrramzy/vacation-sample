alert("اهلا ، لتقديمك على طلب الاجازة يرجى تعبئة البيانات في الحقول المرفقة و من ثم الضغط على زر ادخل ، اجازة ممتعة")

var mngName = document.querySelector("#mng-name");
var orgName = document.querySelector("#org-name");
var empName = document.querySelector("#emp-name");
var Fdate = document.querySelector("#Fdate");
var Tdate = document.querySelector("#Tdate");
var button = document.querySelector("#myBtn");
var show = document.querySelector("#shown");

button.onclick = function() {
    var inputMng = mngName.value;
    var inputOrg = orgName.value;
    var inputEmp = empName.value;
    var inputFdate = Fdate.value;
    var inputTdate = Tdate.value;
    show.innerHTML = (`مقدم الى السيد  ${inputMng} مدير قسم شركة ${inputOrg} <br> اقدم لك اجمل تحية طيبة و بعد <br> اود ان اتطلب من سيادتكم بطلب عاجل من اجل الموافقة على اعطائي اجازة تبدأ من تاريخ ${inputFdate} الى تاريخ ${inputTdate} <br> و اتمنى من سيادتكم الموافقة على طلبي بسبب ضرورة الاجازة <br> اسم الموظف ${inputEmp} `);
}