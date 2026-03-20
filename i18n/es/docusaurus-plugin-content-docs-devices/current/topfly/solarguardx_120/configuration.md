---
slug: /topfly/solarguardx_120/configuration
id: solarguardx_120-configuration
sidebar_label: Configuration
title: TopFly - SolarGuardX 120 Configuration
sidebar_class_name: menu_item_tracker
description: Configure TopFly SolarGuardX 120 para usarlo con Plaspy mediante ajustes públicos de servidor y comandos SMS
keywords:
  - Configuración TopFly SolarGuardX 120
  - Configuración SolarGuardX 120
  - SolarGuardX 120 Plaspy
  - Configuración rastreador TopFly
  - Configuración servidor rastreador GPS
  - Configuración seguimiento de activos
  - Configuración gestión de flotas
  - Configuración SMS SolarGuardX 120
  - Configuración APN del rastreador
  - Ajustes servidor Plaspy
---

# TopFly - Configuración del SolarGuardX 120

Esta página documenta el contexto público de configuración para usar el TopFly SolarGuardX 120 con Plaspy. Reúne los ajustes compartidos del servidor y los pasos prácticos de instalación que se usan comúnmente para apuntar un dispositivo o su unidad de telemetría compañera hacia Plaspy. Cuando los comandos del fabricante están disponibles públicamente se muestran aquí como ejemplos para flujos de instalación habituales.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La documentación del SolarGuardX 120 y los comandos modelConfiguration que se muestran más abajo ilustran un flujo de configuración basado en SMS y la contraseña por defecto del dispositivo usada en esos ejemplos públicos.

## Resumen de la configuración

El objetivo de esta configuración es preparar el SolarGuardX 120 para enviar telemetría de seguridad y estado a la plataforma Plaspy, de modo que esos eventos puedan correlacionarse con las señales de posición del rastreador GPS. Los comandos y ajustes públicos se centran en el endpoint del servidor, la autenticación de red y la cadencia de reporte.

- Configurar el APN del dispositivo para que use datos móviles y pueda alcanzar Plaspy
- Apuntar el dispositivo al endpoint y puerto del servidor Plaspy para la ingestión de telemetría
- Establecer intervalos de reporte para que los eventos de estado y manipulación se entreguen con prontitud
- Validar la selección de transporte cuando sea necesario para que el dispositivo envíe datos por UDP o TCP
- Confirmar que el dispositivo aparece en Plaspy y que telemetrías como manipulación y estado de batería son visibles

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Una unidad SolarGuardX 120 alimentada con acceso a su método de configuración vía SMS o del fabricante
- Una tarjeta SIM con datos y SMS habilitados y los valores APN correctos para su operador móvil
- Los valores APN, usuario APN y contraseña APN de su proveedor de red móvil (los marcadores se muestran como [apn], [apnu], [apnp])
- Acceso a la documentación de instalador o integrador de TopFly para comandos específicos del dispositivo vía SMS o herramientas del proveedor
- Una cuenta en Plaspy o acceso a la plataforma Plaspy donde pueda confirmar que el dispositivo reporta correctamente

## Cómo se conecta este rastreador a Plaspy

El SolarGuardX 120 se configura para reportar telemetría al endpoint y puerto compartidos del servidor Plaspy, de modo que los eventos de seguridad y el estado de cerraduras sean visibles junto con los datos de posición del rastreador GPS. El dispositivo normalmente usa la red de datos móviles tras configurar el APN y envía actualizaciones periódicas de estado a Plaspy.

- El dispositivo envía telemetría al endpoint del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 y puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador
- La configuración del APN permite que el dispositivo use GPRS o datos móviles para llegar a Plaspy
- Los intervalos de reporte controlan la frecuencia con la que se envían telemetrías de estado, manipulación y batería
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor aceptará el feed del dispositivo en el puerto compartido

## Flujo común de configuración

1. Acceda al método de configuración oficial de TopFly para el SolarGuardX 120, por ejemplo comandos SMS o una herramienta de configuración del proveedor
2. Introduzca la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo
3. Configure el puerto del servidor a 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar uno
5. Proporcione los detalles del APN de la red móvil si el dispositivo necesita acceso GPRS
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo exige
7. Valide que el dispositivo reporte a Plaspy y que telemetrías como manipulación, batería y estado de cerradura aparezcan en la plataforma

## Comandos de configuración de ejemplo

El fabricante proporciona un flujo de configuración público basado en SMS. Los comandos de ejemplo siguientes se envían como mensajes SMS al dispositivo. El ejemplo usa la contraseña por defecto del dispositivo 0000 según el contenido público. Se conservan los marcadores donde se usan.

- Ajustar la zona horaria del dispositivo a UTC 0
```
GMT,0000,0#
```

- Configurar el APN de la red móvil y el usuario y contraseña APN opcionales
```
APN,0000,[apn],[apnu],[apnp]#
```
Explicación: reemplace [apn] con el APN de su operador. Si su APN requiere usuario o contraseña complete [apnu] y [apnp] respectivamente, de lo contrario deje esos marcadores vacíos según la sintaxis SMS que requiera TopFly.

- Configurar el servidor GPRS usando la IP y puerto de Plaspy
```
IP,0000,54.85.159.138 8888#
```
Nota: este ejemplo usa la IP y el puerto 8888 del servidor Plaspy. Puede introducir d.plaspy.com en lugar de la IP si el firmware TopFly o la herramienta de configuración aceptan un nombre de dominio.

- Establecer el intervalo de actualización periódico a 60 segundos
```
TIMER,0000,60:60:0:0#
```
Explicación: este comando configura el temporizador de reportes del dispositivo según el ejemplo público. Confirme la semántica exacta de los campos del temporizador con la documentación de TopFly para su versión de firmware.

## Notas de configuración

- Los comandos SMS de ejemplo usan la contraseña por defecto del dispositivo 0000 en los ejemplos públicos; cambie la contraseña después de la configuración inicial si el dispositivo lo permite
- Las versiones de firmware y la sintaxis de las herramientas del fabricante varían; los comandos y el orden de los campos pueden diferir según la revisión o el firmware específico del mercado
- Aquí se muestra una configuración basada en SMS; algunas instalaciones pueden usar USB o una herramienta del proveedor cuando SMS no esté disponible
- Elija UDP o TCP según la preferencia del instalador y la fiabilidad de la red; Plaspy acepta ambos transportes en el puerto 8888 y detecta el protocolo automáticamente
- Verifique siempre los valores del APN y reemplace los marcadores [apn], [apnu] y [apnp] con las credenciales específicas del operador

## Por qué usar Plaspy con esta configuración

Usar el SolarGuardX 120 con Plaspy añade telemetría segura y reportes de manipulación a su flujo de seguimiento de activos, de modo que los operadores puedan ver el estado de cerraduras, la batería y los eventos de alarma junto con las posiciones GPS. Para despliegues logísticos y de gestión de activos, esta visibilidad combinada mejora la respuesta ante incidentes, la auditoría de eventos de acceso y la monitorización centralizada de remolques, contenedores y otros activos de alto valor.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y verifique las notas de configuración específicas del dispositivo, comportamiento de firmware y la guía del fabricante más actual en https://www.topflytech.com/. Las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo, así que confirme siempre los procedimientos actuales en los recursos oficiales de TopFly.
