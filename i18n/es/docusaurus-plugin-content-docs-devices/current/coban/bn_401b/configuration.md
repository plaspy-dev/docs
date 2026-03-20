---
slug: /coban/bn_401b/configuration
id: bn_401b-configuration
sidebar_label: Configuration
title: Coban - BN-401B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Coban BN-401B para apuntar el rastreador a los servidores de Plaspy y activar rastreo y alertas
keywords:
  - Configuración Coban BN-401B
  - Instalación Coban BN-401B
  - Coban BN-401B Plaspy
  - Configuración rastreador GPS BN-401B
  - Ajustes servidor rastreador Coban
  - Configuración de dispositivo Plaspy
  - Instalación rastreador GPS para motocicleta
  - Configuración de rastreo de vehículos
  - Comandos SMS para rastreador GPS
  - Guía de instalación BN-401B
---

# Coban - BN-401B Configuración

Esta página documenta el contexto público de configuración para usar el Coban BN-401B con Plaspy. Se centra en los pasos prácticos y en los comandos SMS públicos que permiten apuntar el equipo a Plaspy, además de los ajustes de servidor que debe aplicar para que el BN-401B reporte posición y alarmas a la plataforma. Cuando sea útil, esta guía reproduce ejemplos de comandos SMS usados comúnmente para la configuración inicial y la validación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos se conectan. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El BN-401B admite métodos de configuración por SMS y TCP/UDP e incluye una contraseña de dispositivo por defecto en comandos públicos, por lo que debe seguir las instrucciones del fabricante y los ejemplos abajo mientras confirma los detalles para su unidad específica.

## Resumen de configuración

El objetivo de configurar un BN-401B para Plaspy es preparar el rastreador para que reporte de forma fiable ubicaciones y eventos de alarma al endpoint de Plaspy, habilitando rastreo en vivo, alertas y reproducción histórica en la plataforma. Use los métodos del fabricante que tenga disponibles (SMS, Bluetooth o software del proveedor) para aplicar los ajustes de servidor y APN que muestra esta guía.

- Configure el equipo para enviar datos GPRS a Plaspy usando el endpoint y puerto compartidos de Plaspy.
- Ajuste el APN del operador móvil y las credenciales APN necesarias para que el dispositivo tenga acceso a datos móviles.
- Elija el modo de transporte que soporte el dispositivo, UDP o TCP, según su preferencia de instalador.
- Valide la conectividad y el reporte usando los comandos de verificación del dispositivo y observando que el equipo aparezca en Plaspy.
- Opcionalmente use restauración de fábrica y comandos de zona horaria al poner en servicio una unidad nueva o reacondicionada.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporta transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para comunicaciones con el servidor

## Requisitos típicos antes de la configuración

- Una unidad BN-401B con energía y acceso a un método de configuración como SMS o Bluetooth.
- Una tarjeta SIM activa con plan de datos móviles y la información APN correcta para el operador.
- Conocimiento de la contraseña por defecto del equipo cuando sea requerida por los comandos; los ejemplos públicos usan 123456.
- Acceso al manual del fabricante o a la app de configuración para la revisión de firmware de su BN-401B.
- Medios para enviar comandos SMS desde un número autorizado si opta por la configuración vía SMS.
- Confirmación de que el lugar de instalación tiene cobertura celular para conectividad 4G fiable.

## Cómo se conecta este rastreador a Plaspy

