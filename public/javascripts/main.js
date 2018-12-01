window.onload = function () {
    bus.init();
};

bus = {
    init: function () {
        bus.loadContent();
        bus.addEvents();



    },

    addEvents: function () {
        document.getElementById("enviar").addEventListener('click', function () {
            console.log("enviar");
            bus.submitRuta();
        });

        

    },

    loadContent: function () {
        fetch('/api/rutasbuses', {
            method: 'get'
        }).then(res => res.json())
            .then(reso => {
                reso.todos.forEach(element => {
                    bus.addRow(element);
                });
            });
    },
    addRow: function (element) {
        let tbody = document.getElementsByClassName("rutas")[0];
        let tr = document.createElement("tr");

        tr.innerHTML = ` <tr>
                            <td> ${element._id}</td>
                            <td> ${element.numero}</td>
                            <td> ${element.ponen}</td>
                            <td> ${element.precio}</td>

                            <td> 
                                <a href="#" id= "delete${element._id}"> delete </a>
                                <a href="#" id= "update${element._id}"> update </a>
                            </td>
                        <tr>`;
        tbody.appendChild(tr);


        
        document.getElementById("update"+element._id).addEventListener('click', function () {



            document.getElementById("modificar").addEventListener('click',function(){
                bus.updateBus(element);
            });

            
        });

        

        document.getElementById("delete"+element._id).addEventListener('click',function(){
            bus.deleteBus(element,tr,tbody);
        });


    },
    submitRuta: function () {
        console.log("si entra");
        let formulario = document.getElementsByTagName("form")[0];
        let data = {
            numero: formulario.numero.value,
            ponen: formulario.ponen.value,
            precio: formulario.precio.value
        };

        fetch('/api/rutasbuses', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            method: 'post'
        }).then(res => res.json())
            .then(reso => console.log(reso));
    },
    deleteBus: function (element,tr,tbody) {
        fetch('api/rutasbuses/'+element._id,{
            method:'delete'
        }).then(res => res.json())
            .then(reso => console.log(reso));
        
        tbody.removeChild(tr);
    },
    updateBus: function (element) {
        fetch('/api/rutasbuses/'+element._id,{})
    }


};