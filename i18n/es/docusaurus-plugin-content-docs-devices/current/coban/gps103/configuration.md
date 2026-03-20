---
slug: /coban/gps103/configuration
id: gps103-configuration
sidebar_label: Configuration
title: Coban - GPS103 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Coban GPS103 con Plaspy, con ajustes de servidor y comandos SMS
keywords:
  - Configuración Coban GPS103
  - Configuración GPS103 Plaspy
  - Configuración servidor rastreador Coban
  - Guía configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración rastreador GPRS
  - Configuración SMS GPS103
  - Ajustes TCP UDP rastreador
  - Integración seguimiento de flotas
  - Configuración plataforma Coban GPS
---

# Coban - Configuración del GPS103

Esta página documenta el contexto público de configuración para usar el rastreador Coban GPS103 con Plaspy. Resume los ajustes de servidor compartidos por Plaspy, ofrece orientación práctica para preparar el GPS103 y muestra los comandos SMS más comunes utilizados en flujos de trabajo públicos. Use esta guía para dejar el dispositivo listo para comunicarse con Plaspy y comprender los requisitos antes de la integración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los ejemplos de comandos SMS y el flujo mostrado aquí son ejemplos públicos que deben verificarse frente al firmware de su dispositivo y la documentación oficial del fabricante.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el GPS103 para que envíe de forma confiable datos de ubicación y eventos a Plaspy, de modo que los dispositivos aparezcan y se actualicen correctamente en la plataforma. En los dispositivos GPS103 la ruta pública de configuración suele utilizar comandos SMS o herramientas del proveedor para ajustar el APN, el endpoint del servidor, el transporte y los intervalos de reporte.

- Configure el acceso a la red y el APN para que el dispositivo pueda usar datos GPRS
- Apunte el rastreador al endpoint y puerto del servidor Plaspy utilizado por todos los dispositivos
- Elija el modo de transporte UDP o TCP según la preferencia del instalador y el soporte del dispositivo
- Defina los intervalos de reporte y habilite las opciones de protocolo relevantes para que Plaspy pueda detectar y parsear los mensajes
- Verifique la conectividad y confirme que el dispositivo aparece en Plaspy con actualizaciones en tiempo real

## Ajustes del servidor Plaspy

Al configurar el GPS103 para Plaspy, use los siguientes ajustes públicos del servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; configure el que requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor

Todos los dispositivos en Plaspy usan el mismo puerto, por lo tanto use el puerto 8888 para la configuración del GPS103.

## Requisitos típicos antes de la configuración

- Una SIM funcional con datos habilitados y credenciales APN correctas para su operador móvil
- Dispositivo encendido y alcanzable por SMS si va a usar comandos SMS para configurar
- Acceso al método de configuración del fabricante, como comandos SMS o software del proveedor
- Conocimiento de la contraseña que el GPS103 espera para comandos SMS; la contraseña pública por defecto mostrada abajo es 123456
- Un entorno de prueba o un dispositivo individual para validar ajustes antes de un despliegue masivo
- Acceso básico a una cuenta de monitoreo o vista de la plataforma en Plaspy para confirmar que el dispositivo se registra

## Cómo se conecta este rastreador a Plaspy

El GPS103 puede usar datos de Internet GPRS para enviar mensajes de posición y eventos al endpoint del servidor Plaspy. Una vez que el dispositivo esté configurado para apuntar al servidor y puerto compartidos de Plaspy, Plaspy recibirá los mensajes y detectará automáticamente el protocolo para que el dispositivo pueda ser monitoreado.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy
- Los datos se transmiten por GPRS usando UDP o TCP, según lo configurado en el dispositivo
- Las actualizaciones de posición y los eventos de alarma se reenvían a Plaspy y se hacen visibles en la plataforma
- La detección automática de protocolo de Plaspy parsea los mensajes entrantes, por lo que no se requiere seleccionar manualmente el protocolo en el servidor
- Validar el reporte del dispositivo confirma su visibilidad y estado operativo en Plaspy

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante para el GPS103, como comandos SMS o una herramienta de configuración del proveedor.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 como destino del servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione el tipo de transporte UDP o TCP si la configuración del dispositivo requiere elegir un modo de transporte.
5. Configure el APN y cualquier usuario y contraseña del APN que requiera su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el dispositivo requieren reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy revisando mensajes entrantes y confirmando que el dispositivo aparece y se actualiza en la plataforma.

