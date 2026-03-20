---
slug: /queclink/gl501mg/features
id: gl501mg-features
sidebar_label: Features
title: QuecLink - GL501MG Features
sidebar_class_name: menu_item_tracker
description: Visión general de características del QuecLink GL501MG y su integración con Plaspy para monitoreo prolongado de activos
keywords:
  - QuecLink GL501MG
  - características GL501MG
  - rastreador GPS QuecLink GL501MG
  - compatibilidad GL501MG con Plaspy
  - rastreador LTE Cat M1 NB1
  - rastreador de activos con batería
  - rastreador con BLE
  - rastreador GPS IP67
  - cargador inalámbrico Qi para rastreador
  - rastreador de telemetría de bajo consumo
---

# QuecLink - Características del GL501MG

Esta página ofrece una visión pública de las características del QuecLink GL501MG y explica cómo sus capacidades se integran con Plaspy. Está pensada para describir el rastreador en términos operativos, útil para planificar despliegues, monitorear activos y comprender qué telemetría y alertas puede esperar cuando el dispositivo se utiliza con Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el modelo regional o el método de instalación. Revise las notas de la versión y las guías de configuración del fabricante para detalles específicos del equipo y confirme cualquier requisito de despliegue con QuecLink y su administrador de Plaspy.

## Resumen de características

El GL501MG es un rastreador GPS compacto, alimentado por batería, diseñado para el monitoreo prolongado de activos sin supervisión y con soporte integrado para Plaspy. El dispositivo combina conectividad celular de área amplia y bajo consumo, posicionamiento GNSS de alta sensibilidad, sensores ambientales internos, BLE para conectar accesorios y una carcasa sellada para despliegues robustos.

- Conectividad LTE Cat M1 y NB1 con conmutación a 2G para mantener cobertura en entornos con redes mixtas.
- Receptor GNSS de alta sensibilidad u‑blox con precisión autónoma por debajo de 2,5 m para informes de ubicación fiables.
- Sensores internos de temperatura y luz, además de un acelerómetro interno que aporta telemetría básica ambiental y detección de manipulación.
- BLE 4.2 para emparejar accesorios y realizar configuraciones locales, permitiendo integración de sensores inalámbricos y puesta a punto in situ.
- Larga vida en espera diseñada para patrones de reporte poco frecuentes, con carga inalámbrica Qi para recargas convenientes y una carcasa magnética opcional para instalación sencilla.

## Funciones principales del QuecLink - GL501MG

- Módem celular LTE Cat M1 / NB1 con respaldo EGPRS 2G para telemetría resistente.
- Receptor u‑blox GNSS con precisión de posicionamiento autónomo menor a 2,5 m CEP.
- Sensores internos: sensor de temperatura, sensor de luz y acelerómetro de 3 ejes para detección de movimiento y manipulación.
- Radio BLE 4.2 para conectividad con accesorios y configuración en el dispositivo.
- Batería integrada con bajo consumo en espera y soporte para carga inalámbrica Qi para facilitar el mantenimiento.
- Carcasa sellada con clasificación IP67 y antenas internas para despliegues duraderos en exteriores y almacenes.
- Soporte del protocolo @Track y transporte sobre TCP, UDP y SMS para integración con Plaspy.
- Carcasa magnética opcional para montaje en superficies metálicas y un motor de vibración interno para retroalimentación háptica.

## Cómo funcionan estas características con Plaspy

Cuando está conectado a Plaspy, el GL501MG puede enviar informes periódicos de ubicación y telemetría a bordo que Plaspy muestra para monitoreo, alertas y análisis histórico. Plaspy detecta automáticamente muchos protocolos comunes de rastreadores para simplificar la incorporación de dispositivos y la ingestión de informes.

- Actualizaciones de ubicación y precisión GNSS disponibles en los paneles y mapas de Plaspy para visibilidad de activos.
- Indicadores de movimiento y manipulación derivados del acelerómetro interno y el sensor de luz que se muestran como eventos de estado en Plaspy.
- Telemetría de temperatura y luz incluida en los informes del dispositivo para monitorear tendencias ambientales y generar alertas por umbrales.
- Datos de sensores emparejados por BLE y el estado de accesorios transmitidos por el dispositivo pueden mostrarse en Plaspy cuando se configuran para ello.
- Patrones de reporte flexibles, desde informes programados hasta eventos de activación por wakeup, representados como trazas y eventos en Plaspy para supervisión operativa.

## Casos de uso típicos

- Seguimiento prolongado sin supervisión de activos como remolques, maquinaria y vehículos estacionados, donde la vida útil de la batería es crítica.
- Gestión de lotes e inventario donde son suficientes comprobaciones periódicas de ubicación y condiciones ambientales.
- Monitoreo anti robo y de manipulación utilizando señales de movimiento y luz dirigidas a las alertas de Plaspy.
- Cadena de frío y control de almacén aprovechando la telemetría interna de temperatura y la integración con sensores BLE.
- Despliegues en espera remotos que requieren operación de bajo consumo con reportes ocasionales de posición y estado.

## Notas sobre disponibilidad de funciones

- Variaciones de firmware pueden modificar ajustes disponibles, comportamiento de reporte y opciones de transporte soportadas; confirme la revisión de firmware al planificar funciones.
- El soporte regional de bandas celulares y las aprobaciones de operadores pueden afectar la conectividad; verifique la revisión de hardware para su mercado.
- Opciones de hardware como la carcasa magnética o revisiones específicas de la envoltura pueden alterar el montaje y las dimensiones.
- La integración de accesorios BLE y qué datos de sensores se retransmiten depende del firmware del dispositivo y de la configuración.
- QuecLink ha publicado un aviso de fin de vida para el GL501MG; verifique la disponibilidad actual y los modelos de reemplazo recomendados con su proveedor o representante de cuenta.

## Por qué usar Plaspy con estas funciones

Usar el GL501MG con Plaspy ofrece a las organizaciones una forma directa de recopilar ubicación, movimiento y telemetría ambiental de activos alimentados por batería a largo plazo. Plaspy ingiere los informes de posición y eventos del dispositivo y los presenta en vistas de mapa, líneas de tiempo de eventos y reglas de alerta para que los equipos puedan supervisar activos sin gestionar los detalles de bajo nivel de los protocolos.

Si desea saber más sobre cómo Plaspy trabaja con rastreadores como el GL501MG, visite https://www.plaspy.com para información general de la plataforma. Para las especificaciones más recientes y precisas del dispositivo, notas de firmware y el estado del producto, verifique los detalles en el sitio del fabricante https://www.queclink.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
