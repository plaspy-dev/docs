---
slug: /teltonika/fmb910/configuration
id: fmb910-configuration
sidebar_label: Configuration
title: Teltonika - FMB910 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el Teltonika FMB910 para enviar datos a Plaspy con ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FMB910
  - Configuración FMB910
  - Configuración Teltonika para Plaspy
  - Configuración de servidor FMB910
  - Configuración del rastreador GPS Teltonika
  - Configuración de software de rastreo FMB910
  - Integración de dispositivos Plaspy
  - Configuración de seguimiento de vehículos
  - Configuración de rastreador de flotas
  - Ajustes de servidor de rastreador GPS
---

# Teltonika - Configuración FMB910

Esta página documenta el contexto público de configuración para usar el Teltonika FMB910 con Plaspy. Se enfoca en los ajustes compartidos del servidor Plaspy, un ejemplo práctico de comando a partir de la documentación pública del equipo y un flujo operativo que puede seguir para preparar el FMB910 y enviar datos a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas o comandos SMS de Teltonika que utilice. Use esta guía como orientación práctica y confirme los detalles específicos del equipo con la documentación oficial de Teltonika.

## Visión general de la configuración

Preparar su Teltonika FMB910 para Plaspy significa configurar el dispositivo para que reporte al endpoint compartido de Plaspy y validar la conectividad para que el equipo aparezca en la plataforma. El ejemplo público de configuración incluido muestra cómo se especifican los valores de APN y el servidor de Plaspy en un comando típico de parámetros de Teltonika.

- Configure el APN del dispositivo y las credenciales del APN si su operador las requiere.
- Apunte el rastreador a Plaspy usando el dominio o la IP compartida y el puerto estándar de Plaspy.
- Elija el método de transporte (UDP o TCP) si el dispositivo solicita seleccionar transporte.
- Guarde y aplique la configuración para que el dispositivo comience a reportar a Plaspy.
- Valide que el dispositivo reporte ubicaciones y eventos a Plaspy y que aparezca en su cuenta.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse con UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

Use ya sea el dominio d.plaspy.com o la dirección IP 54.85.159.138 al ingresar los ajustes del servidor en la herramienta de configuración del dispositivo. El puerto es 8888 para todos los dispositivos en Plaspy.

## Requisitos típicos antes de la configuración

- Asegúrese de que el FMB910 tenga alimentación y sea accesible para su configuración.
- Instale y active una tarjeta SIM con un APN de datos funcional cuando sea necesario para conectividad celular 2G.
- Tenga listos los parámetros del APN: APN, nombre de usuario del APN y contraseña del APN si su operador los exige.
- Acceso al método de configuración oficial de Teltonika, como comandos SMS por lotes, una herramienta de configuración de Teltonika o herramientas de gestión remota compatibles con el firmware del dispositivo.
- Un plan para probar la conectividad después de la configuración y confirmar que el dispositivo reporta a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El FMB910 envía datos de ubicación, eventos y sensores al endpoint y puerto compartido de Plaspy para que Plaspy pueda ingerir los mensajes, mostrar posiciones en vivo y activar flujos de trabajo en la plataforma. La configuración indica al dispositivo que abra una sesión TCP o UDP con el servidor de Plaspy y luego transmita los payloads de posición y eventos.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o 54.85.159.138.
- Todos los dispositivos usan el puerto 8888 en Plaspy, por lo que el mismo puerto aplica independientemente del modelo.
- La selección de transporte puede ser UDP o TCP según la capacidad del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes.
- Una vez recibidos los datos, Plaspy ofrece vistas en mapa en tiempo real, alertas e informes históricos.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Teltonika o al software apropiado para su firmware y despliegue del FMB910 (comandos SMS por lotes, herramientas de configuración de Teltonika o gestión remota).
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto 8888 para la conexión con Plaspy.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el método de transporte.
5. Proporcione los ajustes del APN y las credenciales del APN que exija el operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si su firmware o equipo lo requiere.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la interfaz de Plaspy.

Si usa comandos SMS de Teltonika para la configuración, el comando de ejemplo que sigue muestra una actualización típica por lotes de parámetros que combina APN y ajustes del servidor Plaspy.

## Comandos de configuración de ejemplo

El siguiente comando es un ejemplo público de comando por lotes de parámetros usado para establecer valores de APN y los ajustes del servidor Plaspy en dispositivos Teltonika. Conserve y reemplace los marcadores de posición de APN con los valores proporcionados por su operador móvil.

- Reemplace [apn] con el valor del APN de su tarjeta SIM.
- Reemplace [apnu] con el nombre de usuario del APN si es necesario, de lo contrario déjelo en blanco.
- Reemplace [apnp] con la contraseña del APN si es necesario, de lo contrario déjelo en blanco.

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre este comando de ejemplo:
- Este formato se usa comúnmente como comando SMS por lotes o mediante herramientas de configuración de Teltonika para establecer múltiples parámetros a la vez.
- Los marcadores de posición [apn], [apnu] y [apnp] deben ser reemplazados por los valores de su operador.
- El segmento de parámetros que establece el servidor utiliza d.plaspy.com y el puerto 8888, tal como lo requiere Plaspy.
- Para el significado de identificadores de parámetros específicos como 2006, consulte la referencia de parámetros oficial de Teltonika para su versión de firmware antes de cambiar valores.

## Observaciones de configuración

- Las versiones de firmware y la numeración de parámetros del dispositivo pueden diferir; siempre verifique la referencia de parámetros de Teltonika para su firmware.
- Elegir UDP o TCP puede afectar cómo se almacenan en buffer y reintentan los datos; seleccione el transporte que se ajuste a su red y necesidades de monitoreo.
- Los campos de APN son obligatorios para datos celulares en redes 2G; confirme los detalles del APN con su operador antes de configurar el rastreador.
- El comando de ejemplo muestra un enfoque público de actualización por lotes; otros métodos de configuración como herramientas de configuración o FOTA pueden ser preferibles para despliegues masivos.
- Plaspy utiliza un único puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo entrante.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMB910 con Plaspy ofrece a flotas pequeñas y medianas una vía sencilla y costo eficaz para seguimiento en tiempo real, alertas de eventos y visibilidad operativa. Apuntar el FMB910 al endpoint compartido de Plaspy simplifica la integración para que los flujos de posición y sensores lleguen directamente a los paneles y flujos de trabajo de Plaspy.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and parameter details verify current information on the Teltonika site https://www.teltonika-gps.com/.
