---
slug: /meitrack/vt_300/configuration
id: vt_300-configuration
sidebar_label: Configuration
title: Meitrack - VT-300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Meitrack VT-300 con ajustes de servidor Plaspy y comandos SMS para integrar en la plataforma
keywords:
  - Configuración Meitrack VT-300
  - Configuración VT-300
  - Configuración VT-300 Plaspy
  - Configuración servidor VT-300
  - Configuración rastreador GPS Meitrack
  - Configuración SMS VT-300
  - Configuración protocolo Meiligao
  - Integración rastreador plataforma GPS
  - Configuración seguimiento vehicular
  - Configuración rastreador gestión de flotas
---

# Meitrack - VT-300 Configuration

Esta página documenta el contexto público de configuración para utilizar el Meitrack VT-300 con Plaspy. Describe los ajustes de servidor compartidos que usa Plaspy, los comandos SMS públicos habituales y los pasos prácticos que puede seguir para preparar un VT-300 a fin de que envíe datos de ubicación a la plataforma Plaspy.

Plaspy utiliza un conjunto de ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas locales del proveedor, por lo que debe usar esta guía junto con la documentación oficial de Meitrack y las herramientas de instalación cuando sea necesario.

## Resumen de configuración

El VT-300 se configura para enviar datos de ubicación y estado a un servidor de seguimiento remoto usando SMS para la configuración inicial y GPRS para el reporte continuo. El flujo público de configuración suele establecer un identificador de dispositivo, configurar el APN de datos móviles y apuntar el equipo al endpoint y puerto del servidor Plaspy para que el rastreador empiece a reportar.

- Prepare el VT-300 para comunicarse con Plaspy estableciendo su ID de dispositivo y los parámetros de red.
- Configure el APN y la información del servidor GPRS para que el dispositivo pueda abrir una conexión TCP o UDP.
- Apunte el rastreador al servidor compartido de Plaspy para que la plataforma reciba la telemetría.
- Valide la conectividad comprobando que el rastreador informe al servidor Plaspy y aparezca en la plataforma.
- Use comandos SMS del fabricante o la utilidad oficial de configuración para aplicar los ajustes cuando estén soportados.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Todos los dispositivos de Plaspy usan el mismo puerto para reportes y la plataforma detecta el protocolo del rastreador automáticamente cuando el dispositivo se conecta.

## Requisitos típicos antes de la configuración

- Un equipo VT-300 con alimentación y una tarjeta SIM activa que tenga datos GPRS habilitados si planea usar reporte por GPRS.
- Acceso al IMEI del dispositivo y a las credenciales de instalador cuando el fabricante las requiera.
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración oficial de Meitrack.
- Conocimiento del APN correcto del operador de la SIM; en los ejemplos se usan marcadores donde corresponda.
- Un plan para verificar la conectividad desde el dispositivo hasta el servidor Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El VT-300 se configura para reportar datos de ubicación al endpoint y puerto compartidos de Plaspy. Una vez que se establecen los parámetros GPRS, el rastreador abre una conexión TCP o UDP a la dirección configurada y envía mensajes de posición y eventos usando su protocolo nativo. Plaspy recibe esos mensajes y los asocia al registro del dispositivo correspondiente.

- El dispositivo se apunta al dominio o IP del servidor Plaspy y usa el puerto 8888 para reportes.
- El rastreador puede conectarse usando UDP o TCP según la configuración que usted elija.
- Plaspy detecta automáticamente el protocolo Meiligao u otros protocolos soportados cuando llegan los mensajes.
- Tras un registro exitoso, las actualizaciones de posición y los eventos de estado aparecen en la plataforma Plaspy para su monitoreo.
- Los intervalos regulares de actualización y las alarmas configuradas en el dispositivo determinan la frecuencia de los reportes a Plaspy.

## Flujo común de configuración

