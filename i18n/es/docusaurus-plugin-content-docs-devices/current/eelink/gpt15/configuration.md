---
slug: /eelink/gpt15/configuration
id: gpt15-configuration
sidebar_label: Configuration
title: EElink - GPT15 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el EElink GPT15 y conectarlo a Plaspy con servidor compartido y comandos SMS
keywords:
  - configuración EElink GPT15
  - configuración GPT15
  - GPT15 Plaspy configuración
  - ajustes servidor GPT15
  - configuración rastreador GPS Plaspy
  - configuración rastreador EElink
  - comandos SMS GPT15
  - configuración APN rastreador GPS
  - configuración dispositivo Plaspy
  - configuración rastreador equipaje GPS
---

# EElink - Configuración del GPT15

Esta página explica cómo configurar públicamente el rastreador EElink GPT15 para que se integre con la plataforma Plaspy. El contenido se centra en los ajustes de servidor prácticos y en los comandos SMS documentados por el fabricante que se utilizan con más frecuencia para apuntar el dispositivo a Plaspy y habilitar el seguimiento y las alertas en tiempo real.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. No obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GPT15 admite configuración remota vía aplicación o SMS; los ejemplos de comandos que se muestran abajo reflejan el flujo público de comandos SMS para la configuración inicial.

## Resumen de la configuración

El objetivo de este proceso es dejar el GPT15 listo para enviar de forma fiable datos de ubicación y estado a Plaspy. Los pasos típicos incluyen definir el APN del dispositivo, especificar el endpoint y puerto de Plaspy, seleccionar el transporte si es necesario y validar que el rastreador sea visible en la plataforma.

- Apuntar el GPT15 al endpoint de Plaspy para que entregue eventos de ubicación y sensores.
- Configurar el APN del dispositivo y asegurarse de que la SIM tenga datos habilitados para que las conexiones GPRS funcionen.
- Elegir UDP o TCP en el puerto 8888 si el dispositivo requiere selección de transporte.
- Definir un intervalo de reporte acorde a sus necesidades de visibilidad y a la batería.
- Validar los ajustes con una revisión de parámetros y confirmar que el dispositivo aparece en Plaspy.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com  
- IP del servidor: 54.85.159.138  
- Puerto: 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta los rastreadores compatibles sin necesidad de configurar el protocolo por dispositivo

## Requisitos típicos antes de la configuración

- Un dispositivo GPT15 cargado con una tarjeta SIM activa y servicio de datos configurado para GPRS
- Información del APN proporcionada por el operador de la SIM (usuario y contraseña solo si son necesarios)
- Acceso al método de configuración que provee EElink, como comandos SMS o la app oficial
- Una cuenta en Plaspy u acceso organizacional para confirmar que el rastreador aparece después de la configuración
- Un teléfono móvil capaz de enviar SMS al número de la SIM del dispositivo si se usa la configuración por SMS

## Cómo se conecta este rastreador a Plaspy

El GPT15 se configura para enviar su telemetría de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda recibir y mostrar los datos en mapas, historiales y alertas en tiempo real. Tras configurar el servidor y el APN en el dispositivo, el rastreador establece la conexión GPRS y reporta según el intervalo y los desencadenantes configurados.

- El rastreador envía posición y eventos de sensores a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Plaspy recibe la conexión entrante y detecta automáticamente el protocolo del rastreador
- Actualizaciones de ubicación, eventos de geocerca, alertas de manipulación y avisos de batería se reflejan en los paneles de Plaspy
- El transporte puede ser UDP o TCP en el puerto 8888 según la elección de configuración del dispositivo
- Plaspy normaliza la telemetría entrante para que el dispositivo quede visible para monitoreo e informes

## Flujo de configuración común

1. Acceda al método oficial de configuración de EElink: use la app móvil de EElink o envíe comandos SMS al GPT15 según las instrucciones del fabricante.  
2. Ingrese la dirección del servidor de Plaspy: utilice d.plaspy.com o la IP 54.85.159.138 en el campo SERVER.  
3. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).  
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP en el puerto 8888.  
5. Configure el APN del operador de la SIM y las credenciales APN necesarias (use marcadores como {{apn}}, {{apnu}}, {{apnp}} al preparar plantillas SMS).  
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante recomienda un reinicio.  
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia y la actividad reciente en su cuenta o tablero de Plaspy.

## Comandos de configuración de ejemplo

El GPT15 admite configuración vía SMS. Los siguientes comandos SMS corresponden a la secuencia públicamente documentada para la configuración básica. Envíe cada comando como un único SMS al número de la SIM del dispositivo. Mantenga los marcadores como {{apn}} donde se muestran.

- Reinicio de fábrica opcional (usar solo si necesita restaurar valores por defecto)
```text
FACTORY#
```

- Ajustar la zona horaria a UTC+0
```text
GMT,E,0#
```

- Establecer el APN del operador (reemplace los marcadores por los valores del operador; incluya usuario y contraseña solo si son necesarios)
```text
APN,{{apn}}# 
```
o con usuario y contraseña donde esté soportado:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: {{apn}} = nombre del APN, {{apnu}} = usuario del APN (opcional), {{apnp}} = contraseña del APN (opcional).

- Configurar el servidor GPRS para usar Plaspy por dominio (forma legible preferida)
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS por dirección IP (alternativa)
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo periódico de subida del GPS a cada 60 segundos
```text
TIMER,60#
```

- Verificar parámetros actuales
```text
PARAM#
```

Siga el orden de comandos cuando su instalación lo requiera: los comandos APN y SERVER suelen ser necesarios antes de que el dispositivo pueda abrir una conexión GPRS al endpoint de Plaspy. El comando FACTORY# es opcional y solo debe usarse si desea restaurar los valores de fábrica.

## Notas de configuración

- La configuración por SMS es un método público soportado para el GPT15; si prefiere la app móvil, consulte la documentación de EElink para el aprovisionamiento vía aplicación.
- Diferentes versiones de firmware y revisiones de hardware pueden modificar el soporte o la sintaxis de comandos; siempre contraste los comandos con el manual del dispositivo y la versión de firmware correspondiente.
- TCP frente a UDP es seleccionable en dispositivos que requieren un parámetro de transporte; elija según la fiabilidad y el entorno de red, aunque ambos son soportados por Plaspy en el puerto 8888.
- Tenga las credenciales APN listas antes de enviar los comandos de servidor para que el dispositivo pueda establecer la sesión GPRS con d.plaspy.com o 54.85.159.138.
- Tras aplicar los cambios, espere unos minutos a que el dispositivo se conecte y luego use PARAM# o la visibilidad en la plataforma Plaspy para confirmar el reporte.

## Por qué usar Plaspy con esta configuración

Usar el GPT15 con Plaspy permite que rastreadores compactos de activos y equipaje tengan visibilidad directa en una plataforma de monitoreo centralizada. Con los ajustes de servidor compartidos y la detección automática de protocolo, organizaciones y usuarios individuales pueden desplegar múltiples unidades GPT15 rápidamente y confiar en Plaspy para agregar eventos de posición, manipulación, batería y geocerca para el monitoreo operativo.

Para obtener más información sobre Plaspy, visite https://www.plaspy.com. Para los comandos específicos más actuales, notas de firmware y guía del fabricante, verifique los detalles en el sitio de EElink en https://www.eelink.com.cn/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
