window.onload = function(){
    bus.init();
};

bus = {
    init: function(){
        bus.loadContent();

    },

    addEvents: function(){
        document.getElementById("enviar").addEventListener('click',function(){
            bus.submitRuta();
        })

    },

    loadContent: function(){
        fetch('/api/rutasbuses',{
            method: 'get'
        }).then(res => res.json())
            .then(reso => {
                reso.todos.forEach(element => {
                    bus.addRow(element);
                });
            });
    },
    addRow: function(element){
        let tbody= document.getElementsByClassName("rutas")[0];
        let tr = document.createElement("tr");

        tr.innerHTML = ` <tr>
                            <td> ${element._id}</td>
                            <td> ${element.numero}</td>
                            <td> ${element.ponen}</td>
                            <td> ${element.precio}</td>
                        <tr>`;
        tbody.appendChild(tr);
    },
    submitRuta: function(){

        /*let formulario = document.getElementsByTagName("form")[0];
        let data = {
            numero: formulario.numero.value,

        };*/
    },


};