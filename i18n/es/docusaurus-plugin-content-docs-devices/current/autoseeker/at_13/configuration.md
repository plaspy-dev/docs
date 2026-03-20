---
slug: /autoseeker/at_13/configuration
id: at_13-configuration
sidebar_label: Configuration
title: Autoseeker - AT-13 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Autoseeker AT-13 a Plaspy con ajustes de servidor y flujo de configuración
keywords:
  - Configuración Autoseeker AT-13
  - Instalación Autoseeker AT-13
  - Integración AT-13 Plaspy
  - Configuración rastreador GPS Autoseeker
  - Configuración servidor AT-13
  - Rastreo vehicular AT-13
  - Guía configuración rastreador Autoseeker
  - Configuración plataforma seguimiento AT-13
  - Configuración rastreador Plaspy
  - Instrucciones rastreador GPS AT-13
---

# Autoseeker - Configuración del AT-13

Esta página ofrece el contexto público de configuración para usar el rastreador Autoseeker AT-13 con la plataforma Plaspy. Reúne los detalles prácticos y no propietarios que necesita para apuntar un AT-13 hacia Plaspy y comprobar que el dispositivo aparece en la plataforma. No sustituye el manual del dispositivo, sino que es una guía focalizada en los ajustes de servidor compartidos y el flujo de trabajo habitual al integrar el AT-13 con Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Use la documentación del fabricante y la herramienta de configuración del AT-13 para realizar la configuración en el dispositivo y, a continuación, aplique los ajustes de Plaspy que se describen a continuación.

## Resumen de la configuración

Este proceso prepara el AT-13 para enviar ubicación y estado a Plaspy y confirma que el dispositivo aparece en la plataforma. El objetivo es configurar el endpoint de red y el transporte del dispositivo, validar la conectividad y habilitar el monitoreo continuo mediante Plaspy.

- Configure el dispositivo para que reporte al endpoint y puerto del servidor Plaspy.
- Elija el método de transporte compatible con el dispositivo (UDP o TCP) y aplíquelo.
- Guarde y aplique los ajustes en el AT-13 usando el método oficial del fabricante.
- Reinicie o reinitialice el dispositivo si es necesario para que empiece a reportar.
- Verifique que el dispositivo aparece y reporta en Plaspy para tener visibilidad operativa.

## Ajustes de servidor de Plaspy

Al configurar el Autoseeker AT-13 para Plaspy, utilice estos valores públicos de servidor exactamente como se muestran:

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP pueden usarse en el puerto 8888 dependiendo de la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

Estos valores son el endpoint compartido que Plaspy proporciona para la integración de rastreadores. El AT-13 debe estar configurado para reportar a este endpoint y puerto para que Plaspy reciba la telemetría.

## Requisitos típicos antes de la configuración

- Asegúrese de que el AT-13 tenga suficiente alimentación y que la batería interna esté cargada para la configuración y las pruebas.
- Confirme que puede acceder al método oficial de configuración de Autoseeker o al software del AT-13.
- Tenga a mano los datos de identificación del dispositivo, como IMEI o número de serie, para el registro y la validación.
- Obtenga las credenciales de acceso o permisos necesarios para la herramienta de configuración proporcionada por el fabricante.
- Verifique que el rastreador tenga conectividad celular u otra conectividad de red según la documentación del dispositivo.
- Prepare una cuenta de Plaspy o acceso a la plataforma para validar una vez que el dispositivo comience a reportar al servidor.

## Cómo se conecta este rastreador a Plaspy

El Autoseeker AT-13 se configura para enviar su ubicación y estado al apuntar el endpoint de red del dispositivo al servidor y puerto compartido de Plaspy. Una vez que el rastreador se comunica con el endpoint, Plaspy detecta automáticamente el protocolo y hace que los datos entrantes estén disponibles en la plataforma.

- El AT-13 reporta a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El rastreador utiliza transporte UDP o TCP según esté configurado en el dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica la telemetría entrante.
- Una vez conectado, el dispositivo es visible en Plaspy para el monitoreo de ubicación, eventos y estado.
- El reporte continuo permite supervisión operativa y acceso a datos históricos de ubicación en Plaspy.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial de configuración de Autoseeker para el AT-13 según describe el manual del dispositivo.
2. En los ajustes de servidor o red del dispositivo, introduzca el endpoint de Plaspy usando d.plaspy.com o 54.85.159.138.
3. Ajuste el puerto del dispositivo a 8888 (es el mismo puerto utilizado para todos los dispositivos en Plaspy).
4. Elija UDP o TCP si el dispositivo requiere seleccionar un transporte, según las necesidades de la instalación.
5. Aplique o guarde la configuración dentro de la herramienta de Autoseeker o la interfaz del dispositivo.
6. Reinicie el AT-13 si las instrucciones del fabricante requieren un reinicio para activar los nuevos ajustes de red.
7. Valide que el dispositivo reporta a Plaspy buscando el equipo en la plataforma y confirmando la llegada de datos.

## Ejemplos de comandos de configuración

El método de configuración del AT-13 puede realizarse mediante la herramienta oficial de Autoseeker, la interfaz web de configuración o comandos proporcionados por el fabricante. Los comandos exactos varían según el firmware y la interfaz de configuración utilizada. Plaspy requiere que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que el transporte del dispositivo esté configurado en UDP o TCP según sea necesario. Plaspy detectará automáticamente el protocolo una vez que el rastreador envíe datos al puerto compartido.

## Notas de configuración

- Diferencias de firmware: la sintaxis de los comandos y la ubicación de los menús pueden diferir entre versiones de firmware; consulte siempre el manual del AT-13 para su revisión de firmware.
- Elección del transporte: TCP y UDP son compatibles en Plaspy en el puerto 8888; elija el transporte que favorezcan el dispositivo y la red, y pruebe ambos si tiene dudas.
- Herramienta del fabricante: utilice las herramientas oficiales de Autoseeker o métodos documentados para evitar secuencias de configuración no soportadas.
- Variaciones de mercado: las revisiones de hardware o el firmware específico del vendedor pueden mostrar campos de configuración diferentes o requerir pasos adicionales.
- Verificación: después de aplicar los ajustes, confirme que el dispositivo es visible y está transmitiendo en Plaspy antes de la instalación final.

## Por qué usar Plaspy con esta configuración

Configurar el Autoseeker AT-13 para que reporte a Plaspy ofrece una vía sencilla para obtener visibilidad en tiempo real y monitoreo remoto de vehículos. Con el formato compacto del AT-13, su montaje magnético y su larga autonomía en espera, organizaciones y usuarios pueden desplegar activos rastreados de forma discreta mientras confían en Plaspy para recolectar y presentar la información de ubicación y estado.

Learn more about how Plaspy supports device integrations and fleet visibility at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup information on the Autoseeker website https://autoseekergps.com/.
