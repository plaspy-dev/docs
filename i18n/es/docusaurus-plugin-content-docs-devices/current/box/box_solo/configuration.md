---
slug: /box/box_solo/configuration
id: box_solo-configuration
sidebar_label: Configuration
title: Box - Box Solo Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador Box Solo para Plaspy con ajustes de servidor compartidos y guía práctica para integrar el seguimiento de remolques
keywords:
  - Configuración Box Solo
  - Configuración Box Solo Plaspy
  - Configuración servidor Box Solo
  - Configuración rastreador remolque Box
  - Integración telemetría Box
  - Configuración rastreador Plaspy
  - Configuración plataforma GPS
  - Configuración seguimiento remolques
  - Seguimiento de flotas Box Solo
  - Configuración GPRS Box Solo
---

# Box - Configuración de Box Solo

Esta página documenta el contexto público de configuración para usar el rastreador de remolque BOX Solo con la plataforma Plaspy. Resume los ajustes de servidor compartidos que Plaspy espera y explica los pasos prácticos que normalmente deberá realizar en el dispositivo o con la herramienta del fabricante para que el BOX Solo pueda enviar posición y estado a Plaspy.

Plaspy emplea ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante para el BOX Solo pueden variar según la revisión de firmware, la revisión de hardware, el tipo de instalación y las herramientas específicas que use el proveedor para programar el dispositivo. Use esta página como guía práctica y consulte la documentación del fabricante del BOX para detalles específicos del equipo.

## Resumen de la configuración

El objetivo de este proceso es preparar el BOX Solo para que envíe sus datos GPS y de telemetría a Plaspy, de modo que el dispositivo aparezca en la plataforma y proporcione actualizaciones de posición continuas. Esto implica indicar el endpoint del servidor Plaspy en el rastreador, confirmar los ajustes de transporte y validar la conectividad una vez instalado el dispositivo.

- Apunte el BOX Solo al endpoint del servidor Plaspy y use el puerto compartido de Plaspy para todos los dispositivos
- Seleccione UDP o TCP como transporte si el dispositivo requiere elegir uno
- Asegúrese de que el dispositivo tenga conectividad GPRS activa para alcanzar el endpoint de Plaspy
- Guarde y aplique la configuración, y reinicie o reinicilice el rastreador si es necesario
- Valide que Plaspy reciba la primera posición y que el dispositivo sea visible en la plataforma

## Ajustes del servidor de Plaspy

Al configurar el BOX Solo para Plaspy, utilice los siguientes ajustes públicos del servidor exactamente como se indican:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y que la detección del protocolo se realiza de forma automática en el lado del servidor.

## Requisitos típicos antes de la configuración

- Confirme que el BOX Solo esté alimentado y cableado correctamente según la guía de instalación del fabricante
- Asegúrese de que el dispositivo tenga una SIM válida con un plan de datos activo y GPRS habilitado para datos por paquetes
- Obtenga acceso al método o al software de configuración del BOX proporcionado por el fabricante o el proveedor
- Tenga a mano los ajustes del servidor Plaspy para ingresar d.plaspy.com o 54.85.159.138 y el puerto 8888
- Disponer de una primera fijación de localización y señal GSM en el sitio de instalación para validar la conectividad

## Cómo se conecta este rastreador a Plaspy

El BOX Solo informa posiciones GPS y estado del dispositivo mediante GPRS al endpoint y puerto del servidor Plaspy para que el dispositivo sea visible y rastreable en la plataforma. Plaspy realiza la detección automática del protocolo, por lo que normalmente solo debe apuntar el rastreador al host y puerto correctos.

- El rastreador se configura para enviar datos a d.plaspy.com o directamente a 54.85.159.138
- Las comunicaciones usan el puerto compartido de Plaspy 8888 con transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo establece sesión
- Una vez configurado, el dispositivo transmite posiciones y eventos para que el activo aparezca en Plaspy
- La plataforma recopila y presenta datos de ubicación, estado y eventos para monitoreo operativo

## Flujo de configuración típico

1. Acceda al método oficial de configuración del fabricante BOX o al software suministrado con el BOX Solo
2. En los ajustes de servidor del dispositivo ingrese el dominio d.plaspy.com o la dirección IP 54.85.159.138
3. Configure el puerto del servidor en 8888, que es el que Plaspy utiliza para todos los dispositivos
4. Seleccione UDP o TCP como transporte si la configuración del BOX requiere elegir un protocolo de transporte
5. Guarde o aplique los cambios de configuración en la herramienta del fabricante
6. Reinicie o haga un ciclo de energía del BOX Solo si la herramienta o las instrucciones del dispositivo lo requieren
7. Valide que el dispositivo esté reportando a Plaspy y que el primer fix GPS y la telemetría aparezcan en la plataforma

## Ejemplos de comandos de configuración

El método de configuración del BOX Solo varía según la herramienta del fabricante, el firmware y las variantes regionales del firmware. Dado que el BOX Solo se suele configurar mediante el software oficial de BOX, un portal web o una herramienta de instalación, no se proporcionan cadenas de comandos exactas aquí. Use la herramienta del fabricante para ingresar el dominio o la IP del servidor Plaspy y establezca el puerto 8888 con UDP o TCP según corresponda.

Si su proveedor ofrece una interfaz de comandos por SMS o texto para la configuración inicial, debe usar los mismos valores de endpoint y puerto en esos comandos cuando la herramienta requiera servidor, IP y puerto. Consulte la documentación del BOX Solo o el soporte del proveedor para la sintaxis exacta de los comandos usada en su firmware.

## Notas de configuración

- BOX Solo soporta comunicaciones GSM y GPRS y puede configurarse para usar transporte TCP o UDP para el reporte
- Las revisiones de firmware y las herramientas de programación del proveedor varían según el mercado y el instalador; confirme el método exacto de configuración con su suministrador
- La elección entre TCP y UDP puede afectar el comportamiento de entrega según el firmware y las condiciones de la red; Plaspy admite ambos transportes en el puerto 8888
- Plaspy usa el mismo puerto para todos los dispositivos y realiza detección automática de protocolo, por lo que normalmente solo necesita configurar host y puerto
- Mantenga una copia de la configuración original del dispositivo antes de cambiarla para poder revertir si es necesario

## Por qué usar Plaspy con esta configuración

Usar el BOX Solo con Plaspy ofrece a los operadores de remolques y a los gestores de flota una vía sencilla para obtener reportes continuos de posición y visibilidad operativa. Al configurar el dispositivo para apuntar al servidor y puerto compartidos de Plaspy, el BOX Solo puede enviar datos de ubicación y eventos a una plataforma central que soporta monitoreo, historial y alertas.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup instructions and firmware details with the manufacturer at http://www.boxtelematics.com/ as product capabilities and configuration methods can change over time.
