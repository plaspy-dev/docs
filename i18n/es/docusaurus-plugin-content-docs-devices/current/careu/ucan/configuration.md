---
slug: /careu/ucan/configuration
id: ucan-configuration
sidebar_label: Configuration
title: CAREU - UCAN Configuration
sidebar_class_name: menu_item_tracker
description: Guía técnica pública para integrar el rastreador CAREU UCAN con los servidores y la plataforma Plaspy
keywords:
  - configuración CAREU UCAN
  - instalación CAREU UCAN
  - CAREU UCAN Plaspy
  - configuración UCAN OBD II
  - instalación rastreador UCAN
  - configuración servidor Plaspy
  - integración rastreador Plaspy
  - configuración rastreador GPS vehículo
  - rastreo de flotas UCAN
  - OBD II rastreador Plaspy
---

# CAREU - Configuración UCAN

Esta página describe el contexto público de configuración para usar el rastreador GPS CAREU UCAN con Plaspy. Resume los ajustes prácticos del servidor y el flujo de trabajo de configuración que aplicará al aprovisionar dispositivos UCAN para la supervisión de flotas en Plaspy. Las indicaciones se centran en la información necesaria para apuntar el equipo a Plaspy y verificar la conectividad; las interfaces de usuario y herramientas del fabricante son la fuente autorizada para los pasos en el dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use este documento para preparar unidades UCAN para la conectividad con Plaspy y comprender los pasos de verificación, y consulte la documentación del fabricante para procedimientos específicos por modelo.

## Visión general de la configuración

El objetivo al configurar un CAREU UCAN para Plaspy es asegurarse de que la unidad transmita posición GNSS y telemetría OBD al endpoint de ingestión de Plaspy para que los administradores de flota tengan visibilidad inmediata en la plataforma. La configuración prepara principalmente el rastreador para la transmisión celular a Plaspy, valida que los paquetes lleguen a la plataforma y confirma que la telemetría y los eventos se muestren en el panel de Plaspy.

- Apuntar el UCAN al endpoint del servidor Plaspy y confirmar los ajustes del protocolo de transporte.
- Verificar que el dispositivo tenga conectividad celular y el aprovisionamiento necesario como SIM o eSIM.
- Validar que la telemetría OBD y los eventos del acelerómetro estén habilitados y reportando.
- Guardar y aplicar los ajustes en el dispositivo, luego verificar que el equipo aparezca y reporte en Plaspy.
- Resolver problemas de conectividad comprobando señal, configuración APN en el dispositivo y compatibilidad de firmware.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el dispositivo UCAN:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used to deliver data to the server
- Plaspy automatically detects the tracker protocol so the platform can accept compatible packets without per device protocol selection

Nota: Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará el protocolo automáticamente, por lo que solo necesita configurar el endpoint del servidor y el transporte en el lado del dispositivo.

## Requisitos típicos antes de comenzar la configuración

- Confirme que la unidad UCAN esté alimentada vía el puerto OBD II del vehículo y que esté en un estado listo para la configuración.
- Asegúrese de que el dispositivo tenga una suscripción celular activa o un perfil eSIM y cobertura de red adecuada.
- Acceso al método oficial de configuración CAREU, ya sea la herramienta del fabricante, la interfaz web o la lista de comandos SMS.
- Una cuenta en Plaspy y la capacidad de ver los reportes del dispositivo en la plataforma para la validación.
- Conocimiento de cualquier APN o ajustes de operador necesarios para la SIM o el plan eSIM instalado.
- Confirmar que el firmware del dispositivo esté actualizado o documentado como compatible con Plaspy si se planea configuración remota o FOTA.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, UCAN transmite ubicación y telemetría del vehículo al endpoint y puerto compartidos de Plaspy para que los datos de la flota aparezcan en la plataforma para monitoreo e informes. UCAN envía actualizaciones periódicas de posición y paquetes de eventos por la red celular y la plataforma los ingiere para su procesamiento.

- Las posiciones GNSS se envían al endpoint d.plaspy.com en el puerto 8888 usando el transporte seleccionado.
- La telemetría OBD II, incluyendo velocidad, RPM, odómetro y DTCs, se transmite junto con los datos de posición.
- Los eventos del acelerómetro, como frenadas bruscas, aceleraciones fuertes y choques, se reportan a Plaspy para alertas basadas en eventos.
- El dispositivo usa UDP o TCP para entregar paquetes según la configuración; Plaspy acepta ambos y detectará el protocolo correcto.
- Tras la configuración, verifique que la unidad UCAN aparezca en Plaspy y que los paquetes de posición y telemetría sean visibles en el feed del dispositivo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración CAREU o al software del fabricante para configurar el UCAN.
2. En los ajustes de servidor del dispositivo ingrese el servidor Plaspy como d.plaspy.com o use la dirección IP 54.85.159.138 si la herramienta lo requiere.
3. Configure el puerto del servidor en 8888 para que coincida con la ingestión de Plaspy.
4. Elija UDP o TCP como transporte si el dispositivo solicita selección de protocolo y guarde esa elección.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante o la interfaz UCAN.
6. Reinicie el dispositivo si la herramienta o la documentación indican que es necesario para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando el feed del dispositivo en el panel de Plaspy para actualizaciones de posición y telemetría.

## Ejemplos de comandos de configuración

Este documento de ejemplo no incluye comandos públicos SMS o CLI concretos. Los comandos exactos y la interfaz usada para aprovisionar el UCAN variarán según la herramienta del fabricante, la versión de firmware o el flujo de trabajo del instalador. Use la aplicación de configuración CAREU, la interfaz web o la referencia oficial de comandos del fabricante disponible para establecer el dominio del servidor d.plaspy.com (o 54.85.159.138), el puerto 8888 y elegir UDP o TCP según se requiera.

Si dispone de un conjunto oficial de comandos de CAREU o comandos SMS de instalador, aplíquelos en el orden que especifique el fabricante y luego confirme el reporte del dispositivo en Plaspy.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la disposición del menú de configuración o las opciones disponibles; verifique los pasos contra la revisión de firmware del UCAN antes de desplegar en masa.
- Si la herramienta de configuración del dispositivo permite seleccionar TCP o UDP, elija según la preferencia del instalador; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Mantenga a mano la información de APN y aprovisionamiento del operador; la conectividad celular debe estar activa para que el dispositivo alcance d.plaspy.com en el puerto 8888.
- Para flotas que usan aprovisionamiento eSIM, siga las indicaciones del proveedor de eSIM y confirme que el UCAN esté registrado en la red del operador esperado.
- Use las herramientas suministradas por el fabricante para la configuración remota y las actualizaciones FOTA para mantener la compatibilidad y minimizar la intervención en campo.

## Por qué usar Plaspy con esta configuración

Integrar CAREU UCAN con Plaspy brinda a los operadores de flota acceso inmediato a la ubicación del vehículo, telemetría OBD y reporte de eventos en una sola plataforma. La forma plug and play del factor OBD II reduce el tiempo de instalación, mientras que la telemetría del dispositivo y los eventos del acelerómetro respaldan los flujos de trabajo de mantenimiento, el monitoreo del comportamiento del conductor y la protección contra robos cuando se combinan con las alertas y los informes de Plaspy.

Para obtener más información sobre Plaspy y cómo gestiona los datos de los dispositivos, visite https://www.plaspy.com. Para las instrucciones de configuración más recientes por dispositivo, notas de firmware y herramientas de configuración del fabricante, confirme los detalles con el fabricante en https://www.systech-iot.com/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
