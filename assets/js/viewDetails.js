/*  表格开始   */
var Data = { Rows : [
    { id: '0101', name: "商务一部", remark: "12"},
    { id: '0102', name: "商务二部", remark: "213" },
    { id: '0103', name: "商务三部", remark: "12" },
    { id: '0101', name: "商务一部", remark: "12"},
    { id: '0102', name: "商务二部", remark: "213" },
    { id: '0103', name: "商务三部", remark: "12" },
    { id: '0101', name: "商务一部", remark: "12"},
    { id: '0102', name: "商务二部", remark: "213" },
    { id: '0103', name: "商务三部", remark: "12" },
    { id: '0101', name: "商务一部", remark: "12"},
    { id: '0102', name: "商务二部", remark: "213" },
    { id: '0103', name: "商务三部", remark: "12" },
    { id: '0101', name: "商务一部", remark: "12"},
    { id: '0102', name: "商务二部", remark: "213" },
    { id: '0103', name: "商务三部", remark: "12" },
    { id: '0101', name: "商务一部", remark: "12"},
    { id: '0102', name: "商务二部", remark: "213" },
    { id: '0103', name: "商务三部", remark: "12" },
    { id: '0101', name: "商务一部", remark: "12"},
    { id: '0102', name: "商务二部", remark: "213" },
    { id: '0103', name: "商务三部", remark: "12" },
    { id: '0101', name: "商务一部", remark: "12"},
    { id: '0102', name: "商务二部", remark: "213" },
    { id: '0103', name: "商务三部", remark: "12" },
    { id: '0101', name: "商务一部", remark: "12"},
    { id: '0102', name: "商务二部", remark: "213" },
    { id: '0103', name: "商务三部", remark: "12" }
         
]};

$(f_initGrid);
var manager, g;
var grid = null;
function f_initGrid() {
grid = $("#maingrid").ligerGrid({
    columns : [
        { display: '商务部', name: 'name', id: 'id1', align: 'left' },
        { display: '职级', name: 'remark' , align: 'left' },
        { display: '正式', name: 'remark' , align: 'left' },
        { display: '上限（个）', name: 'remark' , align: 'center' },
        { display: '保护期（天）', name: 'remark' , align: 'center' },
        { display: '绝对保护期（天）', name: 'remark' , align: 'center' }
    ],
    alternatingRow: false,
    data : Data,
    tree: { columnId: 'id1' },
    width: '100%',
    height: '350px',
    isScroll: false,
    alternatingRow: true,
    rowSelectable: false
});
};
function f_search()
{
grid.options.data = $.extend(true, {}, TreeDeptData);
grid.loadData(f_getWhere());
}
function f_getWhere() {
if (!grid) return null;
var clause = function (rowdata, rowindex) {
    var key = $("#txtKey").val();
    return rowdata.name.indexOf(key) > -1;
};
return clause;
}
/*  表格结束   */

$('#navList > li').click(
    function(){
        $(this).addClass('navActive').siblings().removeClass('navActive');
    }
);

$('#department').change(function(){
    console.log($(this).val());
});

$('#rank').change(function(){
    console.log($(this).val());
});

$('#zs').change(function(){
    console.log($(this).val());
});