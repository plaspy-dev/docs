---
slug: /meitrack/md600/configuration
id: md600-configuration
sidebar_label: Configuration
title: Meitrack - MD600 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Meitrack MD600 para conectarlo con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración Meitrack MD600
  - Instalación Meitrack MD600
  - Configuración MD600 Plaspy
  - Configuración servidor MD600
  - Configuración rastreador GPS MD600
  - Rastreador Meitrack Plaspy
  - Configuración DVR vehicular
  - Configuración GPRS MD600
  - Seguimiento de flotas MD600
  - Comandos SMS MD600
---

# Meitrack - Configuración MD600

Esta página describe el contexto público de configuración para usar el Meitrack MD600 con Plaspy. Presenta los ajustes de servidor prácticos y ejemplos de comandos del fabricante que suelen emplearse para preparar un dispositivo MD600 y que reporte ubicación y eventos a la plataforma Plaspy. Use esta guía para entender qué espera Plaspy y cómo preparar el MD600 para comunicarse con el endpoint compartido de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MD600 soporta configuración por SMS y por GPRS; los ejemplos de comandos SMS que se muestran abajo usan la contraseña por defecto 0000 y demuestran cómo apuntar el dispositivo al endpoint de Plaspy.

## Resumen de configuración

Configurar el MD600 para Plaspy hace que el dispositivo reporte telemetría, eventos y, cuando aplique, los metadatos de video asociados a un único endpoint de servidor de Plaspy. El proceso prepara los parámetros GPRS del MD600, la cadencia de reporte y la configuración de eventos para que el dispositivo sea visible y gestionable dentro de Plaspy.

- Configure el servidor y los parámetros GPRS para que el MD600 envíe datos a Plaspy
- Ajuste el intervalo de reporte y las banderas de evento según sus necesidades de monitoreo
- Valide la conectividad y que el dispositivo aparezca en Plaspy después de guardar los cambios
- Opcionalmente, realice un reseteo de fábrica o una configuración inicial por SMS cuando sea necesario
- Asegúrese de que el dispositivo use el endpoint y puerto compartidos de Plaspy para mantener un comportamiento consistente en la flota

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos habituales

- Un MD600 instalado y con alimentación, con acceso por SMS o a la herramienta de configuración del fabricante
- Una SIM celular activa con datos habilitados y los ajustes APN correctos para la red
- Conocimiento de la contraseña del dispositivo (el ejemplo usa la contraseña por defecto 0000)
- Documentación del fabricante o acceso al método de configuración Meitrack para su versión de firmware
- Cobertura celular estable para validar la conectividad GPRS y el reporte de datos
- Una cuenta Plaspy y la provisión de la flota para confirmar que el dispositivo aparece tras la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el MD600 reporta posición GNSS, eventos digitales y telemetría al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar seguimiento en vivo, alertas y datos históricos. El MD600 también puede transmitir video y adjuntar telemetría a sesiones de video cuando esa funcionalidad esté incluida en su implementación, mientras Plaspy se encarga de ingerir las señales telemáticas y de eventos.

- El rastreador se apunta a la IP o dominio del servidor Plaspy y envía datos GPRS al puerto 8888
- El transporte puede usar UDP o TCP según las configuraciones del dispositivo y las condiciones de red
- Plaspy detecta automáticamente el protocolo del dispositivo y analiza la telemetría entrante para mapas y alertas
- Los reportes de eventos configurados (ignición, entradas, alertas) se reenvían a Plaspy para notificación inmediata
- Tras una configuración exitosa, el dispositivo debería aparecer en Plaspy y mostrar actualizaciones periódicas de posición

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Meitrack para el MD600 (comandos SMS, software del fabricante o herramienta de instalador) adecuado para su versión de firmware y revisión de hardware.
2. Introduzca la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo requiera la interfaz o la sintaxis de comandos del dispositivo.
3. Establezca el puerto de comunicación en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Elija UDP o TCP si el dispositivo solicita seleccionar un protocolo de transporte.
5. Configure el APN del dispositivo y cualquier usuario o contraseña de APN que su SIM necesite.
6. Aplique o guarde la configuración y reinicie el dispositivo si el flujo de trabajo o el equipo lo requieren.
7. Valide que el MD600 reporte a Plaspy comprobando el registro del dispositivo y las actualizaciones en vivo en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El MD600 puede configurarse mediante comandos SMS. Los ejemplos siguientes usan la contraseña por defecto 0000. Conserve los marcadores de posición cuando introduzca sus propios datos APN.

- Reseteo de fábrica inicial opcional (usar solo cuando sea necesario o como parte de la provisión inicial)
```text
0000,F11
```

- Establecer el servidor GPRS a Plaspy usando la IP y el puerto. Marcadores:
  - {{apn}} = APN de su operador
  - {{apnu}} = usuario APN (opcional)
  - {{apnp}} = contraseña APN (opcional)
```text
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Nota: Este comando muestra la forma con dirección IP usada en la guía de ejemplo del fabricante. Puede introducir d.plaspy.com en herramientas o interfaces del dispositivo que acepten nombres de dominio en lugar de una IP.

- Establecer la zona horaria a UTC+0
```text
0000,B36,0
```

- Establecer el intervalo de actualización de posición a 1 minuto
```text
0000,A12,6,0
```

- Establecer banderas de reporte de eventos (ejemplo por defecto del fabricante)
```text
0000,C03,0
```

Use estos comandos SMS exactamente como se muestran en dispositivos que aceptan configuración por SMS. Si emplea una herramienta de configuración del fabricante o provisión OTA, aplique los mismos valores de servidor, puerto, transporte, APN e intervalo de reporte mediante esa herramienta.

## Notas de configuración

- Las diferencias de firmware y de herramientas pueden cambiar la sintaxis de comandos o los parámetros disponibles; confirme siempre con la documentación de la versión de firmware del MD600.
- La configuración por SMS es ampliamente soportada por los dispositivos Meitrack, pero muchos instaladores prefieren las herramientas PC o móviles del fabricante para provisiones masivas o más seguras.
- Elija UDP o TCP según la fiabilidad de la red y el comportamiento de su operador; Plaspy acepta cualquiera de los dos en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que mantener servidor y puerto consistentes simplifica la provisión de flotas.
- Mantenga conocimiento de la contraseña por defecto del dispositivo y cámbiela conforme a su política de seguridad después de la configuración inicial si el dispositivo y el flujo de trabajo lo permiten.

## Por qué usar Plaspy con esta configuración

Usar el MD600 con Plaspy ofrece a las flotas una solución unificada de telemetría y capacidad de video donde las posiciones GNSS, los eventos digitales y la telemetría del dispositivo se consolidan en una sola plataforma para monitoreo y revisión de incidentes. Apuntar el MD600 al servidor y puerto compartidos de Plaspy y validar que el dispositivo reporte correctamente permite a los operadores aprovechar las herramientas de mapas, alertas y datos históricos de Plaspy mientras se mantiene una provisión coherente entre dispositivos.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos de configuración, notas de firmware y referencias oficiales de comandos consulte la documentación vigente en el sitio del fabricante https://www.meitrack.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
