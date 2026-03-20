---
slug: /suntech/st_300k/configuration
id: st_300k-configuration
sidebar_label: Configuration
title: Suntech - ST 300K Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Suntech ST 300K y apuntarlo a Plaspy mediante comandos SMS y flujo de trabajo práctico
keywords:
  - configuración Suntech ST 300K
  - instalación Suntech ST 300K
  - configuración ST 300K Plaspy
  - configuración servidor rastreador GPS
  - guía instalación rastreador Suntech
  - configuración rastreo vehicular
  - configuración rastreo gestión de flotas
  - configuración SMS Suntech
  - configuración servidor GPRS
  - conectividad del rastreador a Plaspy
---

# Suntech - Configuración ST 300K

Esta página describe el contexto público de configuración para usar el rastreador Suntech ST 300K con Plaspy. Reúne los pasos y comandos prácticos de acceso público que puede usar para apuntar el dispositivo al servidor de Plaspy, verificar la conectividad y habilitar la visibilidad en la plataforma. Cuando los comandos del fabricante están disponibles en fuentes públicas, se incluyen aquí en forma legible.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST 300K puede configurarse mediante comandos SMS o con las herramientas de configuración del fabricante; esta página explica el flujo público de comandos SMS que aparece en la documentación del dispositivo y cómo eso se corresponde con la configuración del servidor Plaspy.

## Resumen de la configuración

El proceso de configuración prepara el rastreador para enviar datos de ubicación y eventos a Plaspy, y valida que el dispositivo sea visible en la plataforma. Para el ST 300K esto comúnmente incluye obtener el ID del dispositivo a partir del IMEI, configurar el APN del operador móvil y el servidor GPRS, ajustar intervalos de reporte y verificar las configuraciones.

- Derive el ID del dispositivo desde el IMEI y úselo en los comandos SMS o en la herramienta según sea necesario.
- Configure el APN del equipo y el servidor GPRS para apuntar a Plaspy, de modo que el rastreador pueda abrir una sesión de datos.
- Establezca el intervalo de reportes para que el dispositivo envíe actualizaciones con la cadencia deseada.
- Opcionalmente restablezca o preconfigure ajustes del equipo al preparar un rastreador para una instalación nueva.
- Verifique las configuraciones usando el comando de verificación o preset del rastreador y confirme que el dispositivo aparece en Plaspy.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on port 8888  
- automatic protocol detection in Plaspy so the platform recognizes the tracker protocol without manual selection

Estos valores son la información pública del endpoint de Plaspy que se usa al configurar el rastreador para enviar datos a Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos y detectará el protocolo del rastreador automáticamente.

## Requisitos habituales antes de configurar

- Un dispositivo ST 300K alimentado y con el IMEI disponible para derivar el ID del dispositivo. El ID del dispositivo corresponde a los últimos 9 dígitos del IMEI excluyendo el dígito de verificación final.
- Una tarjeta SIM provisionada para datos y SMS con las credenciales APN correctas del operador móvil.
- Capacidad para enviar mensajes SMS al dispositivo o acceso a las herramientas de configuración del fabricante que soporten el ST 300K.
- Cobertura de red en el lugar de instalación para que el dispositivo pueda registrarse en la red móvil y abrir una sesión GPRS.
- Acceso a la documentación de instalador o a las herramientas del proveedor correspondiente a la versión de firmware del dispositivo en uso.

## Cómo se conecta este rastreador a Plaspy

El ST 300K se configura para enviar datos de ubicación y eventos al endpoint y puerto compartido de Plaspy. Una vez que el APN y los ajustes de servidor están correctos, el rastreador abre una sesión GPRS y comienza a transmitir según las reglas de reporte configuradas, de modo que Plaspy pueda mostrar posición y estado.

- El dispositivo se apunta al dominio o IP de Plaspy y envía datos al puerto 8888.
- El rastreador puede usar transporte UDP o TCP según la configuración; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Los reportes de posición regulares y los eventos del dispositivo se reenvían a Plaspy para que el equipo sea visible en la plataforma.
- Verificar que el dispositivo aparece en Plaspy confirma que puede alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ajustar los intervalos de reporte controla la frecuencia con la que Plaspy recibe actualizaciones del dispositivo.

## Flujo de configuración típico

