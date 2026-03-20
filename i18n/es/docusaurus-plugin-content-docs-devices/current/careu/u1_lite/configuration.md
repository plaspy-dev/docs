---
slug: /careu/u1_lite/configuration
id: u1_lite-configuration
sidebar_label: Configuration
title: CAREU - U1 Lite+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador CAREU U1 Lite Plus a Plaspy con la configuración de servidor compartido
keywords:
  - Configuración CAREU U1 Lite+
  - Configuración U1 Lite+ CAREU
  - CAREU U1 Lite+ Plaspy
  - Configuración servidor CAREU U1 Lite+
  - Configuración rastreador GPS CAREU U1 Lite+
  - Configuración LTE CAREU U1 Lite+
  - Software de rastreo CAREU U1 Lite+
  - Rastreo de flotas CAREU U1 Lite+
  - Configuración rastreador CAREU
  - Configuración rastreador Plaspy
---

# CAREU - Configuración U1 Lite+

Esta página describe la configuración pública necesaria para usar el rastreador CAREU U1 Lite+ con Plaspy. Incluye los valores de servidor de Plaspy que debe ingresar en el dispositivo o en la herramienta del proveedor, y explica los pasos prácticos para preparar el equipo y que reporte correctamente en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía como referencia práctica para aplicar el endpoint de Plaspy y verificar la conectividad, y consulte la documentación de CAREU para detalles específicos del dispositivo.

## Resumen de configuración

Este proceso prepara el CAREU U1 Lite+ para enviar ubicación y telemetría a Plaspy usando el endpoint y puerto compartidos de la plataforma. El objetivo es garantizar que el rastreador establezca un enlace de datos estable con Plaspy y aparezca correctamente en la plataforma para su monitoreo y generación de informes.

- Configure el objetivo de red del dispositivo para que apunte a Plaspy usando el dominio o la IP suministrada.
- Seleccione el modo de transporte requerido si el equipo solicita UDP o TCP y establezca el puerto que usa Plaspy.
- Guarde y aplique los cambios mediante la herramienta de configuración de CAREU o el método de aprovisionamiento soportado.
- Valide que el dispositivo esté reportando y sea visible en Plaspy revisando los datos entrantes y el estado del dispositivo.
- Solucione problemas de conectividad verificando alimentación, tarjeta SIM y señal de red móvil, así como compatibilidad de firmware.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y la plataforma usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Confirme que el CAREU U1 Lite+ tenga alimentación estable y esté encendido.
- Asegúrese de que haya una tarjeta SIM activa y provisionada instalada si el dispositivo requiere datos celulares.
- Verifique el acceso al método oficial de configuración de CAREU, como la herramienta web del proveedor, la app de configuración por USB o Bluetooth, o comandos SMS si son compatibles.
- Compruebe que el firmware esté actualizado o anote la versión de firmware para comparar comportamientos con la documentación del fabricante.
- Confirme cobertura de red móvil adecuada para que LTE pueda conmutar a 3G o 2G según sea necesario.
- Prepare identificadores del equipo como IMEI o número de serie para el registro del dispositivo en Plaspy si se requiere.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el CAREU U1 Lite+ envía mensajes de posición y estado al endpoint de Plaspy para que la plataforma muestre ubicación, eventos y telemetría operativa. Plaspy recibe esos mensajes en el endpoint compartido y determina automáticamente el protocolo del rastreador.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP para enviar paquetes a Plaspy en el puerto 8888.
- Plaspy detecta automáticamente el protocolo usado por el rastreador y parsea los mensajes entrantes.
- Los datos reportados se vuelven visibles en Plaspy para monitoreo, generación de eventos y registros históricos.
- Validar la conectividad asegura que el rastreador esté comunicándose activamente y siendo procesado por Plaspy.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de CAREU provisto por el fabricante o instalador.
2. En la sección de servidor o en la configuración del APN del dispositivo, ingrese d.plaspy.com o, si su herramienta lo exige, la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888, que es el puerto usado por Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el rastreador solicita una selección de transporte y su red lo soporta.
5. Aplique o guarde la configuración en la herramienta de CAREU y confirme que los ajustes se aceptaron.
6. Reinicie el dispositivo si el fabricante o su procedimiento de instalación lo requiere.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece y envía datos en la plataforma.

## Ejemplos de comandos de configuración

El CAREU U1 Lite+ soporta múltiples métodos de configuración según el firmware y las opciones instaladas. Los conjuntos de comandos exactos pueden variar según la versión de firmware y la herramienta del fabricante que utilice. Consulte la utilidad de configuración oficial de CAREU o la referencia de comandos SMS para la sintaxis precisa de su equipo.

La configuración típica se realiza con el software del proveedor o una herramienta de aprovisionamiento donde ingresará el dominio o la IP del servidor Plaspy y el puerto 8888, y luego seleccionará UDP o TCP si se le solicita. Si utiliza comandos SMS o una interfaz de línea de comandos proporcionada por CAREU, siga la sintaxis del fabricante para establecer el servidor y el puerto según la documentación del proveedor.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos de configuración y los elementos de menú disponibles; siempre revise las notas de la versión del firmware al resolver problemas.
- TCP y UDP se comportan de forma distinta en redes poco fiables; elija el transporte que mejor se adapte a su instalación y a las características de la red.
- Si el dispositivo admite entrada tanto por dominio como por IP, prefiera d.plaspy.com por resiliencia DNS; use 54.85.159.138 como alternativa cuando la herramienta lo requiera.
- Las funciones de configuración remota como FOTA o aprovisionamiento del proveedor pueden simplificar el despliegue pero requieren ajustes de servidor correctos y acceso de red.
- Mantenga un registro de los identificadores del dispositivo y de los cambios de configuración para facilitar el soporte y el mantenimiento futuro.

## Por qué usar Plaspy con esta configuración

Usar el CAREU U1 Lite+ con Plaspy ofrece una forma directa de integrar el rastreador en una sola plataforma para visualización de ubicación, monitoreo de eventos y supervisión operativa. Las capacidades del U1 Lite+ para datos celulares, WiFi e integración de accesorios lo hacen versátil para monitoreo de flotas y activos, mientras que Plaspy procesa los datos entrantes usando un endpoint y puerto consistente.

Para conocer más sobre Plaspy y las configuraciones compatibles visite https://www.plaspy.com. Los detalles del fabricante y los métodos específicos de configuración del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la documentación y las indicaciones de firmware más recientes en el sitio del fabricante CAREU https://www.systech-iot.com/ antes de desplegar.
