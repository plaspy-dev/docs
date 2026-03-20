---
slug: /topshine/mt01w_4g/configuration
id: mt01w_4g-configuration
sidebar_label: Configuration
title: TopShine - MT01W-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador TopShine MT01W 4G para integración con Plaspy
keywords:
  - Configuración TopShine MT01W 4G
  - Configuración TopShine MT01W
  - Configuración MT01W 4G Plaspy
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Ajustes servidor Plaspy
  - Comandos SMS rastreador GPS
  - Configuración rastreo de flotas
  - Configuración servidor MT01W 4G
---

# TopShine - MT01W-4G Configuración

Esta página describe el contexto público de configuración para usar el rastreador TopShine MT01W-4G con la plataforma Plaspy. Incluye los ajustes prácticos del servidor y los comandos SMS públicos que el fabricante proporciona y que normalmente se usan para preparar el equipo para enviar datos a Plaspy. El MT01W-4G es un rastreador compacto compatible con video, con 4G CAT1, hotspot WiFi integrado y funciones de telemetría que lo hacen adecuado para gestión de flotas, monitoreo de video en vehículos y aplicaciones de seguridad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo empieza a reportar a la plataforma. Los pasos de configuración en el equipo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MT01W-4G admite configuración por SMS con los comandos públicos que se muestran a continuación; cuando corresponde, estos comandos usan la contraseña por defecto 000000.

## Resumen de la configuración

Este proceso prepara el MT01W-4G para comunicarse de forma fiable con Plaspy y para aparecer en la plataforma para seguimiento en tiempo real y envío de eventos. El objetivo es aplicar el APN y los ajustes de servidor correctos, seleccionar el transporte deseado y confirmar que el equipo esté reportando activamente.

- Configurar el APN de la red y, si aplica, las credenciales APN para que el rastreador use datos móviles.
- Apuntar el rastreador al endpoint del servidor de Plaspy y confirmar que el dominio o la IP y el puerto coinciden con los valores de Plaspy.
- Seleccionar el protocolo de transporte si el equipo requiere elegir entre UDP o TCP.
- Aplicar un intervalo de reporte adecuado y poner el dispositivo en modo de datos GPRS para reporte en vivo.
- Validar la conectividad comprobando el IMEI del equipo y verificando que el dispositivo aparece y reporta en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device requirements  
- Plaspy automatically detects the tracker protocol once the device reports to the platform

Todos los dispositivos en Plaspy usan el puerto 8888 y la plataforma detectará el protocolo apropiado automáticamente.

## Requisitos habituales antes de configurar

- Una unidad MT01W-4G con batería cargada y alimentada, con el cableado accesible y las conexiones de cámara o sensores realizadas según corresponda.
- Una SIM celular activa con capacidad de datos y SMS para configurar el APN del operador y permitir el reporte GPRS.
- Conocimiento del APN del operador y, si corresponde, del nombre de usuario y contraseña APN para la SIM que va a usar.
- Acceso al número IMEI del dispositivo para identificación y para algunos comandos SMS de configuración.
- Capacidad para enviar comandos SMS al equipo o acceso a la herramienta de configuración del fabricante si no se usa SMS.
- Acceso administrativo a su cuenta Plaspy para confirmar que el dispositivo aparece y reporta tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está correctamente configurado, el MT01W-4G enviará datos de ubicación, eventos y telemetría al endpoint y puerto del servidor Plaspy. Plaspy procesa los reportes del equipo y lo asocia a su cuenta para que usted pueda monitorear posiciones en tiempo real, alarmas y, cuando estén disponibles, las fuentes de video asociadas.

- El rastreador se configura para reportar al endpoint compartido de Plaspy y al puerto 8888.  
- El dispositivo envía reportes periódicos de posición y eventos por el transporte seleccionado (UDP o TCP).  
- Plaspy detecta automáticamente el protocolo del equipo y comienza a procesar los reportes entrantes.  
- La telemetría y los eventos de alarma se muestran en su panel de Plaspy para monitoreo y alertas.  
- Las transmisiones de video desde las cámaras WiFi del rastreador pueden asociarse al dispositivo en Plaspy para revisión sincronizada.

## Flujo de configuración típico

