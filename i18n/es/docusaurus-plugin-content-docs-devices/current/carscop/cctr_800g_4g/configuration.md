---
slug: /carscop/cctr_800g_4g/configuration
id: cctr_800g_4g-configuration
sidebar_label: Configuration
title: Carscop - CCTR-800G-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Carscop CCTR-800G-4G y apuntarlo a Plaspy
keywords:
  - Configuración Carscop CCTR-800G-4G
  - Configuración rastreador Carscop
  - CCTR-800G-4G Plaspy
  - Configuración rastreador GPS Carscop
  - Configuración servidor CCTR 800G 4G
  - Integración rastreador Plaspy
  - Configuración seguimiento de vehículos
  - Configuración seguimiento de activos
  - Ajustes servidor rastreador GPS
  - Configuración rastreador para gestión de flotas
---

# Carscop - Configuración CCTR-800G-4G

Esta página describe el contexto público de configuración para usar el rastreador Carscop CCTR-800G-4G con Plaspy. Se indican los ajustes compartidos del servidor Plaspy a los que debe apuntar el dispositivo y se resumen los pasos prácticos y comandos SMS que suelen emplearse para dejar el dispositivo listo para conectarse a la plataforma. Utilice esta guía para preparar el rastreador para el reporte en Plaspy y saber qué necesita antes de la integración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, la configuración exacta en el lado del fabricante puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El CCTR-800G-4G admite configuración por SMS como muestran los ejemplos públicos a continuación y puede apuntarse a Plaspy usando la IP o el dominio de subida comunes y los ajustes de puerto documentados aquí.

## Resumen de la configuración

El objetivo de este proceso es preparar el CCTR-800G-4G para comunicarse de forma fiable con Plaspy y validar la conectividad para que el dispositivo aparezca en su cuenta de Plaspy. Dependiendo del método de configuración seleccionado (SMS, herramienta web o software del proveedor), los pasos se centrarán en el APN y ajustes GPRS, la dirección del servidor y asegurarse de que el rastreador permanezca en línea.

- Apuntar el dispositivo al dominio o IP del servidor Plaspy para que los datos de ubicación y eventos se carguen en Plaspy.
- Configurar el APN y las credenciales necesarias para que el dispositivo establezca la conexión GPRS.
- Establecer la dirección y puerto del servidor utilizado por Plaspy, y elegir UDP o TCP si el dispositivo lo solicita.
- Mantener el dispositivo en línea y validar que la telemetría sea visible en Plaspy tras la configuración.
- Usar los comandos SMS proporcionados como un método sencillo y documentado por el fabricante para aplicar la configuración cuando el dispositivo soporte SMS.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Un dispositivo CCTR-800G-4G cargado y con alimentación, con acceso físico o por SMS para realizar la configuración.
- Una SIM celular válida con datos habilitados y la información APN correcta del operador móvil.
- Conocer la contraseña por defecto del dispositivo usada en los comandos; en el ejemplo público se utiliza 123456.
- Acceso a la lista de comandos SMS del fabricante o a la herramienta de configuración del proveedor para el CCTR-800G-4G.
- Una cuenta en Plaspy donde pueda confirmar que el dispositivo aparece y reporta después de la configuración.
- Una forma de enviar mensajes SMS al dispositivo si va a usar la configuración mediante SMS.

## Cómo se conecta este rastreador a Plaspy

El CCTR-800G-4G se configura para subir la telemetría GNSS y los eventos al endpoint y puerto del servidor Plaspy. Una vez aplicados el APN y los ajustes del servidor, el rastreador establece una sesión GPRS y envía su flujo de datos a Plaspy, donde la plataforma interpreta el protocolo y muestra posiciones y eventos.

- El rastreador envía actualizaciones periódicas de ubicación y mensajes de eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según el firmware del dispositivo y la elección de configuración.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo en la plataforma.
- Tras una configuración correcta, el dispositivo debería ser visible en Plaspy y reportar telemetría, alarmas y estado de batería según lo soportado.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante, como la lista de comandos SMS del proveedor, la herramienta web de configuración o el software de configuración proporcionado para el CCTR-800G-4G.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo según lo permita el método de configuración.
3. Establezca el puerto en 8888 y, si el dispositivo solicita, elija UDP o TCP como transporte.
4. Configure el APN y las credenciales del APN para la tarjeta SIM para que haya datos GPRS disponibles para las subidas.
5. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
6. Valide que el dispositivo reporte en Plaspy revisando su cuenta Plaspy y confirmando que se reciben telemetría y mensajes de estado.

## Ejemplos de comandos de configuración

El CCTR-800G-4G admite configuración vía SMS. Los siguientes comandos públicos provienen de la documentación del fabricante y respetan el orden recomendado para la configuración inicial. El ejemplo usa la contraseña por defecto 123456 según el contenido público. Reemplace los marcadores por los valores de su operador antes de enviar.

- Optional initial step to restore factory settings (use only when required):
```text
RESET*123456
```

- Set the time zone to UTC+0:
```text
TIMEZONE*123456*+00
```

- Set the operator APN (replace [apn] with your mobile operator APN):
```text
APN*123456*[apn]
```

- Set the APN username and password if required by the operator (replace placeholders as needed):
```text
USERNAME*123456*[apnu]*[apnp]
```

- Configure the GPRS server to point to Plaspy using the Plaspy server IP and port:
```text
IP*123456*54.85.159.138,8888
```

- Keep the tracker online to maintain the connection:
```text
KEEPONLINE*123456
```

Notas sobre los marcadores:
- [apn] es el nombre del APN del operador móvil.
- [apnu] es el nombre de usuario del APN si lo requiere su operador.
- [apnp] es la contraseña del APN si lo requiere su operador.

Envíe cada comando SMS al número del dispositivo en el orden apropiado para su despliegue. El comando de reset es opcional y solo debe usarse cuando necesite restaurar los valores de fábrica.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles o la sintaxis de los parámetros; verifique siempre la documentación más reciente del fabricante.
- La configuración por SMS es un método público común para este modelo, pero en algunos despliegues se pueden preferir herramientas de escritorio del proveedor u opciones OTA si están disponibles.
- Elija UDP o TCP según sus necesidades de instalación y cualquier orientación del firmware del dispositivo; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Los comandos de ejemplo usan la contraseña por defecto 123456 como aparece en ejemplos públicos; cambie la contraseña del dispositivo después de la configuración inicial según las recomendaciones del fabricante.
- Después de aplicar los ajustes, espere a que el dispositivo se registre en la red celular y confirme las subidas en Plaspy.

## Por qué usar Plaspy con esta configuración

Apuntar el Carscop CCTR-800G-4G a Plaspy ofrece un camino directo para el seguimiento en tiempo real, alertas de eventos y visibilidad de la flota. Usar los ajustes de servidor compartidos de Plaspy hace que la integración sea coherente entre dispositivos y reduce la complejidad de configuración, de modo que los equipos puedan concentrarse en el despliegue y la operación en lugar de en la traducción de protocolos.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos más recientes sobre configuración del dispositivo, notas de firmware y referencias oficiales de comandos, consulte el sitio del fabricante en http://www.carscop.com/ ya que el comportamiento de hardware y firmware puede cambiar con el tiempo.
