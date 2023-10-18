$(document).ready(function () {
    alert("dokumen , ready masuk");
    usertable();
    //$('#firstname').val("Hye my name ias adib");



    //$("#submitbutton").click(function () {
    //    var firstname = $('#firstname').val();
    //    var secondname = $('#secondname').val();
    //    alert(firstname + " " +secondname);
    //    alert(secondname);

    //    //serialize
    //    //Jquery
    //    $.ajax({
    //        type: "POST",
    //        url: "/Home/AddSubProject", //controller/nama function kt controller
    //        data: obj,
    //        success: function (data) {
    //            alert('success');
    //        }
    //    });


    //});
    //serialize
    //add item
    $("#submitbutton").click(function () {

        var obj = $("#form1").serialize();
        console.log(obj);
        var firstname = $('#firstname').val();
        var secondname = $('#secondname').val();
        //alert(firstname + " " +secondname);
        //alert(secondname);

        //serialize or
        //Jquery
        $.ajax({
            type: "POST",
            url: "/Home/postData", //controller/nama function kt controller
            data: obj,
            success: function (data) {
                alert('success');
            }
        });
    });

    //delete item 
    $("#delbutton").click(function () {

        var obj = $("#form2").serialize();
        console.log(obj);
        var firstname = $('#firstname').val();
        //var secondname = $('#secondname').val();
        //alert(firstname + " " +secondname);
        //alert(secondname);

        //serialize or
        //Jquery
        $.ajax({
            type: "POST",
            url: "/Home/DeleteData", //controller/nama function kt controller
            data: obj,
            success: function (data) {
                alert('success');
            }
        });
    });
    //update item
    $("#upbutton").click(function () {

        var obj = $("#form3").serialize();
        console.log(obj);
        var firstname = $('#upfirstname').val();
        var secondname = $('#upsecondname').val();
        var updatedName = $('#updatedName').val();
        //alert(firstname + " " +secondname);
        //alert(secondname);

        //serialize or
        //Jquery
        $.ajax({
            type: "POST",
            url: "/Home/upDate", //controller/nama function kt controller
            data: obj,
            success: function (data) {
                alert('success');
            }
        });
    });
});
function usertable() {
    alert("asdjkfaskljfhsalkfjhaslkfjhafsdkjh");
    particitable = $("#tabledisplay").DataTable({
        searching: false,
        lengthChange: false,
        sorting: false,
        autoWidth: false,
        paging: true,
        pageLength: 10,
        "ajax": {
            "url": "/Home/loadTable",
            "type": "POST",
            "data": function (d) {
                d.pk = pk;
            },
            "datatype": "json"
        },
        
        "columns": [
            { "data": "id" },
            { "data": "firstName" },
            { "data": "secondName" },
            //{
            //    "data": null, render: function (data) {
            //        if ($("#basicinfo_KTP_EDITABLE").val() === "YES") {
            //            return '<span style="overflow: visible; position: relative; width: 110px;">' +
            //                '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill editparti" title="Edit"><i class="la la-edit" style="color:blue;"></i></a>' +
            //                '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete" onclick="DeletePart(\'' + data.PKParti + '\')"><i class="la la-trash" style="color:red;"></i></a>' +
            //                '</span>';
            //        }
            //        else {
            //            return '';
            //        }
            //    }

            //    //return "<a class='m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill' title='Delete' id='ButtonDeletePartCommittee' style='vertical-align:middle'><i class='la la-trash'></i></a>"


            //},

        ]

    });


    //$('#Target_Part tbody').on('click', '.editparti', function () {

    //    var data = particitable.row($(this).parents('tr')).data();

    //    $("#hiddenpartiPK").val(data.PKParti);
    //    $("#stakeholder_category").val(data.CATEGORY_FK);
    //    $("#stakeholder_community_detail").val(data.COMMUNITY_NAME);
    //    $("#stakeholder_target_participant").val(data.TARGET_PARTICIPANT);

    //    $('#add_parti').show();
    //    $('#buttonAddParti').hide();
    //    //alert($("#stakeholderVM_RATING_PARTICIPANT_PK_Hidden").val());
    //});
}
