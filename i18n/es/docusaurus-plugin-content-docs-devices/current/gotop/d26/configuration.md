---
slug: /gotop/d26/configuration
id: d26-configuration
sidebar_label: Configuration
title: GOTOP - D26 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP D26 con Plaspy usando servidor compartido y detección automática del protocolo
keywords:
  - Configuración GOTOP D26
  - Instalación GOTOP D26
  - GOTOP D26 Plaspy
  - Configuración rastreador GPS
  - Configuración servidor Plaspy
  - Configuración GPS D26
  - Configuración de seguimiento de flotas
  - Configuración rastreador GPS solar
  - Configuración rastreador de activos
  - Ajustes servidor rastreador
---

# GOTOP - D26: Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GOTOP D26 con la plataforma de gestión de flotas Plaspy. Resume los ajustes del servidor Plaspy que debe aplicar en el dispositivo o en la herramienta de configuración del proveedor y explica los pasos prácticos para preparar un D26 para que reporte y sea visible en Plaspy. Esta guía es un complemento técnico a la ficha del producto D26 y a la documentación del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint de Plaspy. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación oficial de GOTOP para procedimientos específicos del dispositivo.

## Resumen de la configuración

El objetivo de configurar un GOTOP D26 para Plaspy es garantizar que el rastreador abra de forma fiable una conexión al servidor de Plaspy y envíe posiciones GNSS, telemetría y alarmas para que el dispositivo aparezca en la plataforma. La configuración se centra en parámetros de red, selección de transporte y validación de que el dispositivo puede entregar datos en tiempo real y en búfer al endpoint compartido de Plaspy.

- Apunte el D26 al dominio o IP del servidor de Plaspy y al puerto compartido para que el dispositivo pueda iniciar las subidas.
- Elija el transporte (UDP o TCP) requerido por el firmware del dispositivo o por la política de despliegue.
- Confirme la conectividad celular, la provisión de SIM/APN y suficiente energía para un reporte fiable.
- Aplique y guarde los ajustes en el D26 y reinicie el dispositivo si el firmware requiere un ciclo de energía para abrir la conexión al servidor.
- Verifique que el dispositivo se registre y envíe datos a Plaspy para que sea visible en los mapas y en las alertas.

## Configuración del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP en el puerto 8888 según los requisitos del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta

## Requisitos típicos antes de configurar

- Una unidad GOTOP D26 con energía y accesible, con batería o carga solar suficiente para la configuración y las pruebas.
- Una SIM celular válida provisionada para datos (4G o GPRS según lo requiera el dispositivo) y los ajustes APN necesarios configurados.
- Acceso al método oficial de configuración GOTOP, como la herramienta web del fabricante, la app de configuración, comandos SMS o el software del proveedor.
- Los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) disponibles para ingresar en el dispositivo o en la herramienta del proveedor.
- Una cuenta de Plaspy o contacto administrador para confirmar que el dispositivo aparece en la plataforma durante la validación.
- Un área de prueba con cobertura celular adecuada para que el D26 pueda establecer conexión y transmitir datos.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el D26 usa su enlace celular para iniciar una conexión al endpoint compartido del servidor Plaspy y al puerto, y transmite posiciones GNSS, telemetría y eventos de alarma. Plaspy recibe el tráfico entrante, mapea el dispositivo, procesa eventos y almacena la telemetría para supervisión en vivo y reproducción histórica.

- El D26 se configura para reportar al endpoint de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El dispositivo emplea transporte UDP o TCP en el puerto 8888 según la selección hecha durante la configuración.
- Actualizaciones de ubicación en tiempo real y eventos de alarma (por ejemplo vibración, geovalla o SOS) se envían a Plaspy para su procesamiento inmediato.
- Los datos almacenados en búfer en el D26 se suben a Plaspy cuando la conectividad celular está disponible.
- La detección automática de protocolo de Plaspy identifica el protocolo del rastreador para que el mismo puerto pueda usarse en dispositivos compatibles.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración GOTOP o al software del proveedor para el D26 (herramienta web, app de configuración o conjunto de comandos SMS).
2. Ingrese el servidor de Plaspy como el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según la interfaz del dispositivo.
3. Ajuste el puerto del servidor a 8888 tal como lo requiere Plaspy.
4. Seleccione UDP o TCP como transporte si el dispositivo solicita elegir uno.
5. Aplique o guarde los cambios de configuración en la herramienta GOTOP o en la interfaz del dispositivo.
6. Reinicie el D26 si el firmware del dispositivo requiere un ciclo de energía para abrir la nueva conexión al servidor.
7. Valide que el dispositivo reporte a Plaspy confirmando la visibilidad en la plataforma y comprobando la llegada de telemetría y eventos.

## Ejemplos de comandos de configuración

Los comandos exactos y el método de configuración varían según el firmware GOTOP y las herramientas del proveedor. Algunas implementaciones del D26 se configuran con la app o la interfaz web de GOTOP, mientras que otras aceptan comandos SMS o aprovisionamiento por serie/USB. Dado que los conjuntos de comandos específicos del modelo difieren, consulte el manual de configuración GOTOP para la sintaxis de comandos y ejemplos relevantes a su revisión de firmware.

Al ingresar los ajustes del servidor, use:
- Dominio del servidor: d.plaspy.com
- O IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP según corresponda

Si su dispositivo o la herramienta del proveedor admite configuración por línea de comandos o SMS, siga los ejemplos oficiales de GOTOP para establecer servidor, puerto, transporte y parámetros APN.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la forma en que se ingresan servidor, puerto y transporte; confirme siempre el formato exacto en el manual GOTOP para su firmware.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, así que no cambie el puerto salvo que Plaspy Support lo indique.
- La elección entre TCP y UDP puede afectar la fiabilidad en redes con pérdidas; seleccione el transporte soportado y recomendado por su firmware y operador.
- Si el D26 usa una SIM celular, asegúrese de que los valores APN y de autenticación estén configurados correctamente en la herramienta de configuración GOTOP para que el dispositivo pueda establecer una sesión de datos.
- Use el búfer offline del dispositivo y las configuraciones de transmisión complementarias para preservar datos durante brechas de cobertura y revise esos ajustes durante la validación inicial.

## Por qué usar Plaspy con esta configuración

Emparejar el GOTOP D26 con Plaspy ofrece a los operadores visibilidad centralizada de activos remotos que se benefician de operación prolongada en exteriores y carga solar. El diseño robusto del D26, su rendimiento GNSS y el almacenamiento en búfer combinado con los mapas en vivo, las alertas y la telemetría de Plaspy proporcionan conciencia situacional confiable para contenedores, remolques, maquinaria y otros activos de campo.

Learn more about Plaspy and how it can support your D26 deployment at https://www.plaspy.com. For the latest GOTOP D26 device-specific configuration methods, firmware notes, and manufacturer guidance, verify details with the official GOTOP documentation at https://www.gotop.cc/. Device configuration steps and firmware behavior can change over time, so confirm the most current instructions with the manufacturer.
