$(document).ready(function () {
    getDatainsertviewtable();
    usertable1();
    getdescriptionviewtable();
    getcombineviewtable();

    //const button1 = document.getElementById("mirrorbuttonmodal");
    //const button2 = document.getElementById("insertmodalpopup")
    //button1.addEventListener("click", function{
    //    button2.click();
    //})
    $("#mirrorbuttonmodal").click(function () {
        alert("popo)");
        $("#insertmodalpopup").click();
        var table = $("#tabledisplayview").DataTable();
        table.ajax.reload();
    })
    $("#insertmodalpopup").click(function () {
        alert('modal insert success');

        var obj = $("#insertdata_usertableform").serialize();
        console.log(obj);
        //var firstname = $('#firstname').val();
        //var secondname = $('#secondname').val();
        //alert(firstname + " " +secondname);
        //alert(secondname);

        //serialize or
        //Jquery
        $.ajax({
            type: "POST",
            url: "/Home/postDatamodal", //controller/nama function kt controller
            data: obj,
            success: function (data) {
                alert('success modal table');
                var table = $("#tabledisplayview").DataTable();
                table.ajax.reload();
            }
        });

    });
    $("#insertviewfamilybutton").click(function () {
        alert("inserviewbutton");

        var obj = $("#informationform").serialize();
        console.log(obj);
        //var firstname = $('#firstname').val();
        //var secondname = $('#secondname').val();
        //alert(firstname + " " +secondname);
        //alert(secondname);

        //serialize or
        //Jquery
        $.ajax({
            type: "POST",
            url: "/Home/insertcombinetabledata", //controller/nama function kt controller
            data: obj,
            success: function (data) {
                alert('success combinetable');
                var table = $("#informationform").DataTable();
                table.ajax.reload();
            }
        });
    });
});

