---
slug: /xexun/x03/configuration
id: x03-configuration
sidebar_label: Configuration
title: Xexun - X03 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Xexun X03 y reportarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - configuración Xexun X03
  - instalación Xexun X03
  - configuración X03 Plaspy
  - configuración rastreador GPS Xexun
  - configuración servidor X03
  - configurar APN Xexun X03
  - comandos SMS Xexun X03
  - configuración rastreador Plaspy
  - rastreo de vehículos X03
  - gestión de flotas X03
---

# Xexun - Configuración X03

Esta página documenta el contexto público de configuración para usar el rastreador GPS/BeiDou Xexun X03 con Plaspy. Explica los ajustes compartidos del servidor Plaspy que debe aplicar, los requisitos habituales antes de la integración y los comandos SMS públicos del X03 que se usan habitualmente para apuntar el equipo a los servidores de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor. El X03 admite la configuración por SMS como parte de su conjunto público de comandos; los ejemplos a continuación muestran cómo usar esos SMS para establecer valores de APN y el endpoint del servidor Plaspy.

## Resumen de la configuración

El objetivo al configurar el Xexun X03 para Plaspy es preparar el dispositivo para que se conecte y reporte de forma fiable la ubicación y eventos a la plataforma en la nube de Plaspy. La configuración garantiza que el dispositivo pueda autenticarse en la red móvil, establecer GPRS hacia el endpoint de Plaspy y enviar actualizaciones periódicas de posición que se muestren en los paneles de Plaspy.

- Configure el APN y el modo de red del dispositivo para que pueda usar datos móviles o aceptar configuración por SMS.
- Apunte el dispositivo al endpoint compartido de Plaspy para que la telemetría llegue a la plataforma.
- Ajuste el intervalo de reporte y el modo GPRS según sus necesidades de monitoreo y el perfil de batería.
- Verifique que el dispositivo reporte correctamente a Plaspy y aparezca en la plataforma.
- Use la sintaxis de comandos SMS publicada o la herramienta del fabricante, cuando aplique, para aplicar los ajustes.

## Configuración del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol when the device reports to the server

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo correcto del rastreador, por lo que una vez que el X03 está apuntando al endpoint de Plaspy la plataforma interpretará los mensajes entrantes.

## Requisitos habituales antes de la configuración

- Un dispositivo Xexun X03 cargado y accesible o conectado para realizar la configuración.
- Una SIM móvil activa con plan de datos y el APN del operador; tenga a mano las credenciales del APN si son necesarias.
- El número de teléfono del dispositivo o acceso físico para enviar comandos SMS al X03 y configurarlo.
- Acceso a las instrucciones oficiales de Xexun o a las herramientas de configuración correspondientes a su revisión de firmware.
- Conocimiento de la contraseña por defecto del dispositivo si los comandos SMS la requieren (los ejemplos públicos que se muestran usan 123456 como contraseña de ejemplo).
- Una forma de monitorear las conexiones entrantes en Plaspy para validar el reporte (acceso a la plataforma Plaspy para verificación).

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el X03 envía datos de posición y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos reportes, detecta automáticamente el protocolo del rastreador y hace visibles la ubicación y las alertas del dispositivo en la plataforma.

- El X03 se configura para reportar a d.plaspy.com (o a la IP del servidor) en el puerto 8888.
- El dispositivo puede usar GPRS para abrir una sesión TCP o UDP hacia Plaspy y subir telemetría periódica.
- Mensajes de posición, eventos de geovalla, alertas de manipulación y estados periódicos se reenvían a Plaspy para visualización y notificaciones.
- Plaspy correlaciona los reportes entrantes con la identidad del dispositivo y lo muestra en mapas, líneas de tiempo e informes.
- Una vez que el reporte funciona, la detección automática de protocolos de Plaspy se encarga del parseo sin que sea necesario seleccionar protocolos por dispositivo en la plataforma.

## Flujo común de configuración

