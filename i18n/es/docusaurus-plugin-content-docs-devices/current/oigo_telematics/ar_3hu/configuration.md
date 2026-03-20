---
slug: /oigo_telematics/ar_3hu/configuration
id: ar_3hu-configuration
sidebar_label: Configuration
title: Oigo Telematics - AR-3HU Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Oigo AR-3HU a Plaspy con ejemplos de servidor y comandos
keywords:
  - Configuración Oigo Telematics AR-3HU
  - Configurar AR-3HU para Plaspy
  - Configuración servidor Oigo AR-3HU
  - Configuración rastreador AR-3HU
  - Configuración rastreador Plaspy
  - Integración plataforma GPS
  - Rastreo vehicular AR-3HU
  - Comandos AT AR-3HU
  - Configuración APN AR-3HU
  - Configuración seguimiento de flotas
---

# Oigo Telematics - Configuración AR-3HU

Esta página reúne la información pública necesaria para configurar el Oigo Telematics AR-3HU con Plaspy. Incluye los ajustes de servidor prácticos y un conjunto de comandos AT de ejemplo extraídos de documentación pública para ayudar a instaladores e integradores a preparar el equipo para comunicarse con Plaspy. Utilice esta guía junto con la documentación oficial del fabricante para detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor. Los comandos de ejemplo que encontrará aquí reflejan un estilo común de configuración por comandos AT e incluyen marcadores como el APN que usted debe completar con los valores de su operador.

## Resumen de la configuración

Este proceso prepara al AR-3HU para enviar datos de ubicación y eventos a la plataforma Plaspy usando el endpoint y puerto compartidos de la plataforma. El objetivo es asegurar conectividad IP fiable, APN y parámetros de transporte correctos, y que los reportes sean visibles en Plaspy.

- Configure el APN y los parámetros de red del equipo para que pueda acceder a Internet y a los servidores de Plaspy.
- Establezca el endpoint y puerto del servidor Plaspy para que el rastreador informe al destino correcto.
- Seleccione y configure el transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Aplique la configuración, reinicie el rastreador si es necesario y confirme que el dispositivo aparece en Plaspy.
- Use los ejemplos de comandos AT incluidos como referencia para dispositivos que admiten configuración mediante comandos AT.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto 8888 para el reporte

## Requisitos típicos antes de la configuración

- Una unidad AR-3HU alimentada y accesible que permita configuración (serial, Telnet, SMS o software del proveedor según el soporte).
- Una SIM con datos activa y los detalles correctos del APN del operador móvil si va a usar datos celulares (el dispositivo soporta 3G HSDPA).
- Acceso al método de configuración oficial del fabricante o al software del proveedor para aplicar las opciones correctamente.
- Conocimiento de si su flujo de trabajo de instalación usa comandos AT directos, configuración por SMS o la herramienta del proveedor.
- Un entorno de red estable donde el equipo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Credenciales y permisos necesarios para reiniciar o interrumpir la alimentación del dispositivo durante la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AR-3HU envía actualizaciones periódicas de ubicación y reportes de eventos al endpoint compartido de Plaspy en el puerto 8888. Plaspy recibe las conexiones entrantes o datagramas y reconoce el protocolo del dispositivo automáticamente.

- El rastreador se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar UDP o TCP según la configuración y la preferencia del instalador.
- Las actualizaciones de ubicación y las alertas de eventos se entregan a Plaspy y se muestran en la plataforma.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que en la mayoría de los casos no es necesario seleccionar un protocolo específico en la plataforma.
- Use la plataforma para validar la visibilidad del dispositivo y la llegada de eventos después de la configuración.

## Procedimiento de configuración habitual

1. Acceda al método de configuración oficial del fabricante para el AR-3HU (consola de comandos AT, herramienta del proveedor o método por SMS según soporte).
2. Ingrese la dirección del servidor Plaspy — use d.plaspy.com o la IP directa 54.85.159.138 según lo requiera la interfaz de configuración del dispositivo.
3. Establezca el puerto de destino en 8888. Recuerde que Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles.
4. Elija el protocolo de transporte (UDP o TCP) si el dispositivo solicita selección de transporte.
5. Configure el APN y cualquier ajuste relacionado con la SIM o la red para que el equipo tenga conectividad de datos.
6. Aplique o guarde la configuración y reinicie el equipo si el procedimiento del fabricante lo exige.
7. Verifique que el dispositivo está reportando a Plaspy y es visible en la plataforma; confirme que llegan actualizaciones de ubicación y eventos según lo esperado.

## Ejemplo de comandos de configuración

Los siguientes comandos AT son un ejemplo público de configuración para estilo AR-3HU. Estos comandos se presentan en el mismo orden que la fuente; preserve los marcadores y reemplace los valores con los datos de su operador donde sea necesario.

