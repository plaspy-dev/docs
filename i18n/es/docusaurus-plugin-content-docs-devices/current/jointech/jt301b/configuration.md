---
slug: /jointech/jt301b/configuration
id: jt301b-configuration
sidebar_label: Configuration
title: Jointech - JT301B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Jointech JT301B con ajustes de servidor de Plaspy y ejemplos de comandos SMS
keywords:
  - configuración Jointech JT301B
  - configuración JT301B Jointech
  - configuración JT301B Plaspy
  - ajustes servidor JT301B
  - configuración rastreador de activos
  - configuración GPS Plaspy
  - configuración rastreador Jointech
  - configuración SMS JT301B
  - configuración rastreo de flotas
  - rastreo de activos en cadena de suministro
---

# Jointech - Configuración del JT301B

Esta página describe el contexto de configuración pública para utilizar el rastreador de activos Jointech JT301B con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere y muestra los pasos prácticos, del lado del fabricante, que suelen emplearse para apuntar un JT301B a la plataforma Plaspy utilizando métodos de configuración públicos.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación de Jointech y las etiquetas o la interfaz de configuración de su equipo.

## Resumen de la configuración

Este proceso prepara el JT301B para comunicarse con Plaspy, de modo que la ubicación, la telemetría ambiental y los eventos de manipulación se muestren en la plataforma. En muchas implementaciones del JT301B, la configuración puede completarse mediante el conjunto de comandos SMS del fabricante o usando cualquier herramienta de configuración de Jointech que exponga parámetros de servidor, APN y transporte.

- Asegúrese de apuntar el dispositivo al endpoint de servidor de Plaspy para que la telemetría se envíe a la plataforma.
- Configure el APN y, opcionalmente, las credenciales del APN para que el rastreador use GPRS celular en el uplink.
- Seleccione el modo de transporte si el equipo lo requiere (UDP o TCP) y confirme el mismo puerto utilizado por Plaspy.
- Valide la conectividad y que el dispositivo aparezca en los reportes de Plaspy después de la configuración.
- Aplique los ajustes mediante las herramientas del fabricante o comandos SMS según el firmware del JT301B y su flujo de instalación.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support UDP or TCP
- automatic protocol detection in Plaspy

Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que los JT301B deben configurarse para usar el puerto 8888 y UDP o TCP según lo que soporte el equipo.

## Requisitos típicos antes de la configuración

- Verifique que el JT301B tenga carga de batería suficiente y esté alimentado durante la configuración.
- Tenga a la mano el identificador del dispositivo (ID del equipo que requieren los comandos Jointech o que aparece en la etiqueta).
- Use una SIM válida configurada con el APN correcto y con capacidad de datos y SMS si va a configurar por SMS.
- Disponga de las instrucciones de configuración de Jointech o de la lista oficial de comandos SMS para el JT301B.
- Prepare un plan de pruebas para validar que el dispositivo informe correctamente a Plaspy después de aplicar la configuración.

## Cómo se conecta este rastreador a Plaspy

El JT301B se configura para reportar su ubicación y telemetría al endpoint y puerto compartidos de Plaspy, lo que permite a la plataforma ingerir posicionamiento multimodal y datos de sensores para monitoreo y alertas.

- El rastreador envía actualizaciones de posición y telemetría de sensores ambientales a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el dispositivo puede usar UDP o TCP según lo soporte.
- Las notificaciones de manipulación y otros eventos se envían al mismo endpoint de Plaspy para su procesamiento y generación de alertas.
- Una vez que el dispositivo reporta, Plaspy proporciona visibilidad, registros históricos y flujos de trabajo basados en eventos para operaciones y monitoreo de seguridad.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Jointech o al software para el JT301B (interfaz por comandos SMS o herramienta de Jointech).
2. Ingrese el endpoint del servidor de Plaspy como d.plaspy.com o utilice la IP del servidor 54.85.159.138 según la interfaz del equipo.
3. Configure el puerto del dispositivo en 8888 en los campos de configuración.
4. Seleccione UDP o TCP si el equipo requiere elegir un modo de transporte.
5. Configure el APN y, si aplica, el nombre de usuario y la contraseña del APN proporcionados por su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o la herramienta lo requieren.
7. Verifique que el dispositivo reporte a Plaspy y que aparezca en la plataforma con el ID de dispositivo configurado.

## Comandos de configuración de ejemplo

El JT301B puede configurarse usando mensajes SMS. Los comandos de ejemplo a continuación están en el formato público de Jointech. Reemplace los marcadores de posición con sus valores reales antes de enviar.

1. Establecer el servidor GPRS y el APN
Envíe un SMS al rastreador con el siguiente texto, reemplazando los marcadores de posición:

```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,{{apn}})
```

- {{trackerID}} — el ID del dispositivo requerido por el conjunto de comandos del rastreador; verifique el formato correcto del ID en la etiqueta del equipo o en la documentación de Jointech.
- {{apn}} — el APN proporcionado por su operador móvil.

2. Establecer usuario y contraseña del APN (solo si su APN requiere credenciales)
Envíe un SMS con este comando si el APN necesita usuario y contraseña:

```
({{trackerID}},2,S24,129,1,{{apnu}},{{apnp}})
```

- {{apnu}} — marcador para el nombre de usuario del APN.
- {{apnp}} — marcador para la contraseña del APN.
- Este paso es opcional cuando el APN no requiere autenticación.

Notas sobre estos comandos:
- Mantenga el formato exacto del comando que exige Jointech e incluya el ID del dispositivo tal como lo indican las instrucciones del fabricante.
- Si en su implementación utiliza una herramienta de software de Jointech en lugar de SMS, aplique los mismos valores de servidor, IP y puerto mediante esa herramienta.

## Notas de configuración

- Los comandos y la sintaxis pueden variar según la versión de firmware; confirme el formato exacto de los SMS con la documentación de Jointech para su versión de firmware del JT301B.
- Use TCP o UDP según su red y el soporte del equipo; Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador.
- Asegúrese de que los ajustes de APN sean correctos para la SIM en uso; un APN incorrecto suele impedir el uplink de datos.
- La configuración por SMS es común para esta familia de dispositivos; siga precauciones de seguridad al enviar comandos de configuración por SMS.
- Si una configuración no surte efecto de inmediato, reinicie el rastreador según la guía de Jointech y vuelva a verificar el reporte a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el JT301B con Plaspy aporta visibilidad a nivel de activo y telemetría contextual a una plataforma de rastreo compartida. Para operaciones logísticas y de cadena de suministro, combinar posicionamiento multimodal con alertas ambientales y de manipulación ayuda a reducir pérdidas, acelerar la respuesta ante incidencias y soportar flujos regulatorios para carga sensible.

Para conocer más sobre Plaspy y cómo integrar la telemetría del JT301B en sus flujos de rastreo, visite https://www.plaspy.com. Los métodos de configuración por dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique las instrucciones más recientes del JT301B y las referencias de comandos en el sitio de Jointech https://www.jointcontrols.com/ antes del despliegue.
