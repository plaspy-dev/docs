---
slug: /cantrack/tk102/configuration
id: tk102-configuration
sidebar_label: Configuration
title: CanTrack - TK102 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CanTrack TK102 y su compatibilidad con Plaspy, con detalles de servidor y comandos SMS
keywords:
  - configuración CanTrack TK102
  - configuración inicial CanTrack TK102
  - configuración TK102 Plaspy
  - configuración servidor CanTrack
  - configuración SMS TK102
  - configuración GPRS TK102
  - configuración rastreador GPS CanTrack
  - ajustes APN TK102
  - configuración plataforma de rastreo TK102
  - integración rastreador GPS Plaspy
---

# CanTrack - Configuración del TK102

Esta página presenta el contexto público de configuración para utilizar el CanTrack TK102 con Plaspy. Reúne los pasos prácticos y ejemplos de comandos SMS de uso común que permiten apuntar los TK102 a un servidor de rastreo externo como Plaspy para que el dispositivo reporte ubicación y estado a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos desde el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK102 admite configuración por SMS y reporte vía GPRS; los comandos SMS de ejemplo que aparecen a continuación reflejan las instrucciones públicas habituales y conservan los marcadores de posición cuando son necesarios credenciales APN del operador.

## Resumen de la configuración

El objetivo de esta configuración es dejar preparado el TK102 para enviar sus datos de ubicación a la plataforma Plaspy mediante GPRS, conservando la posibilidad de verificación por SMS y una configuración básica del dispositivo. Los pasos siguientes son acciones prácticas para asegurar que el rastreador pueda comunicarse de forma fiable con Plaspy y ser visible en la plataforma.

- Configure el rastreador para usar el APN del operador y, si fuera necesario, el usuario y la contraseña del APN (conserve marcadores de posición).
- Establezca el endpoint del servidor GPRS a Plaspy para que el dispositivo envíe telemetría a la plataforma.
- Seleccione el protocolo de transporte (UDP o TCP) y configure el puerto que utiliza Plaspy.
- Valide los ajustes mediante comprobaciones por SMS o confirmando que el dispositivo reporta al servidor de Plaspy.
- Opcionalmente, restaure o verifique los valores de fábrica antes de una configuración nueva cuando sea necesario.

## Ajustes del servidor Plaspy

Utilice los siguientes parámetros públicos de servidor Plaspy al configurar el TK102. Estos son los valores que Plaspy exige para la conectividad:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP; el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos se pueden configurar usando UDP o TCP en el mismo puerto

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y confía en la detección automática del protocolo para el tráfico entrante de los rastreadores.

## Requisitos típicos antes de configurar

- Un TK102 con batería cargada y/o fuente de alimentación conectada.
- Una tarjeta SIM activa que soporte GSM y datos GPRS y que pueda enviar y recibir SMS.
- Acceso al número telefónico del dispositivo para enviar comandos SMS de configuración.
- El APN del operador y, opcionalmente, el usuario y la contraseña del APN (conserve marcadores como {{apn}}, {{apnu}} y {{apnp}} si se usan).
- Documentación del fabricante o el manual del dispositivo para referencia de comandos SMS y notas específicas del firmware.
- Opcional: una forma de monitorizar logs del servidor o la actividad del dispositivo en Plaspy para confirmar el reporte correcto.

## Cómo se conecta este rastreador a Plaspy

El TK102 puede enviar datos GPS y de estado a Plaspy estableciendo una conexión GPRS y publicando telemetría al endpoint y puerto compartidos de Plaspy. El SMS suele emplearse para configurar y verificar las opciones de red y servidor antes de validar el reporte vía GPRS.

