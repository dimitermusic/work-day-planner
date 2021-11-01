const now = moment().format("[It is currently] h:mma [on] dddd, MMM Do YYYY")
$('#currentDay').text(now)
setInterval(function() {
    const now = moment().format("[It is currently] h:mma [on] dddd, MMM Do YYYY")
    $('#currentDay').text(now)
}, 1000)

$(".description").each(function () {
    const name = parseInt($(this).attr("name"));
    const timeCheck = parseInt(moment().format('H'))
    if (name < timeCheck) {
        $(this).addClass("past");
    }
    if (name > timeCheck) {
        $(this).addClass("present")
    }
    if (name === timeCheck) {
        $(this).addClass("future")
    }
})

const storedTasks = JSON.parse(localStorage.getItem('stored-tasks')) || []

function save() {
    const textInput = $(this).siblings("input")
    const newTask = textInput.val()
    const hour = textInput.attr('name')
    const newObj = {hour,newTask}
    storedTasks.push(newObj)
    localStorage.setItem('stored-tasks',JSON.stringify(storedTasks))
    console.log(storedTasks)
}

$(".saveBtn").each(function() {
    $(this).click(save)
})

function init() {
    console.log(storedTasks)
    $(".description").each(function() {
        const hour = $(this).attr('name')
        if (storedTasks.length != null) {
            for (let i = 0; i < storedTasks.length; i++) {
                if (hour == storedTasks[i].hour) {
                    console.log($(this).val())
                    $(this).val(storedTasks[i].newTask)
                }
                console.log(hour)
            }
        }
    })
}

init()