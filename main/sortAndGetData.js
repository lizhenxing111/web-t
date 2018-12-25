/**
 * 开启排序
 */
function startSort(){
    $("tbody").dragsort({ dragSelector: "tr", dragEnd: saveOrder, placeHolderTemplate: "<tr></tr>" });
    $("#startSort").removeClass("show").addClass("hide");
    $("#destroySort").removeClass("hide").addClass("show");
    $("#sortData").removeClass("hide").addClass("show");
}
/**
 * 关闭排序
 */
function destroySort() {
    $("tbody").trigger("dragsort-uninit");
    $("#startSort").removeClass("hide").addClass("show");
    $("#destroySort").removeClass("show").addClass("hide");
    $("#sortData").removeClass("show").addClass("hide");
}
/**
 * 拖动排列每一行,并取第几列与第几列干什么
 */
function saveOrder() {
    var data = $("table tbody tr");
    var name=[];
    var cloum=[];
    $.each(data,function (i,tr) {
            if (i==data.length-1){
                var p=$(tr).find("td:eq(1)").html();
                var p1=$(tr).find("td:eq(3)").html();
            }else{
                var p=$(tr).find("td:eq(1)").html()+",";
                var p1=$(tr).find("td:eq(3)").html()+",";
            }
            name.push(p);
            cloum.push(p1);
    })
    $("#list1SortOrder").html(name);
    $("#list1Value").html(cloum);
};