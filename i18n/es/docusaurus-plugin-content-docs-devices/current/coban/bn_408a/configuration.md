---
slug: /coban/bn_408a/configuration
id: bn_408a-configuration
sidebar_label: Configuration
title: Coban - BN-408A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Coban BN-408A con pasos prácticos para conectar el rastreador a los servidores de Plaspy
keywords:
  - Configuración Coban BN-408A
  - Configuración BN-408A
  - Rastreador GPS Coban Plaspy
  - Configuración de rastreador Plaspy
  - Configuración SMS BN-408A
  - Ajustes APN BN-408A
  - Ajustes de servidor rastreador Coban
  - Configuración TCP UDP BN-408A
  - Integración rastreador Coban
  - Configuración GPRS BN-408A
---

# Coban - BN-408A Configuración

Esta página documenta el contexto de configuración pública para utilizar el rastreador Coban BN-408A con Plaspy. Reúne la información práctica y de acceso público que necesita para apuntar el dispositivo a los servidores de Plaspy, verificar la conectividad y habilitar el reporte básico. Utilice esta guía junto con los manuales del dispositivo y la documentación del proveedor para los pasos exactos del fabricante.

Plaspy emplea configuraciones de servidor compartidas para dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la revisión del firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor; sin embargo, los comandos SMS y GPRS públicos que se muestran a continuación muestran los campos comunes que deberá configurar para integrar un BN-408A con Plaspy.

## Resumen de configuración

El objetivo de la configuración es preparar el BN-408A para que se comunique de forma fiable con Plaspy, de modo que el dispositivo aparezca en su cuenta de Plaspy y envíe actualizaciones de ubicación, alarmas y telemetría. Las acciones habituales incluyen configurar el APN y el servidor GPRS, elegir el transporte y confirmar que el dispositivo reporta correctamente.

- Prepare los ajustes de APN y servidor GPRS para que el rastreador pueda establecer una sesión de datos con Plaspy.
- Configure el modo de transporte (TCP o UDP) y confirme que el punto final y el puerto del servidor coinciden con los valores de Plaspy.
- Utilice SMS o los métodos de configuración del fabricante para establecer la contraseña del dispositivo y los parámetros del servidor en campo.
- Verifique la conectividad y el envío de reportes para que el BN-408A sea visible en los paneles y flujos de alerta de Plaspy.
- Aplique cualquier opción específica de telemetría o protocolo del dispositivo (por ejemplo modo de protocolo) para mejorar el reporte de alarmas o sensores.

## Configuración de servidores Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte compatible UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma intentará identificar automáticamente el protocolo apropiado para el rastreador.

## Requisitos previos habituales

- Un BN-408A con batería cargada y con alimentación habilitada, accesible para configuración por SMS o físicamente.
- Una tarjeta SIM funcional con plan de datos y las credenciales APN correctas del operador móvil.
- Acceso al método de configuración provisto por el vendedor, como comandos SMS o software del proveedor.
- Conocimiento de la contraseña predeterminada del dispositivo para configurar (la contraseña pública mostrada abajo es 123456).
- Capacidad para enviar y recibir SMS desde el teléfono o servicio que use para la configuración.
- Familiaridad básica para elegir TCP o UDP según su entorno de conectividad y reglas de firewall.

## Cómo se conecta este rastreador a Plaspy

El BN-408A se configura para enviar GPS y estado del dispositivo al punto final compartido del servidor de Plaspy. Plaspy ingiere los paquetes entrantes TCP o UDP (o informes SMS) y los asocia con el registro de dispositivo correspondiente en la plataforma.

