---
slug: /supermate/d11/configuration
id: d11-configuration
sidebar_label: Configuration
title: Supermate - D11 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Supermate D11 a Plaspy con ajustes de servidor compartidos y pasos prácticos
keywords:
  - configuración Supermate D11
  - instalación Supermate D11
  - Supermate D11 Plaspy
  - configuración rastreador Supermate GPS
  - ajustes servidor Supermate D11
  - configuración rastreador D11
  - integración Supermate D11
  - configuración rastreador Plaspy
  - seguimiento vehicular Supermate D11
  - rastreador de activos D11
---

# Supermate - Configuración D11

Esta página ofrece información pública sobre la configuración del rastreador GPS Supermate D11 para usarlo con la plataforma de seguimiento de flotas y activos Plaspy. Resume los ajustes de servidor que Plaspy requiere y explica los pasos habituales que usted realizará en el dispositivo o en las herramientas de configuración del proveedor para que el D11 envíe posiciones a Plaspy de manera confiable.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración del proveedor; consulte la documentación del dispositivo proporcionada por el fabricante para controles específicos.

## Resumen de la configuración

Este proceso prepara al D11 para enviar sus actualizaciones de ubicación y estado a Plaspy, de modo que el dispositivo aparezca en su cuenta y la plataforma procese la telemetría automáticamente.

- Apuntar el D11 al endpoint del servidor de Plaspy para establecer sesión con la plataforma.
- Configurar el transporte y el puerto del dispositivo para que los paquetes lleguen correctamente a Plaspy.
- Verificar la conectividad y el envío de telemetría para que el rastreador sea visible en Plaspy.
- Guardar y aplicar los ajustes en el dispositivo y confirmar que se reinicia o reconecta si es necesario.
- Validar la recepción de eventos y las actualizaciones básicas de movimiento dentro de Plaspy una vez que el dispositivo esté en línea.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el Supermate D11:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, por lo que siempre deberá usar el puerto 8888 al apuntar un rastreador a la plataforma.

## Requisitos habituales antes de la configuración

- Asegúrese de que el D11 tenga una fuente de alimentación fiable y esté encendido durante la configuración.
- Disponga de una tarjeta SIM operativa con un plan de datos activo y el APN correcto si el dispositivo usa datos móviles para reportar.
- Obtenga acceso al método de configuración oficial del fabricante, como la herramienta web del proveedor, la app móvil o la lista de comandos SMS.
- Confirme la versión de firmware del D11 y cualquier nota del proveedor que afecte los ajustes de servidor o transporte.
- Prepare los identificadores básicos que necesitará en Plaspy, como el IMEI o el número de serie del dispositivo, para poder registrar o localizar el equipo en la plataforma.

## Cómo se conecta este rastreador a Plaspy

El Supermate D11 envía su ubicación y eventos del dispositivo a Plaspy abriendo una conexión al endpoint compartido de Plaspy y enviando la telemetría al puerto de la plataforma. Una vez que el dispositivo apunta a Plaspy y tiene acceso a la red, Plaspy determina automáticamente el protocolo del rastreador e incorpora los datos en la plataforma.

- El D11 se configura para reportar al endpoint de Plaspy en d.plaspy.com o a la IP equivalente 54.85.159.138.
- Todo el tráfico del dispositivo para Plaspy se envía al mismo puerto de la plataforma, 8888.
- El dispositivo puede configurarse para usar transporte UDP o TCP según sus opciones y la fiabilidad de la red.
- Plaspy autodescubre el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo específico en la plataforma.
- Una vez conectado, las actualizaciones de posición y los mensajes de eventos son visibles en Plaspy para monitoreo y alertas.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Supermate, ya sea la interfaz web del proveedor, la app de configuración o la utilidad del fabricante.
2. Ingrese el endpoint de servidor de Plaspy especificando d.plaspy.com o la dirección IP 54.85.159.138 en el campo de servidor.
3. Establezca el puerto del dispositivo en 8888; recuerde que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija transporte UDP o TCP si el dispositivo requiere selección de transporte y las condiciones de la red lo justifican.
5. Aplique o guarde los cambios de configuración en la herramienta del dispositivo o envíe los comandos de configuración al rastreador.
6. Reinicie el dispositivo si las instrucciones del fabricante recomiendan un reinicio para que los ajustes surtan efecto.
7. Verifique que el D11 esté reportando a Plaspy buscando el dispositivo en su cuenta y confirmando actualizaciones de ubicación en tiempo real.

## Ejemplos de comandos de configuración

Los comandos exactos y el método para enviarlos varían según la versión de firmware del Supermate y la herramienta de configuración del proveedor. Los fabricantes suelen ofrecer varias opciones, como una utilidad de configuración para escritorio, una app móvil o sintaxis de comandos SMS. Debido a que los comandos pueden diferir entre versiones de firmware y regiones, consulte el manual del Supermate D11 o la documentación del proveedor para el conjunto y el formato precisos de los comandos.

Si su dispositivo usa SMS para la configuración, el manual del proveedor indicará los comandos SMS necesarios y los marcadores de posición como valores de APN. Si necesita establecer valores de APN vía una herramienta de configuración, conserve marcadores como [apn], [apnu] o [apnp] y reemplácelos por los datos de su proveedor de SIM cuando se le solicite.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de configuración disponibles; siempre consulte las notas de la versión del D11 antes de modificar ajustes.
- TCP puede ser preferible en redes poco confiables donde el orden y la entrega de paquetes son importantes, mientras que UDP es común para reportes de ubicación con baja latencia; elija el transporte según la red y la guía del dispositivo.
- Las prácticas de instalación varían por región y proveedor; algunos suministradores entregan dispositivos preconfigurados listos para conectarse a Plaspy de inmediato.
- Tenga a mano el IMEI o el identificador del dispositivo para mapearlo rápidamente en Plaspy después de la primera conexión del rastreador.
- Consulte siempre la documentación oficial de Supermate para la sintaxis de SMS y comandos si planea usar métodos de configuración basados en texto.

## Por qué usar Plaspy con esta configuración

Usar el Supermate D11 con Plaspy ofrece a organizaciones y usuarios una vía sencilla para obtener visibilidad en tiempo real, monitoreo de eventos y control operativo. Apuntar el D11 al endpoint compartido de Plaspy permite a la plataforma detectar automáticamente el protocolo del rastreador e ingerir la telemetría del dispositivo, de modo que las ubicaciones y el estado de los activos queden disponibles para seguimiento, alertas por geocerca e informes.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest manufacturer setup details and firmware notes at the Supermate website http://www.gps-summit.com/. Device specific configuration methods and firmware behavior can change over time so check the manufacturer's documentation to confirm current instructions.
