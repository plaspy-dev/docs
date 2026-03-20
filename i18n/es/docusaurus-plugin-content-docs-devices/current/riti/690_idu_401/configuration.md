---
slug: /riti/690_idu_401/configuration
id: 690_idu_401-configuration
sidebar_label: Configuration
title: Riti - 690 (IDU-401) Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Riti 690 (IDU-401) con ajustes de servidor Plaspy y pasos prácticos de instalación
keywords:
  - Configuración Riti 690
  - Configuración Riti IDU 401
  - Riti 690 Plaspy
  - Configuración 690 IDU 401
  - Configuración de rastreador Plaspy
  - Configuración de rastreador de vehículo
  - Configuración de rastreador GPS Riti
  - Seguimiento de flotas Plaspy
  - Configuración captura de imágenes para rastreo
  - Configuración de servidor IDU 401
---

# Riti - 690 (IDU-401) Configuración

Esta página ofrece contexto público de configuración para usar el Riti Locator 690 (IDU-401) con la plataforma de flotas Plaspy. Se centra en los detalles prácticos del servidor y del flujo de trabajo necesarios para apuntar el equipo a Plaspy, explicar cómo el dispositivo comunica telemetría e imágenes de eventos, y qué verificar antes y después de la instalación. El contenido se basa en la descripción del rastreador y en la información pública de configuración de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. No obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía para preparar el dispositivo y aplicar el endpoint y el puerto públicos de Plaspy; luego consulte la documentación oficial de Riti o la utilidad de configuración del fabricante para menús o comandos específicos del dispositivo.

## Visión general de la configuración

Configurar el Locator 690 para Plaspy garantiza que el dispositivo reporte telemetría GPS e imágenes de eventos al cloud de Plaspy usando un endpoint y puerto comunes. Los pasos que siguen describen el propósito práctico de la configuración y los objetivos generales para lograr comunicación confiable y visibilidad en Plaspy.

- Apuntar el equipo al servidor de Plaspy para que la telemetría y las imágenes se carguen correctamente.
- Seleccionar el protocolo de transporte soportado por el dispositivo y confirmar que Plaspy recibe los datos.
- Validar la conectividad celular, la fijación GNSS y que el equipo tenga alimentación suficiente y buffer para condiciones fuera de línea.
- Habilitar y probar la captura de imágenes por eventos y los disparadores de entradas/salidas (IO) para que las imágenes se indexen con la ubicación y metadatos del evento.
- Confirmar que el dispositivo aparece y reporta en Plaspy después de aplicar la configuración.

## Ajustes del servidor Plaspy

Configure el dispositivo para enviar datos al endpoint y puerto compartidos de Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y puede detectar automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos habituales antes de la configuración

- Verifique que el Locator 690 esté alimentado y montado según las pautas de instalación.
- Una SIM celular activa con datos habilitados y cobertura para que el dispositivo pueda subir telemetría e imágenes.
- Acceso al método oficial de configuración de Riti para el Locator 690, o a la herramienta de instalador autorizada para la unidad.
- Identificadores del dispositivo como IMEI o número de serie disponibles para registro en la plataforma y resolución de problemas.
- Una cuenta de Plaspy y la posibilidad de validar que el dispositivo sea visible en la plataforma tras la configuración.
- Revise la versión de firmware y notas del proveedor que puedan afectar los pasos de configuración o las funcionalidades disponibles.

## Cómo se conecta este rastreador a Plaspy

El Locator 690 se configura para reportar ubicación, telemetría e imágenes de eventos al endpoint y puerto compartidos de Plaspy. La evidencia en imágenes capturada por IA a bordo o desencadenada por entradas IO se sube e indexa junto con las trayectorias GPS para que los eventos puedan revisarse en contexto.

- Envía telemetría GPS y actualizaciones de estado a d.plaspy.com en el puerto 8888 usando UDP o TCP.
- Sube imágenes de eventos y metadatos relacionados al mismo endpoint de Plaspy para indexación y recuperación.
- Usa buffering local y comportamiento de reenvío al reconectarse para preservar datos cuando la conectividad celular se interrumpe.
- Soporta capturas disparadas por IO y flujos de trabajo basados en eventos para que las imágenes se asocien con tipos de evento en Plaspy.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando el rastreador se conecta al puerto compartido.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Riti para el Locator 690 (interfaz web del dispositivo, herramienta del proveedor, utilidad serial/USB o interfaz de instalador autorizada).
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138, según las opciones de la interfaz de configuración.
3. Configure el puerto del dispositivo en 8888 según lo requerido por Plaspy.
4. Seleccione UDP o TCP en los ajustes de transporte si el dispositivo exige una selección de transporte.
5. Aplique o guarde la configuración en la interfaz del dispositivo y confirme que no haya errores de validación.
6. Reinicie o haga un ciclo de alimentación del dispositivo si las instrucciones del fabricante indican que es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy revisando la plataforma para telemetría entrante y la indexación de imágenes de eventos.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y la interfaz usada para aplicar ajustes varían según el firmware de Riti y la herramienta del proveedor. Dado que el Locator 690 admite múltiples métodos de configuración, la mayoría de los instaladores utilizarán la utilidad oficial de Riti, una interfaz serial/USB o la web del proveedor para introducir el dominio o la IP de Plaspy y el puerto.

Si necesita ejemplos textuales o comandos por SMS, consulte el manual de configuración de Riti o la herramienta de su instalador para la sintaxis y los marcadores de posición correctos. Las utilidades del fabricante indicarán dónde introducir d.plaspy.com o 54.85.159.138 y el puerto 8888, y cómo seleccionar UDP o TCP. Cuando las herramientas del proveedor usen marcadores de posición, conserve los que proporcione el fabricante.

## Notas de configuración

- Las diferencias de firmware y herramientas pueden cambiar los nombres de los menús y la ubicación de los ajustes del servidor; siempre verifique la versión de firmware instalada y las notas de la versión del proveedor.
- La elección entre TCP o UDP depende del firmware del dispositivo y de las características de la red; pruebe ambos si encuentra problemas de conectividad, ya que Plaspy acepta cualquiera de los dos en el puerto compartido.
- El comportamiento de buffering local y almacenamiento de imágenes depende del dispositivo; asegúrese de que la capacidad de buffer sea adecuada para el uso de su flota y los escenarios offline.
- Los disparadores IO, la recuperación de imágenes en vivo y la indexación de eventos pueden requerir pasos de configuración adicionales en la utilidad de Riti más allá de los ajustes de servidor y puerto.
- Mantenga un registro del IMEI o número de serie del dispositivo para ayudar a los equipos de soporte de Plaspy y Riti a identificar y solucionar problemas de conexión.

## Por qué usar Plaspy con esta configuración

Configurar el Locator 690 para reportar a Plaspy agrega telemetría GPS sincronizada y evidencia visual por evento al flujo de trabajo de gestión de flotas. Esta combinación mejora la investigación de incidentes, reduce el tiempo de resolución y proporciona al equipo operativo conciencia situacional inmediata mediante fotos indexadas antes, durante y después del evento junto con las trayectorias de ubicación.

Para obtener más información sobre Plaspy y cómo maneja las conexiones de dispositivos y la visualización de datos visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, notas de firmware y guías para instaladores verifique los detalles en el sitio del fabricante https://www.riti.com.tw/. Las especificaciones y procedimientos de configuración del fabricante pueden cambiar con el tiempo, por lo que siempre confirme las instrucciones actuales antes de aplicar configuraciones en producción.
