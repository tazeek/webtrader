define(["jquery","datatables","charts/charts"],function(a){function b(b,e){require(["text!charts/indicators/indicators_remove.html"],function(f){f=a(f),c=f.hide().find("table").DataTable({paging:!1,scrollY:200,info:!1}),f.appendTo("body"),a(".indicator_remove_dialog").dialog({autoOpen:!1,modal:!0,my:"center",at:"center",width:330,of:window,resizable:!1,buttons:[{text:"Remove Selected",click:function(){var b=a(".indicator_remove_dialog").data("refererChartID");c.rows(".selected").nodes().to$().each(function(){var c=a(this).data("seriesID"),d=a(this).data("parentSeriesID"),e=a(this).data("id"),f=a(b).highcharts();a.each(f.series,function(b,f){if(f.options.id==d){var g=f["remove"+a.trim(e).toUpperCase()];return g.call(f,c),!1}})}),a(".indicator_remove_dialog").dialog("close")}},{text:"Cancel",click:function(){a(".indicator_remove_dialog").dialog("close")}}]}),require(["text!charts/indicators/indicators.json"],function(a){d=a,"function"==typeof e&&e(b)})})}var c=void 0,d=void 0;return{openDialog:function(e){if(0==a(".indicator_remove_dialog").length)return void b(e,this.openDialog);c.clear().draw();var f=a(e).highcharts();f&&(a.each(f.series,function(b,e){a(this).data("isIndicator")&&a.each(d,function(b,d){if(-1!=e.options.name.indexOf(d.short_display_name)){var f=a(e).data("period")?"("+a(e).data("period")+")":"";return a(c.row.add([d.long_display_name+f]).draw().node()).click(function(){a(this).toggleClass("selected")}).data({id:d.id,seriesID:e.options.id,parentSeriesID:a(e).data("parentSeriesID")}),!1}})}),a(".indicator_remove_dialog").data("refererChartID",e).dialog("open"))}}});