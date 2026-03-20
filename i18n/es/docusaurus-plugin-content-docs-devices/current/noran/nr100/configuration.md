---
slug: /noran/nr100/configuration
id: nr100-configuration
sidebar_label: Configuration
title: Noran - NR100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador OBD Noran NR100 con Plaspy usando ajustes de servidor y comandos SMS
keywords:
  - Noran NR100 configuración
  - Noran NR100 instalación
  - configuración servidor NR100
  - NR100 configuración Plaspy
  - configuración rastreador GPS Plaspy
  - configuración rastreador OBD II
  - configuración seguimiento vehicular
  - comandos SMS rastreador GPS
  - configuración rastreador gestión de flotas
  - guía conectividad NR100
---

# Noran - NR100 Configuración

Esta página explica cómo preparar el rastreador OBD Noran NR100 para integrarlo con la plataforma Plaspy. Aquí encontrará los ajustes de servidor compartidos que debe aplicar al dispositivo, los comandos SMS públicos que se usan frecuentemente para provisionar unidades NR100 y los pasos prácticos para dejar un NR100 en línea y habilitar el envío de telemetría y eventos en tiempo real a Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El NR100 admite reportes por SMS e Internet; los comandos SMS de ejemplo que se muestran a continuación reflejan las opciones públicas más comunes para configurar el APN, el servidor y el modo GPRS del NR100.

## Resumen de la configuración

Este proceso prepara el NR100 para comunicarse con Plaspy configurando el APN del operador, apuntando el rastreador al endpoint del servidor Plaspy y habilitando el reporte por GPRS. El objetivo es garantizar que la unidad establezca una conexión de datos y comience a enviar telemetría y alertas que Plaspy pueda recibir y mostrar.

- Configure el APN del operador móvil para que el NR100 use datos celulares.  
- Configure el servidor GPRS para apuntar el rastreador al servidor compartido de Plaspy.  
- Cambie el dispositivo al modo GPRS o Internet para que utilice datos en lugar de SMS en el envío regular de telemetría.  
- Verifique la identidad y la configuración actual con el comando de estado del NR100 para confirmar los detalles de conexión.  
- Valide que el dispositivo aparezca en Plaspy y reporte posiciones y eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte: UDP o TCP; elija el transporte que exija el dispositivo cuando lo solicite  
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la configuración

- Un dispositivo NR100 encendido e instalado en el puerto OBD II del vehículo o alimentado de otra forma y listo para configurar.  
- Una tarjeta SIM activa con datos habilitados y el APN correcto del operador móvil.  
- Acceso a un teléfono capaz de enviar SMS al dispositivo para la provisión por SMS, o la herramienta oficial de configuración de Noran si está disponible.  
- Conocimiento de la contraseña del dispositivo si se cambió desde el valor de fábrica. Los ejemplos públicos usan 000000 como contraseña por defecto.  
- El NR100 debe tener señal GSM adecuada en el lugar de instalación para establecer la conexión GPRS.  
- Acceso a la documentación del fabricante o soporte del proveedor para detalles específicos del dispositivo y notas de firmware.

## Cómo se conecta este rastreador a Plaspy

El NR100 se configura para enviar datos de ubicación y eventos al endpoint compartido y puerto de Plaspy para que la plataforma pueda recibir telemetría, visualizar recorridos y activar alertas. La detección automática de protocolo de Plaspy evita la necesidad de seleccionar una cadena de protocolo cuando el dispositivo está soportado, pero sí debe apuntar el dispositivo a la dirección y puerto del servidor Plaspy.

