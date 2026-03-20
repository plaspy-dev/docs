---
slug: /totemtech/at05/configuration
id: at05-configuration
sidebar_label: Configuration
title: Totemtech - AT05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Totemtech AT05 para conectarlo con Plaspy usando ajustes de servidor compartido y comandos SMS
keywords:
  - Configuración Totemtech AT05
  - Instalación Totemtech AT05
  - Totemtech AT05 Plaspy
  - Configuración rastreador GPS
  - Ajustes del servidor del rastreador
  - Configuración GPRS del rastreador
  - Configuración por SMS del rastreador
  - Configuración seguimiento de vehículos
  - Rastreador para gestión de flotas
  - Guía Totemtech para rastreadores
---

# Totemtech - AT05: Configuración

Esta página describe la configuración pública para usar el rastreador Totemtech AT05 con Plaspy. Explica los ajustes de servidor compartidos que requiere Plaspy, cómo aplicar esos valores en el equipo y los comandos SMS públicos disponibles en la documentación de Totemtech. Use esta guía para preparar el AT05 para comunicarse con Plaspy y comprender los pasos prácticos para que el dispositivo sea visible en la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos precisos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT05 soporta comandos por SMS y GPRS según la documentación pública, y los comandos que se muestran aquí reflejan el formato y los marcadores de posición proporcionados por el fabricante.

## Resumen de la configuración

Este proceso prepara al AT05 para enviar datos de ubicación y eventos al endpoint de Plaspy, de modo que el dispositivo sea visible y genere reportes en la plataforma. La configuración pública del AT05 suele emplear comandos SMS para establecer el APN, el servidor y los parámetros de reporte. Plaspy usa un puerto compartido y detección automática de protocolo, por lo que no necesita ajustar el protocolo en la plataforma.

- Configure el APN y los parámetros GPRS del dispositivo para que el rastreador pueda conectarse a la red móvil.
- Dirija el rastreador al endpoint de servidor de Plaspy para que los datos fluyan hacia la plataforma.
- Defina intervalos de actualización y comportamiento de acuse de recibo para controlar la cadencia de los reportes.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de aplicar los ajustes.
- Cuando corresponda, use los comandos SMS proporcionados por el fabricante para configurar el equipo directamente.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP — el AT05 puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma aceptará el protocolo soportado por el dispositivo

Nota: Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará el protocolo usado por el rastreador de forma automática.

## Requisitos típicos antes de la configuración

- Una unidad AT05 con alimentación y accesible, capaz de recibir comandos SMS o de ser configurada mediante la herramienta del fabricante.
- Una tarjeta SIM válida con datos móviles habilitados y los ajustes APN correctos para el operador.
- Acceso al formato de comandos SMS de Totemtech o a la utilidad de configuración proporcionada por el proveedor.
- Conocimiento de la contraseña del dispositivo (los ejemplos públicos usan la contraseña por defecto 000000).
- Un breve periodo para confirmar que el dispositivo reporta en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El AT05 transmite datos de ubicación y eventos a través de la red móvil al endpoint y puerto de Plaspy, permitiendo que la plataforma muestre trazas en tiempo real e historial, y reporte alarmas y estados. Cuando se configura para apuntar a Plaspy, el dispositivo establece una sesión de datos con el endpoint compartido y envía reportes periódicos según el intervalo configurado.

