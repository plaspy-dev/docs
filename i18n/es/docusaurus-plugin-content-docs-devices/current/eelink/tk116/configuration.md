---
slug: /eelink/tk116/configuration
id: tk116-configuration
sidebar_label: Configuration
title: EElink - TK116 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EElink TK116 y enviarlo a los servidores de Plaspy
keywords:
  - configuración EElink TK116
  - configuración TK116
  - configuración servidor TK116
  - configuración Plaspy TK116
  - configuración rastreador GPS EElink
  - configuración servidor rastreador GPS
  - seguimiento de flotas TK116
  - comandos SMS TK116
  - configuración de dispositivo Plaspy
  - integración rastreador EElink
---

# EElink - Configuración del TK116

Esta página describe el contexto público de configuración para usar el rastreador GPS EElink TK116 con Plaspy. Consolida los pasos prácticos y comandos SMS públicamente disponibles que se emplean con frecuencia al preparar el TK116 para enviar posiciones y eventos a los servidores de Plaspy. Use esta guía para comprender los ajustes de servidor necesarios y el flujo de trabajo típico antes de aplicar herramientas o comandos del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK116 admite configuración por SMS en compilaciones de firmware comunes y el ejemplo de modelConfiguration que se muestra a continuación presenta un flujo estándar de comandos SMS ampliamente usado para apuntar el dispositivo a los servidores de Plaspy.

## Resumen de la configuración

Esta configuración prepara al TK116 para comunicarse con Plaspy, de modo que la ubicación, el estado y los eventos de alarma sean visibles en la plataforma Plaspy. El proceso se centra en configurar el APN, apuntar el rastreador a los endpoints de Plaspy, ajustar los intervalos de reporte y verificar la configuración.

- Configurar el APN del dispositivo para que pueda usar datos GPRS para el envío de información.
- Establecer el endpoint del servidor al dominio o IP de Plaspy y el puerto compartido que utiliza Plaspy.
- Seleccionar el transporte (UDP o TCP) en el dispositivo si el firmware lo requiere.
- Definir un intervalo de reporte para controlar la frecuencia de actualizaciones y el consumo de batería.
- Verificar el reporte activo con el comando de verificación PARAM y confirmar la visibilidad en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Estos son los endpoints públicos de Plaspy y los ajustes que debe introducir en el TK116 o mediante SMS para que el dispositivo entregue telemetría a la plataforma Plaspy.

## Requisitos típicos antes de la configuración

- Dispositivo alimentado con una fuente externa estable o batería interna cargada.
- Una tarjeta SIM 2G válida provista para datos y SMS según lo requiera el operador local.
- APN y, opcionalmente, usuario y contraseña del APN proporcionados por el operador móvil.
- Acceso al método de comandos SMS del fabricante o a la herramienta de configuración del TK116.
- El IMEI o número de serie del TK116 disponible para el registro del dispositivo en Plaspy.
- Una cuenta en Plaspy o un contacto que confirme que el dispositivo aparece en la plataforma después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con los ajustes de servidor de Plaspy, el TK116 envía sus mensajes de ubicación y eventos a través de la red de datos móviles al endpoint y puerto compartido de Plaspy. Plaspy recibe y analiza automáticamente el protocolo del rastreador para que el dispositivo aparezca en el mapa de flotas y en los paneles de informe.

- Las actualizaciones de posición y la telemetría se transmiten a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El rastreador puede usar transporte UDP o TCP para comunicarse con el puerto de Plaspy según la opción del dispositivo.
- Las alarmas e informes de eventos como ACC, choque, vibración y SOS se reenvían a Plaspy para generar alertas.
- Plaspy proporciona visibilidad en tiempo real, trazas históricas y registro de eventos una vez que el dispositivo está reportando.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración EElink para el TK116, como la interfaz de comandos SMS o la herramienta de configuración del fabricante.
2. Introduzca los datos del APN proporcionados por el operador móvil usando la sintaxis del comando APN.
3. Configure el servidor GPRS para apuntar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 y establezca el puerto 8888.
4. Seleccione el transporte UDP o TCP en el dispositivo si requiere una selección explícita.
5. Defina el intervalo de reporte (por ejemplo cada 60 segundos) y cualquier opción de zona horaria o temporizador necesaria.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige.
7. Valide el reporte del dispositivo enviando el comando de verificación PARAM y confirmando que el rastreador aparece en Plaspy.

Si utiliza el método por SMS que se muestra a continuación, aplique los comandos en el orden presentado y verifique cada paso antes de continuar.

## Ejemplo de comandos de configuración

El TK116 suele aceptar comandos SMS para la configuración. Estos comandos públicos se muestran en el orden típico usado para preparar un dispositivo para Plaspy. Los comandos se envían como mensajes SMS de texto plano al número de la SIM del rastreador.

- Reset de fábrica opcional (usar solo cuando sea necesario o en la configuración inicial)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,{{apn}}#
```
- Si el APN requiere usuario y contraseña inclúyalos como marcadores
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Explicación: {{apn}} es el nombre del APN de su operador móvil. {{apnu}} es el usuario del APN si es necesario. {{apnp}} es la contraseña del APN si corresponde.)

- Establecer el servidor GPRS al dominio de Plaspy usando el puerto 8888
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente, establecer el servidor GPRS a la IP de Plaspy usando el puerto 8888
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de posición a 60 segundos
```text
TIMER,60#
```

- Consultar parámetros actuales para verificar la configuración
```text
PARAM#
```

Envíe estos comandos SMS al TK116 en el orden indicado al realizar la configuración inicial. Confirme que cada comando es aceptado por el dispositivo antes de continuar.

## Notas de configuración

- La configuración por SMS es comúnmente compatible con el TK116, pero algunos instaladores usan la herramienta del fabricante o una interfaz USB/serie cuando está disponible; siga el método apropiado para su hardware y firmware.
- Las versiones de firmware y las variantes regionales de hardware pueden cambiar los comandos disponibles o el formato exacto; consulte la documentación de EElink para el firmware que tenga su dispositivo.
- Elija UDP o TCP en función de la fiabilidad de la red local y las recomendaciones de su operador; ambos son aceptados por Plaspy en el puerto compartido 8888.
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que use el puerto 8888 en todas las configuraciones.
- Mantenga los marcadores del APN exactamente como se muestran y verifique las credenciales del operador antes de enviar comandos para evitar problemas de conectividad.

## Por qué usar Plaspy con esta configuración

Usar el EElink TK116 con Plaspy ofrece a las organizaciones una vía práctica para obtener visibilidad en tiempo real de ubicaciones, alertas de eventos e informes operativos. Cuando el rastreador está correctamente apuntado a los servidores de Plaspy y se configuran el APN y el intervalo de reporte, los gestores de flota pueden confiar en la telemetría continua y la entrega de alarmas para monitoreo, despacho y respuesta a incidentes.

Learn more about Plaspy and how it can be used with devices like the TK116 at https://www.plaspy.com. For device specific commands, firmware notes, and the latest configuration instructions verify details on the manufacturer site https://www.eelink.com.cn/ as methods and firmware behavior can change over time.