## Comandos de configuración de ejemplo

El GPS103 se configura comúnmente por SMS usando la contraseña del dispositivo. La contraseña pública por defecto en estos ejemplos es 123456. Sustituya los marcadores por las credenciales APN de su operador cuando sea necesario.

- Reinicio de fábrica inicial opcional (usar solo si es necesario para aprovisionamiento inicial)
```text
begin123456
```

- Ajustar la zona horaria a UTC 0
```text
time zone123456 0
```

- Establecer el APN del operador
```text
apn123456 [apn]
```
Explicación: reemplace [apn] con la cadena APN de su operador móvil.

- Establecer usuario y contraseña del APN
```text
up123456 [apnu] [apnp]
```
Explicación: reemplace [apnu] con el usuario del APN y [apnp] con la contraseña del APN. Si no existe usuario o contraseña, algunos operadores aceptan un valor vacío.

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
adminip123456 54.85.159.138 8888
```
Este comando apunta el rastreador a Plaspy usando la IP pública del servidor y el puerto compartido 8888.

- Ejemplo de intervalo de actualización de ubicación
```text
fix060s060s***n123456
```
Esta cadena de ejemplo es un comando público para la configuración de intervalos de actualización según el fabricante. Mantenga el formato exacto que exija su firmware.

- Cambiar el dispositivo a modo GPRS y seleccionar transporte
```text
gprs123456,1,1
```
o
```text
gprs123456
```
Explicación: algunas variantes de firmware aceptan un selector de transporte parametrizado. Use la versión que coincida con su firmware para habilitar GPRS y seleccionar UDP o TCP.

- Consultar la configuración actual del dispositivo
```text
check123456
```

- Habilitar reporte de estado para sensor de combustible o mejorar el reporte de sensores digitales
```text
protocol123456 18
```

Notas sobre marcadores y contraseña
- La contraseña 123456 mostrada arriba es la predeterminada pública usada en estos ejemplos. Si usted cambió la contraseña del dispositivo, sustituya la contraseña correcta en cada comando.
- Los marcadores [apn], [apnu] y [apnp] deben reemplazarse por su APN, usuario APN y contraseña APN respectivos.

## Notas sobre la configuración

- La configuración por SMS es común para los dispositivos GPS103, pero puede existir software del proveedor o interfaces USB según la revisión de hardware.
- Las versiones de firmware varían y algunos comandos o formatos de parámetros pueden diferir entre versiones; siempre verifique la sintaxis de los comandos según las notas de firmware de su dispositivo.
- Elija UDP o TCP según las necesidades de su instalación; ambos transportes son compatibles y Plaspy aceptará cualquiera en el puerto 8888.
- El comando adminip en los ejemplos usa la IP pública y el puerto de Plaspy, por lo que debe usar exactamente ese par al enviar el comando mostrado más arriba.
- Después de cambiar ajustes de red o detalles del servidor, es buena práctica verificar el reporte del dispositivo usando el comando check y confirmando actividad en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un Coban GPS103 correctamente configurado ofrece visibilidad consistente de la ubicación del vehículo y de los reportes de eventos desde una plataforma que detecta automáticamente protocolos de rastreadores y utiliza ajustes de servidor compartidos. Para operadores de flotas y usuarios individuales esto simplifica la incorporación de dispositivos porque el mismo servidor y puerto funcionan en múltiples dispositivos compatibles y Plaspy se encarga del parseo de protocolos.

Si desea conocer más sobre Plaspy visite https://www.plaspy.com y revise la guía más reciente de dispositivos en el sitio del fabricante https://www.coban.net/ para confirmar los comandos de firmware actuales y cualquier instrucción específica del modelo. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que verifique los detalles específicos más recientes con la documentación oficial del fabricante.