- El TK102 se configura para reportar al dominio o IP y puerto del servidor Plaspy indicados arriba.
- La telemetría del rastreador se transmite por GPRS al servidor usando transporte UDP o TCP.
- Plaspy recibe conexiones entrantes en el puerto 8888 y determina automáticamente el protocolo del rastreador.
- Los comandos SMS pueden usarse para configurar APN, IP/dominio del servidor, puerto, zona horaria y para verificar los ajustes actuales.
- Una vez configurado, el dispositivo debería aparecer en Plaspy y comenzar a enviar actualizaciones de posición periódicas.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante, normalmente configuración por SMS o el manual de CanTrack, y confirme la contraseña del dispositivo y los comandos soportados.
2. Restaure los valores de fábrica o reinicie el dispositivo si parte de un estado desconocido (paso inicial opcional).
3. Introduzca el endpoint del servidor Plaspy configurando d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del equipo.
4. Defina el puerto 8888 para reporte GPRS y seleccione UDP o TCP si el equipo requiere elección explícita de transporte.
5. Configure el APN del operador y las credenciales APN opcionales para que el dispositivo pueda establecer datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige.
7. Valide que el dispositivo reporte a Plaspy revisando la actividad en la plataforma o monitorizando conexiones entrantes en el servidor configurado.

## Comandos de configuración de ejemplo

El TK102 suele admitir configuración por SMS. Los comandos de ejemplo públicos que aparecen a continuación se muestran en el orden en que típicamente se usan. La contraseña por defecto del dispositivo mostrada es la común en ejemplos públicos; confirme la contraseña de su equipo en el manual antes de usarla.

- Restaurar ajustes de fábrica (paso inicial opcional)
```text
#begin#123456#
```

- Establecer la zona horaria a UTC-0
```text
#timezone#123456#W#0#00#
```

- Establecer el APN del operador (reemplazar marcadores según corresponda)
```text
#apn#123456#{{apn}}#{{apnu}}#{{apnp}}#
```
Explicación: {{apn}} es el APN de su operador. {{apnu}} y {{apnp}} son marcadores opcionales para usuario y contraseña del APN; omítalos si su operador no los requiere.

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
#IP#123456#54.85.159.138#8888#
```

- Comprobar ajustes o probar respuesta TCP (comando de verificación)
```text
TCP
```

Notas sobre estos comandos:
- Envíe cada comando como un SMS separado al número del dispositivo.
- La contraseña de muestra en estos comandos públicos es 123456; sustitúyala por la contraseña configurada en su equipo si es distinta.
- El orden es importante al establecer una configuración fiable: reset de fábrica (si se utiliza), zona horaria, APN y luego IP y puerto del servidor.
- Use d.plaspy.com como alternativa a la IP si su equipo soporta nombres de dominio en lugar de direcciones IP crudas.

## Consideraciones de configuración

- Las revisiones de firmware y hardware del TK102 pueden admitir una sintaxis SMS ligeramente diferente; siempre confirme el formato exacto de comandos con el manual del dispositivo.
- La configuración por SMS es un método público de uso común para los TK102 y queda reflejada en los comandos de ejemplo anteriores.
- Elija UDP o TCP según las opciones de su firmware; Plaspy acepta cualquiera de los dos en el puerto 8888 y detecta el protocolo automáticamente.
- Conserve los marcadores de APN al documentar la configuración y reemplácelos con los datos del operador móvil antes de enviar los SMS.
- Si tiene dificultades, consulte la documentación oficial de CanTrack para comandos específicos del firmware y pasos de resolución de problemas adicionales.

## Por qué usar Plaspy con esta configuración

Usar el TK102 con Plaspy permite a las organizaciones centralizar la telemetría de los dispositivos en una sola plataforma, habilitando visibilidad en tiempo real, monitoreo de eventos y supervisión operativa. Configurar el TK102 para que reporte al endpoint compartido de Plaspy ofrece una forma sencilla de integrar estos dispositivos en un flujo de trabajo de rastreo de flotas o activos, aprovechando la detección automática de protocolos de Plaspy y su arquitectura de puerto único.

Learn more about Plaspy and how it supports common tracker configurations at https://www.plaspy.com. For the latest device specific setup methods, firmware notes, and manufacturer guidance for the CanTrack TK102, verify current information on the official CanTrack website https://www.cantrackgps.com/.
