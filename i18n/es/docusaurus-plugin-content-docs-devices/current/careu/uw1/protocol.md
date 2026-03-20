---
slug: /careu/uw1/protocol
id: uw1-protocol
sidebar_label: Protocol
title: CAREU - UW1 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador CAREU UW1 y su compatibilidad con Plaspy, conexión y transporte
keywords:
  - CAREU UW1
  - protocolo CAREU UW1
  - protocolo GPS CAREU UW1
  - UW1 compatible con Plaspy
  - protocolo del rastreador UW1
  - rastreo de vehículos CAREU
  - comunicación UW1
  - rastreo de flotas UW1
  - protocolo CAREU Plaspy
  - rastreador GPS UW1
---

# CAREU - Protocolo UW1

Esta página describe el contexto público del protocolo para usar el rastreador CAREU UW1 con Plaspy. Explica, en términos generales, cómo se comunica el UW1 con Plaspy, qué ajustes de conexión se utilizan para alcanzar la plataforma Plaspy y qué aspectos del comportamiento del dispositivo son más relevantes al integrar los equipos UW1 en flujos operativos de seguimiento.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones de reporte disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en conceptos de comunicación públicos y estables en lugar de detalles internos del firmware.

## Resumen del protocolo

El rastreador UW1 utiliza un protocolo de reporte de dispositivo para transmitir posiciones GNSS, telemetría de sensores y eventos de alarma a Plaspy. Ese protocolo es el mecanismo por el cual el dispositivo se identifica ante la plataforma, envía actualizaciones periódicas o por eventos y entrega la carga útil que Plaspy usa para poblar mapas en tiempo real, informes y alertas.

- El protocolo permite el envío de posiciones, marcas de tiempo y telemetría básica para que Plaspy muestre la ubicación en vivo y las rutas históricas.
- Transporta banderas de alarma y eventos como violaciones de geocerca, conducción brusca y pérdida de alimentación que Plaspy transforma en alertas y flujos de trabajo.
- Canales de telemetría como sensores 1‑Wire, eventos del acelerómetro, datos de accesorios por RS‑232 y valores opcionales del CAN bus se entregan mediante el protocolo para que Plaspy pueda correlacionar datos de sensores con la ubicación.
- El protocolo soporta cargas en búfer desde el almacenamiento del UW1 para que los registros acumulados en modo fuera de línea se entreguen a Plaspy cuando se restablece la conectividad.
- La configuración del fabricante y el firmware determinan qué campos de telemetría están presentes y con qué frecuencia el dispositivo reporta.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de dispositivos en un endpoint y puerto compartidos y reconoce automáticamente el protocolo del rastreador cuando dispositivos correctamente configurados envían sus datos. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo en Plaspy si el UW1 está configurado para reportar a la dirección de Plaspy.

- Plaspy escucha en un único endpoint soportado d.plaspy.com y en la dirección pública 54.85.159.138.
- La plataforma recibe conexiones de dispositivos en el puerto 8888 y usa el mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP hacia Plaspy según la configuración del equipo y las condiciones de la red.
- Cuando un UW1 correctamente configurado reporta al endpoint de Plaspy, la plataforma asocia automáticamente los datos entrantes con la entrada de dispositivo correspondiente.
- Si su dispositivo no aparece en Plaspy, verifique la dirección de reporte, la selección de transporte y los campos de identificador del dispositivo en la configuración del UW1.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el UW1 alcanza Plaspy a través de redes celulares y qué opciones de transporte puede utilizar el dispositivo. El UW1 soporta múltiples generaciones celulares y puede reportar mediante UDP o TCP al endpoint de Plaspy en el puerto compartido.

- El UW1 puede configurarse para enviar datos a d.plaspy.com o directamente a la IP 54.85.159.138.
- Todos los dispositivos Plaspy usan el puerto 8888 para el reporte, y Plaspy espera tráfico de dispositivos en ese puerto.
- El dispositivo puede usar transporte UDP o TCP en el puerto 8888 según el firmware del UW1 y la configuración del equipo.
- Seleccione el transporte en la configuración del UW1 de acuerdo con la fiabilidad de la red y las recomendaciones del operador para su despliegue.
- Para cargas en búfer grandes después de períodos fuera de línea, confirme los parámetros de transporte y sesión del UW1 para asegurar la transferencia exitosa a Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden añadir o eliminar campos y comportamientos. Confirme qué opciones de reporte están habilitadas en el nivel de firmware de su UW1.
- Las revisiones de hardware y las interfaces opcionales como CAN bus o alternativas de acelerómetro pueden cambiar qué canales de telemetría están disponibles.
- Los menús de configuración del fabricante pueden ofrecer varias opciones de transporte y dirección de servidor, como DNS o IP. Apunte los dispositivos a d.plaspy.com o 54.85.159.138 y use el puerto 8888.
- Algunos escenarios de despliegue pueden preferir TCP para entrega de sesiones confiable y UDP para menor sobrecarga; verifique la configuración del UW1 según su caso de uso.
- Los identificadores de dispositivo y el reporte de IMEI deben coincidir con la entrada del dispositivo en Plaspy para la asociación automática.
- Siempre valide la compatibilidad y los pasos de configuración con la documentación oficial del fabricante al realizar la puesta en marcha del dispositivo o actualizaciones de firmware.

## Por qué es importante entender el protocolo

Conocer los fundamentos del protocolo de comunicación del UW1 ayuda a garantizar una configuración fiable, acelerar la resolución de problemas y asegurar una operación predecible a largo plazo con Plaspy. Tener claro qué envía el rastreador y cómo recibe Plaspy evita desajustes de configuración y reduce el tiempo de integración.

- Agiliza la puesta en marcha inicial al asegurar que los dispositivos apunten a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando un transporte soportado.
- Ayuda a identificar si la falta de datos se debe a la selección de transporte, la dirección del servidor o diferencias de firmware.
- Aclara las expectativas sobre qué canales de telemetría estarán disponibles para Plaspy desde el hardware UW1.
- Facilita la planificación para la recuperación de registros fuera de línea y cargas masivas cuando se restablece la conectividad.
- Permite una coordinación más eficaz con operadores de red e integradores al diagnosticar problemas de conectividad o de reporte.

## Por qué usar Plaspy con este protocolo

Combinar el CAREU UW1 con Plaspy ofrece una solución robusta para organizaciones que requieren visibilidad de ubicación resiliente y telemetría operativa. El diseño resistente IP67 del UW1, su conectividad Cat‑1 LTE con fallback, soporte multi GNSS, gran capacidad de registro fuera de línea y opciones flexibles de E/S lo hacen ideal para flotas, equipos de construcción y activos de alto valor. Cuando el UW1 reporta a Plaspy, sus datos de posición, sensores y alarmas se convierten en información accionable en mapas en vivo, informes y flujos de alertas.

Para saber más sobre cómo trabaja Plaspy con dispositivos como el CAREU UW1 visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo, notas de firmware e instrucciones de configuración, verifique la documentación oficial del fabricante en https://www.systech-iot.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
