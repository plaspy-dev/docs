---
slug: /ulbotech/t303/configuration
id: t303-configuration
sidebar_label: Configuration
title: Ulbotech - T303 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del rastreador Ulbotech T303 para usar con Plaspy, con ajustes de servidor y pasos prácticos
keywords:
  - Configuración Ulbotech T303
  - Instalación Ulbotech T303
  - Configuración T303 Plaspy
  - Configuración rastreador GPS Ulbotech
  - Configuración servidor T303
  - Software de seguimiento Ulbotech T303
  - Configuración plataforma GPS T303
  - Configuración del rastreador Plaspy
  - Seguimiento de flotas T303
  - Rastreador de vehículos T303
---

# Ulbotech - Configuración del T303

Esta página presenta el contexto público de configuración para usar el rastreador Ulbotech T303 con Plaspy. Resume los ajustes prácticos de servidor, los requisitos habituales y un flujo de trabajo claro para preparar el T303 para seguimiento en tiempo real, geovallas, control de inmovilización y envío de telemetría a Plaspy. El contenido se basa en información pública del producto y en los requisitos de conexión compartidos por Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para aplicar el endpoint y puerto de Plaspy en el T303 mediante las herramientas de configuración de Ulbotech y luego verifique que el dispositivo informe correctamente en Plaspy.

## Resumen de la configuración

El objetivo de la configuración es dirigir al T303 para que envíe posiciones GNSS y telemetría a Plaspy, de modo que el dispositivo sea visible y accionable en su cuenta de Plaspy. La configuración se centra en establecer el endpoint y el transporte del servidor, confirmar la conectividad celular y el APN, y validar que los eventos y las actualizaciones de ubicación lleguen a Plaspy.

- Configure el endpoint y el puerto del servidor Plaspy en el dispositivo o mediante la herramienta de configuración de Ulbotech.
- Verifique que el T303 tenga una SIM funcional con conectividad GPRS y que los ajustes de APN sean correctos.
- Seleccione el transporte (UDP o TCP) si la configuración del dispositivo lo requiere y guarde los cambios.
- Reinicie o corte la alimentación del dispositivo cuando sea necesario para aplicar los ajustes.
- Confirme que el dispositivo aparece y transmite datos de ubicación dentro de Plaspy.

## Ajustes del servidor de Plaspy

Use estos ajustes públicos de Plaspy al configurar el T303. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y la plataforma detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Al aplicar los ajustes en el T303 puede ingresar tanto el dominio d.plaspy.com como la IP 54.85.159.138; ambos apuntan al mismo endpoint de ingestión de Plaspy en el puerto 8888.

## Requisitos típicos antes de la configuración

- Una unidad T303 alimentada e instalada con acceso a la interfaz de configuración del dispositivo o al software de configuración de Ulbotech.
- Una SIM celular válida provisionada para datos GPRS si se usa GPRS para la conectividad; confirme cuota de datos y credenciales APN.
- Conocimiento de los valores APN del dispositivo si el APN automático no está disponible o requiere entrada manual.
- Acceso al método de configuración oficial de Ulbotech para el T303 (software, USB, comandos SMS o herramienta web según lo provea el vendedor).
- Una cuenta de Plaspy y/o información del administrador de Plaspy para confirmar la visibilidad del dispositivo tras la configuración.
- Herramientas básicas para aplicar y, si es necesario, reiniciar o ciclar la alimentación del dispositivo después de los cambios de configuración.

## Cómo se conecta este rastreador a Plaspy

El T303 transmite fijaciones GNSS y telemetría mediante GPRS a Plaspy usando el endpoint y puerto compartidos de ingestión. Plaspy procesa ese flujo de datos, aplica reglas y muestra ubicación en tiempo real, alarmas e informes para la gestión de flotas y procedimientos antirobo.

- El T303 se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; el dispositivo puede enviarse por cualquiera de los dos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los datos entrantes al dispositivo correcto en la plataforma.
- Los eventos reportados suelen incluir posiciones, estado ACC/ignición, alertas SOS, violaciones de geovalla y el estado de salidas digitales para inmovilización.
- Una vez conectado, la telemetría como entradas de sensores y eventos de comportamiento del conductor se vuelve visible en el panel de Plaspy para monitoreo e informes.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Ulbotech para el T303 conforme a las instrucciones del fabricante.
2. En los ajustes del servidor del dispositivo, ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.
3. Configure el puerto del servidor en 8888.
4. Elija el transporte UDP o TCP si la configuración del T303 requiere seleccionar uno.
5. Ingrese las credenciales APN o confirme que el APN automático está habilitado para que el dispositivo establezca conectividad de datos GPRS.
6. Aplique o guarde los cambios de configuración en la herramienta del dispositivo o mediante el método soportado por el fabricante.
7. Reinicie o corte la alimentación del dispositivo si se requiere para que los ajustes entren en vigor.
8. Valide que el dispositivo reporta a Plaspy y que la ubicación y los eventos aparecen en la plataforma.

## Ejemplos de comandos de configuración

Los comandos de configuración exactos y el método para enviarlos dependen de las herramientas de Ulbotech y del firmware del dispositivo. Algunas instalaciones usan una herramienta USB, una aplicación de escritorio del fabricante o cadenas de comandos via SMS. Debido a que las herramientas del fabricante y las versiones de firmware varían, siga la guía de configuración oficial de Ulbotech para comandos y sintaxis específicos. Si su método de instalación admite SMS o configuración por línea de comandos, aplique el endpoint de Plaspy (d.plaspy.com o 54.85.159.138) y el puerto 8888 exactamente como se indican en la herramienta del dispositivo.

Si dispone de una lista de comandos Ulbotech proporcionada por el vendedor, aplique el dominio o la IP del servidor y el puerto en el mismo orden que recomienda Ulbotech, luego guarde y reinicie el dispositivo. Conserve los marcadores de posición de los ejemplos del fabricante como {{apn}} o {{apnu}} y reemplácelos por los valores de su operador cuando esté indicado.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los menús disponibles y los nombres exactos de los campos; consulte las notas de la versión del firmware del T303 si no encuentra un ajuste en la ubicación esperada.
- Si el dispositivo ofrece UDP y TCP, UDP se usa comúnmente por menor overhead, pero puede seleccionar TCP cuando se prefiera una sesión más fiable; Plaspy acepta ambos en el puerto 8888.
- El T303 soporta APN automático y FOTA, pero confirme el comportamiento del APN en su firmware para evitar cortes de conectividad.
- Use la interfaz de configuración del fabricante para guardar cambios y siga cualquier procedimiento recomendado de reinicio o reboot.
- Verifique siempre la visibilidad del dispositivo en Plaspy después de la configuración para confirmar que llegan eventos, actualizaciones de posición y telemetría.

## Por qué usar Plaspy con esta configuración

Usar el Ulbotech T303 con Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación de sus vehículos, eventos de comportamiento del conductor y telemetría del dispositivo. La combinación de las capacidades GNSS y de telemetría del T303 con las funciones de la plataforma Plaspy ayuda a las flotas a reducir el riesgo de robo, mejorar el monitoreo operativo y actuar sobre alertas de seguridad en tiempo real.

Para obtener más información sobre Plaspy y cómo la plataforma puede integrarse con dispositivos de flota como el T303 visite https://www.plaspy.com. Verifique los métodos de configuración específicos del fabricante, el comportamiento del firmware y los detalles del producto con Ulbotech en http://www.ulbotech.com/ ya que los pasos de configuración y las funciones de firmware pueden cambiar con el tiempo.
