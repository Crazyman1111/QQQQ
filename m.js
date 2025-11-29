const a = [
    {
        day: "ПН",
        data: [{
            time: "8:00-8:55",
            name: "front",
            ayd: "401"
        },
        {
            time: "9:00-9:55",
            name: "front",
            ayd: "401"
        },
        {
            time: "10:00-10:55",
            name: "front",
            ayd: "401"
        },
        {
            time: "11:00-11:55",
            name: "ОБЕТ",
            ayd: "ЛЮБОЙ"
        },
        {
            time: "12:00-12:55",
            name: "front",
            ayd: "401"
        },
        {
            time: "13:00-13:55",
            name: "front",
            ayd: "401"
        }]
    },
    {
        day: "ВТ",
        data: [{
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "11:00",
            name: "ОБЕТ",
            ayd: "ЛЮБОЙ"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        }]
    },
    {
        day: "СР",
        data: [{
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "11:00",
            name: "ОБЕТ",
            ayd: "ЛЮБОЙ"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        }]
    },
    {
        day: "ЧТ",
        data: [{
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "11:00",
            name: "ОБЕТ",
            ayd: "ЛЮБОЙ"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        }]
    },
    {
        day: "ПТ",
        data: [{
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "11:00",
            name: "ОБЕТ",
            ayd: "ЛЮБОЙ"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        }]
    },
    {
        day: "СБ",
        data: [{
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "11:00",
            name: "ОБЕТ",
            ayd: "ЛЮБОЙ"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        }]
    }

];
const b = document.querySelectorAll(".qwerty");
b.forEach(r => {

    a.forEach(i => {
        if (r.querySelector(".day").textContent == i.day) {
            if (r.querySelector(".day").textContent == 'ПН'){
                i.data.forEach(p => {
                    r.innerHTML += `
            <div class="box1">
                <div class="time">${p.time}</div>
                <div class="pred">${p.name}</div>
            </div>
            <div class="kb">${p.ayd} кб.</div>
    `
                });
        } else {
            i.data.forEach(p => {
                r.innerHTML += `
            <div class="box1">
                <div class="pre">${p.name}</div>
            </div>
            <div class="kb">${p.ayd} кб.</div>
    `
            });
        }
    }

    })



});