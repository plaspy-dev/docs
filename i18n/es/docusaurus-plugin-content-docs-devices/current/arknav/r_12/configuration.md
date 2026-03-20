---
slug: /arknav/r_12/configuration
id: r_12-configuration
sidebar_label: Configuration
title: ArkNav - R-12 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar el ArkNav R-12 y conectarlo a Plaspy usando ajustes de servidor compartidos
keywords:
- Configuración ArkNav R-12
- Instalación ArkNav R-12
- Configuración de servidor ArkNav R-12
- Integración ArkNav R-12 Plaspy
- Configuración tracker GPS ArkNav
- Configuración R-12 LTE M
- Guía configuración rastreador vehicular
- Configuración plataforma seguimiento de flotas
- Configuración rastreador Plaspy
- Ajustes servidor rastreador GPS
---

# ArkNav - R-12 Configuración

Esta página explica el contexto público de configuración para usar el rastreador GPS ArkNav R-12 con Plaspy. Se enfoca en los ajustes de servidor públicamente disponibles y en los pasos prácticos típicos necesarios para apuntar un R-12 a Plaspy, de modo que el dispositivo entregue posiciones en tiempo real, telemetría y reportes de eventos a la plataforma. El R-12 es un rastreador LTE‑M con clasificación IP67, con retroceso EGPRS y capacidad de actualización OTA; estas características se usan como base para las recomendaciones de configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta página para conocer los detalles del endpoint de Plaspy y el flujo típico de configuración de un R-12. Verifique siempre los controles específicos del dispositivo y las notas de firmware más recientes con el fabricante cuando sea necesario.

## Resumen de configuración

Configurar un ArkNav R-12 para Plaspy prepara el dispositivo para entregar de forma fiable posiciones GNSS y telemetría de eventos a la plataforma, de modo que vehículos y activos sean visibles en tiempo real. El objetivo es asegurar que el rastreador tenga acceso de red correcto, que el APN del operador y los identificadores del dispositivo estén establecidos, y que el equipo esté apuntando a Plaspy usando los ajustes uniformes que Plaspy espera.

- Apuntar el rastreador al endpoint del servidor Plaspy para que los paquetes se enruten a la plataforma.
- Confirmar la conectividad de red y la SIM para LTE‑M y retroceso EGPRS.
- Configurar el transporte y el puerto si la interfaz del dispositivo requiere una selección explícita.
- Guardar o aplicar la configuración y verificarla mediante OTA o la interfaz de depuración del equipo.
- Validar que el R-12 reporte posiciones y mensajes de eventos en Plaspy y que aparezca en su instancia de Plaspy.

## Ajustes del servidor Plaspy

Configure el R-12 para enviar datos a Plaspy usando los siguientes ajustes públicos del servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888 según la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto. Puede ingresar el dominio d.plaspy.com o la IP 54.85.159.138 al configurar el dispositivo. Si la interfaz del equipo requiere seleccionar el transporte, elija UDP o TCP según lo que admita su instalación.

## Requisitos típicos antes de la configuración

- Alimentación del vehículo conectada y estable para que el rastreador pueda arrancar y conectarse a la red.
- Una tarjeta SIM activa compatible con LTE‑M o 2G y un plan de datos que cubra las regiones en las que operará.
- APN y ajustes del operador disponibles por parte del proveedor de la SIM para la conectividad de datos.
- Acceso al método oficial de configuración de ArkNav o al software del proveedor, como la herramienta de configuración, la gestión OTA o el puerto de depuración del dispositivo para configuración directa.
- Verificación de la versión de firmware y las notas de la versión para confirmar que el comportamiento coincide con el método de configuración que piensa usar.
- Acceso físico para la instalación y las pruebas iniciales o un plan de integración para configuración remota vía OTA.

## Cómo se conecta este rastreador a Plaspy