- AT+XRFD
- AT+XAPN=1"[apn]"
- AT+XIP="54.85.159.138",8888
- AT+XBUB=1
- AT+XBUBE=3,30
- AT+XCSW=600
- AT+XDDI=1000
- AT+XDHC=170,3
- AT+XDMES=7,90
- AT+XDMSD=50
- AT+XDMSS=7,10
- AT+XDMT=1
- AT+XDRI=3600,300
- AT+XDTS=0
- AT+XDTT=0
- AT+XGPL=3,60
- AT+XGPLP=4,10
- AT+XGPLT=300
- AT+XHB=0
- AT+XHBB=600
- AT+XIA=1,300
- AT+XIGM=2,5
- AT+XIGN=3
- AT+XIOD=A,1
- AT+XIOD=B,0
- AT+XIOD=C,1
- AT+XIOD=D,0
- AT+XIOE=A,0
- AT+XIOE=B,0
- AT+XIOE=C,2
- AT+XIOE=D,0
- AT+XIPC=1
- AT+XKA=2,60
- AT+XPRP=2
- AT+XPST=1,900
- AT+XPUP=1
- AT+XPWL=11.7,30
- AT+XPWLE=3
- AT+XPWM=0,0,1,1
- AT+XPWS=12.3,3600
- AT+XPWSE=3
- AT+XRLYE=3
- AT+XRPA=0
- AT+XRPF=1,1
- AT+XRPM=0000FFFF
- AT+XRPQ=3000
- AT+XRPSF=126
- AT+XRSTE=1
- AT+XRSTP=2,14500
- AT+XSMSD=""
- AT+XSMSS=""
- AT+XSPD=3,110,15
- AT+XTA=1,30
- AT+XVO=0
- AT+XVTO=0
- AT+XVTOE=5000
- AT+XRST=1
- AT+XRST=2

Fenced command block (preserve ordering for execution where order matters):

```
AT+XRFD
AT+XAPN=1"[apn]"
AT+XIP="54.85.159.138",8888
AT+XBUB=1
AT+XBUBE=3,30
AT+XCSW=600
AT+XDDI=1000
AT+XDHC=170,3
AT+XDMES=7,90
AT+XDMSD=50
AT+XDMSS=7,10
AT+XDMT=1
AT+XDRI=3600,300
AT+XDTS=0
AT+XDTT=0
AT+XGPL=3,60
AT+XGPLP=4,10
AT+XGPLT=300
AT+XHB=0
AT+XHBB=600
AT+XIA=1,300
AT+XIGM=2,5
AT+XIGN=3
AT+XIOD=A,1
AT+XIOD=B,0
AT+XIOD=C,1
AT+XIOD=D,0
AT+XIOE=A,0
AT+XIOE=B,0
AT+XIOE=C,2
AT+XIOE=D,0
AT+XIPC=1
AT+XKA=2,60
AT+XPRP=2
AT+XPST=1,900
AT+XPUP=1
AT+XPWL=11.7,30
AT+XPWLE=3
AT+XPWM=0,0,1,1
AT+XPWS=12.3,3600
AT+XPWSE=3
AT+XRLYE=3
AT+XRPA=0
AT+XRPF=1,1
AT+XRPM=0000FFFF
AT+XRPQ=3000
AT+XRPSF=126
AT+XRSTE=1
AT+XRSTP=2,14500
AT+XSMSD=""
AT+XSMSS=""
AT+XSPD=3,110,15
AT+XTA=1,30
AT+XVO=0
AT+XVTO=0
AT+XVTOE=5000
AT+XRST=1
AT+XRST=2
```

Notas sobre marcadores y comandos de reinicio:
- [apn] es un marcador para el APN del operador móvil y debe reemplazarse por la cadena APN correcta para la SIM en uso.
- Los comandos finales AT+XRST=1 y AT+XRST=2 se muestran como comandos de reinicio del dispositivo en este ejemplo. Trate los pasos de reinicio como opcionales o ejecútelos solo cuando su proceso de configuración lo requiera; siga la orientación del fabricante.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la disponibilidad de comandos y el comportamiento de parámetros; confirme la sintaxis exacta con la documentación de Oigo Telematics para su revisión de dispositivo.
- El ejemplo utiliza una IP directa en AT+XIP. Alternativamente, puede configurar el dominio d.plaspy.com cuando el dispositivo lo soporte; ambos deben apuntar al puerto 8888.
- Elija UDP o TCP según la preferencia del instalador y las condiciones de red. Plaspy soporta ambos y detecta automáticamente el protocolo del dispositivo.
- APN, credenciales de SIM y ajustes de red varían según el operador y deben ingresarse correctamente para la conectividad celular.
- Algunos fabricantes permiten enviar comandos AT por SMS, consola serial o software del proveedor; utilice el método oficialmente soportado para su unidad AR-3HU.

## Por qué usar Plaspy con esta configuración

Usar el AR-3HU con Plaspy facilita añadir visibilidad de vehículos, reportes de eventos y monitoreo operativo a su flujo de gestión de flotas. Las funciones de reporte de eventos y la conectividad celular del AR-3HU lo hacen adecuado para organizaciones que necesitan alertas y actualizaciones de ubicación oportunas, mientras que el endpoint compartido de Plaspy simplifica el despliegue en muchos dispositivos.

Para obtener más información sobre Plaspy y las integraciones compatibles visite https://www.plaspy.com. Verifique los métodos de configuración y los detalles de firmware más recientes con el fabricante en https://www.oigotelematics.com/ para garantizar procedimientos exactos y actualizados.
