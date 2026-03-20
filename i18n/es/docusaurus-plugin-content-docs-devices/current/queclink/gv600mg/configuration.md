---
slug: /queclink/gv600mg/configuration
id: gv600mg-configuration
sidebar_label: Configuration
title: QuecLink - GV600MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador QuecLink GV600MG a Plaspy con comandos SMS prácticos y ajustes de servidor
keywords:
  - Configuración QuecLink GV600MG
  - Instalación QuecLink GV600MG
  - GV600MG Plaspy
  - Configuración servidor GV600MG
  - Configuración rastreador QuecLink
  - Configuración seguimiento flota
  - Configuración rastreador GPS
  - Configuración seguimiento remolques
  - Seguimiento vehicular Plaspy
  - Comandos SMS GV600MG
---

# QuecLink - Configuración GV600MG

Esta página describe el contexto de configuración pública para usar el rastreador QuecLink GV600MG con Plaspy. Reúne los parámetros de servidor compartidos que Plaspy requiere y muestra un ejemplo práctico de configuración por SMS que puede servir como punto de partida para la integración. El GV600MG es un rastreador LTE robusto, habitual en remolques, cisternas y camiones de plataforma; la orientación aquí se centra en prepararlo para comunicarse con el endpoint de Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en conexiones entrantes. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo abajo reflejan ejemplos de configuración públicos; utilícelos como referencia y verifique siempre el comportamiento específico por firmware en la documentación de QuecLink y con su instalador.

## Resumen de la configuración

Este proceso prepara al GV600MG para enviar telemetría e informes de eventos a Plaspy, de modo que los activos sean visibles y gestionables en la plataforma. El ejemplo público usa comandos SMS para aplicar parámetros de red y servidor, aunque puede haber herramientas del fabricante o interfaces web disponibles según su despliegue y firmware.

- Configure el rastreador para apuntar al endpoint compartido de Plaspy para que pueda reportar ubicación y eventos.
- Establezca el APN y los parámetros GPRS del equipo para que pueda usar datos celulares en los reportes.
- Defina intervalos de reporte periódicos para que Plaspy reciba actualizaciones de posición con la cadencia deseada.
- Active el reporte de entradas o eventos (por ejemplo SOS) para que las alertas se transmitan a Plaspy.
- Valide la conectividad del dispositivo hacia Plaspy para confirmar que el rastreador aparece en la plataforma.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Asegúrese de que el GV600MG tenga energía: batería interna cargada o alimentación externa conectada para la configuración inicial.
- Una SIM celular válida con un plan de datos y los valores APN correctos (en los ejemplos se usan marcadores de posición).
- Acceso al número telefónico del dispositivo para configuración por SMS o acceso a la herramienta de configuración del fabricante recomendada por QuecLink.
- Conocimiento de la contraseña del dispositivo (los comandos de ejemplo usan la contraseña por defecto queclink).
- Acceso físico al dispositivo si es necesario probar entradas, cableado o sensores después de la configuración.
- Confirmación de la versión de firmware del equipo y de cualquier paso de configuración específico del proveedor consultando la documentación de QuecLink.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el GV600MG reporta datos de posición y eventos a Plaspy usando datos celulares; el ejemplo público muestra cómo escribir los ajustes de servidor GPRS para apuntar a Plaspy. Plaspy recibe estos mensajes en su endpoint compartido y determina automáticamente el protocolo entrante para decodificar y mostrar la telemetría.

- El rastreador se configura para reportar al endpoint del servidor de Plaspy d.plaspy.com en el puerto 8888.
- Se puede establecer la IP alternativa del servidor (54.85.159.138) si el método de configuración lo requiere.
- El dispositivo puede configurarse para usar transporte UDP o TCP para enviar reportes a Plaspy en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los reportes entrantes sin cambios de puerto por dispositivo.
- Eventos como SOS o cambios de entradas pueden habilitarse para enviar notificaciones inmediatas a Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de QuecLink para el GV600MG (comandos SMS, herramienta del fabricante o software del proveedor) según lo provea su instalador o QuecLink.
2. Ingrese el servidor de Plaspy por nombre de host d.plaspy.com o por la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto de reporte en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP como transporte si el equipo requiere selección explícita.
5. Configure el APN y otros parámetros de red para que el rastreador pueda usar datos celulares en los reportes.
6. Aplique o guarde la configuración y reinicie el dispositivo si el método lo solicita.
7. Valide que el dispositivo reporte a Plaspy verificando su visibilidad en la plataforma y confirmando los mensajes entrantes.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS públicos se proporcionan como una secuencia de configuración de muestra para el GV600MG. Estos comandos usan la contraseña de ejemplo queclink (es la contraseña por defecto en el ejemplo). Envíe cada línea como SMS al número del dispositivo en el orden mostrado cuando utilice configuración por SMS. Mantenga los marcadores de posición y reemplace con los valores de su operador donde sea necesario.

- Optional initial step — restore factory settings (use only if you intend to reset the device):
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC-0:
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN (replace placeholders with your carrier values):
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explicación: [apn] es el nombre del punto de acceso del operador, [apnu] es el usuario del APN y [apnp] es la contraseña del APN. Deje usuario o contraseña vacíos si el operador no los requiere.

- Set the GPRS server to point to Plaspy (this includes both the hostname and the IP address; port 8888 is used by Plaspy):
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Explicación: Este comando escribe el hostname de Plaspy d.plaspy.com y la IP del servidor 54.85.159.138 con puerto 8888 en la lista de servidores del dispositivo para que los reportes se envíen a Plaspy.

- Set update interval to 60 seconds (position reporting cadence):
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification for input 2:
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Nota: Estos comandos son ejemplos públicos. Si usa configuración por SMS, confirme que el dispositivo acepta comandos SMS y que la contraseña por defecto no ha sido cambiada, o reemplace la contraseña por defecto por la suya antes de enviar configuraciones sensibles.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros admitidos; verifique los comandos contra las notas de la versión de firmware del GV600MG.
- Los comandos de ejemplo usan configuración por SMS; QuecLink también ofrece herramientas del fabricante y software de proveedor que pueden proporcionar una interfaz gráfica o un flujo de configuración por lotes.
- Elija TCP o UDP según recomendaciones del proveedor o consideraciones de red; Plaspy admite ambos transportes y realizará la detección automática del protocolo.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles (puerto 8888) para simplificar la configuración en el equipo y el enrutamiento en el servidor.
- Confirme siempre los valores de APN, usuario y contraseña con su operador celular y pruebe la conectividad de datos antes de depender de los reportes en producción.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GV600MG con Plaspy da a las organizaciones una manera práctica de monitorear remolques y equipos pesados resistentes, aprovechando la conectividad celular y una larga autonomía en modo espera. Configurar el rastreador para que reporte al endpoint compartido de Plaspy proporciona visibilidad centralizada de ubicación, movimiento y eventos críticos, ayudando a los equipos de operaciones a gestionar los activos de forma más eficiente.

To learn more about Plaspy and how it integrates with telematics devices, visit https://www.plaspy.com. For the latest device-specific setup details, firmware updates, and command references from the manufacturer, verify information at the QuecLink website https://www.queclink.com/ because manufacturer specifications and configuration methods can change over time.
