let SPREADSHEET_ID_AND_TAB = "1A6XqyQLiJoHa4x4jzgBiZl5bAJhjlTek2RWyoAgyqrQ/yes";

/*
    The link to my Google sheet is:
    https://docs.google.com/spreadsheets/d/1A6XqyQLiJoHa4x4jzgBiZl5bAJhjlTek2RWyoAgyqrQ/edit?usp=sharing
*/

$(document).ready(function () {
    $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
        // Latest card pull first
        data.reverse();

        data.forEach(function (row, index) {
            console.log(row);

            let class_list = categorizeCard(row.Card);
            let item = $(`<tr class="${class_list}"> 
            <td>` + row.Date + `</td><td style="text-align:right;">` + row.Card + `</td>
            </tr>`);

            item.appendTo("table");
        });
    });
});

function categorizeCard(card) {
    let cl = "";
    let ending = card.substring(card.lastIndexOf(' ') + 1);

    switch (ending) {
        case 'Cups':
            cl += "cups minor";
            break;
        case 'Pentacles':
            cl += "pentacles minor";
            break;
        case 'Swords':
            cl += "swords minor";
            break;
        case 'Wands':
            cl += "wands minor";
            break;
        default:
            cl += "major";
            break;
    }

    return cl;
}

function resetCategories() {
    let ids = ["#major", "#minor", "#cup", "#wand", "#sword", "#pentacle"];

    for (let id of ids) {
        $(id).css("background-color", "white");
        $(id).css("color", "black");
    }

}

function showMajor() {
    resetCategories();
    $("#major").css("background-color", "paleGoldenRod");
    $("#major").css("color", "white");
    $(".minor").css("color", "rgba(0, 0, 0, 0.1)");
    $(".major").css("color", "black");
}

function showMinor() {
    resetCategories();
    $("#minor").css("background-color", "paleGoldenRod");
    $("#minor").css("color", "white");
    $(".major").css("color", "rgba(0, 0, 0, 0.1)");
    $(".minor").css("color", "black");
}

function showSuite(s) {
    resetCategories();
    $(".major").css("color", "rgba(0, 0, 0, 0.1)");
    $(".minor").css("color", "rgba(0, 0, 0, 0.1)");

    switch (s) {
        case 'c':
            $("#cup").css("background-color", "paleGoldenRod");
            $("#cup").css("color", "white");
            $(".cups").css("color", "darkBlue");
            break;
        case 'w':
            $("#wand").css("background-color", "paleGoldenRod");
            $("#wand").css("color", "white");
            $(".wands").css("color", "crimson");
            break;
        case 's':
            $("#sword").css("background-color", "paleGoldenRod");
            $("#sword").css("color", "white");
            $(".swords").css("color", "darkgreen");
            break;
        case 'p':
            $("#pentacle").css("background-color", "paleGoldenRod");
            $("#pentacle").css("color", "white");
            $(".pentacles").css("color", "gold");
            break;
    }
}

function resetEverything() {
    resetCategories();
    $(".major").css("color", "black");
    $(".minor").css("color", "black");
}