1. Acceda al método de configuración oficial de Meitrack o al software correspondiente, o prepárese para enviar los comandos SMS de configuración documentados por Meitrack.
2. Introduzca la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 en los campos de servidor o servidor GPRS del dispositivo.
3. Establezca el puerto de reporte en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte.
5. Configure el APN y cualquier usuario o contraseña de APN requeridos por su operador de SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio.
7. Valide que el dispositivo informa a Plaspy confirmando que aparece en la plataforma y que envía actualizaciones de posición.

## Comandos de configuración de ejemplo

La configuración pública del VT-300 puede realizarse enviando comandos SMS al dispositivo. Los comandos de ejemplo a continuación siguen el ejemplo público donde la contraseña del dispositivo es 000000 por defecto. Reemplace los marcadores según sea necesario y asegúrese de usar las cifras correctas del IMEI para el ID del dispositivo.

- Establecer ID de dispositivo usando los primeros 14 dígitos del IMEI
```
W000000,010,{{imei.substring(0,14)}}
```

- Establecer APN del operador y opcionalmente usuario y contraseña del APN
```
W000000,011,[apn]{{#if apnu}},[apnu]{{/if}}{{#if apnp}},[apnp]{{/if}}
```
Nota: En el ejemplo público los campos APN se muestran como marcadores. Reemplace [apn] con el APN de su operador de SIM. Si su APN requiere usuario o contraseña, reemplace [apnu] y [apnp] según corresponda.

- Establecer servidor GPRS con la IP y el puerto del servidor Plaspy
```
W000000,012,54.85.159.138,8888
```
Alternativamente puede ingresar d.plaspy.com en la herramienta de configuración del dispositivo en lugar de la IP.

- Establecer intervalo de actualización a 60 segundos
```
W000000,014,00006
```

- Activar modo GPRS
```
W000000,013,2
```

Notas importantes sobre estos comandos:
- La contraseña de dispositivo en los comandos públicos de ejemplo es 000000. Si la contraseña de su equipo fue cambiada, use la contraseña actual en lugar de 000000.
- El orden de comandos mostrado sigue el ejemplo público y es práctico para la configuración inicial: establecer ID de dispositivo, APN, servidor GPRS, intervalo de actualización y luego activar GPRS.
- Si utiliza una utilidad de configuración del fabricante en lugar de SMS, los mismos valores (APN, dirección del servidor, puerto, transporte) deben ingresarse allí.

## Observaciones de configuración

- Las diferencias de firmware entre unidades VT-300 pueden cambiar el formato exacto de los comandos o los campos requeridos; siempre consulte las notas de firmware del equipo.
- El dispositivo soporta tanto la configuración vía SMS como el reporte por GPRS; use el método que coincida con su flujo de instalación y prácticas de seguridad.
- Elija UDP o TCP según las condiciones de red y cualquier requisito de Plaspy; ambos son compatibles y Plaspy maneja la detección de protocolo automáticamente.
- El servidor Plaspy puede ingresarse como el dominio d.plaspy.com o la IP 54.85.159.138 dependiendo de la herramienta de configuración que utilice.
- Todos los dispositivos configurados para Plaspy usan el puerto 8888 para reportes; este es un puerto compartido en la plataforma.

## Por qué usar Plaspy con esta configuración

Configurar el Meitrack VT-300 para que reporte a Plaspy ofrece a las organizaciones un endpoint de servidor consistente y una plataforma que detecta automáticamente los protocolos de los rastreadores. Esto reduce la complejidad de configuración por dispositivo y agiliza el despliegue para flotas que usan una mezcla de rastreadores compatibles. Con el VT-300 enviando actualizaciones regulares a Plaspy, los operadores pueden monitorear la ubicación de vehículos, recibir alarmas y utilizar las herramientas de la plataforma para la supervisión operativa.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los comandos específicos más recientes, detalles de firmware y la guía del fabricante, verifique los pasos de configuración en el sitio oficial de Meitrack en https://www.meitrack.com/.
