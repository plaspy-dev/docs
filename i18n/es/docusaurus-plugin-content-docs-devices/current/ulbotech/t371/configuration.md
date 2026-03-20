---
slug: /ulbotech/t371/configuration
id: t371-configuration
sidebar_label: Configuration
title: Ulbotech - T371 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el rastreador Ulbotech T371 y conectarlo al servidor Plaspy para seguimiento y telemetría centralizados
keywords:
  - Configuración Ulbotech T371
  - Configuración T371 para Plaspy
  - Configuración de servidor Ulbotech T371
  - Configuración rastreador GPS Ulbotech T371
  - Configuración OBD II Ulbotech
  - Configuración de rastreador Plaspy
  - Guía de integración Plaspy
  - Seguimiento de flotas Ulbotech T371
  - Telemetría vehicular T371
  - Configuración plataforma T371
---

# Ulbotech - T371 Configuración

Esta página documenta el contexto público de configuración para usar el Ulbotech T371 con Plaspy. Resume los ajustes de servidor prácticos que requiere Plaspy, los pasos preparatorios habituales y el flujo de trabajo general necesario para apuntar un T371 a Plaspy para seguimiento y telemetría centralizados. La información aquí es práctica y está dirigida a instaladores, integradores y administradores de flota que preparan el dispositivo para la integración con Plaspy.

Plaspy emplea ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración por parte del fabricante para el T371 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que utilice. Use esta guía para entender el endpoint requerido por Plaspy y el flujo de trabajo común, y consulte la documentación de Ulbotech para comandos específicos del dispositivo y detalles de firmware.

## Resumen de configuración

Configurar el T371 para Plaspy prepara el dispositivo para enviar posiciones GNSS y telemetría del vehículo a Plaspy, de modo que usted pueda monitorear vehículos y diagnósticos de forma centralizada. El proceso de configuración se centra en apuntar el rastreador al endpoint de Plaspy, garantizar conectividad celular fiable y confirmar que el dispositivo sea visible dentro de la plataforma Plaspy.

- Configure el dispositivo para que reporte al endpoint y puerto del servidor Plaspy, de modo que los datos lleguen a su cuenta Plaspy.
- Verifique que el dispositivo tenga conectividad celular activa y una Micro USIM con datos operativa.
- Valide que el rastreador reporte posiciones GNSS y telemetría OBD a Plaspy después de la configuración.
- Guarde o aplique la configuración y reinicie el rastreador cuando sea necesario para activar los nuevos ajustes del servidor.
- Use la plataforma Plaspy para verificar la visibilidad del dispositivo, los campos de telemetría y el reporte de eventos.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de servidor Plaspy al configurar el Ulbotech T371:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Opciones de transporte soportadas UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y se apoya en la detección automática de protocolo para identificar el protocolo del rastreador tras la conexión.

## Requisitos típicos antes de la instalación

- Acceso al puerto OBD II del vehículo y un conector T371 OBD II correctamente instalado para alimentación y telemetría OBD.
- Una Micro USIM funcional instalada con un plan de datos activo y cobertura celular adecuada en la red de instalación.
- Acceso al método o software de configuración del fabricante para el T371, como la utilidad del proveedor vía micro USB o herramientas de aprovisionamiento aprobadas.
- Conocimiento de los ajustes APN de la SIM si la detección automática del APN no funciona con su operador.
- Una cuenta en Plaspy o acceso de administrador a la plataforma Plaspy para confirmar el aprovisionamiento del dispositivo y el mapeo de telemetría.
- Información sobre la versión de firmware del dispositivo y acceso a la documentación de Ulbotech para seguir cualquier paso específico por modelo o firmware.

## Cómo se conecta este rastreador a Plaspy

El Ulbotech T371 transmite posiciones GNSS y telemetría OBD a Plaspy a través de la red celular usando el módem celular del dispositivo. El T371 se configura para reportar al endpoint y puerto compartido de Plaspy para que la plataforma pueda ingerir ubicación, diagnósticos y datos de eventos para monitoreo centralizado.

- El dispositivo envía actualizaciones de ubicación y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según el método de configuración del rastreador; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el T371 se conecta, de modo que la plataforma interpreta correctamente los mensajes entrantes.
- La telemetría OBD II, como RPM, velocidad, estado del motor y códigos de diagnóstico, se envía junto con los datos GNSS para su visualización en Plaspy.
- Eventos del acelerómetro y el estado del inmovilizador interno pueden transmitirse para alertas y flujos de control en Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del Ulbotech T371 o al software del proveedor usando la herramienta del vendedor, la interfaz micro USB o el servicio de aprovisionamiento aprobado.
2. En los ajustes de servidor o de red del dispositivo, ingrese el servidor Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138.
3. Configure el puerto del equipo en 8888. Plaspy utiliza este mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Aplique o guarde la configuración en la herramienta de aprovisionamiento y confirme que los ajustes se escribieron correctamente.
6. Reinicie el T371 si el fabricante o la herramienta de aprovisionamiento lo solicita para activar los nuevos ajustes del servidor.
7. Valide que el dispositivo reporte a Plaspy revisando la visibilidad del dispositivo, las actualizaciones de posición recientes y la telemetría en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y las cadenas de aprovisionamiento para el Ulbotech T371 dependen del firmware del fabricante y del método de aprovisionamiento que use. Dado que los comandos y utilidades del fabricante varían entre revisiones de firmware y herramientas del proveedor, consulte las guías de configuración de Ulbotech para la sintaxis específica del T371.

Si usa una herramienta del proveedor, siga sus instrucciones para completar los siguientes ajustes de Plaspy en los campos equivalentes:
- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP

Si Ulbotech proporciona cadenas de comandos por SMS o serial para la configuración del servidor en su versión de firmware, ingrese el dominio o la IP y el puerto exactamente como se muestran arriba. Siempre conserve cualquier marcador de posición que el fabricante use para APN o credenciales.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la forma en que el T371 acepta los ajustes del servidor; confirme siempre la sintaxis de comando requerida en el manual del Ulbotech T371 para su versión de firmware.
- Muchas instalaciones dependen de la detección automática del APN del T371, pero tenga a mano los datos del APN del operador por si necesita configurar manualmente.
- Seleccionar TCP frente a UDP puede afectar las características de entrega de mensajes; elija el transporte requerido por su política de aprovisionamiento y confirme la entrega en Plaspy.
- El puerto del servidor Plaspy es universal entre los rastreadores soportados, lo que simplifica el aprovisionamiento al gestionar flotas mixtas.
- Para actualizaciones de firmware OTA y aprovisionamiento avanzado, siga los procedimientos FOTA de Ulbotech para evitar interrumpir la conectividad del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Ulbotech T371 con Plaspy ofrece a las flotas visibilidad centralizada de la ubicación del vehículo y telemetría OBD detallada. El factor de forma plug and play OBD II del T371 acelera la instalación, mientras que el módem celular Telit y el GNSS u‑blox proporcionan conectividad fiable y posicionamiento preciso para monitoreo en tiempo real y análisis en Plaspy.

Learn more about Plaspy and how the platform supports device integration at https://www.plaspy.com. For the most current device specific setup instructions, firmware notes, and manufacturer configuration commands, verify details with Ulbotech at http://www.ulbotech.com/ as manufacturer procedures and firmware behavior can change over time.