function usertable1() {
    //alert("usertable alert");
    //target table id tuk kita display segala data
    particitables = $("#tabledisplayview").DataTable({

        searching: true,
        lengthChange: true,
        sorting: true,
        autoWidth: false,
        paging: true,
        pageLength: 10,
        responsive: true,

        "ajax": {
            "url": "/Home/loadTable2",
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
    $('#tabledisplayview tbody').on('click', '.editparti', function () {

        var data = particitables.row($(this).parents('tr')).data();
        //target bende tu ke mana?? 
        //id form (.val) data yg akan dibawa(DB)
        $("#").val(data.iduser);
        $("#").val(data.firstName);
        $("#").val(data.secondName);
    });
    //delete data!!!
    $('#tabledisplayview tbody').on('click', '.deleteItem', function () {

        var data = particitables.row($(this).parents('tr')).data();

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
                var table = $("#tabledisplayview").DataTable();
                table.ajax.reload();
            }
        });

    });
}
function getDatainsertviewtable() {
    //alert("usertable alert");
    //target table id tuk kita display segala data
    insertviewtable = $("#insertviewtable").DataTable({

        searching: true,
        lengthChange: true,
        sorting: true,
        autoWidth: false,
        paging: true,
        pageLength: 10,
        responsive: true,

        "ajax": {
            "url": "/Home/insertviewfamilydata",
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
            { "data": "usertableid" },
            { "data": "nameFirst" },
            { "data": "nameSecond" },
            { "data": "userAge" },
            { "data": "nationality" },

            //{
            //    "data": null, render: function (data) {

            //        return '<span style="overflow: visible; position: relative; width: 110px;">' +
            //            '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill editparti" title="Edit"><i class="la la-edit" style="color:blue;"></i></a>' +
            //            '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill deleteItem" title="Delete" ><i class="la la-trash" style="color:red;"></i></a>' +
            //            '</span>';
            //    }
            //    // return "<a class='m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill' title='Delete' id='ButtonDeletePartCommittee' style='vertical-align:middle'><i class='la la-trash'></i></a>"
            //},

        ]
    });

    //insert data to "update data form"!!
    //$('#tabledisplay tbody').on('click', '.editparti', function () {

    //    var data = particitable.row($(this).parents('tr')).data();
    //    //target bende tu ke mana?? 
    //    //id form (.val) data yg akan dibawa(DB)
    //    $("#updatedName").val(data.iduser);
    //    $("#upfirstname").val(data.firstName);
    //    $("#upsecondname").val(data.secondName);
    //});
    ////delete data!!!
    //$('#tabledisplay tbody').on('click', '.deleteItem', function () {

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

function getdescriptionviewtable() {
    //alert("usertable alert");
    //target table id tuk kita display segala data
    insertviewtable = $("#descriptiontable").DataTable({

        searching: true,
        lengthChange: true,
        sorting: true,
        autoWidth: false,
        paging: true,
        pageLength: 10,
        responsive: true,

        "ajax": {
            "url": "/Home/descriptiontabledata",
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
            {
                "width": "5%", "targets": 5, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },

        ],

        "columns": [
            { "data": "descriptiontableid" },
            { "data": "usertable_id" },
            { "data": "telPhone" },
            { "data": "univ" },
            { "data": "carType" },
            { "data": "petName" },

            //{
            //    "data": null, render: function (data) {

            //        return '<span style="overflow: visible; position: relative; width: 110px;">' +
            //            '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill editparti" title="Edit"><i class="la la-edit" style="color:blue;"></i></a>' +
            //            '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill deleteItem" title="Delete" ><i class="la la-trash" style="color:red;"></i></a>' +
            //            '</span>';
            //    }
            //    // return "<a class='m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill' title='Delete' id='ButtonDeletePartCommittee' style='vertical-align:middle'><i class='la la-trash'></i></a>"
            //},

        ]
    });

    //insert data to "update data form"!!
    //$('#tabledisplay tbody').on('click', '.editparti', function () {

    //    var data = particitable.row($(this).parents('tr')).data();
    //    //target bende tu ke mana?? 
    //    //id form (.val) data yg akan dibawa(DB)
    //    $("#updatedName").val(data.iduser);
    //    $("#upfirstname").val(data.firstName);
    //    $("#upsecondname").val(data.secondName);
    //});
    ////delete data!!!
    //$('#tabledisplay tbody').on('click', '.deleteItem', function () {

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

function getcombineviewtable() {
    //alert("usertable alert");
    //target table id tuk kita display segala data
    getcombinetable = $("#combinetable").DataTable({

        searching: true,
        lengthChange: true,
        sorting: true,
        autoWidth: false,
        paging: true,
        pageLength: 10,
        responsive: true,

        "ajax": {
            "url": "/Home/combinetable",
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
            {
                "width": "5%", "targets": 5, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 6, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 7, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 8, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 9, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },
            {
                "width": "5%", "targets": 10, "class": "text-center", "createdCell": function (td, cellData, rowData, row, col) {
                    $(td).css("text-align", "Center");
                }
            },

        ],

        "columns": [
            { "data": "usertableid" },
            { "data": "nameFirst" },
            { "data": "nameSecond" },
            { "data": "userAge" },
            { "data": "nationality" },
            { "data": "descriptiontableid" },
            { "data": "usertable_id" },
            { "data": "telPhone" },
            { "data": "univ" },
            { "data": "carType" },
            { "data": "petName" },

            //{
            //    "data": null, render: function (data) {

            //        return '<span style="overflow: visible; position: relative; width: 110px;">' +
            //            '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill editparti" title="Edit"><i class="la la-edit" style="color:blue;"></i></a>' +
            //            '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill deleteItem" title="Delete" ><i class="la la-trash" style="color:red;"></i></a>' +
            //            '</span>';
            //    }
            //    // return "<a class='m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill' title='Delete' id='ButtonDeletePartCommittee' style='vertical-align:middle'><i class='la la-trash'></i></a>"
            //},

        ]
    });

    //insert data to "update data form"!!
    //$('#tabledisplay tbody').on('click', '.editparti', function () {

    //    var data = particitable.row($(this).parents('tr')).data();
    //    //target bende tu ke mana?? 
    //    //id form (.val) data yg akan dibawa(DB)
    //    $("#updatedName").val(data.iduser);
    //    $("#upfirstname").val(data.firstName);
    //    $("#upsecondname").val(data.secondName);
    //});
    ////delete data!!!
    //$('#tabledisplay tbody').on('click', '.deleteItem', function () {

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

