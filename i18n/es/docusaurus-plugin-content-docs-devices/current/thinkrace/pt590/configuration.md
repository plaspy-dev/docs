---
slug: /thinkrace/pt590/configuration
id: pt590-configuration
sidebar_label: Configuration
title: ThinkRace - PT590 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador para mascotas ThinkRace PT590 con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - configuración ThinkRace PT590
  - instalación ThinkRace PT590
  - PT590 configuración Plaspy
  - configuración rastreador GPS PT590
  - configuración rastreador ThinkRace
  - configuración rastreador para mascotas PT590
  - configuración rastreador GPS para mascotas
  - configuración servidor Plaspy
  - detección protocolo rastreador
  - integración plataforma GPS
---

# ThinkRace - Configuración del PT590

Esta página documenta el contexto público de configuración para usar el rastreador para mascotas ThinkRace PT590 con Plaspy. Aquí se detallan los ajustes prácticos del servidor y el flujo de trabajo necesarios para apuntar el dispositivo a Plaspy y lograr que los informes de posición y estado sean visibles en la plataforma. El PT590 es descrito por el fabricante como un rastreador compacto para mascotas con posicionamiento en dos modos, resistencia IP67, seguimiento en tiempo real y monitoreo remoto; esta guía usa esa descripción pública para mostrar cómo conectar el dispositivo a Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo envía datos. Los pasos exactos del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Utilice las indicaciones siguientes para aplicar el endpoint y los parámetros de transporte de Plaspy, y verifique el comportamiento con la documentación del fabricante según sea necesario.

## Resumen de la configuración

Este proceso prepara al PT590 para enviar sus reportes de posición y estado a Plaspy, de modo que el dispositivo quede visible para monitoreo y manejo de eventos en la plataforma. El objetivo es configurar el rastreador para que se comunique con el endpoint compartido de Plaspy, confirmar que el equipo está en línea y validar los envíos al sistema.

- Apuntar el rastreador al endpoint del servidor de Plaspy para que los paquetes de ubicación lleguen a la plataforma
- Seleccionar el modo de transporte (UDP o TCP) si el dispositivo requiere una elección
- Establecer el puerto común de Plaspy para que la plataforma reciba reportes de este y otros dispositivos soportados
- Validar la conectividad y realizar un reporte de prueba para confirmar que Plaspy recibe los datos
- Guardar y aplicar los cambios para que el rastreador continúe reportando a Plaspy y proporcione visibilidad en tiempo real

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el rastreador:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP; elija el que requiera la herramienta de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y la detección de protocolo en la plataforma es automática.

## Requisitos típicos antes de la configuración

- El PT590 debe estar encendido y operativo con carga de batería suficiente para la configuración y las pruebas
- Acceso al método oficial de configuración ThinkRace o al software proporcionado para el PT590
- Cuenta en Plaspy o acceso a la plataforma Plaspy para verificar que el dispositivo aparece después de la configuración
- Cobertura de red razonable o conectividad requerida por el rastreador según las instrucciones del fabricante
- Conocimientos básicos del flujo de configuración del dispositivo proporcionado por ThinkRace o su proveedor

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el PT590 envía sus reportes al endpoint compartido de Plaspy para que la plataforma muestre la ubicación y el estado del dispositivo. Plaspy escucha en un puerto compartido para todos los dispositivos soportados y utiliza detección de protocolo para decodificar los datos entrantes.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la opción elegida en la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes
- Los reportes del rastreador permiten a Plaspy proporcionar visibilidad de ubicación e informes de eventos
- Tras una configuración exitosa, el dispositivo aparecerá en Plaspy y entregará actualizaciones periódicas de posición y alertas según lo configurado

## Flujo de configuración habitual

1. Acceda al método oficial de configuración ThinkRace para el PT590 (aplicación del fabricante, herramienta SMS o portal de configuración según lo provea ThinkRace).
2. Localice los ajustes de servidor o socket en la herramienta de configuración.
3. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138.
4. Establezca el puerto del servidor en 8888.
5. Seleccione UDP o TCP si la configuración del PT590 requiere elegir un transporte.
6. Aplique o guarde la configuración y siga las indicaciones del fabricante para confirmar los cambios.
7. Reinicie el dispositivo si la herramienta o el firmware requieren reinicio para activar la nueva configuración.
8. Valide que el dispositivo reporte a Plaspy revisando el estado en su cuenta Plaspy y confirmando actualizaciones de posición recientes.

## Comandos de configuración de ejemplo

Los comandos exactos y la sintaxis de configuración para el PT590 dependen del método de ThinkRace (por ejemplo, una app, comandos SMS o una herramienta del proveedor). Dado que los comandos específicos del modelo los proporciona el fabricante o distribuidor, las cadenas de comando pueden variar según el firmware y la versión de la herramienta. Use las instrucciones oficiales de ThinkRace para el formato exacto requerido por su dispositivo.

Si dispone de ejemplos de comandos provistos por ThinkRace o su proveedor, aplique exactamente el valor del servidor d.plaspy.com o la IP 54.85.159.138 y el puerto 8888 en esos comandos. Por ejemplo, cuando un comando de configuración pida host y puerto, reemplace los marcadores de posición por los valores de Plaspy indicados arriba.

## Notas de configuración

- Las diferencias de firmware y versiones de herramientas pueden cambiar la sintaxis de los comandos y las opciones disponibles; siempre verifique la versión que está usando con la documentación de ThinkRace
- La elección entre UDP y TCP depende de la herramienta de configuración del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente al recibir datos
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe usar el puerto 8888 al configurar el PT590 para asegurar el enrutamiento correcto en la plataforma
- Las prácticas del instalador y las variantes regionales pueden afectar cómo accede al dispositivo para la configuración; siga la guía del proveedor para su mercado
- Cuando las herramientas del fabricante proporcionen marcadores como valores de APN, mantenga esos marcadores y complételos con las credenciales de red apropiadas para su operador

## Por qué usar Plaspy con esta configuración

Conectar el ThinkRace PT590 a Plaspy le proporciona una plataforma coherente para monitorear la ubicación de mascotas, recibir alertas y mantener visibilidad operativa entre dispositivos. El uso de los ajustes de servidor compartidos de Plaspy simplifica la configuración porque el mismo puerto y endpoint se emplean para los rastreadores soportados, y la detección de protocolo en la plataforma reduce la necesidad de selección compleja de protocolos durante el alta.

Para obtener más información sobre Plaspy y cómo soporta rastreadores como el PT590, visite https://www.plaspy.com. Las especificaciones del fabricante, el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles actuales de configuración específicos del dispositivo en el sitio oficial de ThinkRace https://www.thinkrace.com/ antes del despliegue.
