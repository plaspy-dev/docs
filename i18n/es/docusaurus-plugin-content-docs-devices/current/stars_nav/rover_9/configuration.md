---
slug: /stars_nav/rover_9/configuration
id: rover_9-configuration
sidebar_label: Configuration
title: Stars Nav - Rover 9 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Stars Nav Rover 9 a Plaspy con ajustes de servidor compartidos y pasos prácticos de configuración
keywords:
  - Configuración Stars Nav Rover 9
  - Configuración Rover 9 Plaspy
  - configuración rastreador GPS Stars Nav
  - configuración rastreador vehicular
  - configuración servidor rastreador GPS
  - configuración rastreador de flotas
  - configuración servidor Rover 9
  - configuración rastreador Plaspy
  - guía de configuración Rover 9
  - configuración telemetría vehicular
---

# Stars Nav - Rover 9 — Configuración

Esta página describe el contexto público de configuración para usar el rastreador vehicular Stars Nav Rover 9 con Plaspy. Resume los ajustes de servidor prácticos y los pasos habituales necesarios para apuntar un Rover 9 a Plaspy y así habilitar el seguimiento en tiempo real y la ingestión de telemetría. El Rover 9 es un rastreador compacto de grado profesional que monta un GNSS SiRFstarIII, comunicación GPRS, programación por aire (OTA) y una batería de respaldo integrada para continuar enviando reportes cuando se pierde la alimentación del vehículo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, lo que simplifica la integración entre distintas familias de dispositivos. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que suministre su proveedor, por lo que trate los valores aquí como la parte correspondiente a Plaspy y confirme los comandos o menús específicos del dispositivo con la documentación de Stars Nav o sus herramientas de instalación.

## Resumen de la configuración

El objetivo del proceso de configuración es garantizar que el Rover 9 pueda enviar de forma confiable la ubicación y la telemetría a la plataforma Plaspy para que los vehículos aparezcan en paneles, alertas e informes históricos. En términos prácticos, la configuración prepara el equipo para la conectividad GPRS, establece el endpoint de Plaspy y verifica el comportamiento de reporte para que los administradores de flota puedan contar con visibilidad continua.

- Configure el Rover 9 para usar Plaspy como el servidor destino para que los mensajes de posición y de alarma lleguen a la plataforma.
- Ajuste las opciones de transporte y puerto según los menús del dispositivo o los comandos SMS para garantizar la entrega de datos.
- Valide la conectividad GPRS y las fijaciones GPS para que el equipo pueda enviar ubicación y telemetría.
- Confirme que el dispositivo reporta a Plaspy y aparece en la plataforma para activar paneles y alertas.
- Habilite o pruebe rutas de actualización por aire (OTA) cuando estén disponibles para que cambios futuros de configuración puedan realizarse de forma remota.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre distintos modelos de rastreadores.

## Requisitos típicos antes de la configuración

- Dispositivo alimentado e instalado con una antena GPS funcional para adquirir fijaciones satelitales.
- Conectividad de datos GPRS activa configurada en la tarjeta SIM instalada, ya que el Rover 9 usa comunicación GPRS.
- Acceso al método oficial de configuración de Stars Nav, como su software de configuración, el conjunto de comandos SMS o la herramienta de programación OTA.
- Conocimiento de la revisión de firmware o la variante de hardware del dispositivo para seguir las instrucciones correctas.
- Acceso administrativo al equipo o cuenta de instalador para aplicar ajustes de servidor y transporte.
- Un breve periodo de prueba al aire libre para verificar el bloqueo GPS y el reporte inmediato a Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Rover 9 envía sus posiciones GNSS, alarmas y telemetría vía GPRS al endpoint y puerto compartidos de Plaspy. Plaspy ingiere estos mensajes, detecta automáticamente el protocolo del rastreador y expone la información en paneles, alertas y herramientas de informes.

- El rastreador se apunta a d.plaspy.com o, alternativamente, a 54.85.159.138 y utiliza el puerto 8888 para la transmisión de datos.
- El transporte puede seleccionarse como UDP o TCP según la interfaz de configuración del dispositivo o la sintaxis de comandos SMS.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere un registro explícito de protocolo en el servidor.
- La telemetría como entradas analógicas, eventos de alarma y estado de inmovilizador se entregan a Plaspy junto con las actualizaciones de ubicación.
- Una vez que comienzan los reportes, el dispositivo se vuelve visible en Plaspy y puede ser monitoreado para movimientos, alarmas e historial.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Stars Nav o al software provisto por su vendedor o indicado en el manual del dispositivo.
2. En los ajustes de servidor del equipo, ingrese d.plaspy.com o la IP 54.85.159.138 como dirección del servidor.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos soportados.
4. Elija UDP o TCP como tipo de transporte si el dispositivo requiere seleccionar transporte.
5. Aplique o guarde la configuración mediante la herramienta del dispositivo, comando SMS o el mecanismo de OTA.
6. Reinicie el equipo si el procedimiento de Stars Nav lo exige para aplicar los cambios.
7. Valide que el Rover 9 reporte a Plaspy comprobando la visibilidad del dispositivo en la plataforma y confirmando mensajes recientes de posición o telemetría.

## Ejemplos de comandos de configuración

Los comandos exactos y su sintaxis varían según el firmware de Stars Nav y el método de configuración que use (herramienta de PC, comandos SMS o programación OTA). Dado que los conjuntos de comandos del fabricante pueden cambiar con el tiempo, esta página no inventa comandos de dispositivo. En términos generales, usted usará el método de Stars Nav para establecer el servidor en d.plaspy.com o 54.85.159.138, fijar el puerto en 8888, elegir UDP o TCP si se requiere, guardar los cambios y reiniciar el equipo. Si dispone de una referencia oficial de comandos de Stars Nav o de una plantilla SMS suministrada por su proveedor, siga esos comandos exactos para aplicar los valores anteriores.

## Notas de configuración

- Las diferencias de firmware pueden modificar los nombres exactos de menús, los formatos de comandos SMS o los pasos en la herramienta de PC necesarios para establecer los valores de servidor y transporte.
- Elija UDP para menor sobrecarga y flujos de mensajes típicos de rastreadores, o TCP cuando una sesión persistente sea requisito de una versión de firmware particular; pruebe ambos si experimenta problemas de conectividad.
- Confirme los ajustes APN de GPRS en la SIM si el equipo no establece conexión de datos; los detalles del APN deben coincidir con el operador móvil.
- El Rover 9 soporta programación por aire y puede ser el método preferido para cambios a escala de flota cuando el flujo de trabajo de su proveedor lo permita.
- Verifique siempre cualquier plantilla de configuración por SMS contra la documentación más reciente de Stars Nav para evitar errores de sintaxis.

## Por qué usar Plaspy con esta configuración

Usar el Rover 9 con Plaspy aporta visibilidad persistente del vehículo, reporte de eventos e ingestión de telemetría en una sola plataforma para que los equipos operativos puedan actuar sobre la ubicación en tiempo real, eventos de seguridad y datos de sensores analógicos. El GNSS SiRFstarIII del Rover 9, su conectividad GPRS y la capacidad de actualización por aire se complementan con la detección automática de protocolos de Plaspy y sus ajustes de servidor consistentes para reducir la complejidad por dispositivo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Las especificaciones del fabricante, el comportamiento del firmware y los métodos de configuración del dispositivo pueden cambiar con el tiempo, por lo que verifique los detalles de configuración específicos más recientes con Stars Nav en http://www.starsnav.com/ antes de desplegar o realizar cambios a nivel de flota.
