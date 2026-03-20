---
slug: /gotop/l16/configuration
id: l16-configuration
sidebar_label: Configuration
title: GOTOP - L16 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el reloj GPS GOTOP L16 y los ajustes de servidor para usar con Plaspy
keywords:
  - configuración GOTOP L16
  - instalación GOTOP L16
  - configuración servidor GOTOP L16
  - GOTOP L16 en Plaspy
  - configuración rastreador GPS vestible
  - configuración reloj GPS L16
  - configuración rastreador Plaspy
  - ajustes servidor Plaspy
  - integración rastreador GPS
  - configuración seguimiento personal
---

# GOTOP - Configuración del L16

Esta página presenta la información pública necesaria para usar el reloj GPS inteligente GOTOP L16 con Plaspy. Se concentra en los ajustes de servidor prácticos y en el flujo general de configuración requerido para que el L16 envíe ubicación, telemetría de salud, eventos SOS y notificaciones de llamadas a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Use esta guía para preparar el dispositivo para Plaspy y luego siga las herramientas o la documentación oficiales de GOTOP para comandos específicos del equipo y notas de firmware.

## Resumen de configuración

El objetivo al configurar el L16 para Plaspy es apuntar el dispositivo al endpoint compartido de Plaspy, verificar los ajustes de transporte y confirmar que el equipo sea visible en la plataforma Plaspy. El L16 es un rastreador vestible que transmite posicionamiento en múltiples modos y telemetría de salud a Plaspy para monitoreo en tiempo real y alertas.

- Proporcione al L16 el endpoint y el puerto del servidor Plaspy para que pueda enviar ubicación y telemetría.
- Elija UDP o TCP en el puerto 8888 si el dispositivo requiere selección de transporte.
- Confirme la conectividad celular y la disponibilidad de la SIM o eSIM para que los datos puedan transmitirse.
- Verifique que el dispositivo reporte a Plaspy y aparezca en los paneles de la plataforma.
- Opcionalmente, configure en el dispositivo los ajustes de SOS y notificación de eventos para que las alertas se reenvíen a Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos previos típicos

- Dispositivo completamente cargado o alimentación externa y batería en buen estado para completar los pasos de configuración.
- Servicio celular activo para el L16 mediante Nano SIM o eSIM y confirmación de capacidad de datos.
- Acceso al método oficial de configuración GOTOP para el L16 (herramienta web, app móvil o interfaz SMS/AT según lo provea GOTOP).
- Información básica del dispositivo como IMEI o ID del equipo para registrarlo o localizarlo en Plaspy.
- Un entorno de instalación típico donde haya solución GNSS y cobertura celular disponibles para la verificación inicial.
- Acceso a la cuenta Plaspy o vista administrativa donde se verificará el dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el L16 envía sus mensajes de ubicación, telemetría y eventos directamente al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos mensajes, identifica automáticamente el protocolo del rastreador y muestra el dispositivo en los paneles para monitoreo en tiempo real y reproducción histórica.

- El dispositivo reporta posiciones GNSS y asistidas a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según el soporte del dispositivo y la preferencia del instalador.
- Las alarmas SOS y los eventos de llamada bidireccional se reenvían a Plaspy para notificaciones y gestión de incidentes.
- La telemetría de salud y los datos de sensores fluyen a Plaspy para que los paneles muestren ritmo cardíaco, SpO2 y otras métricas.
- Plaspy almacena los datos entrantes y ofrece visibilidad para alertas, eventos de geocerca y reproducción del historial.

## Flujo típico de configuración

1. Acceda al método oficial de configuración GOTOP para el L16 (app del fabricante, portal web o interfaz SMS/comandos soportada).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como servidor de rastreo.
3. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Seleccione UDP o TCP como método de transporte si el dispositivo requiere una selección explícita.
5. Aplique o guarde los nuevos ajustes de servidor y transporte en la herramienta de configuración del dispositivo.
6. Reinicie el L16 si el fabricante o la herramienta de configuración lo requieren para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy confirmando que la unidad aparece en la plataforma y envía las actualizaciones de ubicación y telemetría esperadas.

## Ejemplo de comandos de configuración

Los comandos exactos de configuración o la sintaxis de SMS para el L16 varían según el firmware y las herramientas del fabricante que GOTOP proporcione. Debido a que los métodos del proveedor difieren, consulte la guía oficial de configuración de GOTOP para el conjunto de comandos o la interfaz precisa. Las herramientas típicas del proveedor pueden ofrecer una app o portal web que oculta los comandos de bajo nivel, mientras que algunos instaladores pueden usar SMS o conjuntos de comandos serie.

Si dispone de comandos GOTOP en el manual del dispositivo, aplíquelos mediante la herramienta oficial de GOTOP y asegúrese de usar los siguientes valores al configurar el destino de rastreo:
- Dominio o IP del servidor: d.plaspy.com o 54.85.159.138
- Puerto del servidor: 8888
- Transporte: UDP o TCP

Conserve siempre los marcadores de posición que aparezcan en las instrucciones GOTOP, como valores de APN o credenciales, exactamente como se muestran en la guía del fabricante.

## Notas de configuración

- Las variaciones de firmware pueden cambiar las etiquetas de menú exactas, la sintaxis de comandos SMS o el flujo de configuración; verifique siempre contra la versión de firmware del dispositivo.
- Elija UDP para menor sobrecarga y posible entrega más rápida, o TCP si necesita fiabilidad de conexión; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Si el L16 admite configuración vía SMS, es posible usar comandos SMS para establecer los valores de servidor y puerto cuando no haya app o herramienta web disponible.
- Las funciones BLE y el emparejamiento local no reemplazan el reporte al servidor; son complementarias para funciones basadas en proximidad e integración de sensores locales.
- Mantenga un registro del IMEI o identificador del dispositivo para emparejar el reloj físico con la entrada en Plaspy durante la verificación.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP L16 con Plaspy permite a cuidadores, gestores y equipos de monitoreo consolidar ubicación, telemetría de salud y eventos de emergencia en una única plataforma de supervisión. Los ajustes de servidor compartidos de Plaspy simplifican el despliegue porque todos los dispositivos soportados usan el mismo puerto y Plaspy detecta automáticamente los protocolos, lo que agiliza la incorporación y asegura un reporte consistente.

Para obtener más información sobre Plaspy y sus capacidades de monitoreo y alertas visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar las instrucciones de configuración más recientes y las notas de firmware con GOTOP en https://www.gotop.cc/.