El ArkNav R-12 transmite posiciones GNSS, estado y mensajes de eventos por la red celular a Plaspy para que los operadores de flotas reciban ubicación y telemetría en vivo. El dispositivo usa LTE‑M como conectividad principal con retroceso EGPRS (2G) donde LTE‑M no está disponible. Una vez que el equipo está apuntando al endpoint de Plaspy, la plataforma ingiere los paquetes y los asigna a la sesión de rastreador correspondiente.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy.
- Las ubicaciones y los mensajes impulsados por eventos como encendido e ignición se envían a Plaspy para su mapeo y alertas.
- El retroceso EGPRS permite la entrega continua cuando la cobertura LTE‑M no está disponible, mejorando la resiliencia del seguimiento.
- Las actualizaciones OTA y la configuración remota ayudan a mantener un comportamiento homogéneo entre las unidades desplegadas.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que en muchos casos no es necesario seleccionar manualmente el protocolo.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración ArkNav o al software para el R-12, como la utilidad de configuración del proveedor, la gestión OTA o la interfaz de depuración del dispositivo.
2. Configure el APN del operador y asegúrese de que la SIM tenga servicio de datos correcto para LTE‑M o EGPRS.
3. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 en el campo de servidor del dispositivo.
4. Ajuste el puerto a 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
5. Seleccione UDP o TCP si la configuración del R-12 requiere una elección explícita de transporte.
6. Aplique o guarde la configuración y utilice OTA o la consola de depuración para asegurarse de que los cambios se hayan registrado.
7. Reinicie el dispositivo si el firmware lo requiere y valide que el R-12 reporte a Plaspy y aparezca en la plataforma.

## Ejemplos de comandos de configuración

Los comandos e interfaces exactos para configurar un R-12 dependen del conjunto de herramientas ArkNav y de la versión de firmware. Algunos integradores usan la utilidad de configuración del proveedor, otros usan el puerto de depuración del dispositivo o el aprovisionamiento OTA. Dado que los comandos específicos del modelo pueden variar entre versiones de firmware, no se incluyen cadenas de comandos públicas universales aquí. Consulte la guía de configuración de ArkNav o a su proveedor para la sintaxis exacta de comandos y para conocer cualquier conjunto de comandos SMS o serial si el firmware del dispositivo los soporta.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación de los menús, los campos disponibles y si se requiere la selección de transporte, así que confirme el comportamiento para su versión de firmware.
- Todos los dispositivos en Plaspy usan el puerto 8888 y Plaspy detecta automáticamente el protocolo del rastreador, pero algunas herramientas de dispositivo aún pueden requerir que seleccione explícitamente UDP o TCP.
- Use la ranura nano SIM y verifique el APN y la conectividad del operador antes de intentar registrarse en el endpoint de Plaspy.
- Si planea usar salidas de inmovilizador u otras funciones de E/S, verifique el cableado y las normas de seguridad de su vehículo y pruebe los comandos en un entorno controlado.
- Aproveche la configuración OTA cuando sea posible para reducir la necesidad de acceso físico tras la instalación inicial.

## Por qué usar Plaspy con esta configuración

Emparejar el ArkNav R-12 con Plaspy brinda una base sólida para la visibilidad de flotas y el monitoreo operativo en tiempo real. El enlace primario LTE‑M del R-12 con retroceso EGPRS, las protecciones de alimentación para vehículo y la capacidad de actualización OTA se combinan con la ingesta centralizada de Plaspy y su detección automática de protocolos para simplificar despliegues a gran escala y la gestión continua de dispositivos.

Para obtener más información sobre Plaspy y cómo gestiona conexiones de dispositivos y funciones de gestión de flotas visite https://www.plaspy.com. Para las instrucciones de configuración específicas del dispositivo, notas de firmware y documentación técnica más recientes consulte el sitio oficial de ArkNav en https://www.arknavgps.com.tw/. Las especificaciones del fabricante, las interfaces de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que verifique los detalles más recientes con ArkNav antes de despliegues a gran escala.
