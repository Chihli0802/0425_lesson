let weather = [];
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-11636A8B-2403-4CB7-BD0A-4FD7806AF94A&locationName=")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        weather = data;
        console.log(weather)
    })
    .then(function (error) {
        console.log(error);
    })

const selector = document.querySelector("#selector");
const loca = document.querySelector("#loca")
const wea = document.querySelector("#wea")
const pop = document.querySelector("#pop")
const temp = document.querySelector("#temp")
const iconarea = document.querySelector("#iconarea")


selector.addEventListener("change", function () {

    switch (selector.value) {
        case "---":
            window.location.reload();

        case "臺東縣":
            loca.innerText = weather.records.location[12].locationName;
            wea.innerText = weather.records.location[12].weatherElement
            [0].time[2].parameter.parameterName;
            temp.innerText = weather.records.location[12].weatherElement
            [2].time[2].parameter.parameterName + "-" + weather.records.location[12].weatherElement
            [4].time[2].parameter.parameterName + "℃";
            pop.innerText = weather.records.location[12].weatherElement
            [1].time[2].parameter.parameterName + "%"
            ic();
            // iconarea.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`
            break;

        case "臺北市":
            loca.innerText = weather.records.location[5].locationName;
            wea.innerText = weather.records.location[5].weatherElement
            [0].time[2].parameter.parameterName;
            temp.innerText = weather.records.location[5].weatherElement
            [2].time[2].parameter.parameterName + "-" + weather.records.location[5].weatherElement
            [4].time[2].parameter.parameterName + "℃";
            pop.innerText = weather.records.location[5].weatherElement
            [1].time[2].parameter.parameterName + "%"
            ic()
            // iconarea.innerHTML = `<i class="fa-solid fa-umbrella"></i>`
            break;
        case "臺南市":
            loca.innerText = weather.records.location[6].locationName;
            wea.innerText = weather.records.location[6].weatherElement
            [0].time[2].parameter.parameterName;
            temp.innerText = weather.records.location[6].weatherElement
            [2].time[2].parameter.parameterName + "-" + weather.records.location[6].weatherElement
            [4].time[2].parameter.parameterName + "℃";
            pop.innerText = weather.records.location[6].weatherElement
            [1].time[2].parameter.parameterName + "%"
            ic()
            // iconarea.innerHTML = `<i class="fa-solid fa-cloud"></i>`
            break;
        case "高雄市":
            loca.innerText = weather.records.location[15].locationName;
            wea.innerText = weather.records.location[15].weatherElement
            [0].time[2].parameter.parameterName;
            temp.innerText = weather.records.location[15].weatherElement
            [2].time[2].parameter.parameterName + "-" + weather.records.location[15].weatherElement
            [4].time[2].parameter.parameterName + "℃";
            pop.innerText = weather.records.location[15].weatherElement
            [1].time[2].parameter.parameterName + "%"
            ic()
            // iconarea.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`
            break;
        case "屏東縣":
            loca.innerText = weather.records.location[17].locationName;
            wea.innerText = weather.records.location[17].weatherElement
            [0].time[2].parameter.parameterName;
            temp.innerText = weather.records.location[17].weatherElement
            [2].time[2].parameter.parameterName + "-" + weather.records.location[17].weatherElement
            [4].time[2].parameter.parameterName + "℃";
            pop.innerText = weather.records.location[17].weatherElement
            [1].time[2].parameter.parameterName + "%"
            ic()
            // iconarea.innerHTML = `<i class="fa-solid fa-cloud"></i>`
            break;

        case "晴天國":
            loca.innerText = "晴天國";
            wea.innerText = "晴天";
            temp.innerText = "25" + "-" + "30" + "℃";
            pop.innerText = "0" + "%"
            ic()
            break;

    }


    function ic() {
        switch (wea.innerText) {

            case "陰短暫雨":
                iconarea.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`
                console.log(iconarea);
                break;
            case "多雲":
            case "多雲時陰":
                iconarea.innerHTML = `<i class="fa-solid fa-cloud"></i>`
                break;
            case "晴天":
                iconarea.innerHTML = `<i class="fa-solid fa-sun"></i>`
                break;

        }
    }

})

