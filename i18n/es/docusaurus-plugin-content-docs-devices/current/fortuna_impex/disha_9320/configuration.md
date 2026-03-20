---
slug: /fortuna_impex/disha_9320/configuration
id: disha_9320-configuration
sidebar_label: Configuration
title: Fortuna Impex - Disha 9320 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Fortuna Impex Disha 9320 y su compatibilidad con Plaspy, ajustes de servidor y flujo de instalación
keywords:
  - Configuración Fortuna Impex Disha 9320
  - Configuración Disha 9320
  - Configuración rastreador GPS Fortuna Impex
  - Configuración de servidor Disha 9320
  - Configuración Disha 9320 Plaspy
  - Configuración Plaspy rastreador GPS
  - Seguimiento de vehículo Disha 9320
  - Guía de instalación Disha 9320
  - Seguimiento de flota Disha 9320
  - Compatibilidad rastreador Plaspy
---

# Fortuna Impex - Configuración del Disha 9320

Esta página explica el contexto de configuración pública para usar el rastreador Fortuna Impex Disha 9320 con Plaspy. Resume los ajustes comunes del servidor de Plaspy que debe ingresar en el equipo o en la herramienta del proveedor, describe cómo suele comunicarse el dispositivo con la plataforma y propone un flujo práctico para validar la conectividad y la visibilidad en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Disha 9320 ofrece seguimiento en tiempo real e histórico, además de reportes por SMS y correo electrónico; sus antenas GPS y GPRS integradas y la sencilla conexión de alimentación a dos cables facilitan la instalación física. Aplique los ajustes de Plaspy mediante el método oficial de configuración de Fortuna Impex que utilice para la unidad.

## Resumen de la configuración

Configurar el Disha 9320 para Plaspy prepara el dispositivo para enviar datos de ubicación, eventos y estado a la plataforma Plaspy, de modo que los vehículos queden visibles para monitoreo, alertas y reportes. El objetivo es apuntar el equipo al endpoint de Plaspy, asegurar la conectividad de red y confirmar que el rastreador aparezca en su cuenta de Plaspy.

- Ingrese el endpoint y el puerto del servidor de Plaspy en el Disha 9320 usando las herramientas de Fortuna Impex o comandos SMS compatibles.
- Configure el transporte (UDP o TCP) si el dispositivo requiere selección explícita.
- Asegúrese de que el dispositivo tenga una conexión de datos GPRS funcional y los ajustes APN correctos para su SIM.
- Valide que el dispositivo reporte ubicación y eventos a Plaspy para que sea visible en la plataforma.
- Guarde o aplique los cambios y reinicie el equipo si es necesario para activar la nueva configuración del servidor.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Detección automática de protocolo en Plaspy

Nota: Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el dispositivo puede comunicarse sin mapeo manual de protocolos en el servidor.

## Requisitos habituales antes de la configuración

- Un Disha 9320 montado y alimentado con conexiones correctas a la batería del vehículo como parte de la instalación.
- Buena visibilidad GPS hacia el cielo para obtener fijaciones de posición fiables.
- Una tarjeta SIM activa con datos (GPRS) y SMS según lo requiera el dispositivo y el método de configuración.
- APN y ajustes de SIM correctos proporcionados por su operador móvil.
- Acceso a las herramientas de configuración de Fortuna Impex, comandos SMS de configuración o la interfaz de instalador del Disha 9320.
- Credenciales y una cuenta en Plaspy o información de asignación de dispositivos para que la unidad pueda asociarse con su organización en Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Disha 9320 envía actualizaciones periódicas de posición, reportes de eventos y mensajes de estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe estos mensajes, detecta el protocolo de forma automática y presenta los datos del dispositivo en la plataforma para monitoreo y alertas.

- El rastreador se apunta a d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.
- El dispositivo transmite usando UDP o TCP según el transporte seleccionado.
- Plaspy detecta automáticamente el protocolo del rastreador y parsea los mensajes sin necesidad de registro de protocolo por separado.
- Las actualizaciones de ubicación y los eventos se visualizan en Plaspy una vez que el dispositivo se conecta y autentica correctamente.
- Los administradores pueden confirmar la actividad del equipo en Plaspy después de la configuración y del primer reporte.

## Flujo de configuración común

1. Acceda al método oficial de configuración de Fortuna Impex para el Disha 9320 (herramienta del proveedor, interfaz web o conjunto de comandos por SMS).
2. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o, si su herramienta lo requiere, la IP del servidor 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los equipos soportados.
4. Seleccione UDP o TCP si el Disha 9320 exige una selección explícita del transporte.
5. Configure el APN y los ajustes de red necesarios para que el dispositivo tenga conectividad GPRS.
6. Aplique o guarde la configuración en el dispositivo y reinicie la unidad si la herramienta o el firmware requieren un reinicio.
7. Valide que el dispositivo esté reportando a Plaspy verificando la actividad del equipo y las actualizaciones recientes de ubicación en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El Disha 9320 puede configurarse mediante el software oficial de Fortuna Impex o por comandos SMS, según el firmware y las prácticas del instalador. La sintaxis exacta de los comandos y los SMS disponibles varía por versión de firmware, región y la herramienta del proveedor que utilice. Debido a que el conjunto de comandos puede cambiar con el firmware, consulte la documentación de Fortuna Impex para los formatos precisos de SMS o comandos de consola.

Si su firmware o la guía del proveedor incluye configuración por SMS, normalmente establecerá el servidor y el puerto y luego reiniciará el dispositivo. Tenga en cuenta lo siguiente al usar comandos o métodos por SMS:
- Utilice la referencia oficial de comandos de Fortuna Impex para la sintaxis exacta.
- Cuando aparezcan marcadores como {{apn}} en los comandos, sustitúyalos por el valor APN de su operador móvil.
- Verifique la respuesta exitosa o el mensaje de estado del dispositivo después de aplicar los comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar menús exactos, nombres de comandos o la sintaxis de SMS; revisen siempre la versión de firmware antes de seguir una lista de comandos.
- La elección entre UDP y TCP afecta la semántica de entrega; UDP es común para reportes de posición de bajo sobrecargo, mientras que TCP puede ofrecer mayor garantía de entrega según la capacidad del dispositivo.
- Asegúrese de que el APN y los ajustes de la SIM sean correctos para su proveedor celular, de modo que el Disha 9320 pueda establecer una sesión GPRS.
- La ubicación de las antenas y la visibilidad GPS influyen en la calidad de la fijación; el Disha 9320 integra antenas GPS y GPRS, pero aún requiere buena visibilidad al cielo.
- Si la configuración la realiza un instalador, confirme que utilice el método oficial de Fortuna Impex para evitar desviaciones propias del proveedor.

## Por qué usar Plaspy con esta configuración

Usar el Disha 9320 con Plaspy ofrece a las organizaciones una forma práctica de centralizar datos de ubicación en tiempo real e históricos, recibir notificaciones de eventos y generar reportes programados para la supervisión de flotas. Los ajustes compartidos del servidor de Plaspy simplifican el despliegue porque todos los dispositivos soportados usan el mismo puerto y Plaspy detecta automáticamente el protocolo, reduciendo el trabajo de configuración en el servidor.

Para obtener más información sobre Plaspy e integraciones compatibles, visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y referencias detalladas de comandos del Disha 9320, verifique la información más reciente con el fabricante en http://fortunaindia.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
