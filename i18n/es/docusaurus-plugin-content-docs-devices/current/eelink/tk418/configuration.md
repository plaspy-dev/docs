---
slug: /eelink/tk418/configuration
id: tk418-configuration
sidebar_label: Configuration
title: EElink - TK418 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EElink TK418 en Plaspy con ajustes de servidor y comandos SMS para puesta en marcha
keywords:
  - Configuración EElink TK418
  - Instalación EElink TK418
  - Configuración servidor EElink TK418
  - EElink TK418 Plaspy
  - Configuración de rastreadores Plaspy
  - Configuración de rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración protocolo EELINK
  - Rastreador para gestión de flotas
  - Configuración GPS TK418
---

# EElink - TK418 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador EElink TK418 con Plaspy. Se concentra en los ajustes de servidor prácticos y en los comandos SMS que el fabricante publica y que se usan comúnmente para apuntar el dispositivo a Plaspy, de modo que la posición y los eventos aparezcan en la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El TK418 soporta configuración vía SMS y parámetros de registro GPRS en su conjunto de comandos públicos, que se reproducen abajo para su uso práctico.

## Resumen de configuración

Use este proceso de configuración para preparar un TK418 para comunicación fiable con Plaspy, validar la conectividad y hacer que el dispositivo sea visible en la plataforma. Los ejemplos a continuación reflejan el flujo de comandos SMS públicos que EElink documenta para la configuración del servidor GPRS y del APN.

- Apuntar el rastreador al endpoint del servidor de Plaspy para que envíe mensajes de posición y eventos a la plataforma.
- Configurar el APN y los parámetros GPRS para que el dispositivo pueda abrir una sesión de datos en la red celular.
- Ajustar el intervalo de reporte y la zona horaria para que los mensajes lleguen con la cadencia deseada.
- Opcionalmente realizar un reinicio de fábrica o una comprobación de parámetros al solucionar problemas o al incorporar nuevas unidades.
- Validar que el dispositivo sea visible en Plaspy después de la configuración y que eventos y telemetría lleguen como se espera.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Transporte soportado UDP o TCP en el puerto 8888 (el equipo puede configurarse para usar UDP o TCP)  
- Plaspy detecta automáticamente el protocolo del rastreador por lo que el endpoint del servidor puede ser el mismo para varios tipos de dispositivos

## Requisitos previos habituales

- Una unidad TK418 alimentada e instalada según las instrucciones del fabricante.  
- Una SIM activa con plan de datos y capacidad de SMS para enviar comandos de configuración.  
- Acceso a un teléfono con capacidad de enviar SMS o a un gateway SMS que pueda enviar comandos al dispositivo.  
- Los datos correctos del APN del operador móvil usado por la SIM.  
- Acceso a la guía oficial de configuración de EElink o a la herramienta del proveedor como referencia.  
- Posibilidad de reiniciar o cortar la alimentación del TK418 tras aplicar los ajustes si es necesario.

## Cómo se conecta este rastreador a Plaspy

El TK418 se configura para reportar mensajes de posición y eventos al endpoint y puerto compartido de Plaspy, de modo que Plaspy pueda ingerir mensajes del protocolo EELINK y presentarlos en paneles y reportes.

- El dispositivo se apunta al dominio d.plaspy.com o a la IP 54.85.159.138 usando el puerto 8888.  
- El TK418 puede configurarse para usar transporte UDP o TCP en el puerto 8888 según el dispositivo o la preferencia del instalador.  
- Plaspy detecta automáticamente el protocolo EELINK para parsear los mensajes entrantes.  
- Una vez conectado, la unidad envía actualizaciones periódicas de ubicación y los eventos configurados a Plaspy para visibilidad y alertas.  
- Plaspy muestra la telemetría entrante para que usted pueda monitorear el estado del dispositivo, la batería y los eventos reportados en tiempo real.

## Flujo de trabajo de configuración común

1. Prepárese consultando las instrucciones oficiales de configuración del EElink TK418 o la herramienta del proveedor para notas específicas del modelo.  
2. Verifique que el equipo tenga una SIM operativa y confirme los datos del APN del operador.  
3. Envíe o ingrese la dirección del servidor como d.plaspy.com o alternativamente la IP 54.85.159.138.  
4. Configure el puerto en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.  
5. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si se recomienda.  
6. Valide que el dispositivo reporte a Plaspy y confirme que los mensajes de ubicación y eventos lleguen a la plataforma.  
7. Si la telemetría no es visible, verifique el APN, las respuestas de confirmación por SMS y repita las comprobaciones de parámetros.

## Comandos de configuración de ejemplo

El TK418 admite configuración mediante SMS. Los siguientes comandos SMS públicos se presentan en el orden mostrado en la documentación de EElink. Envíelos como mensajes SMS al número del teléfono del rastreador. El comando de reinicio de fábrica es opcional y debe usarse solo cuando necesite borrar configuraciones previas.

1. Reinicio de fábrica inicial opcional
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

3. Configurar el APN del operador
```
APN,{{apn}}#
```
Si su operador requiere usuario o contraseña incluya los placeholders opcionales:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} es el valor del APN del operador.  
- {{apnu}} es el nombre de usuario del APN si se requiere.  
- {{apnp}} es la contraseña del APN si se requiere.

4. Establecer el servidor GPRS hacia Plaspy por dominio (preferido)
```
SERVER,1,d.plaspy.com,8888#
```
O establecer el servidor GPRS hacia Plaspy por IP
```
SERVER,0,54.85.159.138,8888#
```

5. Establecer el intervalo de actualización de posición cada 60 segundos
```
TIMER,60#
```

6. Comprobar los parámetros actuales en el dispositivo
```
PARAM#
```

Siga el orden indicado cuando corresponda. Después de enviar los comandos de servidor y APN, permita que el equipo se registre en la red móvil y establezca una sesión GPRS antes de validar la visibilidad en Plaspy.

## Notas de configuración

- Se muestra la configuración por SMS porque forma parte del conjunto de comandos públicos de EElink para el TK418; pueden existir otros métodos de configuración en herramientas del proveedor o en el firmware.  
- Elija UDP o TCP según sus preferencias de integración; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.  
- Los campos de APN, usuario y contraseña deben rellenarse con los valores proporcionados por el operador para habilitar las sesiones de datos.  
- Las revisiones de firmware y las variantes de hardware pueden cambiar nombres de comandos o comportamiento; consulte la documentación de EElink para la unidad que tenga.  
- Tras aplicar los ajustes, un reinicio del dispositivo o un ciclo de energía puede ayudar a que los nuevos valores de servidor y APN entren en vigor.

## Por qué usar Plaspy con esta configuración

Configurar el TK418 para que reporte a Plaspy proporciona a las organizaciones telemetría continua de ubicación y eventos para monitoreo de flotas, respuesta a incidentes y protección de activos. Al apuntar el dispositivo al endpoint y puerto compartido de Plaspy, puede centralizar los mensajes del protocolo EELINK en los paneles y alertas de Plaspy sin cambios de servidor por dispositivo.

Para saber más sobre Plaspy y cómo ingiere datos de dispositivos visite https://www.plaspy.com. Para notas específicas de configuración del dispositivo EElink TK418, cambios de firmware y referencias oficiales de comandos verifique la información actual en el sitio del fabricante https://www.eelink.com.cn/
