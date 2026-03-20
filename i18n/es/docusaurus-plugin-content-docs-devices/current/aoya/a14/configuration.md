---
slug: /aoya/a14/configuration
id: a14-configuration
sidebar_label: Configuration
title: AoYa - A14 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el rastreador AoYa A14 con los ajustes de servidor Plaspy e integración para monitoreo vehicular
keywords:
  - Configuración AoYa A14
  - Instalación AoYa A14
  - AoYa A14 en Plaspy
  - Configuración rastreador AoYa
  - Configuración servidor A14
  - Configuración rastreo vehicular
  - Configuración seguimiento de flotas
  - Integración plataforma GPS
  - Guía instalación del rastreador
  - Configuración software de rastreo
---

# AoYa - Configuración del A14

Esta página describe el contexto de configuración pública para usar el rastreador GPS AoYa A14 con la plataforma Plaspy. Resume los ajustes clave y el flujo de trabajo necesarios para apuntar un dispositivo A14 al servidor de Plaspy, de modo que el rastreador reporte ubicación y estado y pueda visualizarse en la interfaz de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del dispositivo cuando el rastreador se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El A14 suele admitir métodos de configuración por SMS y en el propio dispositivo para APN y datos del servidor; aquí se resumen esas opciones a un nivel general.

## Resumen de la configuración

El objetivo al configurar un AoYa A14 para Plaspy es preparar el rastreador para que establezca un enlace de datos confiable con Plaspy y aparezca en la plataforma para monitoreo en tiempo real. La configuración típica ajusta los parámetros de acceso a la red y el punto final del servidor, y luego valida que el dispositivo informe correctamente a Plaspy.

- Configure el dispositivo con la información de conectividad del operador para que acceda a la red móvil.
- Establezca la dirección del servidor del dispositivo en el punto final de Plaspy para que la telemetría se envíe a la plataforma.
- Seleccione el protocolo de transporte si el dispositivo requiere elegir entre UDP y TCP.
- Aplique y guarde los ajustes del rastreador y verifique que el dispositivo sea visible en Plaspy.
- Valide la conectividad y los reportes de prueba para confirmar el envío confiable de ubicaciones y la visibilidad en la plataforma.

## Ajustes del servidor Plaspy

- El dominio del servidor es d.plaspy.com para configuraciones basadas en DNS.
- La IP del servidor es 54.85.159.138 si el dispositivo requiere una dirección numérica.
- El puerto es 8888, que Plaspy utiliza para conexiones de dispositivos.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la opción que ofrezca el equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración del servidor.

## Requisitos previos habituales

- Dispositivo encendido y accesible para aplicar cambios de configuración.
- SIM activa con un plan de datos móviles y APN correcto según el operador celular.
- Acceso al método de configuración del fabricante AoYa A14, por ejemplo los comandos SMS oficiales o el software del proveedor.
- Conocer los ajustes de servidor Plaspy d.plaspy.com o 54.85.159.138 y que se requiere el puerto 8888.
- Un método para confirmar que el dispositivo está reportando, como la lista de dispositivos en la plataforma o reportes de prueba.
- Familiaridad básica para elegir entre UDP o TCP si el rastreador expone esa opción.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AoYa A14 envía sus mensajes de ubicación y estado al punto final y puerto compartidos de Plaspy para que la plataforma procese y presente los datos de rastreo. La plataforma determina automáticamente el protocolo correcto y asocia el dispositivo con su cuenta Plaspy o el flujo de aprovisionamiento.

- El rastreador se configura para usar el dominio o la IP del servidor Plaspy, de modo que los datos salientes se dirijan a Plaspy.
- Los reportes se envían al puerto 8888, que Plaspy escucha para conexiones de dispositivos.
- El transporte se selecciona como UDP o TCP en el equipo cuando es necesario y Plaspy aceptará cualquiera de los dos.
- Plaspy realiza detección automática de protocolo y decodifica los mensajes del rastreador para mostrarlos.
- Una configuración exitosa hace que el rastreador aparezca en Plaspy con actualizaciones de ubicación e informes de eventos.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software para el AoYa A14 (comandos SMS o herramienta del proveedor).
2. Ingrese el servidor de Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el dispositivo para usar el puerto 8888 en las comunicaciones con el servidor.
4. Seleccione UDP o TCP en el dispositivo si requiere elegir el transporte.
5. Guarde o aplique la configuración en el rastreador usando el método del fabricante.
6. Valide que el dispositivo reporte a Plaspy y aparezca en la lista de dispositivos de la plataforma.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar las opciones de configuración disponibles y la sintaxis de comandos; confirme el método correcto para su unidad.
- Algunos instaladores prefieren usar el nombre DNS d.plaspy.com mientras otros usan la IP numérica; Plaspy acepta ambos.
- Si el dispositivo ofrece ambas opciones, elija UDP para menor sobrecarga o TCP para mayor confiabilidad de conexión según su entorno.
- El AoYa A14 puede configurarse mediante SMS proporcionados por el fabricante o herramientas de configuración; esta guía resume ese enfoque sin reproducir la sintaxis de comandos.
- Guarde una copia de los ajustes aplicados y una lista de verificación de validación para agilizar la resolución de problemas y el mantenimiento futuro.

## Por qué usar Plaspy con esta configuración

Configurar el AoYa A14 para enviar datos a Plaspy ofrece una vía sencilla para añadir visibilidad de los vehículos y supervisión operativa, tanto para flotas como para unidades individuales. Usar el punto final y puerto compartidos de Plaspy simplifica el despliegue y reduce las diferencias por dispositivo al poner rastreadores en línea.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise la documentación más reciente del dispositivo AoYa A14 en el sitio del fabricante http://www.aoyagps.com/ para confirmar pasos específicos de configuración, comportamiento del firmware y cualquier actualización que pueda afectar la configuración.