- El rastreador abre una sesión de datos GPRS usando el APN configurado y posteriormente se conecta a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte se puede configurar como TCP o UDP; el dispositivo también puede enviar informes de respaldo vía SMS si está configurado.
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda decodificar mensajes sin cambios de puerto por dispositivo.
- Eventos del dispositivo como alarma por manipulación, movimiento y estado de batería se envían a Plaspy para monitoreo en tiempo real.
- Una configuración y reporte exitosos permiten que el BN-408A aparezca en los paneles de Plaspy para seguimiento en vivo y reproducción histórica.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o su software, o prepárese para enviar comandos SMS conforme a las instrucciones del BN-408A.
2. Ingrese el dominio o la IP del servidor de Plaspy en los ajustes del dispositivo como d.plaspy.com o 54.85.159.138.
3. Establezca el puerto en 8888 en la configuración del servidor o GPRS del dispositivo.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Aplique o guarde la configuración y, si es necesario, envíe los comandos SMS para confirmar los ajustes.
6. Reinicie el dispositivo si el procedimiento del fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y la telemetría reciente en la plataforma.

Si usa configuración por SMS, envíe los comandos en el orden recomendado por el fabricante para asegurar que los valores de APN y servidor sean aceptados antes de habilitar el reporte por datos.

## Ejemplos de comandos de configuración

El BN-408A admite comandos de configuración vía SMS. La contraseña predeterminada del dispositivo indicada en documentación pública es 123456. Envíe los siguientes comandos por SMS al número del dispositivo utilizando esa contraseña. Conserve y reemplace los marcadores de posición como [apn], [apnu] y [apnp] con las credenciales de su operador.

- Reset inicial opcional de fábrica (solo si requiere un restablecimiento completo):
```sms
begin123456
```

- Ajuste la zona horaria a UTC+0:
```sms
time zone123456 0
```

- Configure el APN del operador (reemplace [apn] con el APN de su operador móvil):
```sms
apn123456 [apn]
```

- Configure el nombre de usuario y la contraseña del APN (reemplace [apnu] y [apnp] con los valores del operador; algunos operadores permiten campos vacíos):
```sms
up123456 [apnu] [apnp]
```

- Configure el servidor GPRS hacia Plaspy usando la IP pública y el puerto:
```sms
adminip123456 54.85.159.138 8888
```

- Establezca un intervalo de actualización de ejemplo (patrón tomado de comandos públicos; modifique según el manual del dispositivo):
```sms
fix060s060s***n123456
```

- Cambie el modo GPRS para usar UDP o habilitar el modo GPRS (se muestran dos variantes públicas):
```sms
gprs123456,1,1
```
o
```sms
gprs123456
```

- Consulte los ajustes actuales:
```sms
check123456
```

- Habilite el modo de protocolo para mejorar el reporte de sensores (el ejemplo público usa id de protocolo 18):
```sms
protocol123456 18
```

Notas sobre marcadores de posición:
- [apn] es la cadena APN de su operador móvil.
- [apnu] es el nombre de usuario del APN si lo requiere el operador.
- [apnp] es la contraseña del APN si lo requiere el operador.

Mantenga el orden de los comandos SMS conforme a la guía del fabricante. El comando de reset es opcional y solo debe usarse cuando pretenda restaurar los valores de fábrica.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o las funciones disponibles; siempre verifique los comandos con el manual del dispositivo.
- El BN-408A soporta configuración por SMS en campo, lo cual es útil cuando no es posible configurar datos de forma remota.
- Elija UDP o TCP según su entorno de red y el comportamiento de firewall o NAT; ambos transportes son compatibles y Plaspy acepta cualquiera en el puerto 8888.
- Confirme siempre los valores de APN con el operador móvil antes de establecerlos en el dispositivo.
- Cambie la contraseña del dispositivo desde la predeterminada después de la configuración si el flujo del fabricante lo permite para mejorar la seguridad.

## Por qué usar Plaspy con esta configuración

Usar el BN-408A con Plaspy ofrece visibilidad sencilla de activos para organizaciones que requieren seguimiento a largo plazo con bajo mantenimiento y monitoreo antirrobo. Configurar el rastreador para apuntar al punto final compartido de Plaspy permite ingerir datos de ubicación, alarmas y telemetría en los paneles de Plaspy para seguimiento en vivo, alertas y reproducción histórica.

Learn more about Plaspy on the main website https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer details on the official Coban website https://www.coban.net/ as vendor documentation and command syntax can change over time.
