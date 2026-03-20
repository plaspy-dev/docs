---
slug: /haicom/hi_604x/configuration
id: hi_604x-configuration
sidebar_label: Configuration
title: Haicom - HI-604X Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Haicom HI-604X con Plaspy usando servidor compartido y configuración por SMS o USB para rastreo GPRS
keywords:
  - Configuración Haicom HI-604X
  - Instalación Haicom HI-604X
  - Configuración HI-604X Plaspy
  - Configuración rastreador GPS Haicom
  - Configuración servidor HI-604X
  - Configuración SMS Haicom HI-604X
  - Configuración GPRS HI-604X
  - Configuración rastreador Plaspy
  - Rastreo vehicular HI-604X
  - Integración HI-604X con plataforma
---

# Haicom - HI-604X Configuración

Esta página ofrece una guía pública para configurar el rastreador GPS Haicom HI-604X con Plaspy. Se centra en los ajustes compartidos del servidor de Plaspy y en los métodos habituales del fabricante que permiten al HI-604X enviar posición y estado a la plataforma. Las instrucciones resumen los pasos prácticos y ejemplos de comandos SMS disponibles públicamente para preparar el dispositivo y que se comunique con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este envía datos a la plataforma. Los pasos de configuración del lado del fabricante para el HI-604X pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; aquí se describen las opciones públicas más comunes, incluyendo configuración por SMS y por USB o software cuando correspondan.

## Resumen de la configuración

El proceso de configuración prepara el HI-604X para enviar actualizaciones de ubicación por GPRS y reportes de eventos a Plaspy usando el endpoint compartido de la plataforma. Normalmente implica suministrar el APN del operador, dirigir el dispositivo al servidor de Plaspy, establecer el intervalo de reporte y elegir el protocolo de transporte si es necesario.

- Configure el APN del dispositivo para que el rastreador pueda usar la conexión de datos móviles y alcanzar Plaspy.
- Apunte el rastreador al endpoint del servidor de Plaspy para que los reportes lleguen a la plataforma.
- Seleccione UDP o TCP en el puerto 8888 si el equipo requiere elección explícita del transporte.
- Establezca el intervalo de actualización/reportes según las necesidades de monitoreo y consideraciones de consumo energético.
- Valide la conectividad confirmando que el dispositivo aparece en Plaspy y envía actualizaciones de posición.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el HI-604X:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe usar el puerto 8888 al registrar o configurar el rastreador para la plataforma.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM válida con datos habilitados y el APN correcto del operador móvil.
- Acceso al método de configuración del HI-604X proporcionado por el fabricante, como comandos SMS, USB con software de configuración o herramientas del proveedor.
- Dispositivo alimentado y ubicado donde pueda recibir señal GPS y celular durante las pruebas.
- Conocimiento de la contraseña del dispositivo si la configuración por SMS la requiere (la contraseña por defecto documentada en ejemplos públicos suele ser 0000).
- Los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) listos para introducir durante la configuración.
- Un método para verificar el dispositivo en la plataforma Plaspy una vez aplicada la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el HI-604X usará su conexión GPRS para enviar actualizaciones de posición y eventos al endpoint y puerto compartido de Plaspy. Plaspy recibe esos reportes e interpreta automáticamente el protocolo del rastreador para mostrar la telemetría y la ubicación en la plataforma.

- El rastreador se configura con el APN del operador para abrir una sesión de datos GPRS.
- Los ajustes GPRS del dispositivo especifican a Plaspy como servidor remoto usando d.plaspy.com o 54.85.159.138.
- Los reportes se envían al puerto 8888 usando UDP o TCP, según configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los datos entrantes al registro del dispositivo.
- La plataforma permite la visibilidad y reporte de eventos para monitorear ubicación, movimiento y alertas configuradas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Haicom, por ejemplo comandos SMS, software/USB de Haicom o herramientas de aprovisionamiento del proveedor.
2. Introduzca la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según la interfaz de configuración del dispositivo.
3. Configure el puerto del servidor a 8888 (Plaspy utiliza este mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP si el dispositivo solicita selección de transporte; Plaspy soporta ambos.
5. Aplique o guarde la configuración en la interfaz del dispositivo o enviando los comandos SMS correspondientes.
6. Reinicie el equipo si el firmware lo requiere después de guardar los ajustes.
7. Valide que el HI-604X reporte a Plaspy y aparezca en la plataforma con los intervalos de actualización esperados.

## Ejemplos de comandos de configuración

El HI-604X admite configuración por SMS. Los ejemplos públicos que siguen muestran la sintaxis típica de los comandos SMS. La muestra usa la contraseña por defecto del dispositivo 0000.

- Establecer el APN del operador
  - Envíe el siguiente SMS reemplazando los marcadores de APN según corresponda:
```sms
#0000,200,[apn],[apnu],[apnp]
```
  - Explicación de los marcadores:
    - [apn] = nombre del APN del operador (para datos)
    - [apnu] = nombre de usuario del APN si el operador lo requiere (dejar vacío si no aplica)
    - [apnp] = contraseña del APN si el operador lo requiere (dejar vacío si no aplica)

- Configurar el servidor GPRS hacia Plaspy
  - Este comando apunta el rastreador a Plaspy usando la IP pública y el puerto:
```sms
#0000,210,54.85.159.138,8888,8888,8888,0
```
  - Nota: la estructura del comando en la documentación del dispositivo incluye parámetros de puerto repetidos; siga la sintaxis exacta requerida por su firmware.

- Establecer intervalo de actualización a 60 segundos
  - Ejemplo de SMS para configurar un intervalo de 60 segundos:
```sms
#0000,250,0,60,0,0,0,0,0,0
```

Envíe cada comando como un SMS independiente desde un número autorizado o mediante el método recomendado por el fabricante. Respete el orden cuando este sea importante, por ejemplo configure el APN antes de apuntar al servidor GPRS.

## Notas de configuración

- El firmware del fabricante y la sintaxis exacta de los comandos SMS pueden variar por lote de producción y versión de firmware; revise siempre el manual del HI-604X o las notas de la versión cuando estén disponibles.
- El HI-604X admite métodos de configuración por SMS y por software; el SMS suele ser una alternativa cuando no hay USB o aprovisionamiento remoto.
- Elija UDP para menor sobrecarga o TCP para una sesión orientada a conexión si el dispositivo y la red lo requieren; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Reemplace los marcadores de APN ([apn], [apnu], [apnp]) con las credenciales de su operador móvil; algunos proveedores no requieren usuario ni contraseña.
- Si el rastreador tiene una contraseña por defecto, cámbiela si el fabricante recomienda hacerlo por seguridad después de la configuración inicial.

## Por qué usar Plaspy con esta configuración

Usar el HI-604X con Plaspy ofrece a las organizaciones una forma práctica de centralizar los reportes de los dispositivos y recibir actualizaciones de posición en tiempo real, notificaciones de eventos y datos históricos de viajes desde una plataforma central. El soporte del HI-604X para configuración por GPRS y SMS, combinado con la detección automática de protocolos y el endpoint compartido de Plaspy, facilita la integración para monitoreo de flotas y activos.

Para conocer más sobre Plaspy y cómo se integra con los rastreadores compatibles visite https://www.plaspy.com. Para detalles específicos de configuración del HI-604X, información de firmware e instrucciones del fabricante, verifique la información vigente en el sitio de Haicom http://www.haicom.com.tw/.