- El rastreador envía actualizaciones periódicas de ubicación y eventos del dispositivo por datos celulares (GPRS) al servidor Plaspy.  
- Alertas de eventos como exceso de velocidad, corte de alimentación y violaciones de geocerca se transmiten a Plaspy para su gestión inmediata.  
- El dispositivo se configura para usar el endpoint y puerto compartido de Plaspy para que todos los dispositivos soportados reporten de forma consistente.  
- Plaspy detecta automáticamente el protocolo del rastreador para decodificar los mensajes entrantes sin seleccionar un protocolo por dispositivo.  
- Chequeos regulares de conectividad permiten a los gestores de flota confirmar la telemetría y el estado en Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Noran o al procedimiento de configuración por SMS documentado por el fabricante o el proveedor.  
2. Configure el APN del dispositivo para la SIM instalada enviando el comando APN o introduciéndolo en la herramienta del proveedor.  
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el campo de servidor.  
4. Establezca el puerto del servidor en 8888.  
5. Si el NR100 requiere selección de transporte, elija UDP o TCP según las opciones del dispositivo.  
6. Aplique o guarde la configuración y, si el dispositivo lo requiere, reinicie el rastreador para activar los nuevos ajustes de red.  
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma, confirmando actualizaciones de ubicación y mensajes de evento.

## Comandos de configuración de ejemplo

El NR100 admite provisión por SMS con comandos enviados desde un teléfono móvil. Los ejemplos públicos a continuación usan la contraseña por defecto de fábrica 000000. Reemplace 000000 por la contraseña actual del dispositivo si fue modificada. Conserve los marcadores de posición y los parámetros opcionales tal como se muestran.

1. Establecer el APN del operador  
   - Use este comando para definir el APN de su SIM. [apn] es obligatorio. [apnu] y [apnp] son marcadores de posición opcionales para nombre de usuario y contraseña si el APN requiere autenticación.
```text
A000000,012,[apn],[apnu],[apnp]
```
   - Si no se requiere usuario ni contraseña del APN, envíe:
```text
A000000,012,[apn]
```

2. Configurar el servidor GPRS hacia Plaspy por IP y puerto  
```text
A000000,010,54.85.159.138,8888
```
   - También puede introducir el dominio de Plaspy en herramientas del proveedor cuando se acepten nombres de dominio como valor de servidor.

3. Cambiar el dispositivo al modo GPRS  
```text
A000000,011,1
```

4. Consultar la configuración y el estado actual del dispositivo  
```text
A000000,004
```
   - La respuesta de estado normalmente incluye el Id del dispositivo (primera palabra que comienza con NR), APN, servidor, puerto, estado GPRS, estado de la conexión GPRS y nivel de señal GSM.

Notas sobre los comandos anteriores:
- Los comandos de ejemplo usan la contraseña por defecto 000000 incluida tal como se muestra. Si la contraseña de su dispositivo es distinta, reemplace 000000 por la contraseña real.  
- Mantenga los marcadores de posición [apn], [apnu] y [apnp] como están al preparar los comandos; sustitúyalos por el APN y las credenciales opcionales de su operador.  
- El orden de los comandos es importante en la configuración inicial: primero establezca el APN, luego el servidor y finalmente active GPRS.

## Observaciones de configuración

- La configuración por SMS es compatible y se usa habitualmente para provisionar NR100, pero también pueden existir herramientas del proveedor o software de configuración. Use el método recomendado para su despliegue.  
- Las versiones de firmware y las revisiones de hardware pueden cambiar el formato y el comportamiento de los comandos. Verifique los comandos con la documentación oficial de Noran para su firmware específico.  
- Elija UDP o TCP según las opciones del firmware del dispositivo; Plaspy acepta ambos transportes y usa detección automática de protocolo en la entrada.  
- Todos los dispositivos en Plaspy usan el mismo puerto para la comunicación con el servidor, por lo que solo necesita configurar el puerto 8888 en los dispositivos soportados.  
- Conserve un registro de la contraseña del dispositivo utilizada para la configuración y cambie la contraseña por defecto cuando la seguridad operacional lo requiera.

## Por qué usar Plaspy con esta configuración

Usar el NR100 con Plaspy brinda visibilidad y gestión centralizada para flotas que requieren despliegue rápido y una instalación discreta en OBD II. Apuntar el NR100 al servidor Plaspy y habilitar el reporte por GPRS permite a Plaspy recibir datos de ubicación y eventos para seguimiento en tiempo real, reproducción histórica y flujos de alertas que ayudan a gestionar riesgo de robo, eficiencia de rutas y comportamiento del conductor.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Verifique los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de Noran http://www.norantracker.com/ ya que las instrucciones del proveedor y las capacidades del firmware pueden cambiar con el tiempo.
