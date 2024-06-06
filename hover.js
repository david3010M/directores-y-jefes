$(document).ready(function () {
    // designacion ratificacion encargatura
    const designacionTooltip = "Resolución de designación";
    const ratificacionTooltip = "Resolución de ratificación";
    const encargaturaTooltip = "Resolución de encargatura";
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

    $('.cv').on({
        mouseover: function (event) {
            showTooltip(event, cvTooltip);
        },
        mouseout: hideTooltip
    });
});