- El rastreador utiliza GPRS para abrir una conexión de datos hacia el endpoint de Plaspy.
- El dispositivo puede enviarse a un endpoint principal de Plaspy (y, según capacidades, admitir un servidor secundario de forma concurrente).
- Las actualizaciones de ubicación y los eventos se envían a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El rastreador puede usar UDP o TCP para entregar paquetes; Plaspy realiza la detección de protocolo de forma automática.
- Plaspy recibe los mensajes del dispositivo y muestra el rastreador en la plataforma cuando llegan los reportes.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Totemtech o al proceso de comandos SMS que provea el fabricante.
2. Ingrese la dirección del servidor de Plaspy especificando d.plaspy.com o la IP 54.85.159.138 en los ajustes del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el usado por todos los equipos en Plaspy.
4. Seleccione UDP o TCP en el dispositivo si requiere elegir explícitamente el transporte.
5. Aplique o guarde la configuración usando la herramienta del fabricante o enviando los comandos SMS correspondientes.
6. Reinicie el equipo si las instrucciones del proveedor lo indican o después de aplicar ajustes críticos de red.
7. Valide que el dispositivo reporta en Plaspy confirmando que los updates aparecen en la plataforma tras algunos intervalos de reporte.

## Comandos de ejemplo para configuración

La configuración pública del AT05 puede realizarse por SMS usando el formato de comandos del fabricante. Los ejemplos a continuación usan la contraseña por defecto 000000 según el contenido público de Totemtech. Mantenga los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos por los valores de su operador al enviar los comandos.

1. Reinicio de fábrica opcional (usar solo si necesita restaurar valores de fábrica)
```text
*000000,007#
```
2. Establecer el APN del operador (reemplace los marcadores con los valores de su operador)
```text
*000000,002,[apn],[apnu],[apnp]#
```
- [apn] = nombre del APN de su operador móvil
- [apnu] = usuario del APN (dejar vacío si no se requiere)
- [apnp] = contraseña del APN (dejar vacío si no se requiere)

3. Configurar el servidor GPRS hacia Plaspy usando IP y puerto y habilitar como primario (el último valor suele indicar índice de servidor o bandera de activación)
```text
*000000,003,54.85.159.138,8888,1
```
Esto dirige el equipo a la IP del servidor de Plaspy en el puerto 8888. También puede usar d.plaspy.com en lugar de la IP cuando el dispositivo soporte nombres de dominio.

4. Establecer comportamiento de ACK (acuse de recibo)
```text
*000000,019,1#
```

5. Establecer intervalo de actualización de posición a 60 segundos (ejemplo de cadencia de reporte)
```text
*000000,60,60,0,60#
```

Siga exactamente el formato de mensajes del dispositivo y verifique las respuestas del rastreador después de cada SMS cuando sea posible. Si su herramienta acepta nombres de dominio, puede usar d.plaspy.com en lugar de la dirección IP numérica.

## Notas de configuración

- Los comandos anteriores se basan en el formato público de SMS de Totemtech; las revisiones de firmware y los modelos regionales pueden variar los parámetros exactos y los comandos disponibles.
- El AT05 soporta métodos de configuración por GPRS y SMS según la documentación pública; elija el método que se ajuste a su instalación y a las capacidades del operador.
- Donde el dispositivo permite elegir el transporte, puede seleccionarse TCP o UDP; Plaspy detectará y aceptará cualquiera de los dos protocolos en el puerto 8888.
- Los ejemplos usan la contraseña por defecto 000000 tal como se publica; cambie las contraseñas del equipo según su política de seguridad después de la configuración inicial si el dispositivo lo permite.
- Los equipos Totemtech pueden admitir dos entradas de servidor; puede configurar un servidor secundario además de Plaspy si sus operaciones lo requieren.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Totemtech AT05 ofrece un camino sencillo para integrar los datos del dispositivo en una plataforma centralizada de seguimiento de flotas o activos. La capacidad del AT05 para enviar datos a un servidor configurado, combinada con el endpoint compartido de Plaspy y su detección automática de protocolo, simplifica la incorporación y reduce la cantidad de ajustes que debe gestionar en la plataforma.

Si desea conocer más sobre Plaspy y cómo la plataforma gestiona los reportes de dispositivos, visite https://www.plaspy.com. Para métodos de configuración específicos más actuales, comportamiento de firmware y referencias de comandos, verifique la información en el sitio de Totemtech en http://www.totemtek.com/ ya que las especificaciones del fabricante y las actualizaciones de firmware pueden afectar los pasos concretos.