1. Acceda al método de configuración oficial TopShine para su unidad, normalmente mediante comandos SMS o la herramienta del proveedor, y confirme la contraseña por defecto del dispositivo si es necesario.  
2. Introduzca el endpoint de Plaspy usando d.plaspy.com o la IP 54.85.159.138 según lo requiera la interfaz del equipo.  
3. Establezca el puerto en 8888 que Plaspy utiliza para todos los dispositivos.  
4. Elija UDP o TCP como transporte si el rastreador requiere una selección.  
5. Configure el APN de la SIM y las credenciales APN necesarias para que el rastreador se conecte por datos móviles.  
6. Aplique o guarde la configuración y cambie el dispositivo al modo de datos GPRS si es necesario.  
7. Reinicie o haga un ciclo de energía en el equipo si el fabricante recomienda un reinicio para aplicar los ajustes.  
8. Valide que el equipo reporta a Plaspy y aparece en su consola de la plataforma usando el IMEI del dispositivo.

## Ejemplos de comandos de configuración

El MT01W-4G admite configuración vía SMS. Los comandos de ejemplo a continuación usan la contraseña por defecto 000000. Conserve los marcadores de posición cuando envíe los comandos y reemplace con sus valores reales.

- Nota sobre la contraseña: estos ejemplos usan la contraseña por defecto del dispositivo 000000. Use la contraseña de su equipo si la ha cambiado.

- Comando de restauración de fábrica (paso inicial opcional):
```text
W000000,990,099###
```

- Establecer el ID del dispositivo (el equipo usa el IMEI para identificación; el comando requiere un ID de 14 dígitos derivado del IMEI):
```text
W000000,010,<14_digit_device_id>
```
Reemplace \<14_digit_device_id> con los primeros 14 dígitos derivados del IMEI del dispositivo según lo requiera el rastreador. Plaspy identifica los equipos por el IMEI.

- Configurar el APN del operador con marcadores opcionales de usuario y contraseña:
```text
W000000,011,[apn],[apnu],[apnp]
```
Si no se requieren nombre de usuario o contraseña para el APN, envíe solo el APN usando el mismo patrón de comando y omita los campos opcionales. Reemplace [apn], [apnu] y [apnp] por los valores de su operador.

- Establecer el servidor GPRS a la IP pública de Plaspy y el puerto:
```text
W000000,012,54.85.159.138,8888
```
Este comando configura el rastreador para reportar a Plaspy usando la IP y el puerto indicados. Si su equipo admite nombre de dominio en lugar de IP, puede usar d.plaspy.com donde el firmware lo soporte.

- Cambiar el equipo al modo de datos GPRS:
```text
W000000,013,2
```

- Establecer el intervalo de actualización de posición (valor de ejemplo 6):
```text
W000000,014,6
```
Ajuste el número del intervalo según sus necesidades de frecuencia de reporte.

- Verificar o solicitar el IMEI del equipo:
```text
W000000,601
```

Envíe cada SMS desde un número autorizado según lo indique el fabricante y reemplace los marcadores de posición por sus valores reales. Mantenga el orden de los comandos cuando realice el aprovisionamiento inicial donde se indique.

## Notas sobre la configuración

- La configuración por SMS está documentada por el fabricante y los comandos anteriores son los ejemplos públicos provistos para esta serie de dispositivos. Use SMS o las herramientas del proveedor según su práctica de instalación.  
- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros soportados. Confirme siempre los comandos según la revisión de firmware del equipo.  
- Elija UDP o TCP según las opciones del equipo y sus preferencias de confiabilidad de red. Plaspy aceptará cualquiera de los dos y detectará el protocolo automáticamente.  
- Plaspy usa el puerto 8888 para todos los dispositivos, por lo que es crítico que el rastreador apunte a ese puerto para garantizar la conectividad.  
- Mantenga las credenciales APN y las contraseñas del dispositivo seguras y considere cambiar las contraseñas por defecto después del aprovisionamiento cuando el equipo lo permita.

## Por qué usar Plaspy con esta configuración

Emparejar el TopShine MT01W-4G con Plaspy brinda a flotas y operadores de seguridad visibilidad centralizada de ubicación, eventos y video sincronizado para mejorar la supervisión operativa y la verificación de incidentes. Usando los ajustes compartidos de servidor de Plaspy y los comandos de configuración publicados, usted puede aprovisionar equipos de forma consistente en toda la flota y confiar en que Plaspy detectará automáticamente el protocolo del rastreador cuando el dispositivo empiece a reportar.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para instrucciones específicas del dispositivo más recientes, notas de firmware y orientación del fabricante, verifique los detalles de configuración en el sitio de TopShine https://www.gztopshine.com/ ya que los procedimientos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