1. Acceda al método oficial de configuración Suntech para el ST 300K, normalmente la interfaz de comandos SMS o la herramienta de configuración del fabricante. Consulte la documentación de Suntech para detalles específicos por firmware.
2. Determine el ID del dispositivo a partir del IMEI. El ID del dispositivo son los últimos 9 dígitos del IMEI excluyendo el dígito final. Use ese ID en los comandos del equipo.
3. Ingrese la información del servidor Plaspy en la configuración del dispositivo usando d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888.
4. Elija el protocolo de transporte (UDP o TCP) si el dispositivo requiere selección; Plaspy soporta ambos y detectará el protocolo automáticamente.
5. Configure el APN del operador y cualquier usuario o contraseña de APN que requiera la SIM, para que el dispositivo pueda abrir una sesión GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporta a Plaspy revisando su aparición en la plataforma o usando el comando SMS de verificación del dispositivo.

## Comandos de configuración de ejemplo

La documentación del ST 300K proporciona plantillas de comandos SMS usadas para configurar el equipo. En estos ejemplos reemplace {{device_id}} por el ID del dispositivo derivado del IMEI (los últimos 9 dígitos excluyendo el dígito final del IMEI). Reemplace {{apn}}, {{apnu}} y {{apnp}} por el APN de su operador móvil, el usuario APN y la contraseña APN según corresponda.

Ejemplo que muestra cómo se deriva el ID del dispositivo:
- Si el IMEI es 123456789012345, el ID del dispositivo son los últimos 9 dígitos excluyendo el dígito final. Por ejemplo el IMEI 123456789012345 correspondería al ID 789012345 (formato de ejemplo).

1) Comando opcional de restauración de fábrica (usar solo cuando sea necesario o durante el aprovisionamiento inicial)
```
ST300CMD;{{device_id}};02;Reset
```

2) Establecer el APN del operador y configurar el servidor GPRS para apuntar a Plaspy
- El comando incluye marcadores para las credenciales del APN y agrega la IP y el puerto del servidor Plaspy.
```
ST300NTW;{{device_id}};02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
- Nota: la bandera numérica antes de {{apn}} (aquí 1) se utiliza en la plantilla del dispositivo donde puede estar presente un usuario o contraseña del operador. Mantenga los marcadores según lo provea su herramienta del proveedor.

3) Establecer el intervalo de reporte a 60 segundos (ejemplo para reportes periódicos de posición)
```
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

4) Verificar el preset actual o la configuración en el dispositivo
```
ST300CMD;{{device_id}};02;PresetA
```

Notas importantes sobre los marcadores:
- {{device_id}} son los últimos 9 dígitos del IMEI excluyendo el dígito de verificación final, como se indicó arriba.
- {{apn}} es la cadena APN del operador móvil.
- {{apnu}} es el usuario APN si el operador lo requiere.
- {{apnp}} es la contraseña APN si el operador la requiere.

Use su teléfono o una pasarela SMS capaz de enviar comandos SMS en texto plano al rastreador. La sintaxis exacta y las banderas requeridas pueden variar con el firmware; confirme siempre con la documentación de la versión de su dispositivo.

## Observaciones sobre la configuración

- Algunas revisiones de firmware y herramientas de proveedores presentan ligeras variaciones en la sintaxis de los comandos SMS. Confirme el formato exacto de comandos para la versión de firmware de su dispositivo antes de enviar comandos.
- El ST 300K soporta configuración vía SMS según la documentación pública; si dispone de una herramienta de configuración del proveedor úsela para aprovisionamiento masivo o cuando simplifique la gestión de equipos.
- Elija UDP o TCP según las necesidades de la instalación; Plaspy acepta ambos y detectará automáticamente el protocolo al recibir datos en el puerto 8888.
- Verifique cuidadosamente las credenciales APN porque un APN, usuario o contraseña incorrectos impedirán que el dispositivo abra una sesión GPRS hacia 54.85.159.138 en el puerto 8888.
- Al probar, utilice el comando de verificación del dispositivo y luego confirme que el equipo aparece en Plaspy usando el dominio o IP compartida del servidor.

## Por qué usar Plaspy con esta configuración

Apuntar el Suntech ST 300K a Plaspy ofrece a las organizaciones una forma consistente y centralizada de recopilar datos de posición y eventos de una amplia variedad de equipos usando el mismo endpoint de Plaspy. Emplear los ajustes de servidor compartidos simplifica el aprovisionamiento porque Plaspy escucha en un único puerto y detecta automáticamente el protocolo del rastreador, reduciendo la necesidad de entradas de servidor específicas por protocolo.

Si desea obtener más información sobre Plaspy y cómo funciona con rastreadores como el Suntech ST 300K visite https://www.plaspy.com. Para los comandos de configuración más actuales por dispositivo, notas de firmware e instrucciones del fabricante, verifique los detalles con Suntech en http://www.suntechint.com/ antes de aplicar ajustes en producción.
