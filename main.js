let SPREADSHEET_ID_AND_TAB = "1A6XqyQLiJoHa4x4jzgBiZl5bAJhjlTek2RWyoAgyqrQ/yes";

/*
    The link to my Google sheet is:
    https://docs.google.com/spreadsheets/d/1A6XqyQLiJoHa4x4jzgBiZl5bAJhjlTek2RWyoAgyqrQ/edit?usp=sharing
*/

$(document).ready(function () {
    $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
        console.log(data);

        data.forEach(function (row, index) {
            console.log(row);

            if (index === 0) return;

            let div = $(`<tr> 
            <td>` + row.Date + `</td><td>` + row.Card + `</td>
            </tr>`).appendTo("table");
        });
    });
});