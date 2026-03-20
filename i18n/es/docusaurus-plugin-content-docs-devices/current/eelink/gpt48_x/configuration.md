---
slug: /eelink/gpt48_x/configuration
id: gpt48_x-configuration
sidebar_label: Configuration
title: EElink - GPT48‑X Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador EElink GPT48‑X a Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración EElink GPT48‑X
  - Instalación EElink GPT48‑X
  - GPT48‑X Plaspy
  - Configuración servidor GPT48‑X
  - Instalación rastreador GPS EElink
  - Configuración dispositivo Plaspy
  - Comandos SMS rastreador GPS
  - Configuración seguimiento de activos
  - Configuración protocolo EELINK
  - Rastreador GPS de larga espera
---

# EElink - GPT48‑X Configuración

Esta página documenta el contexto público de configuración para usar el rastreador EElink GPT48‑X con la plataforma Plaspy. Se centra en los ajustes compartidos del servidor Plaspy, los pasos prácticos habituales en campo y los comandos SMS que el fabricante publica para configurar la conectividad básica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta página resume el flujo público y recopila los comandos SMS indicados en la documentación del dispositivo para configuración directa cuando procede.

## Resumen de la configuración

Configurar el GPT48‑X para Plaspy prepara el dispositivo para enviar posición y telemetría a un único endpoint de Plaspy, de modo que el equipo sea visible y gestionable desde el panel de Plaspy. El modelo admite métodos de configuración remota mediante la plataforma, aplicación móvil o SMS, y la documentación del fabricante incluye comandos SMS de ejemplo para la puesta en marcha básica.

- Apuntar el dispositivo al endpoint compartido de Plaspy para que los datos fluyan hacia la plataforma
- Configurar el APN de la operadora para que GPRS o LTE Cat‑M NB‑IoT puedan registrarse y transmitir
- Ajustar el intervalo de reporte para que el rastreador envíe actualizaciones con la frecuencia deseada
- Validar la conectividad y los parámetros usando el comando de consulta de parámetros del dispositivo
- Emplear la configuración por SMS para despliegues remotos o fuera de banda cuando no haya acceso a la plataforma o app

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un dispositivo GPT48‑X cargado y operativo con una SIM activa que tenga datos y SMS habilitados
- Conocimiento del APN de la operadora móvil y cualquier usuario o contraseña de APN necesarios
- Acceso al método de configuración EElink que piensa usar, como la app del fabricante, la interfaz de la plataforma o la interfaz SMS descrita abajo
- Un medio para enviar SMS desde un teléfono o gateway SMS si va a configurar mediante mensajes
- Tiempo y ubicación para probar la conectividad y validar que el dispositivo aparece en Plaspy tras la configuración

## Cómo se conecta este rastreador a Plaspy

El GPT48‑X se configura para reportar posición y estado del dispositivo a un único endpoint y puerto de Plaspy, de modo que Plaspy pueda ingerir telemetría y ofrecer alertas e informes. Plaspy decodifica los campos del protocolo EELINK para mostrar telemetría, eventos y métricas de salud en la plataforma.

- El dispositivo envía posiciones GNSS y telemetría a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según el firmware del dispositivo o la elección del instalador
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo servidor y puerto funcionan para los modelos compatibles
- Los informes de telemetría y eventos quedan visibles en Plaspy para monitorización, comprobaciones de geocercas y notificaciones
- Puede utilizarse un comando de verificación o PARAM para confirmar el estado de parámetros del rastreador tras la configuración

## Flujo de configuración habitual

1. Acceda al método oficial de configuración EElink que usará, como la plataforma EElink, la app móvil o la interfaz de comandos SMS
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 como destino del servidor
3. Configure el puerto del servidor en 8888 (Plaspy utiliza este mismo puerto para todos los dispositivos compatibles)
4. Si el firmware del dispositivo lo requiere, seleccione el transporte UDP o TCP para la conexión
5. Configure el APN de la operadora y cualquier credencial de APN necesaria para que el dispositivo pueda usar datos móviles
6. Aplique o guarde la configuración y reinicie el dispositivo si requiere reinicio para aplicar los cambios
7. Valide que el dispositivo está reportando a Plaspy revisando la actividad en la plataforma y usando el comando PARAM o comando de verificación del dispositivo

## Comandos de configuración de ejemplo

Los siguientes comandos SMS se publican para el GPT48‑X y mantienen el orden recomendado para una configuración básica. Envíe cada comando como un SMS separado al dispositivo desde un número autorizado. Se incluyen notas sobre las etiquetas en línea.

- Reinicio opcional a valores de fábrica (usar solo si necesita restaurar valores por defecto)
```text
FACTORY#
```

- Ajustar la zona horaria del dispositivo a UTC+0
```text
GMT,E,0#
```

- Configurar el APN de la operadora
```text
APN,[apn]{{#if apnu}},[apnu]{{/if}}{{#if apnp}},[apnp]{{/if}}#
```
Nota: [apn] es el nombre del punto de acceso (APN) de su operador. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN si su operador los requiere. Si no son necesarios, envíe APN,[apn]#.

- Configurar el servidor GPRS usando el dominio de Plaspy (preferido para resolución DNS)
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS usando la IP del servidor Plaspy (forma alternativa)
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización periódico a 60 segundos
```text
TIMER,60#
```

- Verificar los parámetros actuales
```text
PARAM#
```

Envíe los comandos en la secuencia anterior cuando el orden importe para una configuración desde cero. Reemplace los marcadores con los valores de su operadora antes de enviarlos. Use PARAM# para confirmar los parámetros después de la configuración.

## Notas de configuración

- La configuración por SMS está soportada y se describe mediante los comandos del fabricante arriba; la configuración vía plataforma o app puede ofrecer los mismos ajustes mediante una interfaz gráfica
- Las revisiones de firmware y hardware pueden cambiar formatos o comportamientos de comandos; confirme siempre con las notas de la versión del firmware del dispositivo
- La elección entre UDP o TCP depende del firmware del dispositivo y del comportamiento de la red; ambos transportes son compatibles con Plaspy en el mismo puerto compartido
- Plaspy usa un único puerto entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no necesita puertos distintos para diferentes modelos
- Si necesita restablecer el equipo, use la orden de fábrica solo cuando sea necesario y tenga en cuenta que borrará las configuraciones personalizadas

## Por qué usar Plaspy con esta configuración

Usar el GPT48‑X con Plaspy ofrece a las organizaciones seguimiento con larga autonomía y una configuración de servidor sencilla. Apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y validar la conectividad con el comando PARAM es un flujo práctico para integrar los equipos en Plaspy y disponer de visibilidad en tiempo real, alertas e informes históricos.

Para saber más sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para los comandos específicos más actuales, notas de firmware y detalles exactos de configuración, verifique siempre la documentación del fabricante en https://www.eelink.com.cn/.
