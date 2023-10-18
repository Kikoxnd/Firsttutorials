$(document).ready(function () {
    alert("test alert");
    usertable();
    familytable();
    //getDatainsertviewtable();

    $("#submitbutton").click(function () {

        var obj = $("#form1").serialize();
        console.log(obj);
        //var firstname = $('#firstname').val();
        //var secondname = $('#secondname').val();
        //alert(firstname + " " +secondname);
        //alert(secondname);

        //serialize or
        //Jquery
        $.ajax({
            type: "POST",
            url: "/Home/postData", //controller/nama function kt controller
            data: obj,
            success: function (data) {
                alert('success insert');
                var table = $("#tabledisplay").DataTable();
                table.ajax.reload();
            }
        });
    });
    $("#upbutton").click(function () {

        var obj = $("#form3").serialize();
        console.log(obj);
        var firstname = $('#upfirstname').val();
        var secondname = $('#upsecondname').val();
        var updatedName = $('#updatedName').val();
        alert(firstname + " " + secondname + " " + updatedName);
        //alert(secondname);

        //serialize or
        //Jquery
        $.ajax({
            type: "POST",
            url: "/Home/upDate", //controller/nama function kt controller
            data: obj,
            success: function (data) {
                alert('success update process');
                var table = $("#tabledisplay").DataTable();
                table.ajax.reload();
            }
        });
    });
    $("#searchbutton").click(function () {
        // Destroy dataTable
        particisearchtable = $('#searchtable').DataTable().clear();

        particisearchtable.destroy();

        // Remove DOM elements
     /*   $('#searchtable').empty();*/
        $('.hideshowtable').show();

        searchtable();
       
    });
});

//function getDatainsertviewtable() {
//    alert("getdatainsertviewtable");

//    displayinsertviewtable = $("insertviewtable").DataTable({

//        searching = true,
//        lengthChange = true,
//        sorting = true,
//        autoWidth = true,
//        paging = true,
//        pagelength: 10,
//        responsive: true,
//        "ajax": {
//            "url": "Home/insertviewfamilydata",
//            "type": "POST",
//            //"data": function (d) {

//            //}
//            "datatype": "json"
//        },

//        "columnDefs": [
//            {
//                "width": "5%", "targets": 0, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
//                    $(td).css("text-align", "Center");
//                }
//            },
//            {
//                "width": "5%", "targets": 1, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
//                    $(td).css("text-align", "Center");
//                }
//            },
//            {
//                "width": "5%", "targets": 2, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
//                    $(td).css("text-align", "Center");
//                }
//            },
//            {
//                "width": "5%", "targets": 3, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
//                    $(td).css("text-align", "Center");
//                }
//            },
//            {
//                "width": "5%", "targets": 4, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
//                    $(td).css("text-align", "Center");
//                }
//            },

//        ],


//        "columns": [
//            { "data": "usertableid" },
//            { "data": "nameFirst" },
//            { "data": "nameFirst" },
//            { "data": "userAge" },
//            { "data": "nationality" },

//        ]
//    });
//}

function usertable() {
    //alert("usertable alert");
    //target table id tuk kita display segala data
    particitable = $("#tabledisplay").DataTable({

        searching: true,
        lengthChange: true,
        sorting: true,
        autoWidth: false,
        paging: true,
        pageLength: 10,
        responsive: true,
       
        "ajax": {
            "url": "/Home/loadTable",
            "type": "POST",
            //"data": function (d) {
            //    d.firstname= $('#testtable_fisrtName').val();
            //    d.secondname = $('#testtable_fisrtName').val();

            //},
            "datatype": "json"
        },

        "columnDefs": [
            {
                "width": "5%", "targets": 0, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 1, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 2, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 3, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },

        ],

        "columns": [
            { "data": "iduser" },
            { "data": "firstName" },
            { "data": "secondName" },
            {
                "data": null, render: function (data) {
                    
                        return '<span style="overflow: visible; position: relative; width: 110px;">' +
                            '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill editparti" title="Edit"><i class="la la-edit" style="color:blue;"></i></a>' +
                            '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill deleteItem" title="Delete" ><i class="la la-trash" style="color:red;"></i></a>' +
                            '</span>';                                       
                }
               // return "<a class='m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill' title='Delete' id='ButtonDeletePartCommittee' style='vertical-align:middle'><i class='la la-trash'></i></a>"
            },

        ]
    });

    //insert data to "update data form"!!
    $('#tabledisplay tbody').on('click', '.editparti', function () {

        var data = particitable.row($(this).parents('tr')).data();
        //target bende tu ke mana?? 
        //id form (.val) data yg akan dibawa(DB)
        $("#updatedName").val(data.iduser);
        $("#upfirstname").val(data.firstName);
        $("#upsecondname").val(data.secondName);
    });
    //delete data!!!
    $('#tabledisplay tbody').on('click', '.deleteItem', function () {

        var data = particitable.row($(this).parents('tr')).data();

        var firstname = data.firstName;
        var secondtname = data.secondName;
        var obj = { firstname: firstname, secondname: secondtname }
        //serialize or
        //Jquery
        $.ajax({
            type: "POST",
            url: "/Home/delItemFromDataTable", //controller/nama function kt controller
            data: obj,
            success: function (data) {
                alert('Delete success');
                //auto reload page 
                var table = $("#tabledisplay").DataTable();
                table.ajax.reload();
            }
        });

    });
}