El BN-401B puede enviar datos de ubicación y alarmas a Plaspy mediante datos móviles o por SMS, según la configuración. Al configurarlo para usar datos GPRS, el dispositivo publica mensajes al endpoint y puerto del servidor de Plaspy, y Plaspy procesa esos mensajes para ofrecer rastreo, eventos y reproducción.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy indicados más arriba.
- Las actualizaciones de ubicación, alarmas y cambios de estado se transmiten a Plaspy para visibilidad en tiempo real.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo manualmente en el servidor.
- Eventos como SOS, batería baja y corte de alimentación externa se entregan a Plaspy y pueden activar flujos de trabajo.
- Eventos de inmovilizador remoto y estado de ignición pueden reportarse y gestionarse mediante flujos de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante para el BN-401B, como comandos SMS, Bluetooth o herramientas del proveedor, según su unidad y firmware.
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes del dispositivo.
3. Establezca el puerto del dispositivo en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere una selección de transporte para el modo GPRS.
5. Configure el APN del operador y las credenciales APN necesarias para que exista conectividad de datos.
6. Aplique o guarde la configuración y reinicie el equipo si el fabricante recomienda reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación y observando que el equipo aparezca en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos públicos de configuración del BN-401B se envían comúnmente por SMS. Los comandos de ejemplo abajo usan la contraseña pública de ejemplo 123456. Mantenga los marcadores de posición al sustituir los valores de su operador.

- Contraseña por defecto usada en los ejemplos
  ```
  123456
  ```

- Restablecimiento de fábrica inicial opcional (usar solo cuando sea necesario durante la puesta en marcha)
  ```
  begin123456
  ```

- Establecer la zona horaria a UTC 0
  ```
  time zone123456 0
  ```

- Configurar el APN del operador
  ```
  apn123456 [apn]
  ```
  Nota: reemplace [apn] con el nombre del APN de su operador móvil.

- Establecer usuario y contraseña del APN
  ```
  up123456 [apnu] [apnp]
  ```
  Nota: reemplace [apnu] con el usuario del APN y [apnp] con la contraseña si su operador los requiere. Use valores en blanco si el operador no solicita credenciales.

- Establecer servidor GPRS por IP y puerto apuntando a Plaspy
  ```
  adminip123456 54.85.159.138 8888
  ```
  Alternativamente, si prefiere usar el dominio, introduzca d.plaspy.com cuando el dispositivo soporte nombres de dominio.

- Ejemplo de intervalo de actualización (sintaxis específica del dispositivo)
  ```
  fix060s060s***n123456
  ```
  Este comando es un ejemplo de intervalo tomado de documentación pública; confirme la sintaxis de intervalo para su firmware.

- Cambiar el equipo a modo GPRS y seleccionar transporte
  ```
  gprs123456,1,1
  ```
  o, dependiendo del firmware:
  ```
  gprs123456
  ```
  La forma gprs123456,1,1 es un ejemplo público que puede seleccionar GPRS y transporte. Verifique el formato correcto para su unidad.

- Verificar configuraciones actuales
  ```
  check123456
  ```

- Habilitar protocolo extendido o reporte de estado de sensores (ejemplo)
  ```
  protocol123456 18
  ```
  Este comando se usa en ejemplos públicos para habilitar reporte adicional de sensores digitales y estados del sensor de combustible.

## Notas de configuración

- La configuración por SMS se muestra en los comandos públicos arriba; también puede usar Bluetooth o herramientas del proveedor para la configuración local según su unidad y preferencias del instalador.
- Las versiones de firmware y las variantes regionales pueden cambiar la sintaxis de comandos y las capacidades; confirme siempre los formatos exactos de comando para el firmware de su BN-401B.
- Elija transporte UDP o TCP según su red y preferencias de fiabilidad; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Cuando use marcadores de posición de APN como [apn], [apnu] y [apnp], sustituya los valores por los proporcionados por su operador móvil. Si no se requieren credenciales, déjelos en blanco según lo permita el operador.
- Use el comando de restauración de fábrica solo cuando sea necesario durante la puesta en marcha o resolución de problemas, y tenga en cuenta que esto puede borrar configuraciones previas.

## Por qué usar Plaspy con esta configuración

Configurar un BN-401B para que reporte a Plaspy brinda a administradores de flotas y propietarios de vehículos visibilidad centralizada y rápida sobre sus dispositivos. Con los ajustes de servidor compartidos y la detección automática de protocolo, el BN-401B puede ofrecer rastreo en vivo consistente, alertas por eventos y reproducción histórica mientras se minimiza el trabajo de configuración por dispositivo.

Para saber más sobre Plaspy y las funcionalidades de la plataforma, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y guía del fabricante para el BN-401B, verifique los detalles en el sitio oficial de Coban https://www.coban.net/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
