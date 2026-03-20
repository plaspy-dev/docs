---
slug: /neomatica/adm333/configuration
id: adm333-configuration
sidebar_label: Configuration
title: Neomatica - ADM333 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Neomatica ADM333 con Plaspy con ajustes de servidor y flujo práctico
keywords:
  - Configuración Neomatica ADM333
  - Configuración ADM333
  - Tracker GPS Neomatica Plaspy
  - Configuración servidor ADM333
  - Configuración ADM333 Plaspy
  - Configuración tracker GPS ADM333
  - Guía Neomatica ADM333
  - Configuración seguimiento flotas ADM333
  - Configuración telemetría ADM333
  - Guía integración ADM333
---

# Neomatica - Configuración del ADM333

Esta página describe el contexto público de configuración para usar el tracker Neomatica ADM333 con Plaspy. Se enfoca en los ajustes prácticos del servidor y en los pasos comunes necesarios para registrar el dispositivo en Plaspy de manera que el tracker entregue ubicación y telemetría en tiempo real a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker. Los pasos exactos en el lado del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor. El ADM333 v2 admite enlace GPRS y un protocolo abierto, sensores BLE, doble nanoSIM y varios métodos de configuración (configuradores para Windows y Android, SMS, Bluetooth). Utilice esta guía junto con la documentación del fabricante para instrucciones específicas del dispositivo.

## Resumen de configuración

El objetivo de la configuración es apuntar el ADM333 al endpoint de Plaspy y asegurarse de que el dispositivo pueda enviar de forma fiable la posición GNSS y la telemetría por GPRS, de modo que quede visible y gestionable en Plaspy. El proceso suele incluir verificar la conectividad, establecer la dirección y el transporte del servidor, y confirmar que la plataforma recibe los datos.

- Configure el dispositivo para enviar datos al endpoint del servidor Plaspy y al puerto correcto.
- Seleccione el método de transporte (UDP o TCP) si el tracker ofrece la opción.
- Valide la conectividad GPRS y que la SIM activa tenga APN y servicio de datos.
- Guarde y aplique los cambios de configuración y reinicie el tracker si fuera necesario.
- Verifique que la telemetría y los eventos aparezcan en Plaspy para que el dispositivo sea visible en monitoreo e informes.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de Plaspy al configurar el ADM333 para reporte directo a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888 según requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del tracker y todos los dispositivos usan el mismo puerto en Plaspy

Estos valores son los endpoints públicos que Plaspy publica para la integración de dispositivos y deben ingresarse en la herramienta de configuración del ADM333 o en el método de configuración remota (SMS, Bluetooth, etc.) que utilice.

## Requisitos típicos antes de la configuración

- Un dispositivo ADM333 alimentado con acceso a la interfaz de configuración (configurador para Windows o Android, Bluetooth o SMS según el método del fabricante).
- Una nanoSIM funcional instalada con un plan de datos activo y APN correcto para el enlace GPRS.
- Acceso a la documentación de firmware del dispositivo o al configurador del fabricante para establecer servidor, puerto y transporte.
- Recepción GNSS básica para obtener posiciones iniciales durante las pruebas.
- Acceso administrativo a su cuenta o despliegue de Plaspy para confirmar la visibilidad del dispositivo tras la configuración.
- Un método para reiniciar o ciclar la alimentación del equipo después de aplicar la configuración si fuera necesario.

## Cómo se conecta el tracker a Plaspy

El ADM333 transmite paquetes de posición GNSS y telemetría por GPRS utilizando su protocolo abierto; Plaspy ingesta esos paquetes en el endpoint compartido y almacena o muestra la ubicación y los eventos en la plataforma. La configuración apunta el dispositivo al servidor de Plaspy y selecciona el transporte para que Plaspy pueda procesar los mensajes entrantes y asociarlos a un registro de dispositivo.

- El tracker envía telemetría GPRS al endpoint de Plaspy en el puerto 8888.
- Puede ingresar el dominio d.plaspy.com o la IP 54.85.159.138 al configurar el dispositivo.
- El ADM333 puede configurarse para usar transporte UDP o TCP en el puerto 8888 según la herramienta de configuración o la opción de firmware.
- Plaspy detecta automáticamente el protocolo del dispositivo una vez que llegan los paquetes, por lo que no es necesario seleccionar el protocolo en Plaspy.
- Tras una configuración exitosa, el tracker reporta GNSS, datos de sensores y eventos a Plaspy para monitoreo en tiempo real y almacenamiento histórico de rutas.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Neomatica para el ADM333, por ejemplo el configurador para Windows o Android, el configurador por Bluetooth o los comandos SMS documentados.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 en el campo de host/servidor del configurador.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija la opción de transporte UDP o TCP si el tracker requiere esa selección.
5. Asegúrese de que el APN de la SIM y los ajustes de datos móviles estén configurados para que el dispositivo pueda iniciar la conexión GPRS.
6. Aplique o guarde la configuración y reinicie el equipo si la herramienta o el firmware requieren un reinicio para activar los nuevos ajustes.
7. Valide la conectividad confirmando que el dispositivo reporta en Plaspy y que las actualizaciones de posición y eventos son visibles en la plataforma.

## Ejemplos de comandos de configuración

El ADM333 admite múltiples métodos de configuración y los comandos exactos o los pasos en GUI varían según el firmware y la versión del configurador de Neomatica. Dado que las herramientas del fabricante y los conjuntos de comandos SMS pueden cambiar, siga la guía de configuración oficial de Neomatica para obtener los formatos de comando precisos. Los métodos típicos incluyen:

- Usar la aplicación configurador para Windows o Android para ingresar servidor, puerto, transporte y ajustes de APN.
- Usar la configuración por Bluetooth desde un configurador móvil para escribir los detalles de servidor y transporte en el equipo.
- Usar comandos SMS documentados cuando corresponda para establecer host, puerto y APN (consulte la documentación de Neomatica para la sintaxis vigente).

Si necesita ejemplos concretos de comandos, consulte el manual del Neomatica ADM333 o la ayuda del configurador para obtener las plantillas SMS y las secuencias de comandos actuales según su versión de firmware.

## Notas de configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar las opciones de configuración disponibles y la sintaxis de comandos; confirme siempre con el manual del ADM333 para su unidad.
- Elija UDP o TCP según las condiciones de red y la recomendación de su proveedor de conectividad; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- El comportamiento de doble SIM y la prioridad de SIM se gestionan por el firmware del dispositivo; asegúrese de que la SIM activa tenga plan de datos y APN correcto configurados.
- Los ajustes de sensores y periféricos BLE (BLE, RS-485, 1-wire) se configuran por separado y no reemplazan los ajustes de servidor/transport necesarios para alcanzar Plaspy.
- Si utiliza configuración por SMS en sitios remotos, pruebe los cambios localmente primero y confirme el reporte en Plaspy tras la conexión del dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el Neomatica ADM333 para reportar directamente a Plaspy proporciona un camino sencillo hacia ubicación en tiempo real, alertas de eventos y datos históricos de rutas para gestión de flotas, flujos antirobo y telemetría de activos. El protocolo abierto del ADM333 v2, su enlace GPRS y el soporte de periféricos (sensores BLE, RS-485, 1-wire) lo convierten en una opción práctica para despliegues que requieren telemetría flexible y reportes fiables a un endpoint de plataforma único.

Para obtener más información sobre Plaspy y cómo admite integraciones de dispositivos como el ADM333, visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware y orientación del fabricante, verifique la documentación actual en https://neomatica.com/ ya que los procedimientos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