function familytable() {
    //alert("usertable alert");
    //target table id tuk kita display segala data
    particifamilytable = $("#familydisplaytable").DataTable({

        searching: true,
        lengthChange: true,
        sorting: true,
        autoWidth: false,
        paging: true,
        pageLength: 10,
        responsive: true,

        "ajax": {
            "url": "/Home/loadFamilyTable",
            "type": "POST",
            //"data": function (d) {
            //    d.firstname= $('#testtable_fisrtName').val();
            //    d.secondname = $('#testtable_fisrtName').val();

            //},
            "datatype": "json"
        },

        "columnDefs": [
            {
                "width": "5%", "targets": 0, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 1, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 2, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 3, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 4, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },

        ],

        "columns": [
            { "data": "familyid" },
            { "data": "userid" },
            { "data": "fatherName" },
            { "data": "motherName" },
            {
                "data": null, render: function (data) {

                    return '<span style="overflow: visible; position: relative; width: 110px;">' +
                        '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill editpartifamily" title="Edit"><i class="la la-edit" style="color:blue;"></i></a>' +
                        '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill deleteItemfamily" title="Delete" ><i class="la la-trash" style="color:red;"></i></a>' +
                        '</span>';
                }
                // return "<a class='m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill' title='Delete' id='ButtonDeletePartCommittee' style='vertical-align:middle'><i class='la la-trash'></i></a>"
            },

        ]
    });

    //insert data to "update data form"!!
    //$('#familydisplaytable tbody').on('click', '.editpartifamily', function () {

    //    var data = particitable.row($(this).parents('tr')).data();
    //    //target bende tu ke mana??
    //    //id form (.val) data yg akan dibawa(DB)
    //    $("#updatedName").val(data.iduser);
    //    $("#upfirstname").val(data.firstName);
    //    $("#upsecondname").val(data.secondName);
    //});
    //delete data!!!
    //$('#familydisplaytable tbody').on('click', '.deleteItemfamily', function () {

    //    var data = particitable.row($(this).parents('tr')).data();

    //    var firstname = data.firstName;
    //    var secondtname = data.secondName;
    //    var obj = { firstname: firstname, secondname: secondtname }
    //    //serialize or
    //    //Jquery
    //    $.ajax({
    //        type: "POST",
    //        url: "/Home/delItemFromDataTable", //controller/nama function kt controller
    //        data: obj,
    //        success: function (data) {
    //            alert('Delete success');
    //            //auto reload page 
    //            var table = $("#tabledisplay").DataTable();
    //            table.ajax.reload();
    //        }
    //    });

    //});
}


function searchtable() {
    //alert("usertable alert");
    //target table id tuk kita display segala data
    //$('#searchtable').DataTable.destroy();
    particisearchtable = $("#searchtable").DataTable({

        searching: true,
        lengthChange: true,
        sorting: true,
        autoWidth: false,
        paging: true,
        pageLength: 10,
        responsive: true,

        "ajax": {
            "url": "/Home/searchTable",
            "type": "POST",
            "data": function (d) {
                d.firstname = $('#testtable_firstName').val();
                d.secondname = $('#testtable_secondName').val();

            },
            "datatype": "json"
        },

        "columnDefs": [
            {
                "width": "5%", "targets": 0, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 1, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 2, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },

        ],

        "columns": [
            { "data": "iduser" },
            { "data": "firstName" },
            { "data": "secondName" },         
        ]
    });       
}
//function familytable() {
//    //alert("usertable alert");
//    //target table id tuk kita display segala data
//    particitable = $("#familydisplay").DataTable({

//        //searching: true,
//        //lengthChange: true,
//        //sorting: true,
//        //autoWidth: false,
//        //paging: true,
//        //pageLength: 10,
//        //responsive: true,

//        "ajax": {
//            "url": "/Home/loadfamilyTable",
//            "type": "POST",
//            //"data": function (d) {
//            //    d.pk = pk;
//            //},
//            "datatype": "json"
//        },

//        "columnDefs": [
//            {
//                "width": "5%", "targets": 0, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
//                    $(td).css("text-align", "Center");
//                }
//            },
//            {
//                "width": "5%", "targets": 1, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
//                    $(td).css("text-align", "Center");
//                }
//            },
//            {
//                "width": "5%", "targets": 2, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
//                    $(td).css("text-align", "Center");
//                }
//            },
//            {
//                "width": "5%", "targets": 3, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
//                    $(td).css("text-align", "Center");
//                }
//            },
//            {
//                "width": "5%", "targets": 4, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
//                    $(td).css("text-align", "Center");
//                }
//            },
         

//        ],

//        "columns": [
//            { "data": "id" },
//            { "data": "userid" },
//            { "data": "fatherName" },
//            { "data": "motherName" },
//            {
//                "data": null, render: function (data) {

//                    return '<span style="overflow: visible; position: relative; width: 110px;">' +
//                        '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill editparti" title="Edit"><i class="la la-edit" style="color:blue;"></i></a>' +
//                        '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill deleteItem" title="Delete" ><i class="la la-trash" style="color:red;"></i></a>' +
//                        '</span>';
//                }
//                // return "<a class='m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill' title='Delete' id='ButtonDeletePartCommittee' style='vertical-align:middle'><i class='la la-trash'></i></a>"
//            },

//        ]
//    });

//}
