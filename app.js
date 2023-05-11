console.log("connected");

// need to make a table to hold all the quests and then draw them when needed
const questLog = [{QuestName: "First Quest", 
                    QuestDesc:"This is much like a tutorial quest, you will create your first quest to complete.",
                    QuestDiff: "Easy"
                }];

init();

// init the array to fill the quest log
function init() {
    console.log("init ran");
    $.each(questLog, function(key, value){
            var name = value.QuestName;
            var desc = value.QuestDesc;
            var diff = value.QuestDiff;
            console.log(name + desc + diff)

            $(".current-quests").append(
                "<tr><td>"+name+"</td><td>"+desc+"</td><td>"+diff+"</td><td><input type=\"checkbox\" name=\"quest-complete\" id=\"starting-quest-complete\"></td></tr>"
            );
    });
}

// submit button adds li
$("#accept-quest").on("click", function(event){
    console.log("accept pressed");
    var questName = $(".quest-name-input").val();
    var questDesc = $(".quest-desc-input").val();
    var questDiff = $("#quest-difficulty option:selected").text();
    console.log(questName + questDesc + questDiff);

    questLog.push({QuestName: questName, QuestDesc: questDesc, QuestDiff: questDiff});

    $(".current-quests").append(
        "<tr><td>"+questName+"</td><td>"+questDesc+"</td><td>"+questDiff+"</td><td><input type=\"checkbox\" name=\"quest-complete\" id=\"starting-quest-complete\"></td></tr>"
    )

    console.log(questLog);
})