---
slug: /ruptela/fm_tco4_hcv/configuration
id: fm_tco4_hcv-configuration
sidebar_label: Configuration
title: Ruptela - FM-Tco4 HCV Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Ruptela FM-Tco4 HCV con Plaspy, con ajustes de servidor y pasos prácticos de integración
keywords:
  - Configuración Ruptela FM Tco4 HCV
  - Configuración rastreador Ruptela
  - Configuración rastreador Plaspy
  - Configuración servidor GPS
  - Configuración seguimiento de vehículos
  - Guía de integración telemática
  - Configuración datos tacógrafo
  - Configuración CANbus
  - Integración monitoreo de flotas
  - Configuración plataforma GPS
---

# Ruptela - FM-Tco4 HCV Configuración

Esta página describe el contexto público de configuración para usar el rastreador Ruptela FM-Tco4 HCV con Plaspy. Expone los ajustes de servidor y el flujo de trabajo práctico necesarios para apuntar el dispositivo a Plaspy y permitir que la ubicación y los datos del vehículo sean visibles en la plataforma. Use esta guía junto con la documentación y las herramientas de Ruptela para completar los pasos en el equipo.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que use el instalador. Siga las herramientas de Ruptela y las notas a continuación al aplicar estos ajustes compartidos de Plaspy.

## Resumen de la configuración

El proceso prepara el FM-Tco4 HCV para enviar telemetría y ubicación a Plaspy y verifica la conectividad para que el dispositivo aparezca en su cuenta Plaspy. El cambio principal en el equipo es apuntar al endpoint y puerto compartido de Plaspy; el resto de pasos confirma la comunicación y el comportamiento operativo.

- Configure el rastreador para reportar a Plaspy usando la dirección de servidor y el puerto.
- Verifique la selección de transporte y que el dispositivo pueda alcanzar el endpoint de Plaspy.
- Confirme alimentación, SIM y disponibilidad de red si utiliza datos móviles o configuración por SMS.
- Valide que el FM-Tco4 HCV aparezca en Plaspy y esté enviando los datos esperados.
- Documente la versión de firmware y las herramientas usadas durante la configuración para futuras tareas de soporte.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el equipo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de configurar

- Confirme que el FM-Tco4 HCV tiene alimentación estable y está instalado según las indicaciones de Ruptela.
- Asegúrese de contar con una tarjeta SIM operativa y datos móviles o capacidad de SMS si utiliza comunicación celular, ya que el FM-Tco4 HCV admite comandos por SMS.
- Tenga acceso al software oficial de configuración de Ruptela o al método de configuración soportado por su distribuidor o instalador.
- Verifique la versión de firmware del dispositivo y las notas de la versión que puedan afectar la conectividad o el comportamiento del protocolo.
- Mantenga a mano el número de serie del dispositivo y la revisión de hardware para registro y resolución de problemas.
- Prepare un plan de prueba breve para validar la solución GPS, los canales CANbus o tacógrafo y la notificación al servidor.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el FM-Tco4 HCV envía datos de ubicación y telemetría al endpoint y puerto compartido de Plaspy para que los operadores de flota puedan monitorear vehículos y eventos de forma centralizada. La detección automática de protocolos de Plaspy simplifica la integración porque la plataforma identifica el protocolo del rastreador cuando el dispositivo inicia la conexión.

- El rastreador establece una conexión saliente con d.plaspy.com o con la IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los datos entrantes en la plataforma.
- Una vez conectado, el dispositivo informa actualizaciones de posición y los flujos de datos de vehículo que soporte.
- Eventos y telemetría quedan visibles en Plaspy para monitoreo operativo e informes.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial de configuración de Ruptela suministrado por el proveedor o instalador.
2. En los ajustes de servidor del dispositivo introduzca el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888, ya que Plaspy utiliza el mismo puerto para los dispositivos compatibles.
4. Seleccione el transporte UDP o TCP si el dispositivo requiere que se elija uno.
5. Aplique o guarde los cambios de configuración en la herramienta de Ruptela o en la interfaz del dispositivo.
6. Reinicie el dispositivo si lo exige el firmware o la herramienta de configuración para activar los nuevos ajustes.
7. Valide que el FM-Tco4 HCV informa a Plaspy y aparece en la plataforma comprobando los mensajes entrantes y el estado del dispositivo.
8. Realice una prueba de campo corta para confirmar las fijaciones GPS, los canales CANbus o tacógrafo y que los sensores accesorios reportan como se espera.

## Ejemplos de comandos de configuración

El FM-Tco4 HCV puede configurarse usando las herramientas y métodos de Ruptela suministrados por el fabricante o por los instaladores. Los comandos exactos y la interfaz dependen de la versión del software de Ruptela y del firmware del dispositivo. Dado que los métodos varían, consulte el manual de configuración de Ruptela para la sintaxis de comandos y las instrucciones paso a paso específicas para su firmware y conjunto de herramientas.

Si utiliza configuración por SMS, siga las plantillas de Ruptela para componer los comandos de servidor y APN. Conserve los marcadores de posición como {{apn}}, {{apnu}} o {{apnp}} cuando los proporcione Ruptela y reemplácelos con los valores de su operador de red.

## Notas de configuración

- Las diferencias de firmware pueden cambiar nombres de menús y pasos exactos; siempre registre la versión de firmware usada durante la configuración.
- Elija UDP o TCP según la confiabilidad de la red y la preferencia del instalador; Plaspy acepta ambos en el puerto 8888.
- La configuración por SMS es una opción con este equipo, pero confirme que la SIM tenga SMS habilitado y que los comandos SMS sean compatibles con el firmware instalado.
- Debido a que Plaspy usa un puerto compartido y detección automática de protocolo, la tarea principal en el dispositivo es apuntar a d.plaspy.com o 54.85.159.138 y establecer el puerto 8888.
- Mantenga a mano las herramientas de configuración Ruptela y la documentación del instalador local para funciones avanzadas como mapeo CANbus o descargas de tacógrafo.

## Por qué usar Plaspy con esta configuración

Usar el Ruptela FM-Tco4 HCV con Plaspy ofrece una forma eficiente de recopilar ubicación de vehículos y telemetría avanzada para camiones y equipos de transporte en una plataforma central. La compatibilidad del FM-Tco4 HCV con CANbus, datos de tacógrafo, interfaces para accesorios y la detección de protocolo de Plaspy facilitan obtener información a nivel de vehículo y visibilidad operativa de la flota en un solo sistema.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para obtener los comandos específicos de configuración más actuales, notas de firmware y orientación de instalación consulte al fabricante en https://ruptela.com/ ya que el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo y deben verificarse con la documentación oficial de Ruptela.
