---
slug: /cantrack/g183/configuration
id: g183-configuration
sidebar_label: Configuration
title: CanTrack - G183 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar la conectividad CanTrack G183 con Plaspy, incluyendo ajustes de servidor y flujo de configuración
keywords:
  - Configuración CanTrack G183
  - Configuración G183
  - Configuración servidor G183
  - Configuración Plaspy G183
  - Configuración rastreador GPS CanTrack
  - Configuración rastreador GPS G183
  - Configuración rastreador diagnóstico vehicular
  - Configuración rastreador JOBD
  - Configuración seguimiento de flotas
  - Integración rastreador Plaspy
---

# CanTrack - Configuración del G183

Esta página ofrece el contexto público de configuración para usar el rastreador JOBD CanTrack G183 con Plaspy. Explica los valores de servidor compartidos por Plaspy y las indicaciones prácticas necesarias para apuntar el G183 a Plaspy, habilitando el seguimiento en tiempo real, telemática y la subida de diagnósticos. Use esta guía junto con la documentación oficial del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El G183 soporta reporte por TCP y SMS y entrega posición GNSS, diagnósticos del vehículo y alarmas a Plaspy cuando se configura con los valores de servidor que se indican más abajo.

## Resumen de la configuración

Este proceso prepara el G183 para comunicarse con Plaspy, de modo que la posición del vehículo, los diagnósticos y las alarmas aparezcan en la plataforma. El objetivo es apuntar el rastreador al endpoint de Plaspy, confirmar los ajustes de transporte y validar que la telemetría llega correctamente a la plataforma.

- Configure el dispositivo para usar el endpoint del servidor de Plaspy para que los reportes por TCP o SMS lleguen a la plataforma.
- Establezca el puerto del dispositivo y el modo de transporte al puerto compartido de Plaspy y verifique la selección de transporte si el equipo lo requiere.
- Confirme la conectividad celular y la disponibilidad de la SIM para el reporte por TCP, o habilite el reporte por SMS como respaldo.
- Valide que el rastreador esté reportando posición GNSS, diagnósticos OBD y eventos de alarma a Plaspy.
- Guarde y, si es necesario, reinicie el dispositivo para aplicar la configuración y comenzar la subida de datos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos soportados
- Todos los dispositivos en Plaspy usan el mismo puerto para datos de dispositivo

## Requisitos típicos antes de la configuración

- Un dispositivo G183 alimentado y funcional instalado o conectado a la interfaz OBD del vehículo.
- Una tarjeta SIM válida y un plan de datos celulares activo si usa reporte por TCP, o capacidad de SMS habilitada para reportes por SMS.
- Acceso al método oficial de configuración de CanTrack, como el software del fabricante, el puerto micro USB de configuración o la interfaz de comandos por SMS.
- Conocimiento de la versión de firmware del equipo y de las herramientas del proveedor necesarias para actualizar o cambiar los ajustes de servidor.
- Un vehículo de prueba o entorno confiable para validar la recepción GNSS y la subida de datos a Plaspy.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el G183 envía ubicación, diagnósticos OBD y eventos de alarma al endpoint y puerto compartidos de Plaspy para que la plataforma procese los datos y permita su visualización y alerta. Plaspy acepta los datos de los dispositivos usando el puerto compartido y detecta automáticamente el protocolo correcto en los rastreadores soportados.

- El rastreador sube reportes de posición GNSS al endpoint d.plaspy.com usando TCP u otro transporte soportado.
- Los datos de diagnóstico OBD y los códigos DTC se transmiten a Plaspy para el monitoreo de la salud del vehículo y la generación de reportes.
- Eventos de alarma como SOS, colisión, remolque y conexión/desconexión se envían a Plaspy para activar alertas y flujos de trabajo.
- Si TCP no está disponible, el reporte por SMS puede ser utilizado como canal alternativo para la ingestión en Plaspy cuando el dispositivo lo soporta.
- Plaspy vigila el puerto compartido y detecta automáticamente el protocolo del rastreador, por lo que no suele ser necesario seleccionar el protocolo manualmente en la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración CanTrack para el G183 (herramienta USB, utilidad de escritorio del proveedor o interfaz de comandos por SMS).
2. Ingrese el endpoint de Plaspy como d.plaspy.com o use la IP del servidor 54.85.159.138 en el campo del servidor del dispositivo.
3. Establezca el puerto de reporte en 8888 como puerto del servidor del dispositivo.
4. Seleccione UDP o TCP en el puerto 8888 si el equipo requiere elección de transporte.
5. Aplique o guarde la configuración en la herramienta del dispositivo o mediante la interfaz de comandos por SMS.
6. Reinicie el G183 si las instrucciones del fabricante requieren un reinicio para aplicar cambios de red o servidor.
7. Valide que el dispositivo reporte a Plaspy verificando en la plataforma la recepción de mensajes de posición, diagnóstico o alarma.

## Comandos de configuración de ejemplo

Los comandos exactos para configurar el G183 varían según el firmware y según si emplea la herramienta de configuración por micro USB, una aplicación de escritorio del proveedor o comandos por SMS. Siga la documentación del fabricante CanTrack para el formato preciso de comandos. Cuando use comandos de configuración o SMS, asegúrese de establecer el servidor en d.plaspy.com o en la IP 54.85.159.138 y el puerto en 8888, y seleccione UDP o TCP si el rastreador requiere un parámetro de transporte.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos o la interfaz de configuración; revise siempre las notas de la versión de firmware del G183 antes de configurar.
- Algunas instalaciones usan SMS para la configuración inicial o como reporte de respaldo; los comandos y la sintaxis por SMS dependen del conjunto de comandos del fabricante.
- Elija TCP para conexiones persistentes cuando se requiera un flujo de datos estable y seleccione UDP cuando la menor sobrecarga o la compatibilidad del equipo lo recomienden.
- Confirme la versión de firmware del dispositivo y la variante del módulo celular, ya que las opciones de hardware por región pueden alterar el flujo de configuración.
- Mantenga a mano la guía oficial de configuración de CanTrack durante el proceso para asegurar que se sigan los pasos específicos del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack G183 con Plaspy ofrece una vía práctica para combinar seguimiento en tiempo real, diagnósticos del vehículo y reporte de alarmas en una sola plataforma. Las organizaciones pueden recibir posición GNSS, códigos DTC OBD, kilometraje y telemetría del G183 en los paneles de Plaspy para apoyar el monitoreo de flotas, el mantenimiento preventivo y los flujos de respuesta ante incidentes.

Aprenda más sobre Plaspy en el sitio principal https://www.plaspy.com y verifique los métodos de configuración específicos del dispositivo y los detalles de firmware más recientes en el sitio del fabricante https://www.cantrackgps.com/ ya que las especificaciones y los pasos de configuración pueden cambiar con el tiempo.
