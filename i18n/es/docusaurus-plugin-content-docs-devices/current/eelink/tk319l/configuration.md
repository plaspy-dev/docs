---
slug: /eelink/tk319l/configuration
id: tk319l-configuration
sidebar_label: Configuration
title: EElink - TK319‑L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EElink TK319‑L con Plaspy, incluye ajustes de servidor, comandos SMS, APN y flujo de instalación
keywords:
  - configuración EElink TK319-L
  - instalación TK319-L
  - tracker EElink Plaspy
  - configuración servidor TK319-L
  - configuración rastreador GPS EElink
  - configuración SMS TK319-L
  - configuración dispositivo Plaspy
  - rastreo vehicular TK319-L
  - ajustes APN TK319-L
  - configuración protocolo EELINK 2.0
---

# EElink - TK319‑L Configuración

Esta página aborda el contexto público de configuración para usar el rastreador EElink TK319‑L con Plaspy. Consolida los ajustes del servidor Plaspy que necesitará, describe el flujo de configuración práctico y presenta los comandos SMS publicados para el TK319‑L para que prepare el dispositivo y reporte al endpoint compartido de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan conexiones entrantes. Sin embargo, los pasos exactos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK319‑L admite comandos de configuración por SMS en su guía pública y puede prepararse para reportar a Plaspy usando esos comandos o las herramientas de configuración del fabricante.

## Resumen de la configuración

Preparar el TK319‑L para Plaspy se centra en habilitar una comunicación fiable entre el dispositivo y el servidor, confirmar el acceso a la red y validar el reporte dentro de la plataforma Plaspy. Use el método oficial de EElink o los comandos SMS que se muestran a continuación como base para la configuración y confirme la visibilidad del dispositivo en Plaspy una vez aplicados los cambios.

- Configure el APN del dispositivo para que pueda acceder a la red de datos celulares y enviar telemetría.  
- Establezca el endpoint del servidor Plaspy para que el rastreador envíe posición y eventos a d.plaspy.com en el puerto requerido.  
- Seleccione el transporte (UDP o TCP) si la configuración del dispositivo solicita elegir protocolo.  
- Defina el intervalo de reporte (por ejemplo 60 segundos) para controlar la frecuencia de actualizaciones hacia Plaspy.  
- Valide los parámetros y confirme que el dispositivo aparezca como un rastreador activo en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when data arrives

## Requisitos típicos antes de la configuración

- Energice el dispositivo y confirme que funciona y es accesible en la ubicación de la instalación.  
- Una tarjeta SIM válida con datos habilitados y la información de APN correcta para el operador celular.  
- Acceso al método oficial de configuración de EElink o un teléfono con capacidad para enviar SMS para ejecutar los comandos.  
- Una cuenta en Plaspy y la posibilidad de agregar o confirmar el rastreador dentro de la plataforma Plaspy.  
- Comprender si utilizará UDP o TCP para su despliegue en caso de que el rastreador requiera una elección explícita.

## Cómo se conecta este rastreador a Plaspy

El TK319‑L se configura para reportar ubicación, alarmas y telemetría de entradas/salidas a Plaspy apuntando al endpoint y puerto compartidos de Plaspy. Una vez que el rastreador esté dirigido al servidor Plaspy y la conectividad de red y el APN sean correctos, Plaspy ingiere los mensajes del rastreador y mapea los campos en tableros y alertas.

- El dispositivo envía actualizaciones periódicas de posición y telemetría a d.plaspy.com en el puerto 8888.  
- Plaspy recibe mensajes de alarma y eventos por exceso de velocidad, corte de energía y otras entradas configuradas.  
- La telemetría y las entradas de periféricos se procesan en Plaspy para informes y evaluación de reglas.  
- Plaspy detecta automáticamente el protocolo entrante para que los mensajes del dispositivo se interpreten sin necesidad de seleccionar manualmente el protocolo en la plataforma.  
- El transporte puede ser UDP o TCP según la configuración del rastreador; el destino sigue siendo el endpoint y puerto compartidos de Plaspy.

## Flujo común de configuración

1. Acceda al método oficial de configuración de EElink o al software correspondiente, o prepare un teléfono con capacidad para enviar SMS para ejecutar comandos.  
2. Verifique que el dispositivo tenga una SIM operativa y que conozca los ajustes de APN correctos para su operador.  
3. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 en la configuración del dispositivo.  
4. Configure el puerto del servidor en 8888 en la configuración del rastreador.  
5. Si el rastreador requiere selección de transporte, elija UDP o TCP según sus requisitos de red y del dispositivo.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo recomienda o si es necesario.  
7. Valide que el dispositivo reporte a Plaspy comprobando el estado y las posiciones recientes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los siguientes comandos SMS son los públicos publicados para el TK319‑L. Envíelos como mensajes SMS desde el número administrador del dispositivo, conservando los marcadores de posición donde se indican. Los comandos se listan en el orden recomendado para la configuración inicial.

- Optional initial factory reset (use only when needed)
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN
```
APN,{{apn}}# 
```
If your operator requires APN username or APN password, use the extended form:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
Note: {{apn}} is the operator APN string. {{apnu}} and {{apnp}} are optional APN username and password placeholders.

- Set the GPRS server using the domain (recommended for dynamic IP setups)
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server using the Plaspy server IP
```
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to 60 seconds
```
TIMER,60#
```

- Verify current parameters
```
PARAM#
```

Use the SERVER command with either the domain or the IP depending on your preference or network characteristics. The reset command is optional and should be used only when you intend to restore factory defaults.

## Notas de configuración

- Revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las funcionalidades disponibles; confirme la sintaxis con la documentación más reciente de EElink.  
- La elección entre TCP y UDP puede afectar el comportamiento de entrega; seleccione el transporte que prefieran su red y operaciones y confirme si el dispositivo requiere un comando de transporte explícito.  
- La configuración por SMS está soportada por los comandos publicados arriba; puede existir configuración alternativa mediante herramientas de EElink o métodos OTA.  
- Mantenga los marcadores de APN exactamente como están y reemplácelos por su APN, nombre de usuario y contraseña del operador cuando sea necesario.  
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los mensajes llegan al servidor.

## Por qué usar Plaspy con esta configuración

Usar el TK319‑L con Plaspy ofrece una vía práctica para centralizar la ubicación de vehículos, alarmas y telemetría de entradas/salidas dentro de una plataforma unificada de gestión de flotas. Apuntar el rastreador a d.plaspy.com (o a la IP de Plaspy) en el puerto compartido y confirmar el APN y los intervalos de reporte hace que el dispositivo sea visible para seguimiento en vivo, alertas e informes usados por equipos de operaciones y seguridad.

Para conocer más sobre Plaspy y cómo su flota puede usar esta configuración, visite https://www.plaspy.com. Para métodos de configuración específicos más recientes, comportamientos de firmware y guías del fabricante, verifique los detalles en el sitio oficial de EElink https://www.eelink.com.cn/.
