$(document).ready(function () {

    const handleOfficeSelect = (index) => {
        $(".itemOfficeNav").removeClass("active");
        $(`.itemOfficeNav[data-index=${index}]`).addClass("active");
    };

    const handleShowOffice = (index) => {
        $(".offices").addClass("none");
        console.log($(`.offices[data-index=${index}]`));
        $(`.offices[data-index=${index}]`).removeClass("none");
    };

    const handleOfficeName = (index) => {
        $(".officeTitle").addClass("none");
        $(`.officeTitle[data-index=${index}]`).removeClass("none");
    }

    const handleSeparator = (index) => {
        $(".separator").addClass("none");
        $(`.separator[data-index=${index}]`).removeClass("none");
    }

    $(".itemOfficeNav").on("click", function () {
        const index = $(this).data("index");
        console.log(index);
        handleOfficeSelect(index);
        handleShowOffice(index);
        handleOfficeName(index);
        handleSeparator(index);
    });

    handleOfficeSelect(1);
    handleShowOffice(1);
    handleOfficeName(1);
    handleSeparator(1);









    // designacion ratificacion encargatura
    const designacionTooltip = "Resolución de designación";
    const ratificacionTooltip = "Resolución de ratificación";
    const encargaturaTooltip = "Resolución de encargatura";
    const rectificacionTooltip = "Resolución de rectificación";
    const cvTooltip = "Hoja de Vida";
    const $tooltip = $('#tooltip');

    // Función para mostrar el tooltip debajo y centrado del elemento
    function showTooltip(event, text) {
        const $element = $(event.currentTarget);
        const offset = $element.offset(); // Obtiene la posición del elemento en la página
        const width = $element.outerWidth(); // Obtiene la anchura del elemento
        const tooltipWidth = $tooltip.outerWidth(); // Obtiene la anchura del tooltip

        // Calcula la posición horizontal del tooltip para que esté centrado respecto al elemento
        const leftPosition = offset.left + (width / 2) - (tooltipWidth / 2);

        // Ajusta la posición del tooltip para que esté debajo y centrado del elemento
        $tooltip.text(text)
            .css({
                display: 'block',
                left: leftPosition + 'px', // Centrado horizontalmente
                top: offset.top + $element.outerHeight() + 10 + 'px' // Añade un pequeño margen y la altura del elemento para colocarlo debajo
            });
    }

    // Función para ocultar el tooltip
    function hideTooltip() {
        $tooltip.hide();
    }

    // Añade los event listeners a cada elemento con la clase tooltip-element
    $('.designacion').on({
        mouseover: function (event) {
            showTooltip(event, designacionTooltip);
        },
        mouseout: hideTooltip
    });

    $('.ratificacion').on({
        mouseover: function (event) {
            showTooltip(event, ratificacionTooltip);
        },
        mouseout: hideTooltip
    });

    $('.encargatura').on({
        mouseover: function (event) {
            showTooltip(event, encargaturaTooltip);
        },
        mouseout: hideTooltip
    });

    $('.rectificacion').on({
        mouseover: function (event) {
            showTooltip(event, rectificacionTooltip);
        },
        mouseout: hideTooltip
    });

    $('.cv').on({
        mouseover: function (event) {
            showTooltip(event, cvTooltip);
        },
        mouseout: hideTooltip
    });
});
