---
slug: /teltonika/tat100/configuration
id: tat100-configuration
sidebar_label: Configuration
title: Teltonika - TAT100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía compacta de configuración del Teltonika TAT100 para compatibilidad con Plaspy y ajustes de servidor
keywords:
  - Configuración Teltonika TAT100
  - Instalación Teltonika TAT100
  - Configuración TAT100 Plaspy
  - Configuración servidor TAT100
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Configuración rastreador de activos Teltonika
  - Comandos configuración Teltonika
  - Ajustes servidor Plaspy
  - Rastreador de activos a batería
---

# Teltonika - Configuración TAT100

Esta página describe el contexto público de configuración para usar el Teltonika TAT100 con Plaspy. Explica los ajustes prácticos y visibles que debe aplicar para direccionar el TAT100 hacia Plaspy, de modo que el dispositivo pueda enviar ubicación y telemetría. El TAT100 es un rastreador compacto alimentado por batería con protección IP68 y conectividad 2G quad band; es compatible con Plaspy para mapeo, alertas e informes históricos.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la SKU de hardware, las herramientas del instalador y las variantes regionales del firmware. Cuando esté disponible, esta página muestra un ejemplo común del comando setparam usado en documentación pública de Teltonika y aclara los marcadores y el flujo práctico de integración con Plaspy.

## Resumen de configuración

Este proceso prepara al TAT100 para enviar periódicamente ubicación y telemetría a Plaspy, de modo que sus activos aparezcan en la plataforma. El foco está en configurar los parámetros de conectividad, validar que el rastreador alcance Plaspy y confirmar que el dispositivo reporte con éxito.

- Configure el APN y las credenciales de red para que el dispositivo tenga conectividad de datos celulares.
- Apunte el rastreador al endpoint del servidor Plaspy para que los reportes se entreguen a su cuenta.
- Seleccione el tipo de transporte si es necesario y confirme que el dispositivo use el puerto 8888 para Plaspy.
- Aplique los ajustes y reinicie el dispositivo cuando se requiera para que comience a reportar.
- Valide que el dispositivo aparezca y reporte en Plaspy para el mapeo y las alertas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe usar el puerto 8888 para cada rastreador compatible

## Requisitos típicos antes de comenzar

- Un TAT100 con batería cargada o el dispositivo con alimentación listo para configuración y pruebas
- Una tarjeta SIM activa con plan de datos y las credenciales APN correctas para el operador móvil
- Acceso al método oficial de configuración de Teltonika que vaya a utilizar, como comandos SMS o las herramientas del fabricante cuando estén disponibles
- Conocimiento de los valores APN, incluyendo nombre APN, usuario APN y contraseña APN de su proveedor móvil
- Cobertura celular confiable en la ubicación del dispositivo para que el rastreador pueda alcanzar Plaspy
- Confirmación previa de los ajustes objetivo de Plaspy d.plaspy.com y puerto 8888 antes de aplicar cambios

## Cómo se conecta este rastreador a Plaspy

El TAT100 envía ubicación GNSS periódica y telemetría del dispositivo a través de la red celular al endpoint y puerto de Plaspy. Plaspy procesa estos reportes y ofrece mapeo, procesamiento de eventos y reproducción histórica de rutas para visibilidad y monitoreo.

- El rastreador se configura para reportar al endpoint compartido d.plaspy.com en el puerto 8888
- El transporte puede ajustarse a UDP o TCP en el dispositivo si la configuración lo solicita
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los reportes se analizan y muestran sin seleccionar manualmente el protocolo en el servidor
- La ubicación y la telemetría básica son visibles en Plaspy una vez que el dispositivo alcanza el endpoint correctamente
- El reporte regular permite a Plaspy generar alertas, eventos de geocercas y rutas históricas para la gestión de activos

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial de Teltonika que usará para el TAT100, por ejemplo comandos SMS o cualquier herramienta Teltonika soportada.
2. Ingrese la información del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo requiera su método de configuración.
3. Configure el puerto a 8888, que es el puerto compartido utilizado por todos los dispositivos en Plaspy.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte durante la configuración.
5. Aplique o guarde la configuración en el rastreador usando el método del fabricante.
6. Reinicie el dispositivo si el firmware o el equipo lo requieren para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta para que el mapeo y las alertas estén activos.

## Ejemplo de comandos de configuración

Para configurar los parámetros básicos en su dispositivo Teltonika usando el ejemplo público del comando setparam, envíe el siguiente comando. Conserve los marcadores y reemplácelos con los datos APN de su operador.

- Reemplace [apn] con el nombre APN de su operador
- Reemplace [apnu] con el usuario APN si es requerido; si no, déjelo en blanco o como lo indique su operador
- Reemplace [apnp] con la contraseña APN si es requerida; si no, déjelo en blanco o como lo indique su operador

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Este ejemplo configura las credenciales APN y apunta el dispositivo a d.plaspy.com en el puerto 8888. Las claves numéricas de los parámetros reflejan el mapeo de parámetros usado en comandos Teltonika. Verifique el significado exacto de cada parámetro y cualquier asignación de modo de transporte en la documentación de Teltonika para su versión de firmware antes de aplicar los cambios.

## Notas de configuración

- Las variaciones de firmware y las SKUs de hardware pueden cambiar el mapeo de parámetros y los comandos soportados. Confirme los IDs de parámetros y su significado con la documentación de Teltonika para el firmware de su dispositivo.
- Elija UDP o TCP según la preferencia del instalador o el entorno de red. Si no está seguro, pruebe ambos transportes y verifique el reporte exitoso en Plaspy.
- La configuración por SMS es un método habitual para rastreadores a batería como el TAT100 cuando no hay acceso directo por USB o herramientas del fabricante.
- Mantenga los marcadores [apn], [apnu] y [apnp] listos y precisos para su operador móvil para evitar fallos de conectividad.
- Después de aplicar los ajustes, permita tiempo para que el dispositivo se conecte a la red y para que Plaspy detecte automáticamente el protocolo del rastreador y comience a recibir reportes.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika TAT100 con Plaspy ofrece a las organizaciones una vía simple para obtener visibilidad de activos no alimentados o sin cableado. La larga autonomía de la batería y la carcasa resistente del TAT100, junto con las herramientas de mapeo, alertas e informes de Plaspy, ayudan a los equipos a monitorear activos remotos, mantener la seguridad y optimizar la utilización sin necesidad de mantenimiento frecuente.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific configuration details, firmware behavior, and exact parameter mappings always verify current information on the manufacturer site https://www.teltonika-gps.com/ so your setup matches the device firmware and regional variants.
