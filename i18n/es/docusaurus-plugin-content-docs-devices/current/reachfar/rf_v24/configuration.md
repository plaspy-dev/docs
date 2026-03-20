---
slug: /reachfar/rf_v24/configuration
id: rf_v24-configuration
sidebar_label: Configuration
title: Reachfar - RF-V24 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Reachfar RF-V24 y compatibilidad con Plaspy con detalles de servidor y transporte
keywords:
  - configuración Reachfar RF-V24
  - instalación Reachfar RF-V24
  - Reachfar RF-V24 con Plaspy
  - configuración servidor RF-V24
  - configuración rastreador GPS RF-V24
  - configuración GPS Reachfar
  - configuración dispositivo Plaspy
  - configuración rastreador Plaspy
  - configuración seguimiento RF-V24
  - configuración rastreador de activos Reachfar
---

# Reachfar - RF-V24 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Reachfar RF-V24 con Plaspy. Se concentra en los ajustes prácticos de servidor y transporte que aplicará en el dispositivo o en las herramientas del fabricante para que el RF-V24 reporte ubicación y eventos a la plataforma Plaspy. El RF-V24 es un rastreador 4G con carga solar, sensores integrados, función de SOS por voz y detección de manipulación; esta guía explica cómo esas capacidades de dispositivo se transmiten a Plaspy usando las opciones compartidas de la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Consulte la documentación de Reachfar para pasos específicos de la interfaz o comandos SMS, y luego aplique el endpoint público de Plaspy y las opciones de transporte descritas abajo para integrar el RF-V24 en Plaspy y habilitar el seguimiento en vivo y las alertas.

## Resumen de configuración

Preparar el RF-V24 para integrarlo con Plaspy implica configurar el dispositivo para enviar datos de ubicación y eventos al endpoint compartido de Plaspy y validar que esos datos lleguen a la plataforma. El objetivo es garantizar reportes fiables desde el rastreador con carga solar para que operadores de flotas y administradores de activos puedan usar Plaspy para monitoreo, alertas y reproducción histórica.

- Configure el dispositivo para reportar a Plaspy usando el endpoint y puerto indicados.
- Seleccione el método de transporte que requiera el dispositivo y confirme la conectividad.
- Valide que el RF-V24 envíe posición GPS y mensajes de eventos integrados a Plaspy.
- Confirme que las alarmas SOS, por vibración y de manipulación se reenvíen y sean visibles en Plaspy.
- Asegúrese de que la energía del dispositivo y el servicio celular sean adecuados para reportes continuos.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP según la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un RF-V24 instalado y cargado con la documentación del fabricante o la herramienta de configuración disponible
- Servicio celular activo y conectividad de datos en una red 4G compatible
- Acceso al método de configuración Reachfar que utilice en su entorno, como una herramienta web o móvil o el conjunto de comandos SMS proporcionado por el fabricante
- Conocimiento de si el firmware del dispositivo requiere UDP o TCP para la configuración del servidor de seguimiento
- Un plan para validar los reportes del dispositivo en Plaspy tras la configuración, incluyendo acceso a la plataforma Plaspy para verificación

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el RF-V24 envía sus posiciones y eventos de sensores al endpoint del servidor Plaspy para que la plataforma pueda mostrar la ubicación en tiempo real, generar alertas y almacenar datos históricos. El dispositivo usa el endpoint y puerto compartidos de Plaspy, de modo que la plataforma puede mapear automáticamente los mensajes entrantes al protocolo y a la instancia de dispositivo correctos.

- El RF-V24 reporta posiciones GPS y telemetría periódica a d.plaspy.com en el puerto 8888
- Mensajes de eventos como SOS, vibración o manipulación se reenvían a Plaspy donde generan alarmas
- El transporte se configura como UDP o TCP en el dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, por lo que una única configuración de puerto aplica a múltiples equipos
- Los datos recibidos por Plaspy están disponibles para monitoreo en tiempo real, alertas y reproducción histórica de rutas

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Reachfar o al software según el manual del dispositivo o las instrucciones del proveedor.
2. Ubique los ajustes de servidor o servidor de seguimiento en la interfaz del fabricante.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 como dirección de servidor.
4. Configure el puerto del servidor en 8888.
5. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según corresponda al firmware.
6. Aplique o guarde la configuración y realice cualquier reinicio del dispositivo que sea necesario.
7. Valide que el dispositivo reporte a Plaspy y que las posiciones y mensajes de eventos aparezcan en la plataforma.

## Ejemplos de comandos de configuración

La documentación del fabricante RF-V24 puede incluir comandos SMS o CLI para configurar la dirección del servidor, el puerto y el transporte. Los comandos exactos varían según el firmware y las herramientas del proveedor, por lo que debe consultar el manual Reachfar para la sintaxis específica de su dispositivo. Al usar esos comandos, establezca la dirección del servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, y seleccione UDP o TCP si el conjunto de comandos lo requiere.

Los ejemplos de patrones de comandos que puede encontrar en la documentación del fabricante suelen parecerse a los siguientes. Reemplace los marcadores y tokens con los valores indicados por su operador y la documentación del dispositivo:

- Configurar dirección del servidor y puerto (patrón de ejemplo)
```text
setserver d.plaspy.com 8888
```

- Forma alternativa usando la IP
```text
setserver 54.85.159.138 8888
```

- Establecer método de transporte cuando sea requerido
```text
settransport udp
```
o
```text
settransport tcp
```

Nota: Los bloques anteriores son patrones ilustrativos. Use la sintaxis exacta del manual Reachfar o de la herramienta de su proveedor. Si en los comandos del proveedor aparecen marcadores como {{apn}}, {{apnu}} o {{apnp}}, déjelos tal como están y reemplácelos por el APN, usuario APN y contraseña APN de su operador celular cuando el dispositivo lo requiera.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos o la disposición de los menús; confirme siempre con el manual Reachfar para su modelo RF-V24.
- Elija UDP o TCP según la recomendación del firmware del dispositivo; Plaspy acepta ambos y realiza detección automática de protocolo en las conexiones entrantes.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos, use el puerto 8888 en cada configuración del dispositivo para conectividad con Plaspy.
- Verifique en la documentación del fabricante cómo se mapean SOS, vibración y eventos de manipulación para asegurarse de que esos eventos lleguen correctamente a Plaspy.
- Si es necesario reiniciar después de guardar los ajustes del servidor, realice un reinicio controlado y luego valide los reportes en la interfaz de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el RF-V24 con Plaspy ofrece visibilidad centralizada para rastreadores con carga solar y larga autonomía que reportan por 4G. Plaspy recoge las posiciones y los mensajes de eventos del RF-V24 para que los equipos puedan monitorear activos, responder a alertas SOS y revisar rutas históricas para investigaciones y cumplimiento. La combinación de operación de bajo mantenimiento con carga solar y la visibilidad que ofrece Plaspy es ideal para remolques, contenedores y activos remotos donde la alimentación externa continua es limitada.

Para obtener más información sobre Plaspy y los flujos de trabajo compatibles visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware y la sintaxis exacta de comandos, consulte la documentación oficial de Reachfar en https://www.reachfargps.com/. Los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo, por lo que verifique las instrucciones con el fabricante antes de desplegar dispositivos a gran escala.
