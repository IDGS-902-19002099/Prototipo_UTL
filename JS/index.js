
function mostrarFechaYHora() {
    // Obten la fecha y hora actual en el formato deseado
    const options = {
        weekday: 'long',  // Nombre completo del día de la semana
        year: 'numeric',  // Año en formato numérico
        month: 'long',    // Nombre completo del mes
        day: 'numeric',   // Día del mes en formato numérico
        hour: 'numeric',  // Hora en formato numérico (24 horas)
        minute: 'numeric', // Minuto en formato numérico
        second: 'numeric', // Segundo en formato numérico
        timeZone: 'America/Mexico_City', // Zona horaria de León, Gto.
    };

    const fechaHora = new Date().toLocaleString('es-MX', options);

    // Dividir la fecha y hora en partes
    const partesFechaHora = fechaHora.split(' ');

    // Capitalizar solo la primera letra del día
    partesFechaHora[0] = partesFechaHora[0].charAt(0).toUpperCase() + partesFechaHora[0].slice(1);

    // Volver a unir las partes y mostrar la fecha y hora en tu navbar
    const fechaHoraFormateada = partesFechaHora.join(' ');
    document.getElementById('fecha-hora').textContent = fechaHoraFormateada;
}

// Llama a la función inicialmente para mostrar la fecha y hora al cargar la página
mostrarFechaYHora();

// Actualiza la fecha y hora cada segundo (o el intervalo deseado)
setInterval(mostrarFechaYHora, 1000);


//----------------------------------------------------------------
$(document).ready(function(){
    $('.carousel').carousel({
      interval: 5000 // Cambio de imagen cada 5 segundos (ajusta según tus preferencias)
    });
  });

  $(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();
  
    $('ul.tabs li a').click(function(){
      $('ul.tabs li a').removeClass('active');
      $(this).addClass('active');
      $('.secciones article').hide();
  
      var activeTab = $(this).attr('href');
      $(activeTab).show();
      return false;
    });
  });

//-------------------------------------------------------------------
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
}
document.getElementById("menu-toggle").addEventListener("click", function() {
  openNav();
});


//----------------------------------------------------------

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}

document.getElementById("close-btn").addEventListener("click", function() {
  closeNav();
});

//--------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const currentMonthElement = document.getElementById("currentMonth");
  const calendarBody = document.getElementById("calendarBody");
  const prevMonthButton = document.getElementById("prevMonth");
  const nextMonthButton = document.getElementById("nextMonth");
  
  let currentDate = new Date();
  
  function renderCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      
      currentMonthElement.textContent = new Date(year, month, 1).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });
      calendarBody.innerHTML = '';
      
      let date = 1;
      
      for (let i = 0; i < 6; i++) {
          const row = document.createElement("tr");
          
          for (let j = 0; j < 7; j++) {
              const cell = document.createElement("td");
              
              if (i === 0 && j < firstDayOfMonth) {
                  cell.textContent = '';
              } else if (date > daysInMonth) {
                  break;
              } else {
                  cell.textContent = date;
                  date++;
              }
              
              row.appendChild(cell);
          }
          
          calendarBody.appendChild(row);
      }
  }
  
  prevMonthButton.addEventListener("click", function() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
  });
  
  nextMonthButton.addEventListener("click", function() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
  });
  
  renderCalendar();
});


  //----------------------------------------------------------
