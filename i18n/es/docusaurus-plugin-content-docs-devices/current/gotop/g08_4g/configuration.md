---
slug: /gotop/g08_4g/configuration
id: g08_4g-configuration
sidebar_label: Configuration
title: GOTOP - G08-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP G08-4G para Plaspy, ajustes de servidor y flujo de integración para rastreo en tiempo real
keywords:
  - configuración del GOTOP G08-4G
  - instalación GOTOP G08-4G
  - configuración servidor GOTOP G08-4G
  - GOTOP G08-4G Plaspy
  - rastreador GPS GOTOP G08-4G
  - instalación rastreador OBD GOTOP
  - configuración rastreador Plaspy
  - ajustes servidor Plaspy
  - configuración rastreo de vehículos
  - configuración rastreo de flotas
---

# GOTOP - G08-4G Configuración

Esta página documenta el contexto público de configuración para usar el rastreador OBD GOTOP G08-4G con Plaspy. Se concentra en los ajustes prácticos de servidor y en el flujo de trabajo necesarios para registrar el dispositivo en Plaspy y habilitar rastreo en tiempo real, alarmas e historial de rutas. Use estas indicaciones junto con la documentación del fabricante para los menús y comandos específicos del equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. El contenido a continuación enfatiza el endpoint de Plaspy y las acciones habituales que usted ejecutará al preparar el G08-4G para el reporte en vivo hacia Plaspy.

## Resumen de configuración

Esta configuración prepara el rastreador OBD G08-4G para enviar posición, estado y mensajes de alarma a la plataforma Plaspy, de modo que los dispositivos sean visibles y gestionables desde su cuenta Plaspy. El enfoque está en apuntar el equipo al servidor de Plaspy, elegir el transporte adecuado y validar que los reportes lleguen correctamente.

- Apuntar el equipo al endpoint de Plaspy para que los datos GPS y de alarma fluyan hacia la plataforma.
- Asegurarse de que el dispositivo cuente con conectividad celular de datos activa o capacidad SMS para reporte de respaldo.
- Seleccionar UDP o TCP si el rastreador exige elegir transporte y configurar el puerto de Plaspy.
- Guardar o aplicar la configuración y reiniciar el dispositivo si la herramienta del fabricante lo requiere.
- Confirmar que el dispositivo aparece en Plaspy y verificar la recepción de mensajes de posición y alarmas.
- Mantener la documentación del fabricante a mano para comandos o acciones de GUI específicas del modelo.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported by the device on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Acceso físico al puerto OBD-II del vehículo para instalar el G08-4G y confirmar alimentación
- Una tarjeta SIM activa con datos habilitados o capacidad SMS si el dispositivo usará SMS como respaldo
- Acceso al método oficial de configuración GOTOP, como la app del fabricante, portal web o lista de comandos SMS
- Una cuenta en Plaspy y la posibilidad de verificar que el dispositivo aparece activo en el panel de control de Plaspy
- Un plan de prueba breve in situ para confirmar el bloqueo GNSS y el reporte al servidor después de la configuración
- Poder reiniciar el dispositivo después de aplicar ajustes si el procedimiento del fabricante lo exige

## Cómo se conecta este rastreador a Plaspy

El G08-4G envía datos de ubicación, estado y alarmas al endpoint y puerto compartidos de Plaspy para que el dispositivo sea visible en los paneles y herramientas de reporte. Plaspy recibe y analiza el protocolo del rastreador automáticamente, permitiendo seguimiento en tiempo real y notificaciones de eventos sin cambios de puerto por dispositivo.

- El rastreador transmite posición y telemetría por datos 4G a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Si se configura respaldo por SMS, las alarmas o actualizaciones críticas también pueden entregarse a la plataforma según el método del fabricante
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes al registro de dispositivo correcto
- Use UDP o TCP en el puerto 8888 según las preferencias del dispositivo; Plaspy soporta ambos transportes
- Una vez que comienzan los reportes, Plaspy registra historial de viajes, eventos y notificaciones de alarma para la supervisión operativa

## Flujo de configuración habitual

1. Acceda al método oficial de configuración GOTOP para el G08-4G (app del fabricante, herramienta web o conjunto de comandos SMS).
2. En la configuración de servidor o APN del dispositivo ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138.
3. Establezca el puerto del servidor a 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos soportados).
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según lo soporte y convenga.
5. Aplique o guarde la configuración en la herramienta del fabricante o envíe los comandos SMS de configuración tal como los documenta GOTOP.
6. Reinicie el G08-4G si las instrucciones del fabricante requieren un reboot para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando el panel de Plaspy para una actualización en vivo y confirmando mensajes de ubicación y alarma.

## Ejemplos de comandos de configuración

Los comandos exactos y su sintaxis dependen del firmware GOTOP y del canal de configuración que utilice (app del fabricante, portal web o SMS). Debido a que los comandos varían por región y firmware, incluya este paso de documentación del fabricante en su flujo de trabajo y siga la referencia de comandos GOTOP para sintaxis precisa.

Enfoques comunes de configuración del fabricante que puede encontrar:
- App o interfaz web donde se ingresan directamente las direcciones de servidor y los campos de puerto
- Comandos SMS que actualizan servidor, puerto y valores de APN usando el conjunto de comandos del equipo
- Herramientas locales USB o serial proporcionadas por el vendedor para configuración avanzada

Si planea usar comandos SMS, consulte la lista de comandos de GOTOP para las frases exactas. Los marcadores de posición que pueda ver en ejemplos de comandos suelen referirse a valores de APN como [apn], [apnu] o [apnp] y deben reemplazarse por los valores de su proveedor de SIM según lo indique la guía del fabricante.

## Notas de configuración

- Las versiones de firmware del fabricante y las interfaces de las herramientas pueden cambiar la forma en que se ingresan los ajustes de servidor y transporte; consulte siempre la guía de usuario GOTOP para el G08-4G.
- La elección entre TCP y UDP depende de las opciones del dispositivo; Plaspy soporta ambos y realiza detección automática del protocolo en conexiones entrantes.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica la configuración cuando despliega muchas unidades.
- Pruebe el reporte después de configurar confirmando actualizaciones de posición GNSS y al menos un mensaje de alarma o estado en Plaspy.
- Si debe usar SMS para la configuración inicial o como respaldo, tenga a mano los datos de APN y credenciales de su proveedor para insertarlos donde sea necesario.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G08-4G con Plaspy brinda a operadores de flotas y propietarios de vehículos una forma sencilla de obtener rastreo en tiempo real y visibilidad de alarmas sin cableado complejo. El factor de forma OBD plug and play combinado con la configuración del servidor Plaspy permite a los equipos de despliegue configurar muchos vehículos de manera consistente usando el endpoint y puerto compartidos.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores GPS como el G08-4G visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, así que verifique las instrucciones de instalación más recientes en el sitio oficial de GOTOP https://www.gotop.cc/.
