---
slug: /trackerking/j14/configuration
id: j14-configuration
sidebar_label: Configuration
title: TrackerKing - J14 Configuration
sidebar_class_name: menu_item_tracker
description: Configure TrackerKing J14 para seguimiento en tiempo real y reporte de eventos en Plaspy usando ajustes de servidor compartido
keywords:
  - Configuración TrackerKing J14
  - Instalación TrackerKing J14
  - TrackerKing J14 Plaspy
  - Configuración rastreador GPS J14
  - Configuración rastreador de vehículos Plaspy
  - Guía de instalación de rastreador GPS
  - Guía de instalación J14
  - Integración TrackerKing GPS
  - Seguimiento de flotas J14
  - Ajustes de servidor J14 Plaspy
---

# TrackerKing - Configuración del J14

Esta página documenta el contexto público de configuración para usar el TrackerKing J14 con Plaspy. Explica los ajustes de servidor compartido que Plaspy espera, consideraciones prácticas de instalación y un flujo de trabajo general para preparar el J14 y asegurar un reporte fiable hacia la plataforma Plaspy. El contenido está pensado para integradores, administradores de flota e instaladores que requieren orientación clara y no propietaria para conectar un J14 a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación o las herramientas del proveedor. El J14 es un rastreador vehicular cableado compacto con posicionamiento GPS y BDS, carcasa resistente IP65, amplio rango de entrada de 9–90 V DC y un conjunto completo de alarmas que suministran la posición y los eventos que Plaspy procesa.

## Resumen de la configuración

Preparar el J14 para Plaspy implica configurar el dispositivo para que envíe sus posiciones GNSS y mensajes de alarma al endpoint de servidor compartido de Plaspy y validar que el equipo sea visible en la plataforma. El objetivo es habilitar un reporte continuo y confiable para que Plaspy ofrezca mapas en vivo, alertas de eventos y reproducción histórica.

- Ingrese el endpoint y el puerto del servidor Plaspy en el J14 usando la herramienta de configuración del fabricante.
- Seleccione el modo de transporte si el equipo requiere elegir entre TCP o UDP.
- Confirme que el dispositivo está alimentado y opera dentro del rango de voltaje soportado para garantizar reportes continuos.
- Verifique que el equipo esté enviando posiciones GNSS y mensajes de alarma a Plaspy y que los eventos aparezcan en la plataforma.
- Realice pruebas operativas de alarmas comunes como geocercas y detección de movimiento para confirmar la visibilidad de extremo a extremo.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el J14. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Detección automática de protocolo en Plaspy

## Requisitos típicos antes de la configuración

- El dispositivo está instalado y recibe alimentación del vehículo dentro del rango soportado de 9 a 90 V DC.
- Acceso al método de configuración del TrackerKing o al software oficial del fabricante proporcionado por el vendedor o instalador.
- Conectividad de red para el dispositivo acorde a las indicaciones del fabricante para transporte celular o backend si aplica.
- Una cuenta de Plaspy o acceso proporcionado por su administrador de Plaspy para confirmar el reporte del dispositivo una vez configurado.
- Registro de identificadores o etiquetas del dispositivo usados por su instalador para identificación posterior en los paneles de Plaspy.
- Un plan de pruebas para validar actualizaciones de ubicación y eventos de alarma comunes después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el J14 envía posiciones GNSS y mensajes de alarma al endpoint y puerto del servidor Plaspy para que la plataforma muestre la ubicación en vivo y desencadene flujos de trabajo por eventos. Plaspy recopila la telemetría del dispositivo y detecta automáticamente el protocolo del rastreador para interpretar los mensajes correctamente.

- El dispositivo reporta posiciones al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La telemetría incluye notificaciones de eventos como incumplimiento de geocerca, exceso de velocidad, movimiento y cortes de alimentación que aparecen en los paneles de Plaspy.
- Los datos se reciben por UDP o TCP según la elección durante la configuración y Plaspy detecta el protocolo automáticamente.
- Plaspy procesa los datos del J14 para seguimiento en vivo, alertas y reproducción histórica de rutas, apoyando flotas y labores de recuperación.
- Los administradores pueden validar la visibilidad del dispositivo en Plaspy una vez que el J14 esté reportando al endpoint y puerto compartidos.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del TrackerKing J14 o al software proporcionado por el fabricante o instalador.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Configure el puerto del equipo en 8888 según lo requiere Plaspy.
4. Seleccione UDP o TCP si la configuración del J14 solicita elegir un modo de transporte.
5. Aplique o guarde la configuración usando la herramienta del fabricante o el método SMS si el dispositivo lo soporta.
6. Reinicie el J14 si el firmware del dispositivo requiere un reinicio para aplicar ajustes de red.
7. Valide que el equipo reporte a Plaspy revisando el panel de Plaspy o usando comandos de verificación disponibles del fabricante.
8. Realice pruebas funcionales de actualizaciones de posición y al menos un evento de alarma para confirmar la visibilidad completa del sistema.

## Comandos de configuración de ejemplo

La configuración del modelo J14 que se muestra aquí no incluye comandos específicos del fabricante en este documento público. Los comandos exactos y las herramientas varían según el firmware de TrackerKing, la herramienta del proveedor o la variante regional del firmware. Utilice la app oficial de configuración de TrackerKing o el conjunto de comandos SMS suministrado por su vendedor para los comandos específicos del dispositivo y siga el orden requerido por esas herramientas.

Si dispone de comandos proporcionados por TrackerKing, aplíquelos mediante el método recomendado y asegúrese de apuntar el dispositivo a d.plaspy.com o 54.85.159.138 y al puerto 8888, luego elija UDP o TCP si es necesario. Mantenga cualquier marcador de posición en comandos del fabricante, como APN o credenciales, tal como indica la plantilla del proveedor.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales pueden cambiar la interfaz de configuración exacta y los comandos disponibles. Confirme la versión con su proveedor antes de modificar ajustes.
- Elija TCP o UDP acorde a sus necesidades de instalación y a las opciones que presente el firmware de TrackerKing. Plaspy detecta automáticamente el protocolo cuando los datos llegan al servidor.
- Pruebe las configuraciones en un entorno controlado antes de un despliegue amplio para verificar que las alarmas y el reporte de posiciones aparezcan correctamente en Plaspy.
- Mantenga la documentación del fabricante a mano para procedimientos específicos del dispositivo, especialmente en relación con el comportamiento de las alarmas o el cableado de entradas en instalaciones cableadas.
- Cuando use métodos de configuración por SMS del fabricante, siga exactamente las plantillas SMS que proporcione TrackerKing para evitar configuraciones incorrectas.

## Por qué usar Plaspy con esta configuración

Usar el TrackerKing J14 con Plaspy proporciona una vía directa hacia visibilidad continua del vehículo, alertas basadas en eventos y reproducción histórica de rutas para gestión de flotas, recuperación y operaciones antirrobo. El posicionamiento dual GNSS del J14 y su conjunto de alarmas suministran la telemetría esencial que Plaspy necesita para impulsar la monitorización operativa y los flujos de respuesta ante incidentes.

Para obtener más información sobre Plaspy y cómo procesa la telemetría de dispositivos, visite https://www.plaspy.com. Para instrucciones específicas del dispositivo TrackerKing J14, notas de firmware y herramientas oficiales de configuración, verifique los detalles en la página del fabricante https://trackerking.cn/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
