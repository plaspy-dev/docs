---
slug: /navtelekom/smart_s_2413/configuration
id: smart_s_2413-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2413 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Navtelekom SMART S-2413 con ajustes de servidor Plaspy y pasos prácticos para seguimiento de flotas
keywords:
  - configuración Navtelekom SMART S-2413
  - instalación SMART S-2413
  - SMART S-2413 Plaspy
  - configuración rastreador Navtelekom
  - configuración servidor SMART S-2413
  - configuración dispositivo Plaspy
  - instalación rastreador GPS SMART S-2413
  - configuración plataforma GPS Navtelekom
  - guía instalación SMART S-2413
  - compatibilidad rastreador Plaspy
---

# Navtelekom - Configuración del SMART S-2413

Esta página ofrece el contexto público de configuración para usar el Navtelekom SMART S-2413 con Plaspy. Resume los ajustes de servidor prácticos y los pasos de flujo de trabajo habituales que se usan para apuntar las unidades SMART S-2413 a Plaspy para el seguimiento en tiempo real y la ingestión de telemetría. Las indicaciones que siguen se basan en características públicas del dispositivo y en detalles del servidor Plaspy, y están pensadas para ayudar a flotas, integradores e instaladores a completar una configuración estándar.

El SMART S-2413 es compatible con Plaspy desde fábrica y admite configuración remota y local mediante las herramientas de Navtelekom. Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta el protocolo del rastreador automáticamente. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre confirme los comandos y flujos específicos del equipo en la documentación oficial de Navtelekom o con sus herramientas de instalador.

## Resumen de la configuración

Preparar un SMART S-2413 para Plaspy implica configurar el dispositivo para que reporte al endpoint del servidor Plaspy, asegurar conectividad celular fiable y validar que la telemetría reportada aparece en la plataforma Plaspy. El objetivo es establecer un reporte estable para que Plaspy pueda ofrecer ubicación en vivo, historial y monitoreo de eventos.

- Apunte el dispositivo al endpoint del servidor Plaspy y confirme los ajustes de transporte.
- Asegúrese de que el dispositivo tenga una SIM funcional y conectividad celular para el envío de telemetría.
- Guarde y aplique la configuración en la herramienta de configuración Navtelekom o vía gestión remota.
- Reinicie o deje ciclar el dispositivo si es necesario para que comience a reportar a Plaspy.
- Verifique que el dispositivo sea visible en Plaspy y que se reciban telemetría y eventos.

## Ajustes del servidor Plaspy

Configure el SMART S-2413 para que reporte al endpoint de Plaspy usando los siguientes ajustes públicos:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be selected on the device
- Plaspy automatically detects the tracker protocol so devices using these settings will be identified without manual protocol selection on the server side

Nota: Plaspy usa el mismo puerto para todos los dispositivos soportados y gestiona la identificación del protocolo de forma automática.

## Requisitos previos antes de la configuración

- Dispositivo alimentado y accesible para configuración, ya sea localmente o mediante el servicio de configuración remota de Navtelekom.
- Tarjeta SIM activa instalada en el SMART S-2413 y cobertura celular en la ubicación de la instalación.
- Acceso a las herramientas de configuración de Navtelekom, como NTC Configurator o el servicio remoto de configuración del proveedor para su unidad.
- IMEI o identificador del dispositivo disponible para cualquier paso de registro o verificación en la plataforma.
- Conocimientos básicos del APN del operador y la autenticación requerida por la SIM, si aplica.
- Paciencia para aplicar cambios de firmware o configuración y reiniciar la unidad cuando sea necesario.

## Cómo se conecta este rastreador a Plaspy

El SMART S-2413 envía paquetes periódicos de posición y telemetría a través de la red celular al endpoint del servidor Plaspy. Cuando se configura con el dominio o la IP de Plaspy y el puerto compartido, el flujo telemático del dispositivo es ingerido por Plaspy y queda disponible para monitoreo en vivo, historial y alertas por eventos.

- El dispositivo envía flujos telemáticos estándar por TCP o UDP a d.plaspy.com en el puerto 8888.
- Plaspy recibe y detecta automáticamente el protocolo del rastreador para su correcto parseo.
- Ubicación, telemetría y eventos de entradas digitales se reenvían a la plataforma Plaspy para tableros en vivo e informes.
- El reporte reiterado asegura visibilidad y permite a Plaspy rastrear el historial de rutas y activar alertas configuradas.
- Si se utiliza configuración remota, las herramientas de Navtelekom pueden cambiar el endpoint de reporte a d.plaspy.com o a la IP numérica según se requiera.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Navtelekom o al software, como NTC Configurator o el servicio remoto de configuración del proveedor. Este es el punto recomendado para cambiar parámetros de red y servidor.
2. En los ajustes de servidor del dispositivo ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 según la herramienta y la preferencia.
3. Configure el puerto del dispositivo en 8888. Plaspy usa este mismo puerto para todos los dispositivos compatibles.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo solicita una selección explícita.
5. Guarde o aplique la configuración en la herramienta para que el dispositivo escriba los nuevos parámetros de servidor.
6. Reinicie el SMART S-2413 si el firmware o la herramienta de configuración lo requieren para iniciar nuevas sesiones de red.
7. Valide que el dispositivo reporta a Plaspy confirmando que aparece en su instancia de Plaspy y que se reciben paquetes de ubicación y telemetría.

## Ejemplos de comandos de configuración

El SMART S-2413 admite métodos de configuración tanto locales como remotos proporcionados por Navtelekom. La sintaxis exacta de los comandos y los parámetros disponibles varían según la versión de firmware y las herramientas del fabricante. Dado que las utilidades del fabricante difieren, no se incluyen comandos universales aquí. Use el NTC Configurator de Navtelekom o el servicio remoto DRC para aplicar los siguientes ajustes públicos:

- Server address: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Consulte la utilidad de configuración de Navtelekom para las líneas de comando exactas o los comandos SMS soportados por su revisión de firmware. Si dispone de ejemplos de comandos suministrados por el fabricante, aplíquelos en el orden que recomiende la documentación del proveedor y mantenga los valores de marcador de posición, como el APN, consistentes con su operador móvil.

## Notas de configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar los parámetros disponibles y las etiquetas exactas de menú en el configurador; siempre verifique la versión de firmware del dispositivo antes de aplicar ajustes.
- Elija UDP o TCP según las opciones del dispositivo y las condiciones de la red local; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y detecta el protocolo automáticamente.
- Asegúrese de que el APN del dispositivo y la autenticación de la SIM sean correctos para el operador celular, de modo que el rastreador pueda establecer una sesión de datos.
- Use el NTC Configurator de Navtelekom o la gestión remota DRC para despliegues masivos o remotos y así reducir la configuración manual en el vehículo.
- Registre el IMEI del equipo y el estado de configuración después de la instalación para facilitar la resolución de problemas si no se recibe telemetría.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2413 con Plaspy ofrece a los operadores un camino claro para integrar ubicación de vehículos y telemetría en una sola plataforma de gestión de flotas. La recepción GLONASS/GPS del equipo, sus canales I/O flexibles y las opciones de configuración remota lo hacen práctico para seguimiento de flotas, telemetría de sensores y alertas basadas en eventos que Plaspy puede consumir para la supervisión operativa.

Learn more about Plaspy and how it handles device ingestion, dashboards, and alerts at https://www.plaspy.com. Manufacturer configuration methods, firmware behavior, and device details can change over time, so verify the latest device specific instructions and firmware information on the official Navtelekom website https://www.navtelecom.ru/.
