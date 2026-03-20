---
slug: /eelink/gpt50/configuration
id: gpt50-configuration
sidebar_label: Configuration
title: EElink - GPT50 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el EElink GPT50 con los ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración EElink GPT50
  - Instalación EElink GPT50
  - Configuración servidor GPT50
  - Integración GPT50 Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración SMS rastreador GPS
  - Configuración seguimiento activos EElink
  - Configuración gestión flotas GPT50
  - Configuración plataforma GPS
  - Provisionamiento dispositivo Plaspy
---

# EElink - GPT50 Configuración

Esta página describe el contexto público de configuración para usar el rastreador EElink GPT50 con Plaspy. Reúne los ajustes prácticos del lado de la plataforma y los comandos SMS públicos que se usan comúnmente para apuntar un dispositivo GPT50 a Plaspy para el seguimiento en tiempo real y la ingestión de telemetría.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La guía a continuación se centra en el endpoint público de Plaspy y en los comandos SMS publicados para el GPT50 para que usted pueda preparar y validar la conectividad del dispositivo antes de incorporarlo a Plaspy.

## Resumen de configuración

El objetivo al configurar el GPT50 para Plaspy es asegurar que el dispositivo reporte ubicación y telemetría fiables al endpoint de ingestión de Plaspy usando los ajustes de servidor compartidos. La configuración prepara el dispositivo para conexiones celulares, APN correctos, intervalos de reporte y el enrutamiento al servidor para que el dispositivo sea visible y gestionable en Plaspy.

- Configure el dispositivo para usar el endpoint y el puerto del servidor Plaspy para que las actualizaciones se enruten a la plataforma.
- Establezca el APN del operador y las credenciales necesarias para que el dispositivo pueda abrir sesiones de datos GPRS.
- Defina intervalos de reporte y el modo de funcionamiento para equilibrar la vida útil de la batería y la frecuencia de telemetría en despliegues de campo.
- Valide la conectividad revisando parámetros y confirmando que el dispositivo aparece en Plaspy.
- Use los métodos de configuración del fabricante disponibles, como comandos SMS o herramientas del proveedor, para aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el GPT50 puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Dispositivo encendido y accesible para recibir y aplicar mensajes SMS o herramientas del fabricante
- Tarjeta SIM válida con datos habilitados y capacidad de SMS instalada en el GPT50
- Datos del APN del operador disponibles para su proveedor de SIM; pueden requerirse marcadores como [apn], [apnu] y [apnp]
- Acceso al flujo de trabajo SMS del fabricante o a la herramienta de configuración del GPT50
- Cuenta en Plaspy y proceso de provisión de dispositivos en su espacio de trabajo Plaspy para validar el reporte del dispositivo
- Conocimientos básicos sobre si su instalación prefiere transporte UDP o TCP

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GPT50 envía posiciones GNSS y telemetría al endpoint y puerto compartido de Plaspy para que la plataforma pueda ingerir y mostrar el estado e historial del dispositivo. Plaspy recibe las actualizaciones automáticamente y las asocia con el registro del dispositivo en la plataforma.

- El dispositivo reporta ubicación y telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Puede elegir transporte UDP o TCP cuando el dispositivo requiere selección de transporte
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo en la plataforma
- Las fijaciones de posición, la telemetría de temperatura y el estado del dispositivo se reenvían a Plaspy para monitoreo en vivo y alertas
- Una vez que el servidor y el APN están configurados, el dispositivo será visible en Plaspy cuando se registre correctamente y envíe una actualización de posición

## Flujo de configuración común

1. Acceda al método de configuración oficial de EElink para el GPT50, normalmente comandos SMS o la utilidad de configuración del proveedor.
2. Verifique que la SIM esté instalada, tenga datos y SMS habilitados, y reúna los datos del APN para su operador.
3. Ingrese la dirección del servidor Plaspy como d.plaspy.com o, alternativamente, la IP 54.85.159.138.
4. Ajuste el puerto del servidor a 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en el dispositivo usando el método del fabricante; por ejemplo enviando comandos SMS.
6. Reinicie el dispositivo si el fabricante recomienda un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos en Plaspy y usando el comando de verificación de parámetros si está disponible.

## Ejemplos de comandos de configuración

Para configurar el GPT50 mediante SMS, el fabricante documenta estos comandos públicos. Envíe cada comando como un SMS al número del dispositivo en el orden indicado cuando el orden sea importante. Las etiquetas indican pasos opcionales o iniciales según corresponda.

- Reinicio inicial opcional a ajustes de fábrica
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
  - Forma básica solo con APN
```text
APN,[apn]#
```
  - Con usuario y contraseña de APN si son requeridos
```text
APN,[apn],[apnu],[apnp]#
```
  - Explicación: reemplace [apn] por el APN de su operador. Si su operador requiere usuario o contraseña, incluya [apnu] y [apnp] respectivamente.

- Configurar el servidor GPRS a Plaspy por dominio (recomendado)
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS a Plaspy por IP (alternativa)
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de posición cada 60 segundos
```text
TIMER,60#
```

- Comprobar parámetros actuales en el dispositivo
```text
PARAM#
```

Notas sobre estos comandos: el comando SERVER muestra las opciones por dominio y por IP. Use la forma por dominio para permitir resolución DNS, o la forma por IP si su configuración lo requiere. Envíe los comandos como mensajes SMS sencillos al número del dispositivo. El comando FACTORY# generalmente se usa solo cuando se desea un reinicio de fábrica inicial.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos y las funciones disponibles; verifique la sintaxis según la revisión de firmware del dispositivo cuando sea posible.
- El GPT50 soporta configuración vía SMS según la documentación pública; también pueden estar disponibles herramientas del proveedor o configuración OTA dependiendo de su proveedor.
- Elija transporte UDP o TCP de acuerdo con sus requisitos de conectividad; Plaspy admite ambos y detecta automáticamente el protocolo del rastreador.
- Mantenga a mano los marcadores del APN como [apn], [apnu] y [apnp] al preparar los comandos; proporcione las credenciales reales del operador cuando sean necesarias.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que la configuración de servidor y puerto es consistente en los despliegues.

## Por qué usar Plaspy con esta configuración

Usar el GPT50 con Plaspy ofrece una vía práctica para obtener visibilidad de activos a largo plazo, especialmente en despliegues que requieren mayor duración de batería y carcasas resistentes. Al configurar el dispositivo para reportar al servidor de Plaspy, las organizaciones obtienen seguimiento de posición en vivo, telemetría como temperatura y manejo centralizado de eventos que soporta funciones de antirrobo, supervisión de flota y monitoreo remoto de equipos.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para los comandos específicos más actuales, el comportamiento de firmware y las indicaciones del fabricante, verifique los detalles de configuración con EElink en https://www.eelink.com.cn/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
