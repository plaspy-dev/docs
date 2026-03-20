---
slug: /bofan/pt_30/configuration
id: pt_30-configuration
sidebar_label: Configuration
title: Bofan - PT-30 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Bofan PT-30 y ajustes del servidor Plaspy para integración rápida y reportes confiables
keywords:
  - Configuración Bofan PT 30
  - Instalación Bofan PT 30
  - Configuración servidor PT 30
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Configuración GPRS PT 30
  - Configuración plataforma GPS Bofan
  - Configuración rastreador personal
  - Configuración comandos SMS
  - Rastreo de vehículos y activos
---

# Bofan - Configuración PT-30

Esta página documenta el contexto público de configuración para usar el rastreador personal Bofan PT-30 con Plaspy. Resume los ajustes de servidor públicos de Plaspy que deberá aplicar al dispositivo y recopila los comandos SMS públicos y el flujo de trabajo usados para preparar el PT-30 y que reporte a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El PT-30 admite configuración por SMS y GPRS; esta guía incluye ejemplos de comandos SMS tomados de la documentación del equipo y explica cómo apuntar el rastreador a Plaspy para seguimiento en tiempo real.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el PT-30 para que se comunique de forma fiable con Plaspy y aparezca como un dispositivo activo en la plataforma. La configuración típica incluye verificar la preparación del equipo, establecer los detalles del APN del operador y dirigir el rastreador al endpoint y puerto del servidor Plaspy.

- Configure el APN del equipo y los parámetros GPRS para que el rastreador use datos móviles al reportar.
- Establezca el identificador del dispositivo que Plaspy utilizará, típicamente un ID de 14 dígitos derivado del IMEI.
- Apunte el PT-30 al endpoint y puerto del servidor Plaspy para que las actualizaciones lleguen a la plataforma.
- Ajuste el intervalo de reporte y las opciones operativas según las necesidades de monitoreo y la autonomía de la batería.
- Valide la conectividad comprobando que el rastreador envía paquetes a Plaspy y aparece en línea en la plataforma.

## Ajustes públicos del servidor Plaspy

Use los siguientes ajustes públicos del servidor al configurar el PT-30 para Plaspy. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888 for all devices in Plaspy
- Transport support either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

## Requisitos típicos antes de la configuración

- Un PT-30 cargado y funcionando con acceso a su método de configuración por SMS o la herramienta del fabricante.
- Una tarjeta SIM instalada con datos habilitados y el APN del operador, así como usuario y contraseña si son necesarios.
- El IMEI del dispositivo disponible para generar o verificar el identificador que usará Plaspy.
- Acceso a la lista de comandos SMS del fabricante o a la herramienta de configuración para enviar los comandos.
- Un plan de pruebas breve para confirmar que el dispositivo reporta a Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el PT-30 envía datos de ubicación y estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos paquetes, detecta automáticamente el protocolo del equipo y asocia las actualizaciones con el identificador del rastreador para que el dispositivo sea visible en la plataforma.

- El rastreador se configura para enviar paquetes GPRS al endpoint y puerto del servidor Plaspy.
- Plaspy asocia los datos entrantes con el identificador de 14 dígitos configurado y derivado del IMEI.
- La plataforma muestra las actualizaciones de ubicación y el estado operativo una vez que se reciben paquetes.
- Los intervalos de reporte y las opciones de eventos determinan la frecuencia con la que llegan los datos a Plaspy.
- La detección automática de protocolo de Plaspy reduce la necesidad de seleccionar manualmente un protocolo en el servidor.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el PT-30, o prepárese para enviar comandos SMS según las instrucciones del dispositivo.
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 según lo requiera el equipo.
3. Establezca el puerto 8888 que Plaspy utiliza para todos los dispositivos.
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP en el puerto 8888.
5. Configure el APN y cualquier usuario y contraseña de APN necesarios para la SIM instalada.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del rastreador lo exige.
7. Valide que el dispositivo reporte a Plaspy verificando actividad del equipo en la plataforma y confirmando la recepción de la primera actualización GPS.

## Comandos de configuración de ejemplo

El PT-30 admite configuración vía SMS. El fabricante proporciona los siguientes comandos SMS públicos. Los comandos van prefijados por la contraseña del dispositivo que se muestra aquí como el valor por defecto 000000. Reemplace los marcadores de posición según corresponda.

- Reinicio opcional a configuración de fábrica (usar solo cuando sea necesario)
```text
000000DFT
```

- Establecer un identificador de 14 dígitos usado con Plaspy. El identificador suele ser los últimos 14 dígitos del IMEI. Reemplace \<14-digit-id> por el valor real de 14 dígitos.
```text
000000GID<14-digit-id>
```
Ejemplo usando un id de 14 dígitos
```text
000000GID12345678901234
```

- Establecer el APN de su operador móvil. Mantenga los marcadores [apn], [apnu] y [apnp] según sea necesario. Reemplace o elimine los segmentos de usuario y contraseña si su operador no los requiere.
```text
000000APN[apn],[apnu],[apnp]
```
Explicación de los marcadores:
- [apn] marcador vacío para el nombre del APN del operador
- [apnu] marcador para el usuario del APN si es necesario
- [apnp] marcador para la contraseña del APN si es necesario

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto de esta guía
```text
000000SVR54.85.159.138,8888
```

- Establecer el intervalo de actualización a 1 minuto (60 segundos)
```text
000000GTI60
```

Notas sobre los comandos SMS:
- La contraseña por defecto del dispositivo en estos ejemplos es 000000. Si la contraseña del equipo fue cambiada, use la contraseña actual como prefijo.
- Mantenga el orden de los comandos cuando la documentación del equipo recomiende una secuencia, por ejemplo APN antes de las configuraciones de servidor.
- Use el comando de reinicio de fábrica solo al preparar un equipo nuevo o si es necesario para solucionar problemas.

## Observaciones de configuración

- El PT-30 admite configuración por SMS además de cualquier herramienta de software del fabricante; utilice el método que sea apropiado para su despliegue.
- Las variantes de firmware y regionales pueden cambiar la sintaxis o el comportamiento de los comandos. Confirme los comandos con la documentación más reciente de Bofan.
- Cuando el dispositivo requiera elegir entre UDP y TCP, seleccione el transporte que soporte su red y se ajuste a sus necesidades de monitoreo; Plaspy acepta cualquiera de los dos en el puerto 8888.
- Asegúrese de que la cadena APN y las credenciales opcionales del APN sean correctas para el operador de la SIM antes de establecer la dirección del servidor.
- Plaspy detectará automáticamente el protocolo del rastreador cuando el tráfico llegue a la dirección del servidor, lo que reduce la necesidad de configuraciones avanzadas de protocolo en el dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el Bofan PT-30 para que reporte a Plaspy ofrece una vía simple para obtener visibilidad en tiempo real del seguimiento de personas y activos. Usar el endpoint y puerto compartidos de Plaspy simplifica la configuración en múltiples dispositivos, y la detección automática de protocolos de Plaspy facilita la integración sin requerir cambios complejos en el servidor.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer instructions verify current details on the official Bofan website https://www.bofancloud.com/ as manufacturer specifications and setup methods can change over time.
