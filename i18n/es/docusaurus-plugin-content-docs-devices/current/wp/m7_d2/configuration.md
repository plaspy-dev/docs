---
slug: /wp/m7_d2/configuration
id: m7_d2-configuration
sidebar_label: Configuration
title: WP - M7 D2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del WP M7 D2 con ajustes de servidor Plaspy y pasos prácticos de integración
keywords:
  - configuración WP M7 D2
  - instalación WP M7 D2
  - WP M7 D2 Plaspy
  - configuración rastreador WP
  - configuración GPS M7 D2
  - configuración rastreador de vehículos
  - ajustes servidor Plaspy
  - integración rastreador GPS
  - configuración seguimiento M7 D2
  - guía WP M7 D2
---

# WP - M7 D2 Configuración

Esta página describe el contexto público de configuración para usar el rastreador portátil WP M7 D2 con la plataforma Plaspy. Resume los ajustes de servidor que Plaspy espera, detalla los objetivos prácticos de configuración y explica el flujo básico necesario para apuntar un M7 D2 compatible hacia Plaspy para seguimiento en tiempo real y reporte de eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos concretos en el lado del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor. El M7 D2 admite reportes por SMS, GPRS, UDP y TCP y dispone de funciones como alertas por manipulación, reportes de movimiento y una batería recargable de larga duración, todas relevantes al configurar el comportamiento de los reportes.

## Visión general de la configuración

El objetivo es lograr que el M7 D2 comunique de forma fiable su ubicación y eventos a Plaspy, de modo que el dispositivo aparezca en la plataforma y pueda ser monitoreado. Para integrar con Plaspy debe apuntar el rastreador al endpoint compartido de Plaspy y confirmar que el dispositivo reporta correctamente.

- Configure el destino de red del dispositivo para que envíe datos a d.plaspy.com o a 54.85.159.138 en el puerto de Plaspy
- Seleccione el protocolo de transporte que requiera el dispositivo, UDP o TCP, y guarde la configuración
- Valide la conectividad GPRS o SMS y asegúrese de que el dispositivo tenga energía y señal celular
- Confirme que el dispositivo transmite y que Plaspy detecta el protocolo y muestra el rastreador en línea
- Active las alertas del dispositivo como manipulación o batería baja para que Plaspy reciba los eventos previstos

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor al configurar el M7 D2 para integración con Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y realiza detección automática de protocolo, por lo que la plataforma puede aceptar sesiones de dispositivo por UDP o TCP en el puerto compartido.

## Requisitos previos

- Un WP M7 D2 cargado y con batería instalada y listo para usar
- Una tarjeta SIM válida insertada si va a usar datos GPRS o reportes por SMS y servicio celular activo
- Acceso al método oficial de configuración del fabricante, como comandos SMS, una herramienta web del proveedor o una app de configuración
- Un computador o teléfono para enviar comandos de configuración o usar la herramienta del fabricante
- Señal celular estable en el lugar de instalación para la verificación inicial
- Acceso básico a una cuenta en Plaspy para verificar que el dispositivo aparece después de la configuración

## Cómo se conecta este rastreador a Plaspy

Al configurar el M7 D2 para Plaspy, el dispositivo se establece para enviar sus datos de ubicación y eventos al endpoint y puerto compartido de Plaspy para que la plataforma pueda ingerir y mostrar la información. Plaspy procesa los mensajes entrantes y hace visible el dispositivo en la lista de flota.

- El dispositivo se apunta a d.plaspy.com o a la IP equivalente 54.85.159.138
- El puerto 8888 se usa para todas las conexiones de dispositivos a Plaspy
- En el equipo se selecciona UDP o TCP si el firmware del dispositivo lo requiere
- Plaspy detecta automáticamente el protocolo del rastreador entrante y se encarga del parseo
- Los eventos del dispositivo, como reportes de movimiento o alertas de manipulación, se reenvían a Plaspy una vez que el reporte está activo

## Flujo de configuración habitual

Siga estos pasos prácticos al configurar el M7 D2 para Plaspy:

1. Acceda al método o software oficial de configuración del M7 D2 (por ejemplo comandos SMS, app del proveedor o herramienta de configuración para PC).
2. En los ajustes del dispositivo introduzca el destino del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto de destino en 8888 que Plaspy usa para todos los dispositivos soportados.
4. Elija UDP o TCP si el equipo requiere seleccionar el transporte; Plaspy acepta ambos y detecta el protocolo automáticamente.
5. Aplique o guarde la configuración en el dispositivo siguiendo las instrucciones del fabricante.
6. Reinicie el dispositivo si el fabricante o el firmware requieren un reinicio para que los ajustes surtan efecto.
7. Valide que el dispositivo reporta a Plaspy comprobando que el rastreador aparece en línea en su cuenta Plaspy y que llegan los mensajes iniciales de ubicación o evento.

## Ejemplos de comandos de configuración

Los comandos exactos y el método de configuración varían según el firmware del fabricante y el canal de configuración disponible para el M7 D2. Algunos instaladores usarán comandos por SMS, otros una herramienta de configuración del proveedor. Debido a que el M7 D2 soporta reportes por UDP y TCP, los pasos públicos típicos son establecer el servidor en d.plaspy.com o 54.85.159.138 y fijar el puerto en 8888, luego guardar y reiniciar el dispositivo según sea necesario.

Si utiliza comandos SMS o una interfaz de texto proporcionada por el fabricante, consulte el manual del M7 D2 para la sintaxis exacta. Los valores clave a incluir son el dominio o IP del servidor Plaspy, el puerto 8888 y el transporte elegido UDP o TCP. Plaspy detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

## Notas de configuración

- El firmware importa: distintas revisiones de firmware del M7 D2 o firmware del proveedor pueden usar una sintaxis de comandos o flujos de configuración diferentes.
- Elección de transporte: UDP es común por su bajo overhead, mientras que TCP puede ser requerido por algunas herramientas; Plaspy acepta ambos en el puerto compartido y detecta el protocolo automáticamente.
- Use el método oficial del fabricante: aplique siempre los ajustes utilizando el método de configuración recomendado para el M7 D2 para asegurar que los cambios persistan.
- Verifique el reporte tras la configuración comprobando la presencia del dispositivo en Plaspy y confirmando los mensajes de evento esperados como movimiento o alertas de manipulación.
- Tenga en cuenta el estado de la batería y la energía al hacer pruebas; las funciones de bajo consumo pueden afectar la rapidez con la que el dispositivo reporta después de la configuración.

## Por qué usar Plaspy con esta configuración

Usar el WP M7 D2 con Plaspy ofrece un camino sencillo para enviar datos de ubicación y eventos a una plataforma única de gestión de flota. Apuntar el dispositivo al endpoint compartido de Plaspy garantiza visibilidad centralizada para seguimiento, monitoreo de eventos y supervisión operativa de los vehículos donde se instale el compacto M7 D2.

Learn more about Plaspy and how it handles device connections at https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and installation details for the WP M7 D2 always verify information with the manufacturer at http://www.wondeproud.com/ since firmware behavior and setup steps can change over time.