1. Acceda al método oficial de configuración Xexun para su dispositivo y firmware (comandos SMS o la herramienta del fabricante).
2. Configure los parámetros APN de la red móvil en el X03 usando el APN del operador y, si aplica, usuario/contraseña.
3. Ingrese el endpoint del servidor Plaspy especificando d.plaspy.com o la IP 54.85.159.138 y establezca el puerto 8888.
4. Seleccione UDP o TCP en el dispositivo si este requiere una selección explícita de transporte.
5. Ajuste parámetros de reporte como el intervalo de actualizaciones periódicas y el modo GPRS según su perfil de monitoreo.
6. Aplique o guarde la configuración y reinicie el dispositivo si lo requieren los comandos o la herramienta.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma; confirme actualizaciones de ubicación y el envío de eventos.

## Ejemplos de comandos de configuración

El Xexun X03 puede configurarse enviando comandos SMS al número del dispositivo. Los siguientes comandos SMS públicos se muestran en orden y usan la contraseña por defecto de ejemplo 123456. Reemplace los marcadores según corresponda.

- Restauración opcional a valores de fábrica (usar solo cuando sea necesario):
```text
begin123456
```

- Configurar el APN del operador (reemplace [apn] por el APN de su red):
```text
apn123456 [apn]
```

- Establecer el usuario del APN si es necesario (reemplace [apnu] por el usuario del APN):
```text
apnuser123456 [apnu]
```

- Establecer la contraseña del APN si es necesaria (reemplace [apnp] por la contraseña del APN):
```text
apnpasswd123456 [apnp]
```

- Establecer el servidor GPRS hacia Plaspy usando la IP del servidor y el puerto (según el firmware, el dispositivo también puede aceptar el dominio d.plaspy.com en lugar de la IP):
```text
adminip123456 54.85.159.138 8888
```

- Habilitar el modo GPRS (comando público para activar reportes GPRS según el dispositivo):
```text
gprsmode123456
```

- Configurar el intervalo de actualización a 60 segundos (ejemplo de comando de intervalo):
```text
t060s***n123456
```

Notas sobre marcadores y contraseña:
- [apn] es la cadena APN del operador móvil necesaria para datos GPRS.
- [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN si su operador los requiere.
- Los comandos de ejemplo usan 123456 como contraseña del dispositivo en la sintaxis porque así aparece en ejemplos públicos. Cambie la contraseña del dispositivo tras la configuración inicial si el equipo lo permite.

## Notas de configuración

- Las variantes de firmware y región pueden cambiar la sintaxis de los comandos o los parámetros aceptados; confirme siempre los comandos con la documentación oficial de Xexun para su firmware.
- Si el firmware del dispositivo acepta nombres de dominio para la configuración del servidor, puede usar d.plaspy.com en lugar de la IP; ambos son endpoints públicos de Plaspy.
- Elija UDP o TCP según el soporte del dispositivo y la fiabilidad de la red; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- La configuración por SMS es un método público común para el X03, pero es posible que existan herramientas del fabricante o métodos OTA en algunas versiones de firmware.
- Después de la configuración inicial, verifique la conectividad confirmando que el dispositivo aparece y reporta en Plaspy; compruebe las actualizaciones periódicas y las notificaciones de eventos.

## Por qué usar Plaspy con esta configuración

Usar el Xexun X03 con Plaspy ofrece una vía práctica para integrar datos de posicionamiento híbrido y de larga espera en un flujo centralizado de gestión de flotas y activos. La combinación del reporte del X03 con el endpoint unificado y la detección de protocolos de Plaspy facilita llevar la telemetría de ubicación, geovallas y eventos a una vista operativa única para monitoreo, alertas y reproducción histórica.

Para más información sobre cómo Plaspy trabaja con rastreadores como el X03 visite https://www.plaspy.com. Verifique siempre los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante en https://www.xexun.com/ ya que las instrucciones del fabricante y el firmware pueden cambiar con el tiempo.
